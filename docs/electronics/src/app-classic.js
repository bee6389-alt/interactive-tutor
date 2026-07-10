(function () {
const {
  COURSE,
  createInitialState,
  getCurrentLessonGate,
  getQuestionBankSummary,
  getCurrentPrompt,
  getCurrentVideoResources,
  handlePracticeAnswer,
  handleStudentAnswer,
  markCurrentLessonVideoComplete,
  setLearnerMode,
  startPracticeQuestion,
  summarizeProgress,
} = window.TutorEngine;

const STORAGE_KEY = "electronics-tutor-state-v1";

const elements = {
  answerForm: document.querySelector("#answerForm"),
  answerInput: document.querySelector("#answerInput"),
  chatLog: document.querySelector("#chatLog"),
  chapterCounter: document.querySelector("#chapterCounter"),
  chapterList: document.querySelector("#chapterList"),
  currentChapter: document.querySelector("#currentChapter"),
  currentGoal: document.querySelector("#currentGoal"),
  overallPercent: document.querySelector("#overallPercent"),
  accuracyText: document.querySelector("#accuracyText"),
  masteryList: document.querySelector("#masteryList"),
  errorList: document.querySelector("#errorList"),
  videoList: document.querySelector("#videoList"),
  lessonVideoCard: document.querySelector("#lessonVideoCard"),
  lessonVideoFrame: document.querySelector("#lessonVideoFrame"),
  lessonVideoTitle: document.querySelector("#lessonVideoTitle"),
  lessonVideoStatus: document.querySelector("#lessonVideoStatus"),
  lessonVideoSourceLink: document.querySelector("#lessonVideoSourceLink"),
  markVideoCompleteButton: document.querySelector("#markVideoCompleteButton"),
  practiceButton: document.querySelector("#practiceButton"),
  examButton: document.querySelector("#examButton"),
  remediationButton: document.querySelector("#remediationButton"),
  teachModeButton: document.querySelector("#teachModeButton"),
  practiceModeButton: document.querySelector("#practiceModeButton"),
  diagnosticModeButton: document.querySelector("#diagnosticModeButton"),
  voiceButton: document.querySelector("#voiceButton"),
  voiceStatus: document.querySelector("#voiceStatus"),
  handwritingCanvas: document.querySelector("#handwritingCanvas"),
  handwritingStatus: document.querySelector("#handwritingStatus"),
  handwritingClearButton: document.querySelector("#handwritingClearButton"),
  handwritingAnalyzeButton: document.querySelector("#handwritingAnalyzeButton"),
  submitAnswerButton: document.querySelector("#submitAnswerButton"),
  resetButton: document.querySelector("#resetButton"),
  exportButton: document.querySelector("#exportButton"),
};

let state = loadState();
let supportsVoiceInput = false;

renderAll();
renderConversation();
setupVoiceInput();
setupHandwritingInput();

elements.answerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const answer = elements.answerInput.value.trim();
  if (!answer) return;

  const previousLearningUnitKey = getCurrentLearningUnitKey();
  addStudentMessage(answer);
  const result = state.activePracticeQuestion
    ? handlePracticeAnswer(COURSE, state, answer)
    : handleStudentAnswer(COURSE, state, answer);
  state = result.state;
  saveState();

  const learningUnitChanged = previousLearningUnitKey !== getCurrentLearningUnitKey();
  elements.answerInput.value = "";
  if (learningUnitChanged) {
    renderAll();
    renderConversation();
    scrollToCurrentUnitStart();
    return;
  }

  addResultMessages(result.messages);
  renderAll();
});

elements.resetButton.addEventListener("click", () => {
  const confirmed = window.confirm("確定要重置這位學生的進度嗎？");
  if (!confirmed) return;

  state = createInitialState();
  saveState();
  elements.chatLog.innerHTML = "";
  addTutorMessage("進度已重置。我們從第一章重新開始。");
  renderAll();
  renderConversation();
});

