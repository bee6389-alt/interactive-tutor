(function () {
  function createHandwritingPad(options) {
    const canvas = options.canvas;
    const status = options.status;
    const answerInput = options.answerInput;
    const clearButton = options.clearButton;
    const analyzeButton = options.analyzeButton;
    const endpoint = options.endpoint || "";
    const contextProvider = options.contextProvider || (() => ({}));

    if (!canvas || !status || !clearButton || !analyzeButton) return null;

    const context = typeof canvas.getContext === "function" ? canvas.getContext("2d") : null;
    let drawing = false;
    let hasInk = false;

    status.textContent = context
      ? "可用電子筆或手指寫計算過程；目前尚未啟用自動辨識，最後答案仍需輸入。"
      : "此環境可保留手寫計算入口；若瀏覽器支援 Canvas，可用電子筆書寫。";

    if (context) {
      resizeCanvas(canvas, context);
      canvas.addEventListener("pointerdown", (event) => {
        drawing = true;
        hasInk = true;
        drawPoint(canvas, context, event);
      });
      canvas.addEventListener("pointermove", (event) => {
        if (!drawing) return;
        drawPoint(canvas, context, event);
      });
      canvas.addEventListener("pointerup", () => {
        drawing = false;
      });
      canvas.addEventListener("pointerleave", () => {
        drawing = false;
      });
    }

    clearButton.addEventListener("click", () => {
      if (context) context.clearRect(0, 0, canvas.width, canvas.height);
      hasInk = false;
      status.textContent = "手寫區已清空，可以重新寫算式。";
    });

    analyzeButton.addEventListener("click", async () => {
      if (!endpoint) {
        status.textContent = "尚未設定手寫辨識服務。請先把最後答案打在上方答案欄，之後可接後端自動判斷。";
        return;
      }

      if (!context || !hasInk || typeof canvas.toDataURL !== "function") {
        status.textContent = "尚未偵測到可辨識的手寫內容。";
        return;
      }

      analyzeButton.disabled = true;
      status.textContent = "正在辨識手寫算式...";

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...contextProvider(),
            image: canvas.toDataURL("image/png"),
          }),
        });
        if (!response.ok) throw new Error("handwriting analysis failed");

        const result = await response.json();
        const recognizedAnswer = result.finalAnswer || result.recognizedText || "";
        if (recognizedAnswer && answerInput) {
          answerInput.value = recognizedAnswer;
          answerInput.focus();
          status.textContent = "已辨識手寫內容並填入答案欄，請確認後送出。";
        } else {
          status.textContent = "已完成辨識，但沒有取得可填入的答案。";
        }
      } catch {
        status.textContent = "手寫辨識服務暫時無法使用，請改用鍵盤輸入最後答案。";
      } finally {
        analyzeButton.disabled = false;
      }
    });

    return { clear: () => clearButton.click() };
  }

  function resizeCanvas(canvas, context) {
    const rect = typeof canvas.getBoundingClientRect === "function" ? canvas.getBoundingClientRect() : { width: 720, height: 220 };
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.floor(rect.width * ratio));
    canvas.height = Math.max(1, Math.floor(rect.height * ratio));
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = "#f4ead8";
  }

  function drawPoint(canvas, context, event) {
    const rect = typeof canvas.getBoundingClientRect === "function" ? canvas.getBoundingClientRect() : { left: 0, top: 0 };
    const x = (event.clientX || 0) - rect.left;
    const y = (event.clientY || 0) - rect.top;
    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.moveTo(x, y);
    event.preventDefault?.();
  }

  window.HandwritingPad = { create: createHandwritingPad };
})();