elements.exportButton.addEventListener("click", () => {
  const payload = {
    exportedAt: new Date().toISOString(),
    course: COURSE.title,
    summary: summarizeProgress(COURSE, state),
    state,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "electronics-student-progress.json";
  link.click();
  URL.revokeObjectURL(url);
});

elements.practiceButton.addEventListener("click", () => startPracticeMode("practice"));
elements.examButton.addEventListener("click", () => startPracticeMode("exam"));
elements.remediationButton.addEventListener("click", () => startPracticeMode("remediation"));
elements.teachModeButton.addEventListener("click", () => chooseLearnerMode("teach"));
elements.practiceModeButton.addEventListener("click", () => chooseLearnerMode("practice"));
elements.diagnosticModeButton.addEventListener("click", () => chooseLearnerMode("diagnostic"));
elements.markVideoCompleteButton.addEventListener("click", () => {
  state = markCurrentLessonVideoComplete(COURSE, state);
  saveState();
  renderAll();
  renderConversation();
  scrollToAnswerArea();
});

function chooseLearnerMode(mode) {
  state = setLearnerMode(state, mode);
  saveState();
  elements.chatLog.innerHTML = "";
  addTutorMessage(`已切換為「${getLearnerModeLabel(mode)}」。目前進度不會重置。`);
  renderAll();
  const gate = getCurrentLessonGate(COURSE, state);
  if (isLessonLocked(gate)) {
    addTutorMessage("請先看完這個概念影片，再開始回答家教問題。");
  } else {
    addTutorMessage(getCurrentPrompt(COURSE, state));
  }
}

function startPracticeMode(mode) {
  const result = startPracticeQuestion(COURSE, state, mode);
  state = result.state;
  saveState();
  for (const message of result.messages) {
    addTutorMessage(message);
  }
  renderAll();
}

function setupVoiceInput() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    supportsVoiceInput = false;
    elements.voiceButton.disabled = true;
    elements.voiceStatus.textContent = "此瀏覽器不支援語音輸入，請使用鍵盤輸入。";
    return;
  }

  supportsVoiceInput = true;
  let recognition = null;

  elements.voiceButton.addEventListener("click", () => {
    recognition = new Recognition();
    recognition.lang = "zh-TW";
    recognition.continuous = false;
    recognition.interimResults = false;

    elements.voiceButton.disabled = true;
    elements.voiceStatus.textContent = "正在聽，請說出答案。";

    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript?.trim() ?? "";
      if (!transcript) {
        elements.voiceStatus.textContent = "沒有辨識到文字，請再試一次或改用鍵盤。";
        return;
      }

      elements.answerInput.value = transcript;
      elements.answerInput.focus();
      elements.voiceStatus.textContent = "已填入辨識文字，確認後請按送出。";
    };

    recognition.onerror = () => {
      elements.voiceStatus.textContent = "語音輸入無法使用，請確認麥克風權限或改用鍵盤。";
    };

    recognition.onend = () => {
      elements.voiceButton.disabled = false;
    };

    recognition.start();
  });
}

function setupHandwritingInput() {
  window.HandwritingPad?.create({
    canvas: elements.handwritingCanvas,
    status: elements.handwritingStatus,
    answerInput: elements.answerInput,
    clearButton: elements.handwritingClearButton,
    analyzeButton: elements.handwritingAnalyzeButton,
    endpoint: getHandwritingEndpoint(),
    contextProvider: getHandwritingContext,
  });
}

function getHandwritingEndpoint() {
  if (window.HANDWRITING_ANALYSIS_ENDPOINT) return window.HANDWRITING_ANALYSIS_ENDPOINT;
  return "";
}

function getHandwritingContext() {
  const currentChapter = COURSE.chapters[state.chapterIndex];
  const currentStep = currentChapter?.steps?.[state.stepIndex];
  const activeQuestion = state.activePracticeQuestion;
  return {
    subject: "electronics",
    courseTitle: COURSE.title,
    chapterTitle: currentChapter?.title || "",
    question: activeQuestion?.prompt || getCurrentPrompt(COURSE, state),
    expectedAnswers: activeQuestion?.accepted || currentStep?.accepted || [],
  };
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return createInitialState();
    return { ...createInitialState(), ...JSON.parse(stored) };
  } catch {
    return createInitialState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderAll() {
  const summary = summarizeProgress(COURSE, state);
  const bankSummary = getQuestionBankSummary(COURSE);
  elements.overallPercent.textContent = `${summary.percent}%`;
  elements.chapterCounter.textContent = `第 ${Math.min(state.chapterIndex + 1, COURSE.chapters.length)} / ${COURSE.chapters.length} 章`;
  elements.currentChapter.textContent = summary.currentChapter;
  elements.currentGoal.textContent = summary.currentGoal;
  elements.accuracyText.textContent = `正確率 ${summary.accuracy}%`;
  elements.practiceButton.textContent = `題庫練習 ${bankSummary.practice} 題`;
  elements.examButton.textContent = `統測型題 ${bankSummary.exam} 題`;
  elements.remediationButton.textContent = `錯題回補 ${bankSummary.remediation} 題`;
  renderModeButtons();

  renderChapters();
  renderMastery(summary.masteryLabels);
  renderErrors();
  renderVideoResources();
  renderLessonVideoGate();
}

function renderModeButtons() {
  const mode = state.learnerMode ?? "teach";
  elements.teachModeButton.className = mode === "teach" ? "active" : "";
  elements.practiceModeButton.className = mode === "practice" ? "active" : "";
  elements.diagnosticModeButton.className = mode === "diagnostic" ? "active" : "";
}

function renderChapters() {
  elements.chapterList.innerHTML = "";
  COURSE.chapters.forEach((chapter, index) => {
    const item = document.createElement("li");
    const isComplete = state.completedChapters.includes(chapter.id);
    const isCurrent = index === state.chapterIndex;
    item.className = [isComplete ? "complete" : "", isCurrent ? "current" : ""].filter(Boolean).join(" ");
    item.innerHTML = `
      <span class="chapter-number">${index + 1}</span>
      <div>
        <strong>${chapter.title.replace(/^第.+?：/, "")}</strong>
        <small>${chapter.goal}</small>
      </div>
    `;
    item.addEventListener("click", () => selectChapter(index));
    elements.chapterList.append(item);
  });
}

function selectChapter(index) {
  if (index < 0 || index >= COURSE.chapters.length) return;

  state = {
    ...state,
    chapterIndex: index,
    stepIndex: 0,
    activePracticeQuestion: null,
  };
  saveState();
  renderAll();
  renderConversation();
  scrollToCurrentUnitStart();
}

function renderMastery(labels) {
  elements.masteryList.innerHTML = "";
  Object.entries(labels).forEach(([key, label]) => {
    const value = state.mastery[key] ?? 0;
    const row = document.createElement("div");
    row.className = "mastery-row";
    row.innerHTML = `
      <span>${label}</span>
      <div class="mastery-track" aria-label="${label} 熟練度 ${value} / 4">
        <i style="width: ${(value / 4) * 100}%"></i>
      </div>
      <b>${value}/4</b>
    `;
    elements.masteryList.append(row);
  });
}

function renderErrors() {
  elements.errorList.innerHTML = "";
  const entries = Object.entries(state.errorCounts).sort((a, b) => b[1] - a[1]);
  if (entries.length === 0) {
    const item = document.createElement("li");
    item.textContent = "目前尚無錯誤紀錄。";
    elements.errorList.append(item);
    return;
  }

  for (const [errorType, count] of entries.slice(0, 5)) {
    const item = document.createElement("li");
    item.innerHTML = `<span>${errorType}</span><strong>${count} 次</strong>`;
    elements.errorList.append(item);
  }
}

function renderVideoResources() {
  elements.videoList.innerHTML = "";
  const resources = getCurrentVideoResources(COURSE, state);
  if (resources.length === 0) {
    const item = document.createElement("li");
    item.textContent = "目前沒有對應影片。";
    elements.videoList.append(item);
    return;
  }

  for (const resource of resources) {
    const item = document.createElement("li");
    item.innerHTML = `
      <a href="${escapeHtml(resource.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(resource.title)}</a>
      <small>${escapeHtml(resource.source)}</small>
    `;
    elements.videoList.append(item);
  }
}

function renderLessonVideoGate() {
  const gate = getCurrentLessonGate(COURSE, state);
  const video = gate.videos.find((item) => item.embedUrl) ?? gate.videos[0];
  const locked = isLessonLocked(gate);

  elements.lessonVideoCard.hidden = !gate.requiresVideo;
  elements.answerInput.disabled = locked;
  elements.submitAnswerButton.disabled = locked;
  elements.voiceButton.disabled = locked || !supportsVoiceInput;

  if (!gate.requiresVideo || !video) return;

  elements.lessonVideoTitle.textContent = video.title;
  elements.lessonVideoStatus.textContent = gate.completed
    ? "此概念影片已完成，可以開始互動。"
    : "若內嵌影片無法播放，請按「前往 YouTube 觀看影片」。看完後，再按「我已學完，開始互動」。";
  elements.lessonVideoFrame.src = video.embedUrl || "";
  elements.lessonVideoSourceLink.href = video.url;
  elements.markVideoCompleteButton.disabled = gate.completed;
  elements.markVideoCompleteButton.textContent = gate.completed ? "已完成影片學習" : "我已學完，開始互動";
}

function renderConversation() {
  elements.chatLog.innerHTML = "";
  const gate = getCurrentLessonGate(COURSE, state);
  const currentTranscript = getCurrentUnitTranscript();
  if (currentTranscript.length === 0) {
    addTutorMessage("我們開始。每次我只問一題，你答完後我會判斷是否能前進。");
    if (isLessonLocked(gate)) {
      addTutorMessage("請先看完這個概念影片，再開始回答家教問題。");
      return;
    }
    addTutorMessage(getCurrentPrompt(COURSE, state));
    return;
  }

  addTutorMessage("接續上次進度。");
  for (const entry of currentTranscript) {
    addTutorMessage(entry.prompt);
    addStudentMessage(entry.answer);
    addTutorMessage(entry.correct ? "這題已通過。" : `這題錯在「${entry.errorType}」。`);
  }
  if (isLessonLocked(gate)) {
    addTutorMessage("請先看完這個概念影片，再繼續目前的家教互動。");
  } else {
    addTutorMessage(getCurrentPrompt(COURSE, state));
  }
}

function getCurrentLearningUnit() {
  const chapter = COURSE.chapters[state.chapterIndex];
  const step = chapter?.steps?.[state.stepIndex];
  return { chapterTitle: chapter?.title || "", concept: step?.concept || "" };
}

function getCurrentUnitTranscript() {
  const unit = getCurrentLearningUnit();
  return state.transcript.filter(
    (entry) => entry.chapter === unit.chapterTitle && entry.concept === unit.concept,
  );
}

function getCurrentLearningUnitKey() {
  const unit = getCurrentLearningUnit();
  return `${unit.chapterTitle}::${unit.concept}`;
}

function scrollToCurrentUnitStart() {
  const gate = getCurrentLessonGate(COURSE, state);
  const target = gate.requiresVideo ? elements.lessonVideoCard : elements.chatLog;
  target?.scrollIntoView?.({ behavior: "smooth", block: "start" });
}

function scrollToAnswerArea() {
  elements.answerInput?.focus?.();
  const scroll = () => {
    const rect = elements.answerInput?.getBoundingClientRect?.();
    if (rect && typeof window.scrollTo === "function") {
      const top = (window.scrollY || 0) + rect.top - ((window.innerHeight || 0) - rect.height) / 2;
      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
      return;
    }
    elements.answerInput?.scrollIntoView?.({ behavior: "auto", block: "center" });
  };
  if (typeof window.setTimeout === "function") {
    window.setTimeout(scroll, 100);
  } else {
    scroll();
  }
}

function isLessonLocked(gate) {
  return !state.activePracticeQuestion && gate.requiresVideo && !gate.completed;
}

function addResultMessages(messages) {
  const gate = getCurrentLessonGate(COURSE, state);
  const currentPrompt = getCurrentPrompt(COURSE, state);
  const locked = isLessonLocked(gate);

  for (const message of messages) {
    if (locked && message === currentPrompt) continue;
    addTutorMessage(message);
  }

  if (locked) {
    addTutorMessage("下一個概念也有影片。請先看完影片，再繼續互動。");
  }
}

function addTutorMessage(text) {
  addMessage("tutor", text);
}

function addStudentMessage(text) {
  addMessage("student", text);
}

function addMessage(type, text) {
  const item = document.createElement("div");
  item.className = `message ${type}`;
  const body = type === "tutor" ? formatTutorMessage(text) : escapeHtml(text);
  item.innerHTML = `<strong>${type === "tutor" ? "家教老師" : "學生"}</strong><p>${body}</p>`;
  elements.chatLog.append(item);
  elements.chatLog.scrollTop = elements.chatLog.scrollHeight;
}

function getLearnerModeLabel(mode) {
  if (mode === "practice") return "直接練習";
  if (mode === "diagnostic") return "先做診斷";
  return "先教學";
}

function formatTutorMessage(value) {
  const parts = String(value).split(/(<figure class="visual-aid"[\s\S]*?<\/figure>)/g);
  return parts
    .map((part) => {
      if (part.startsWith('<figure class="visual-aid"')) return part;
      return escapeHtml(part).replace(/\n/g, "<br>");
    })
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

})();
