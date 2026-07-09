(function () {
const MASTERIES = {
  semiconductor: "半導體基礎",
  diode: "二極體",
  rectifier: "整流與電源",
  specialDiode: "特殊二極體",
  bjt: "BJT",
  bjtBias: "BJT 偏壓",
  bjtAmp: "BJT 放大",
  fet: "FET",
  fetAmp: "FET 放大",
  frequency: "多級與頻率響應",
  feedback: "回授",
  opAmp: "運算放大器",
  opApplications: "OP 應用",
  oscillator: "振盪",
  digital: "數位邏輯",
  combinational: "組合邏輯",
  sequential: "循序邏輯",
  timer555: "555 與脈波",
  conversion: "ADC/DAC",
  sensor: "感測介面",
  integration: "整合題",
  diagnosis: "總診斷",
};

const VIDEO_RESOURCES = [
  {
    title: "高中電子學：P-N 接面二極體",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=Df0e5GEzw_I",
    concepts: ["半導體載子", "N 型與 P 型", "摻雜目的", "PN 接面偏壓", "接面混合判斷"],
    masteryKeys: ["semiconductor"],
    chapterIds: ["ch1-semiconductor-pn"],
  },
  {
    title: "高中電子學：二極體之等效電阻特性",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=mpMozLMjQko",
    concepts: ["二極體方向", "矽二極體壓降", "理想模型", "I-V 曲線", "模型混合題"],
    masteryKeys: ["diode"],
    chapterIds: ["ch2-diode-model"],
  },
  {
    title: "電子學：二極體應用電路",
    source: "高職電子學教學影片",
    url: "https://www.youtube.com/watch?v=fiKbV7ddvlU",
    concepts: ["半波整流", "全波整流", "橋式整流", "濾波電容", "整流混合題"],
    masteryKeys: ["rectifier"],
    chapterIds: ["ch3-rectifier", "ch16-power-supply"],
  },
  {
    title: "高中電子學實習：二極體之識別原理",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=RA3wxR0MnTY",
    concepts: ["稽納用途", "LED", "光二極體", "變容二極體", "特殊二極體混合題"],
    masteryKeys: ["specialDiode"],
    chapterIds: ["ch4-special-diodes"],
  },
  {
    title: "高中電子學：雙極性接面電晶體",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=Z-5OX1vwmPI",
    concepts: ["BJT 端子", "電流關係", "電流增益", "工作區", "BJT 混合題"],
    masteryKeys: ["bjt"],
    chapterIds: ["ch5-bjt-basics"],
  },
  {
    title: "高中電子學實習：電晶體直流偏壓電路",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=J9IXD2YmGEY",
    concepts: ["偏壓目的", "固定偏壓", "分壓偏壓", "Q 點", "偏壓混合題"],
    masteryKeys: ["bjtBias"],
    chapterIds: ["ch6-bjt-bias"],
  },
  {
    title: "電子學：電晶體三種放大型態",
    source: "高職電子學教學影片",
    url: "https://m.youtube.com/watch?v=dzBSOSrqmws",
    concepts: ["共射相位", "共集用途", "電壓增益", "旁路電容", "放大混合題"],
    masteryKeys: ["bjtAmp"],
    chapterIds: ["ch7-bjt-small-signal"],
  },
  {
    title: "電子學：JFET 構造及特性",
    source: "高職電子學教學影片",
    url: "https://www.youtube.com/watch?v=DjgIJW4VptU",
    concepts: ["FET 控制", "FET 端子", "MOSFET 閘極", "工作區", "FET 混合題"],
    masteryKeys: ["fet"],
    chapterIds: ["ch8-fet-basics"],
  },
  {
    title: "金氧半場效電晶體放大電路：分壓式偏壓共源極",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=LzH6B9W_rbM",
    concepts: ["自偏壓", "分壓偏壓", "源極隨耦器", "跨導", "FET 放大混合題"],
    masteryKeys: ["fetAmp"],
    chapterIds: ["ch9-fet-bias-amp"],
  },
  {
    title: "高中電子學：金氧半場效電晶體多級放大電路",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=uTUHyY7_apo",
    concepts: ["多級增益", "RC 耦合", "dB 表示", "截止頻率", "頻響混合題"],
    masteryKeys: ["frequency"],
    chapterIds: ["ch10-multistage-frequency"],
  },
  {
    title: "電子學：回授放大器的一般性結構",
    source: "高職電子學教學影片",
    url: "https://www.youtube.com/watch?v=Tsoe_rA1e-o",
    concepts: ["回授意義", "負回授效果", "正回授", "閉迴路增益", "回授混合題"],
    masteryKeys: ["feedback"],
    chapterIds: ["ch11-feedback"],
  },
  {
    title: "高中電子學：運算放大器",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=R87yYTbdvvc",
    concepts: ["理想輸入電流", "虛短", "虛地", "開迴路增益", "OP 基礎混合題"],
    masteryKeys: ["opAmp"],
    chapterIds: ["ch12-op-amp-basics"],
  },
  {
    title: "運算放大器：基本非反相放大器",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=4qzx3lj071o",
    concepts: ["反相放大", "反相增益", "非反相增益", "緩衝器", "OP 應用混合題"],
    masteryKeys: ["opApplications"],
    chapterIds: ["ch13-op-basic-applications"],
  },
  {
    title: "高中電子學實習：運算放大器應用電路",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=2mtn2slQ-fM",
    concepts: ["比較器", "積分器", "微分器", "主動濾波", "進階 OP 混合題"],
    masteryKeys: ["opApplications"],
    chapterIds: ["ch14-op-advanced"],
  },
  {
    title: "高中電子學實習：石英晶體振盪電路",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=hko6B7m9Q94",
    concepts: ["振盪條件", "RC 振盪", "LC 振盪", "晶體振盪", "振盪混合題"],
    masteryKeys: ["oscillator"],
    chapterIds: ["ch15-oscillator"],
  },
  {
    title: "高中可程式邏輯設計實習：基本邏輯閘實驗",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=QZGJgUVWeqU",
    concepts: ["二進位", "AND 閘", "OR 閘", "NOT 閘", "數位混合題"],
    masteryKeys: ["digital"],
    chapterIds: ["ch17-digital-basics"],
  },
  {
    title: "高中數位邏輯設計：卡諾圖簡介",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=gIjn3rK62RY",
    concepts: ["組合邏輯", "K-map", "編碼器", "多工器", "組合混合題"],
    masteryKeys: ["combinational"],
    chapterIds: ["ch18-combinational"],
  },
  {
    title: "邏輯設計：D 型正反器",
    source: "數位邏輯教學影片",
    url: "https://www.youtube.com/watch?v=D_Ww_fHoARE",
    concepts: ["循序邏輯", "正反器", "時脈", "計數器", "循序混合題"],
    masteryKeys: ["sequential"],
    chapterIds: ["ch19-sequential"],
  },
  {
    title: "555 計時器振盪電路：無穩態多諧振盪器",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=tsMZ3-9VF9k",
    concepts: ["555 功能", "單穩態", "無穩態", "頻率週期", "555 混合題"],
    masteryKeys: ["timer555"],
    chapterIds: ["ch20-555-pulse"],
  },
  {
    title: "基本電子學：課程總覽與類比數位銜接",
    source: "高職電子學教學影片",
    url: "https://www.youtube.com/watch?v=VdFsgZ4Seq0",
    concepts: ["ADC", "DAC", "取樣", "解析度", "轉換混合題"],
    masteryKeys: ["conversion"],
    chapterIds: ["ch21-adc-dac"],
  },
  {
    title: "工業電子學：光檢出器",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=BA3ZKXeLVrA",
    concepts: ["感測器", "光感測", "溫度感測", "驅動介面", "介面混合題"],
    masteryKeys: ["sensor"],
    chapterIds: ["ch22-sensors-interface"],
  },
  {
    title: "半導體晶片理論：PN 二極體、NPN 電晶體、MOSFET",
    source: "電子學觀念整合影片",
    url: "https://www.youtube.com/watch?v=9D2oFX0uwEw",
    concepts: ["整合策略", "二極體區塊", "電晶體區塊", "OP 區塊", "整合混合題"],
    masteryKeys: ["integration"],
    chapterIds: ["ch23-integrated-circuits"],
  },
  {
    title: "統測電機電子群：高職電子學運算放大器",
    source: "統測電子學教學影片",
    url: "https://www.youtube.com/watch?v=HW9jvjkWiJs",
    concepts: ["總診斷符號", "總診斷工作區", "總診斷公式", "總診斷邏輯", "全課程混合題"],
    masteryKeys: ["diagnosis"],
    chapterIds: ["ch24-diagnosis"],
  },
];

const CHAPTER_SPECS = [
  {
    id: "ch1-semiconductor-pn",
    title: "第一章：半導體基礎與 PN 接面",
    goal: "理解電子、電洞、摻雜、順偏與逆偏。",
    masteryKey: "semiconductor",
    steps: [
      ["半導體載子", "半導體中常見的兩種載子是電子和什麼？", ["電洞", "電洞載子", "洞"], "電洞", "題意判讀錯", "電子帶負電，電洞可視為帶正電的載子。", "對。半導體中常見載子是電子與電洞。"],
      ["N 型與 P 型", "N 型半導體的多數載子是電子，還是電洞？", ["電子", "自由電子"], "電子", "特性曲線錯", "N 型由施體雜質提供多數自由電子。", "對。N 型半導體的多數載子是電子。"],
      ["摻雜目的", "在本質半導體中加入少量雜質來改變導電性，稱為什麼？", ["摻雜", "摻入雜質", "摻質"], "摻雜", "題意判讀錯", "電子學常用摻雜控制 N 型或 P 型。", "對。這個過程稱為摻雜。"],
      ["PN 接面偏壓", "PN 接面順向偏壓時，空乏區會變寬還是變窄？", ["變窄", "窄", "縮小"], "變窄", "極性錯", "順偏會降低接面障壁，使空乏區變窄。", "對。順偏時空乏區變窄，較容易導通。"],
      ["接面混合判斷", "統測型判斷：若 PN 接面逆向偏壓，電流通常很大還是很小？", ["很小", "小", "逆向漏電流", "漏電流"], "很小", "工作區判斷錯", "逆偏時只有很小的逆向漏電流，未崩潰前不會大量導通。", "對。逆偏時電流通常很小。"],
    ],
  },
  {
    id: "ch2-diode-model",
    title: "第二章：二極體特性與模型",
    goal: "判斷導通壓降、I-V 曲線、理想與近似模型。",
    masteryKey: "diode",
    steps: [
      ["二極體方向", "二極體主要允許電流單方向流動，還是雙方向完全相同？", ["單方向", "單向", "一個方向"], "單方向", "題意判讀錯", "二極體有整流作用，順向容易導通、逆向不易導通。", "對。二極體主要呈現單向導通。"],
      ["矽二極體壓降", "常用近似中，矽二極體順向導通壓降約為幾伏特？", ["0.7V", "0.7", "0.7伏特"], "0.7V", "單位錯", "矽二極體常用 0.7V 近似，鍺二極體約 0.3V。", "對。矽二極體常用 0.7V 估算。"],
      ["理想模型", "理想二極體導通時可近似為短路，還是開路？", ["短路"], "短路", "模型判斷錯", "理想模型導通壓降視為 0V，所以像短路。", "對。理想二極體導通時近似短路。"],
      ["I-V 曲線", "二極體 I-V 曲線在順向超過導通壓後，電流會快速增加還是固定為 0？", ["快速增加", "增加", "變大"], "快速增加", "特性曲線錯", "順向電壓達門檻後，電流會明顯上升。", "對。順向導通後電流快速增加。"],
      ["模型混合題", "統測型判斷：5V 電源串 1kΩ 與矽二極體導通，電阻上約承受 4.3V 還是 5.7V？", ["4.3V", "4.3", "4.3伏特"], "4.3V", "公式錯", "導通二極體約吃掉 0.7V，所以電阻約 5 - 0.7 = 4.3V。", "對。電阻上約為 4.3V。"],
    ],
  },
  {
    id: "ch3-rectifier",
    title: "第三章：二極體整流電路",
    goal: "分辨半波、全波、橋式整流與濾波作用。",
    masteryKey: "rectifier",
    steps: [
      ["半波整流", "半波整流每一週期只利用一半波形，還是正負半週都利用？", ["一半", "半波", "只利用一半"], "只利用一半波形", "題意判讀錯", "半波整流只讓其中一個半週通過。", "對。半波整流只利用一半波形。"],
      ["全波整流", "全波整流會利用正負兩個半週，還是只保留正半週？", ["兩個半週", "正負半週", "全波"], "正負兩個半週", "特性曲線錯", "全波會把兩半週都轉為同極性輸出。", "對。全波整流利用正負兩半週。"],
      ["橋式整流", "橋式整流常用幾顆二極體？", ["4", "四", "四顆", "4顆"], "4 顆", "題意判讀錯", "橋式整流器由四顆二極體構成橋式路徑。", "對。橋式整流常用四顆二極體。"],
      ["濾波電容", "整流後並聯濾波電容的主要目的，是降低漣波還是增加交流成分？", ["降低漣波", "減少漣波", "濾波"], "降低漣波", "題意判讀錯", "濾波電容在峰值附近充電、谷值時放電，可讓輸出較平滑。", "對。濾波電容主要降低漣波。"],
      ["整流混合題", "統測型判斷：橋式整流每次導通路徑通常有幾顆二極體串在負載路徑上？", ["2", "二", "兩顆", "2顆"], "2 顆", "電路判斷錯", "橋式整流每個半週有兩顆二極體導通，因此要考慮兩個導通壓降。", "對。橋式整流每次通常兩顆導通。"],
    ],
  },
  {
    id: "ch4-special-diodes",
    title: "第四章：特殊二極體",
    goal: "認識稽納、LED、光二極體、變容二極體用途。",
    masteryKey: "specialDiode",
    steps: [
      ["稽納用途", "稽納二極體常用在逆向崩潰區做穩壓，還是只做照明？", ["穩壓", "逆向崩潰", "穩定電壓"], "穩壓", "工作區判斷錯", "稽納二極體設計用在崩潰區時可維持近似固定電壓。", "對。稽納二極體常用於穩壓。"],
      ["LED", "LED 導通時會發光，還是主要用來改變電容量？", ["發光", "會發光", "光"], "發光", "題意判讀錯", "LED 是發光二極體。", "對。LED 導通時會發光。"],
      ["光二極體", "光二極體主要把光訊號轉成電訊號，還是把聲音轉成熱？", ["光訊號轉電訊號", "光轉電", "電訊號"], "光訊號轉成電訊號", "題意判讀錯", "光二極體受光後會產生光電流。", "對。光二極體可做光感測。"],
      ["變容二極體", "變容二極體常利用逆向偏壓改變接面電容，還是固定電阻？", ["接面電容", "電容", "變容"], "改變接面電容", "特性曲線錯", "逆向偏壓改變空乏區寬度，也改變接面電容。", "對。變容二極體用電壓控制電容。"],
      ["特殊二極體混合題", "統測型判斷：若題目要簡單穩定 5.1V 參考電壓，較常選 LED 還是稽納二極體？", ["稽納", "稽納二極體", "Zener"], "稽納二極體", "題意判讀錯", "參考電壓與穩壓用途通常選稽納二極體。", "對。這種用途較常選稽納二極體。"],
    ],
  },
  {
    id: "ch5-bjt-basics",
    title: "第五章：雙極性電晶體 BJT 基礎",
    goal: "理解 NPN、PNP、電流關係與工作區。",
    masteryKey: "bjt",
    steps: [
      ["BJT 端子", "BJT 三個端子是基極、集極和什麼？", ["射極", "發射極", "Emitter"], "射極", "符號錯", "BJT 三端為 B、C、E：基極、集極、射極。", "對。BJT 三端是基極、集極、射極。"],
      ["電流關係", "BJT 中 IE 約等於 IB + IC，還是 IB - IC？", ["IB+IC", "IB + IC", "相加"], "IE = IB + IC", "公式錯", "射極電流等於基極電流與集極電流總和。", "對。IE = IB + IC。"],
      ["電流增益", "β 通常表示 IC/IB，還是 IB/IC？", ["IC/IB", "IC÷IB", "集極電流除以基極電流"], "β = IC/IB", "公式錯", "β 是直流電流增益，集極電流相對基極電流的倍數。", "對。β = IC/IB。"],
      ["工作區", "BJT 作為線性放大器時通常操作在主動區，還是飽和區？", ["主動區", "放大區"], "主動區", "工作區判斷錯", "放大用途需要主動區；開關導通常在飽和區。", "對。線性放大通常在主動區。"],
      ["BJT 混合題", "統測型判斷：若 β = 100、IB = 20uA，IC 約是多少？", ["2mA", "2 mA", "0.002A", "2毫安"], "2mA", "公式錯", "IC = βIB = 100 × 20uA = 2000uA = 2mA。", "對。IC 約為 2mA。"],
    ],
  },
  {
    id: "ch6-bjt-bias",
    title: "第六章：BJT 偏壓電路",
    goal: "掌握固定偏壓、分壓偏壓、穩定度與 Q 點。",
    masteryKey: "bjtBias",
    steps: [
      ["偏壓目的", "偏壓電路的主要目的，是設定穩定 Q 點還是讓電晶體完全沒有電流？", ["Q點", "穩定Q點", "工作點"], "設定穩定 Q 點", "偏壓觀念錯", "偏壓讓電晶體在預定工作區運作。", "對。偏壓用來設定穩定 Q 點。"],
      ["固定偏壓", "固定偏壓常直接由電阻提供基極電流，穩定度通常較好還是較差？", ["較差", "差", "不穩定"], "較差", "偏壓觀念錯", "固定偏壓容易受 β 變動影響。", "對。固定偏壓穩定度較差。"],
      ["分壓偏壓", "分壓偏壓加入射極電阻 RE，通常能增加穩定度還是降低穩定度？", ["增加", "提高", "較穩定"], "增加穩定度", "偏壓觀念錯", "射極電阻形成負回授，使 Q 點較穩。", "對。分壓偏壓通常較穩定。"],
      ["Q 點", "Q 點在特性曲線上代表靜態工作點，還是交流最大頻率？", ["靜態工作點", "工作點", "Q點"], "靜態工作點", "特性曲線錯", "Q 點描述沒有輸入訊號時的電壓與電流。", "對。Q 點就是靜態工作點。"],
      ["偏壓混合題", "統測型判斷：若溫度讓 IC 上升，射極電阻造成 VE 上升，會抑制還是加劇 IC 上升？", ["抑制", "減少", "穩定"], "抑制", "偏壓觀念錯", "VE 上升會降低 VBE，形成負回授抑制 IC 增加。", "對。射極電阻能抑制 IC 漂移。"],
    ],
  },
  {
    id: "ch7-bjt-small-signal",
    title: "第七章：BJT 小訊號放大",
    goal: "分辨共射、共集、共基、增益與相位。",
    masteryKey: "bjtAmp",
    steps: [
      ["共射相位", "共射放大器輸出相位相對輸入通常反相，還是同相？", ["反相", "相反", "180度"], "反相", "相位判斷錯", "共射電壓放大輸出通常與輸入相差 180 度。", "對。共射放大器通常反相。"],
      ["共集用途", "共集放大器也稱射極隨耦器，電壓增益約為 1 還是非常大？", ["1", "約1", "接近1"], "約 1", "公式錯", "射極隨耦器主要提供電流增益與阻抗轉換。", "對。共集電壓增益約為 1。"],
      ["電壓增益", "電壓增益 Av 通常可寫成 Vo/Vi，還是 Vi/Vo？", ["Vo/Vi", "輸出除以輸入"], "Av = Vo/Vi", "公式錯", "增益是輸出量相對輸入量的比值。", "對。Av = Vo/Vi。"],
      ["旁路電容", "射極旁路電容在交流中常用來提高增益，還是固定直流電源？", ["提高增益", "增加增益", "旁路交流"], "提高增益", "電路判斷錯", "旁路電容降低交流射極退化，讓增益提高。", "對。射極旁路電容可提高交流增益。"],
      ["放大混合題", "統測型判斷：若 Vi = 10mV、Vo = 1V，電壓增益 Av 是多少？", ["100", "100倍"], "100", "公式錯", "1V ÷ 0.01V = 100。", "對。電壓增益 Av = 100。"],
    ],
  },
  {
    id: "ch8-fet-basics",
    title: "第八章：場效電晶體 FET 基礎",
    goal: "理解 JFET、MOSFET、閘極控制與工作區。",
    masteryKey: "fet",
    steps: [
      ["FET 控制", "FET 主要由閘極電壓控制汲極電流，還是由基極電流控制？", ["閘極電壓", "電壓控制", "Gate電壓"], "閘極電壓", "題意判讀錯", "FET 是電壓控制元件，BJT 才常用基極電流描述。", "對。FET 主要由閘極電壓控制。"],
      ["FET 端子", "FET 三端是閘極、汲極和什麼？", ["源極", "Source"], "源極", "符號錯", "FET 三端為 G、D、S：閘極、汲極、源極。", "對。FET 三端是閘極、汲極、源極。"],
      ["MOSFET 閘極", "MOSFET 閘極與通道間有絕緣層，因此輸入電阻通常高還是低？", ["高", "很高", "高輸入電阻"], "高", "特性曲線錯", "絕緣閘使 MOSFET 輸入電流很小。", "對。MOSFET 輸入電阻通常很高。"],
      ["工作區", "FET 作放大時常操作在線性小訊號的飽和區，還是一定在截止區？", ["飽和區", "主動區", "放大區"], "飽和區", "工作區判斷錯", "許多 FET 放大分析會以飽和區作為放大區。", "對。FET 放大常設在飽和區。"],
      ["FET 混合題", "統測型判斷：若 VGS 小於臨界電壓，增強型 MOSFET 通常導通還是截止？", ["截止", "不導通", "關斷"], "截止", "工作區判斷錯", "增強型 MOSFET 需超過臨界電壓才形成通道。", "對。VGS 不足時通常截止。"],
    ],
  },
  {
    id: "ch9-fet-bias-amp",
    title: "第九章：FET 偏壓與放大",
    goal: "掌握自偏壓、分壓偏壓、源極隨耦器。",
    masteryKey: "fetAmp",
    steps: [
      ["自偏壓", "JFET 自偏壓常利用源極電阻產生 VGS，還是完全不需要電阻？", ["源極電阻", "RS", "源極"], "源極電阻", "偏壓觀念錯", "源極電阻讓源極電壓上升，使 VGS 形成合適負偏壓。", "對。JFET 自偏壓常用源極電阻。"],
      ["分壓偏壓", "MOSFET 分壓偏壓常用電阻分壓設定閘極電壓，還是設定二極體順向壓？", ["閘極電壓", "Gate電壓", "VG"], "閘極電壓", "偏壓觀念錯", "分壓網路可提供穩定 VG。", "對。分壓偏壓用來設定閘極電壓。"],
      ["源極隨耦器", "源極隨耦器的輸出取自源極，電壓增益通常接近 1 還是負 100？", ["接近1", "1", "約1"], "接近 1", "公式錯", "源極隨耦器常用於緩衝與阻抗轉換。", "對。源極隨耦器電壓增益接近 1。"],
      ["跨導", "FET 的 gm 稱為跨導，描述電流變化對哪個電壓變化的比例？", ["VGS", "閘源電壓", "閘極源極電壓"], "VGS", "符號錯", "gm 約等於 ΔID/ΔVGS。", "對。gm 描述 ID 對 VGS 的變化比例。"],
      ["FET 放大混合題", "統測型判斷：源極未旁路的共源放大器，源極電阻會降低增益並增加穩定，這是正回授還是負回授？", ["負回授", "負回饋"], "負回授", "偏壓觀念錯", "源極電阻造成局部負回授，穩定但降低增益。", "對。這是負回授效果。"],
    ],
  },
  {
    id: "ch10-multistage-frequency",
    title: "第十章：多級放大與頻率響應",
    goal: "理解耦合方式、低頻高頻限制與增益表示。",
    masteryKey: "frequency",
    steps: [
      ["多級增益", "多級放大總電壓增益通常為各級增益相乘，還是只取最後一級？", ["相乘", "乘積", "各級相乘"], "各級增益相乘", "公式錯", "串接放大器輸出逐級放大，總增益為各級增益乘積。", "對。多級總增益通常為各級相乘。"],
      ["RC 耦合", "RC 耦合可隔離直流工作點並傳遞交流訊號，還是只傳遞直流？", ["傳遞交流", "隔離直流", "交流"], "隔離直流並傳遞交流", "電路判斷錯", "耦合電容阻隔直流、讓交流通過。", "對。RC 耦合可隔直流、傳交流。"],
      ["dB 表示", "電壓增益以 dB 表示時常用 20 log Av，還是 10 log Av？", ["20log", "20 log Av", "20"], "20 log Av", "公式錯", "電壓或電流增益用 20log，功率增益用 10log。", "對。電壓增益 dB 常用 20 log Av。"],
      ["截止頻率", "放大器中頻增益下降 3dB 的頻率常稱為截止頻率，還是飽和電流？", ["截止頻率", "fL", "fH"], "截止頻率", "題意判讀錯", "低頻與高頻端的 -3dB 點界定頻帶。", "對。-3dB 點常稱截止頻率。"],
      ["頻響混合題", "統測型判斷：低頻響應常受耦合電容與旁路電容影響，還是只由 β 決定？", ["電容", "耦合電容", "旁路電容"], "耦合電容與旁路電容", "題意判讀錯", "低頻時電容電抗變大，會影響訊號耦合與旁路效果。", "對。低頻響應常受這些電容影響。"],
    ],
  },
  {
    id: "ch11-feedback",
    title: "第十一章：回授放大器",
    goal: "分辨正回授、負回授、增益穩定與失真改善。",
    masteryKey: "feedback",
    steps: [
      ["回授意義", "把輸出的一部分送回輸入端，稱為什麼？", ["回授", "回饋", "feedback"], "回授", "題意判讀錯", "回授是輸出訊號回到輸入端影響整體行為。", "對。這稱為回授。"],
      ["負回授效果", "負回授通常會使增益較穩定、失真較小，還是一定讓電路振盪？", ["增益穩定", "失真較小", "穩定"], "增益較穩定、失真較小", "題意判讀錯", "負回授犧牲部分增益以換取穩定度與線性。", "對。負回授常改善穩定與失真。"],
      ["正回授", "正回授若相位與增益條件滿足，可能造成放大還是振盪？", ["振盪", "震盪"], "振盪", "相位判斷錯", "正回授會強化輸入，適當條件下形成振盪。", "對。正回授可造成振盪。"],
      ["閉迴路增益", "負回授放大器的閉迴路增益通常較開迴路增益低，還是更不可控？", ["較低", "低", "穩定"], "較低但較穩定", "公式錯", "負回授會降低增益，但讓增益較不受元件變動影響。", "對。閉迴路增益較低但穩定。"],
      ["回授混合題", "統測型判斷：若目標是降低失真並擴大頻寬，常使用正回授還是負回授？", ["負回授", "負回饋"], "負回授", "題意判讀錯", "負回授常用於降低失真、擴大頻寬、穩定增益。", "對。這種目標常用負回授。"],
    ],
  },
  {
    id: "ch12-op-amp-basics",
    title: "第十二章：運算放大器基礎",
    goal: "理解理想 OP、虛短、虛地、開迴路與閉迴路。",
    masteryKey: "opAmp",
    steps: [
      ["理想輸入電流", "理想運算放大器輸入端電流近似為 0，還是無限大？", ["0", "零", "近似0"], "0", "題意判讀錯", "理想 OP 輸入阻抗無限大，因此輸入電流近似 0。", "對。理想 OP 輸入電流近似 0。"],
      ["虛短", "在線性負回授下，理想 OP 的 +、- 輸入端電壓近似相等，稱為虛短還是實際短路？", ["虛短"], "虛短", "題意判讀錯", "虛短指電壓近似相等，但兩端沒有真的短接。", "對。這稱為虛短。"],
      ["虛地", "若非反相端接地且有負回授，反相端近似 0V，稱為什麼？", ["虛地", "virtual ground"], "虛地", "題意判讀錯", "反相端電位近似地，但不是實際接地。", "對。這稱為虛地。"],
      ["開迴路增益", "OP 開迴路增益通常很大，還是一定小於 1？", ["很大", "大", "非常大"], "很大", "特性曲線錯", "未加回授時 OP 對差動輸入有極高增益。", "對。OP 開迴路增益通常很大。"],
      ["OP 基礎混合題", "統測型判斷：理想 OP 在線性負回授時，若 V+ = 2V，V- 近似多少？", ["2V", "2", "2伏特"], "2V", "公式錯", "虛短條件下 V- 近似等於 V+。", "對。V- 近似 2V。"],
    ],
  },
  {
    id: "ch13-op-basic-applications",
    title: "第十三章：OP 基本應用",
    goal: "掌握反相、非反相、加法、減法與緩衝器。",
    masteryKey: "opApplications",
    steps: [
      ["反相放大", "反相放大器輸出相位相對輸入是反相還是同相？", ["反相", "相反", "180度"], "反相", "相位判斷錯", "反相輸入端進入，輸出符號會相反。", "對。反相放大器輸出反相。"],
      ["反相增益", "反相放大器增益公式是 -Rf/Rin，還是 +Rin/Rf？", ["-Rf/Rin", "-Rf÷Rin", "負Rf除Rin"], "-Rf/Rin", "公式錯", "負號表示反相，大小由回授電阻與輸入電阻比決定。", "對。反相增益為 -Rf/Rin。"],
      ["非反相增益", "非反相放大器電壓增益通常是 1 + Rf/Rg，還是 -Rf/Rin？", ["1+Rf/Rg", "1 + Rf/Rg", "一加"], "1 + Rf/Rg", "公式錯", "非反相放大器增益為正，且至少為 1。", "對。非反相增益為 1 + Rf/Rg。"],
      ["緩衝器", "電壓隨耦器的輸出電壓約等於輸入電壓，增益約為多少？", ["1", "約1", "一"], "1", "公式錯", "緩衝器用負回授讓輸出跟隨輸入。", "對。電壓隨耦器增益約 1。"],
      ["OP 應用混合題", "統測型判斷：反相放大器 Rin = 10kΩ、Rf = 50kΩ，增益是多少？", ["-5", "負5", "5倍反相"], "-5", "公式錯", "Av = -Rf/Rin = -50k/10k = -5。", "對。增益為 -5。"],
    ],
  },
  {
    id: "ch14-op-advanced",
    title: "第十四章：OP 進階應用",
    goal: "認識比較器、積分器、微分器與主動濾波。",
    masteryKey: "opApplications",
    steps: [
      ["比較器", "OP 比較器主要比較兩輸入電壓大小，輸出常接近飽和高或低，還是永遠在線性區？", ["飽和", "高或低", "比較大小"], "接近飽和高或低", "工作區判斷錯", "比較器通常不用負回授線性放大，而是輸出高低狀態。", "對。比較器輸出常接近高或低飽和。"],
      ["積分器", "OP 積分器的輸出與輸入訊號的積分有關，回授元件常用電容還是電感？", ["電容", "C"], "電容", "電路判斷錯", "反相積分器常在回授路徑放電容。", "對。積分器回授常用電容。"],
      ["微分器", "OP 微分器的輸出與輸入變化率有關，輸入端常用電容還是變壓器？", ["電容", "C"], "電容", "電路判斷錯", "基本微分器常在輸入端放電容。", "對。微分器輸入端常用電容。"],
      ["主動濾波", "主動濾波器通常使用 OP 搭配 R、C，還是只靠機械開關？", ["OP", "R、C", "運算放大器"], "OP 搭配 R、C", "題意判讀錯", "主動濾波可提供濾波與增益。", "對。主動濾波常用 OP 與 R、C。"],
      ["進階 OP 混合題", "統測型判斷：要把方波邊緣轉成尖脈波，較接近積分器還是微分器功能？", ["微分器", "微分"], "微分器", "題意判讀錯", "微分器對快速變化最敏感，會在邊緣產生尖脈波。", "對。這較接近微分器功能。"],
    ],
  },
  {
    id: "ch15-oscillator",
    title: "第十五章：振盪電路",
    goal: "理解振盪條件、RC、LC 與晶體振盪器。",
    masteryKey: "oscillator",
    steps: [
      ["振盪條件", "巴克豪森條件包含迴路增益大小為 1、總相位為幾度的整數倍？", ["360度", "0度", "360", "0"], "0 或 360 度", "相位判斷錯", "回授訊號需同相疊加，總相位為 0 或 360 度整數倍。", "對。總相位需為 0 或 360 度整數倍。"],
      ["RC 振盪", "RC 振盪器常用在較低頻率，還是只適合微波？", ["較低頻率", "低頻", "音頻"], "較低頻率", "題意判讀錯", "RC 網路適合低頻到音頻範圍的振盪。", "對。RC 振盪器常用於較低頻率。"],
      ["LC 振盪", "LC 振盪器的頻率主要由電感 L 與電容 C 決定，還是由二極體顏色決定？", ["L與C", "LC", "電感電容"], "L 與 C", "公式錯", "LC 共振頻率由 L、C 值決定。", "對。LC 振盪頻率由 L 與 C 決定。"],
      ["晶體振盪", "晶體振盪器的主要優點是頻率穩定度高，還是輸入阻抗一定為零？", ["頻率穩定", "穩定度高", "高穩定"], "頻率穩定度高", "題意判讀錯", "石英晶體具有高 Q 值，頻率穩定。", "對。晶體振盪器頻率穩定度高。"],
      ["振盪混合題", "統測型判斷：若迴路增益小於 1，振盪會維持、衰減還是無限增大？", ["衰減", "變小", "不會維持"], "衰減", "工作區判斷錯", "迴路增益不足時，每圈回授變小，振盪無法維持。", "對。迴路增益小於 1 時振盪會衰減。"],
    ],
  },
  {
    id: "ch16-power-supply",
    title: "第十六章：電源供應與穩壓",
    goal: "整合整流、濾波、稽納穩壓與線性穩壓 IC。",
    masteryKey: "rectifier",
    steps: [
      ["電源供應流程", "線性直流電源常見順序是變壓、整流、濾波、穩壓，還是先穩壓再整流？", ["變壓整流濾波穩壓", "整流濾波穩壓", "變壓、整流、濾波、穩壓"], "變壓、整流、濾波、穩壓", "題意判讀錯", "交流先調整電壓，再轉直流、平滑、穩定。", "對。常見流程是變壓、整流、濾波、穩壓。"],
      ["漣波", "濾波後仍殘留的交流起伏常稱為漣波，還是截止頻率？", ["漣波", "ripple"], "漣波", "單位錯", "整流濾波後的輸出仍可能有小幅起伏，稱為漣波。", "對。殘留起伏稱為漣波。"],
      ["稽納穩壓", "稽納穩壓通常讓稽納二極體操作在逆向崩潰區，還是順向 LED 區？", ["逆向崩潰", "崩潰區", "逆偏"], "逆向崩潰區", "工作區判斷錯", "稽納穩壓利用逆向崩潰電壓近似固定。", "對。稽納穩壓用逆向崩潰區。"],
      ["線性穩壓 IC", "7805 穩壓 IC 常用來輸出約幾伏特？", ["5V", "5", "5伏特"], "5V", "單位錯", "78xx 系列後兩位常表示正輸出電壓。", "對。7805 常輸出約 5V。"],
      ["電源混合題", "統測型判斷：若負載電流變大，濾波電容太小時漣波通常變大還是變小？", ["變大", "大", "增加"], "變大", "電路判斷錯", "負載放電較快，電容撐住電壓的能力不足，漣波增加。", "對。負載電流變大時漣波通常增加。"],
    ],
  },
  {
    id: "ch17-digital-basics",
    title: "第十七章：數位邏輯基礎",
    goal: "掌握二進位、邏輯閘、真值表與布林代數。",
    masteryKey: "digital",
    steps: [
      ["二進位", "數位電路常用 0 與 1 表示低、高兩種狀態，這是二進位還是十六進位專用？", ["二進位", "binary"], "二進位", "題意判讀錯", "二進位以 0、1 表示兩種邏輯狀態。", "對。0 與 1 是二進位基礎。"],
      ["AND 閘", "AND 閘要所有輸入為 1，輸出才為 1，還是任一輸入為 1 就輸出 1？", ["所有輸入為1", "全部1", "都為1"], "所有輸入為 1", "邏輯化簡錯", "AND 是交集概念，全部成立才輸出 1。", "對。AND 閘需全部輸入為 1。"],
      ["OR 閘", "OR 閘只要任一輸入為 1，輸出為 1，還是全部都要 0？", ["任一輸入為1", "有1", "任一1"], "任一輸入為 1", "邏輯化簡錯", "OR 是聯集概念，只要有 1 就輸出 1。", "對。OR 閘任一輸入為 1 即輸出 1。"],
      ["NOT 閘", "NOT 閘會把 1 變 0、0 變 1，稱為反相還是整流？", ["反相", "反閘", "NOT"], "反相", "符號錯", "NOT 閘輸出輸入的反值。", "對。NOT 閘具有反相功能。"],
      ["數位混合題", "統測型判斷：A=1、B=0，A AND B 的輸出是多少？", ["0", "零"], "0", "邏輯化簡錯", "AND 需要兩者都為 1；B 為 0 所以輸出 0。", "對。A AND B = 0。"],
    ],
  },
  {
    id: "ch18-combinational",
    title: "第十八章：組合邏輯",
    goal: "練習化簡、K-map、編碼器、解碼器與多工器。",
    masteryKey: "combinational",
    steps: [
      ["組合邏輯", "組合邏輯的輸出只由目前輸入決定，還是會記住上一拍狀態？", ["目前輸入", "只由輸入", "不記憶"], "只由目前輸入決定", "題意判讀錯", "不含記憶的邏輯稱為組合邏輯。", "對。組合邏輯不記憶過去狀態。"],
      ["K-map", "K-map 主要用來化簡布林函數，還是測量電容值？", ["化簡", "布林函數", "卡諾圖"], "化簡布林函數", "邏輯化簡錯", "卡諾圖透過相鄰 1 的群組找簡化式。", "對。K-map 用於邏輯化簡。"],
      ["編碼器", "編碼器把多條輸入轉成較少位元代碼，還是把二進位轉成七段顯示？", ["較少位元代碼", "編碼", "代碼"], "轉成較少位元代碼", "題意判讀錯", "編碼器將輸入線位置轉成二進位碼。", "對。編碼器輸出代碼。"],
      ["多工器", "多工器 MUX 會依選擇線選一路輸入送到輸出，還是同時輸出所有輸入？", ["選一路", "選擇一路", "MUX"], "選一路輸入", "題意判讀錯", "MUX 像數位選擇開關。", "對。MUX 依選擇線選一路輸出。"],
      ["組合混合題", "統測型判斷：2 選 1 MUX 需要幾條選擇線？", ["1", "一條", "1條"], "1 條", "邏輯化簡錯", "2 個輸入需 1 位選擇線即可表示 0 或 1。", "對。2 選 1 MUX 需要 1 條選擇線。"],
    ],
  },
  {
    id: "ch19-sequential",
    title: "第十九章：循序邏輯",
    goal: "理解正反器、暫存器與計數器。",
    masteryKey: "sequential",
    steps: [
      ["循序邏輯", "循序邏輯會受目前輸入與過去狀態影響，還是完全沒有記憶？", ["過去狀態", "有記憶", "狀態"], "受過去狀態影響", "題意判讀錯", "循序邏輯含記憶元件。", "對。循序邏輯會記住狀態。"],
      ["正反器", "正反器 Flip-Flop 可儲存 1 位元，還是只能放大類比訊號？", ["1位元", "一位元", "儲存"], "儲存 1 位元", "題意判讀錯", "正反器是基本記憶元件。", "對。正反器可儲存 1 位元。"],
      ["時脈", "許多正反器在時脈邊緣更新狀態，還是隨機更新？", ["時脈邊緣", "clock", "邊緣"], "時脈邊緣", "題意判讀錯", "邊緣觸發正反器依時脈上升或下降邊緣更新。", "對。正反器常在時脈邊緣更新。"],
      ["計數器", "計數器通常由多個正反器組成，用來計數脈波，還是只做濾波？", ["計數脈波", "計數", "脈波"], "計數脈波", "題意判讀錯", "計數器依時脈脈波改變二進位狀態。", "對。計數器用來計數脈波。"],
      ["循序混合題", "統測型判斷：4 個正反器最多可表示幾個不同狀態？", ["16", "十六"], "16", "公式錯", "n 個正反器可表示 2^n 個狀態，2^4 = 16。", "對。4 個正反器最多 16 個狀態。"],
    ],
  },
  {
    id: "ch20-555-pulse",
    title: "第二十章：555 定時器與脈波電路",
    goal: "分辨單穩態、無穩態、週期與頻率。",
    masteryKey: "timer555",
    steps: [
      ["555 功能", "555 定時器常用來產生延遲或脈波，還是只作光二極體？", ["延遲", "脈波", "定時"], "延遲或脈波", "題意判讀錯", "555 是常見的定時與脈波產生 IC。", "對。555 常用於定時與脈波。"],
      ["單穩態", "單穩態 555 觸發後輸出一段固定寬度脈波，還是永遠自由振盪？", ["固定寬度脈波", "單次脈波", "一段脈波"], "固定寬度脈波", "工作區判斷錯", "單穩態有一個穩定狀態，觸發後暫時翻轉再回來。", "對。單穩態輸出單次固定寬度脈波。"],
      ["無穩態", "無穩態 555 可連續產生方波，還是只能保持一個固定輸出？", ["方波", "連續脈波", "振盪"], "連續產生方波", "工作區判斷錯", "無穩態沒有穩定狀態，會自行振盪。", "對。無穩態 555 可產生連續方波。"],
      ["頻率週期", "脈波頻率 f 與週期 T 的關係是 f = 1/T，還是 f = T？", ["f=1/T", "1/T", "互為倒數"], "f = 1/T", "公式錯", "頻率是每秒幾次，週期是一次多久，兩者互為倒數。", "對。f = 1/T。"],
      ["555 混合題", "統測型判斷：若週期 T = 2ms，頻率約是多少？", ["500Hz", "500 Hz", "500"], "500Hz", "公式錯", "f = 1/0.002s = 500Hz。", "對。頻率約 500Hz。"],
    ],
  },
  {
    id: "ch21-adc-dac",
    title: "第二十一章：類比與數位轉換 ADC 與 DAC",
    goal: "理解 ADC、DAC、取樣與解析度。",
    masteryKey: "conversion",
    steps: [
      ["ADC", "ADC 是把類比訊號轉成數位資料，還是把數位轉回類比？", ["類比轉數位", "A轉D", "analog to digital"], "類比轉數位", "題意判讀錯", "A/D Converter 將連續量轉為數位碼。", "對。ADC 是類比轉數位。"],
      ["DAC", "DAC 是把數位資料轉成類比訊號，還是把二極體變成電容？", ["數位轉類比", "D轉A", "digital to analog"], "數位轉類比", "題意判讀錯", "D/A Converter 將數位碼轉為類比電壓或電流。", "對。DAC 是數位轉類比。"],
      ["取樣", "取樣是定時取得類比訊號瞬間值，還是永遠連續記錄無限多點？", ["定時取得", "取樣", "瞬間值"], "定時取得瞬間值", "題意判讀錯", "ADC 會以取樣頻率取得離散時間點資料。", "對。取樣是定時取得訊號值。"],
      ["解析度", "N 位元 ADC 可分成 2^N 個量化階，還是 N 個量化階？", ["2^N", "2的N次方"], "2^N", "公式錯", "每一位有 0/1 兩種可能，N 位共有 2^N 階。", "對。N 位元有 2^N 個量化階。"],
      ["轉換混合題", "統測型判斷：8 位元 ADC 有幾個量化階？", ["256", "二百五十六"], "256", "公式錯", "2^8 = 256。", "對。8 位元 ADC 有 256 階。"],
    ],
  },
  {
    id: "ch22-sensors-interface",
    title: "第二十二章：感測與介面基礎",
    goal: "認識光、溫度、聲音感測與基本驅動。",
    masteryKey: "sensor",
    steps: [
      ["感測器", "感測器的主要功能是把物理量轉成電訊號，還是把電阻全部短路？", ["物理量轉電訊號", "轉成電訊號", "感測"], "物理量轉成電訊號", "題意判讀錯", "感測器把光、溫度、聲音等轉為可量測電訊號。", "對。感測器把物理量轉成電訊號。"],
      ["光感測", "光敏電阻受光照增加時，電阻通常下降還是一定上升？", ["下降", "變小", "降低"], "下降", "特性曲線錯", "常見 LDR 受光越強電阻越低。", "對。光敏電阻受光增加時電阻通常下降。"],
      ["溫度感測", "NTC 熱敏電阻溫度上升時，電阻通常下降還是上升？", ["下降", "變小", "降低"], "下降", "特性曲線錯", "NTC 是負溫度係數，溫度越高電阻越低。", "對。NTC 升溫時電阻通常下降。"],
      ["驅動介面", "微控制器腳位若要驅動較大負載，常加電晶體作驅動，還是直接把負載短路？", ["電晶體", "驅動電晶體", "晶體管"], "加電晶體作驅動", "電路判斷錯", "電晶體可放大電流或作開關，保護控制腳位。", "對。較大負載常用電晶體驅動。"],
      ["介面混合題", "統測型判斷：繼電器線圈關斷時常並聯反向二極體，主要是吸收反電動勢還是發光？", ["吸收反電動勢", "保護", "飛輪二極體", "續流"], "吸收反電動勢", "極性錯", "線圈電流突然中斷會產生高壓，反向二極體提供續流路徑。", "對。反向二極體用來吸收反電動勢。"],
    ],
  },
  {
    id: "ch23-integrated-circuits",
    title: "第二十三章：電子電路整合題",
    goal: "混合判斷二極體、電晶體、OP 與數位邏輯電路功能。",
    masteryKey: "integration",
    steps: [
      ["整合策略", "遇到混合電子電路題，應先分區判斷功能，還是直接猜答案？", ["分區", "先分區", "判斷功能"], "先分區判斷功能", "題意判讀錯", "先辨認整流、放大、比較、邏輯等區塊，能降低混亂。", "對。混合題先分區判斷功能。"],
      ["二極體區塊", "看到二極體橋與濾波電容，通常先判斷為整流電源區塊，還是邏輯閘？", ["整流", "電源", "整流電源"], "整流電源區塊", "電路判斷錯", "橋式二極體加電容是典型 AC 轉 DC 電源前段。", "對。這通常是整流電源區塊。"],
      ["電晶體區塊", "電晶體接在負載旁並由小訊號控制，常先判斷為開關或驅動，還是 ADC 解析度？", ["開關", "驅動", "開關驅動"], "開關或驅動", "工作區判斷錯", "小訊號控制大負載是電晶體常見開關驅動用途。", "對。這常是開關或驅動區塊。"],
      ["OP 區塊", "OP 若沒有負回授且比較兩個電壓，常先判斷為比較器還是加法器？", ["比較器", "比較"], "比較器", "工作區判斷錯", "無線性負回授時，OP 常作比較器使用。", "對。這種 OP 區塊常是比較器。"],
      ["整合混合題", "統測型判斷：感測器訊號先進 OP 比較器，再進電晶體驅動 LED，LED 亮滅主要由類比比較結果控制還是由橋式整流控制？", ["類比比較結果", "比較器", "OP比較"], "類比比較結果控制", "題意判讀錯", "感測訊號先被比較器轉成高低狀態，再控制電晶體與 LED。", "對。LED 亮滅主要由比較器結果控制。"],
    ],
  },
  {
    id: "ch24-diagnosis",
    title: "第二十四章：全課程總診斷",
    goal: "整合公式、特性曲線、工作區、電路功能與統測型混合題。",
    masteryKey: "diagnosis",
    steps: [
      ["總診斷符號", "總診斷：BJT 的 β 主要表示 IC 與 IB 的比值，還是電容與電壓的比值？", ["IC與IB", "IC/IB", "電流增益"], "IC/IB", "符號錯", "β 是 BJT 電流增益，常用 IC/IB 表示。", "對。β 主要表示 IC/IB。"],
      ["總診斷工作區", "總診斷：二極體逆向未崩潰時通常近似開路，還是理想短路？", ["開路", "不導通"], "開路", "工作區判斷錯", "逆偏未崩潰時電流很小，可近似不導通。", "對。逆向未崩潰時通常近似開路。"],
      ["總診斷公式", "總診斷：反相 OP 放大器 Rin=5kΩ、Rf=20kΩ，增益是多少？", ["-4", "負4", "4倍反相"], "-4", "公式錯", "Av = -Rf/Rin = -20k/5k = -4。", "對。增益為 -4。"],
      ["總診斷邏輯", "總診斷：A=1、B=0，A OR B 輸出是多少？", ["1", "一"], "1", "邏輯化簡錯", "OR 只要任一輸入為 1，輸出就是 1。", "對。A OR B = 1。"],
      ["全課程混合題", "統測型總診斷：看到感測、比較器、電晶體驅動、LED 負載串在一起，應先判斷各區塊功能再追訊號，還是只背單一公式？", ["判斷各區塊", "追訊號", "分區分析"], "先判斷各區塊功能再追訊號", "題意判讀錯", "電子學整合題要先分區，再依訊號流向與工作區判斷。", "對。整合題應先分區判斷再追訊號。"],
    ],
  },
];

const COURSE = {
  title: "高職電子學互動式家教",
  videoResources: VIDEO_RESOURCES,
  chapters: CHAPTER_SPECS.map((chapter) => ({
    id: chapter.id,
    title: chapter.title,
    goal: chapter.goal,
    steps: chapter.steps.map(([concept, prompt, accepted, expected, errorType, hint, success]) => ({
      concept,
      teaching: buildPreviewLesson(chapter, concept, expected, hint),
      visual: buildVisualAid(chapter, concept, expected),
      prompt,
      accepted,
      expected,
      explanation: success,
      masteryKey: chapter.masteryKey,
      errorType,
      hint,
      success,
    })),
  })),
};

function createInitialState() {
  return {
    learnerMode: "teach",
    chapterIndex: 0,
    stepIndex: 0,
    completedChapters: [],
    mastery: Object.fromEntries(Object.keys(MASTERIES).map((key) => [key, 0])),
    errorCounts: {},
    wrongStreak: 0,
    answered: 0,
    correct: 0,
    transcript: [],
    activePracticeQuestion: null,
    completedVideoLessons: [],
    practiceIndexes: {
      practice: 0,
      exam: 0,
      remediation: 0,
    },
    practiceHistory: [],
  };
}

function setLearnerMode(state, mode) {
  const allowed = ["teach", "practice", "diagnostic"];
  return {
    ...cloneState(state),
    learnerMode: allowed.includes(mode) ? mode : "teach",
  };
}

function normalizeAnswer(answer) {
  return String(answer ?? "")
    .trim()
    .replace(/\s+/g, "")
    .replace(/[＊*]/g, "×")
    .replace(/[\/]/g, "÷")
    .toLowerCase();
}

function evaluateAnswer(expected, accepted, rawAnswer) {
  const normalizedAnswer = normalizeAnswer(rawAnswer);
  const normalizedAccepted = accepted.map(normalizeAnswer);
  const correct = normalizedAccepted.some((candidate) => {
    return normalizedAnswer === candidate || normalizedAnswer.includes(candidate);
  });

  return {
    correct,
    expected,
    normalizedAnswer,
  };
}

function getCurrentStep(course, state) {
  const chapter = course.chapters[state.chapterIndex];
  if (!chapter) return null;
  return chapter.steps[state.stepIndex] ?? null;
}

function getCurrentPrompt(course, state) {
  const step = getCurrentStep(course, state);
  if (!step) return "課程已完成。";
  if (state.learnerMode === "practice") {
    return `直接練習：你選擇先做題，我先不展開完整教學。\n練習題：${step.prompt}`;
  }
  if (state.learnerMode === "diagnostic") {
    return `先診斷：用一題快速判斷這個重點是否需要補教。\n診斷題：${step.prompt}`;
  }
  return formatTeachingPrompt(step);
}

function getQuestionBankSummary(course) {
  const banks = createQuestionBanks(course);
  return {
    practice: banks.practice.length,
    exam: banks.exam.length,
    remediation: banks.remediation.length,
    total: banks.practice.length + banks.exam.length + banks.remediation.length,
  };
}

function getCurrentVideoResources(course, state) {
  const chapter = course.chapters[state.chapterIndex];
  const step = getCurrentStep(course, state);
  if (!chapter || !step) return [];

  const resources = (course.videoResources ?? []).filter((resource) => !isPlaylistUrl(resource.url));
  const conceptMatches = resources.filter((resource) => resource.concepts?.includes(step.concept));
  const broaderMatches = resources.filter((resource) => {
    const chapterMatch = resource.chapterIds?.includes(chapter.id);
    const masteryMatch = resource.masteryKeys?.includes(step.masteryKey);
    return (chapterMatch || masteryMatch) && !conceptMatches.includes(resource);
  });

  return uniqueResources([...conceptMatches, ...broaderMatches]).slice(0, 3).map(withVideoEmbedUrl);
}

function getCurrentLessonGate(course, state) {
  const chapter = course.chapters[state.chapterIndex];
  const step = getCurrentStep(course, state);
  if (!chapter || !step) {
    return { key: "course-complete", requiresVideo: false, completed: true, videos: [] };
  }

  const key = `${chapter.id}:${state.stepIndex}:${step.concept}`;
  const videos = getCurrentVideoResources(course, state);
  const requiresVideo = videos.some((video) => Boolean(video.embedUrl));
  const completed = !requiresVideo || (state.completedVideoLessons ?? []).includes(key);

  return { key, requiresVideo, completed, videos };
}

function markCurrentLessonVideoComplete(course, state) {
  const gate = getCurrentLessonGate(course, state);
  const nextState = cloneState(state);
  if (!nextState.completedVideoLessons.includes(gate.key)) {
    nextState.completedVideoLessons.push(gate.key);
  }
  return nextState;
}

function startPracticeQuestion(course, state, mode) {
  const banks = createQuestionBanks(course);
  const selectedMode = banks[mode] ? mode : "practice";
  const nextState = cloneState(state);
  const question = selectPracticeQuestion(banks, nextState, selectedMode);
  nextState.activePracticeQuestion = question;
  nextState.practiceIndexes[selectedMode] = ((nextState.practiceIndexes[selectedMode] ?? 0) + 1) % banks[selectedMode].length;

  return {
    state: nextState,
    question,
    messages: [`${getPracticeModeLabel(selectedMode)}：${question.prompt}`],
  };
}

function handlePracticeAnswer(course, state, answer) {
  const question = state.activePracticeQuestion;
  if (!question) {
    return {
      state,
      evaluation: { correct: false, expected: "沒有進行中的題庫題目", errorType: "流程錯" },
      messages: ["目前沒有進行中的題庫題目，請先選擇題庫練習、統測型題或錯題回補。"],
    };
  }

  const evaluation = {
    ...evaluateAnswer(question.expected, question.accepted, answer),
    errorType: question.errorType,
    concept: question.concept,
  };
  const nextState = cloneState(state);
  nextState.answered += 1;
  nextState.activePracticeQuestion = null;
  nextState.practiceHistory.push({
    id: question.id,
    mode: question.mode,
    chapter: question.chapterTitle,
    concept: question.concept,
    prompt: question.prompt,
    answer,
    correct: evaluation.correct,
    errorType: evaluation.correct ? null : question.errorType,
    at: new Date().toISOString(),
  });

  if (evaluation.correct) {
    nextState.correct += 1;
    nextState.wrongStreak = 0;
    nextState.mastery[question.masteryKey] = Math.min(4, (nextState.mastery[question.masteryKey] ?? 0) + 1);
    return {
      state: nextState,
      evaluation,
      messages: [`對。${question.success}`],
    };
  }

  nextState.wrongStreak += 1;
  nextState.errorCounts[question.errorType] = (nextState.errorCounts[question.errorType] ?? 0) + 1;
  return {
    state: nextState,
    evaluation,
    messages: [
      `這題錯在「${question.errorType}」。${question.hint}`,
      buildRemedialMessage(question),
      `相似練習：${question.prompt}`,
    ],
  };
}

function handleStudentAnswer(course, state, answer) {
  const step = getCurrentStep(course, state);
  if (!step) {
    return {
      state,
      evaluation: { correct: true, expected: "課程完成", errorType: null },
      messages: ["課程已完成，可以進行複習或重置進度。"],
    };
  }

  const evaluation = {
    ...evaluateAnswer(step.expected, step.accepted, answer),
    errorType: step.errorType,
    concept: step.concept,
  };

  const nextState = cloneState(state);
  nextState.answered += 1;
  nextState.transcript.push({
    chapter: course.chapters[state.chapterIndex].title,
    concept: step.concept,
    prompt: step.prompt,
    answer,
    correct: evaluation.correct,
    errorType: evaluation.correct ? null : step.errorType,
    at: new Date().toISOString(),
  });

  const messages = [];

  if (evaluation.correct) {
    nextState.correct += 1;
    nextState.wrongStreak = 0;
    nextState.mastery[step.masteryKey] = Math.min(4, (nextState.mastery[step.masteryKey] ?? 0) + 1);
    messages.push(step.success);
    advanceState(course, nextState, messages);
  } else {
    nextState.wrongStreak += 1;
    nextState.errorCounts[step.errorType] = (nextState.errorCounts[step.errorType] ?? 0) + 1;
    messages.push(`這裡錯在「${step.errorType}」。${step.hint}`);
    messages.push(buildRemedialMessage(step));
    if (nextState.wrongStreak >= 2) {
      messages.push(`完整示範：標準答案是「${step.expected}」。我們先不要往下，請你再回答一次同一題。`);
    } else {
      messages.push(`確認小題：先用一句話回答，這題的關鍵判斷是「${step.expected}」嗎？請再試一次同一題。`);
    }
  }

  return {
    state: nextState,
    evaluation,
    messages,
  };
}

function summarizeProgress(course, state) {
  const completedChapters = state.completedChapters.length;
  const totalChapters = course.chapters.length;
  const totalSteps = course.chapters.reduce((sum, chapter) => sum + chapter.steps.length, 0);
  const completedSteps = course.chapters
    .slice(0, state.chapterIndex)
    .reduce((sum, chapter) => sum + chapter.steps.length, 0) + state.stepIndex;
  const percent = Math.floor((completedSteps / totalSteps) * 100);
  const accuracy = state.answered === 0 ? 0 : Math.round((state.correct / state.answered) * 100);

  return {
    completedChapters,
    totalChapters,
    completedSteps,
    totalSteps,
    percent,
    accuracy,
    masteryLabels: MASTERIES,
    currentChapter: course.chapters[state.chapterIndex]?.title ?? "課程完成",
    currentGoal: course.chapters[state.chapterIndex]?.goal ?? "複習與保持熟練",
  };
}

function advanceState(course, state, messages) {
  const chapter = course.chapters[state.chapterIndex];
  const nextStepIndex = state.stepIndex + 1;

  if (nextStepIndex < chapter.steps.length) {
    state.stepIndex = nextStepIndex;
    messages.push(getCurrentPrompt(course, state));
    return;
  }

  if (!state.completedChapters.includes(chapter.id)) {
    state.completedChapters.push(chapter.id);
  }

  const nextChapterIndex = state.chapterIndex + 1;
  if (nextChapterIndex < course.chapters.length) {
    state.chapterIndex = nextChapterIndex;
    state.stepIndex = 0;
    messages.push(`本章通過。現在進入：${course.chapters[nextChapterIndex].title}`);
    messages.push(getCurrentPrompt(course, state));
  } else {
    state.chapterIndex = course.chapters.length;
    state.stepIndex = 0;
    messages.push("全課程複習已完成。你可以匯出進度，或重置後重新練習。");
  }
}

function cloneState(state) {
  return {
    ...state,
    completedChapters: [...state.completedChapters],
    mastery: { ...state.mastery },
    errorCounts: { ...state.errorCounts },
    transcript: [...state.transcript],
    activePracticeQuestion: state.activePracticeQuestion ? { ...state.activePracticeQuestion } : null,
    completedVideoLessons: [...(state.completedVideoLessons ?? [])],
    practiceIndexes: { practice: 0, exam: 0, remediation: 0, ...(state.practiceIndexes ?? {}) },
    practiceHistory: [...(state.practiceHistory ?? [])],
  };
}

function withVideoEmbedUrl(resource) {
  return {
    ...resource,
    embedUrl: getYouTubeEmbedUrl(resource.url),
  };
}

function getYouTubeEmbedUrl(url) {
  const watchId = String(url).match(/[?&]v=([A-Za-z0-9_-]{11})/)?.[1];
  if (watchId) return `https://www.youtube.com/embed/${watchId}`;

  const shortId = String(url).match(/youtu\.be\/([A-Za-z0-9_-]{11})/)?.[1];
  if (shortId) return `https://www.youtube.com/embed/${shortId}`;

  const playlistId = String(url).match(/[?&]list=([A-Za-z0-9_-]+)/)?.[1];
  if (playlistId) return `https://www.youtube.com/embed/videoseries?list=${playlistId}`;

  return "";
}

function isPlaylistUrl(url) {
  const text = String(url);
  return text.includes("/playlist?") || text.includes("/embed/videoseries?");
}

function uniqueResources(resources) {
  const seen = new Set();
  return resources.filter((resource) => {
    if (seen.has(resource.url)) return false;
    seen.add(resource.url);
    return true;
  });
}

function createQuestionBanks(course) {
  return {
    practice: course.chapters.flatMap((chapter, chapterIndex) => {
      return chapter.steps.slice(0, 3).map((step, stepIndex) => {
        return toBankQuestion("practice", chapter, chapterIndex, step, stepIndex, `題庫練習：${step.prompt}`);
      });
    }),
    exam: course.chapters.map((chapter, chapterIndex) => {
      const step = chapter.steps[chapter.steps.length - 1];
      return toBankQuestion("exam", chapter, chapterIndex, step, 0, `統測型題：${chapter.title.replace(/^第.+?：/, "")}。${step.prompt}`);
    }),
    remediation: course.chapters.map((chapter, chapterIndex) => {
      const step = chapter.steps.find((item) => item.errorType.includes("錯")) ?? chapter.steps[0];
      return toBankQuestion("remediation", chapter, chapterIndex, step, 0, `錯題回補：${step.prompt}`);
    }),
  };
}

function toBankQuestion(mode, chapter, chapterIndex, step, stepIndex, prompt) {
  return {
    id: `${mode}-${chapter.id}-${stepIndex + 1}`,
    mode,
    chapterId: chapter.id,
    chapterTitle: chapter.title,
    chapterIndex,
    concept: step.concept,
    prompt,
    teaching: step.teaching,
    visual: step.visual ? { ...step.visual } : null,
    accepted: [...step.accepted],
    expected: step.expected,
    masteryKey: step.masteryKey,
    errorType: step.errorType,
    hint: step.hint,
    success: step.success,
  };
}

function selectPracticeQuestion(banks, state, mode) {
  if (mode !== "remediation") {
    const index = state.practiceIndexes?.[mode] ?? 0;
    return { ...banks[mode][index % banks[mode].length] };
  }

  const topErrorType = Object.entries(state.errorCounts ?? {}).sort((a, b) => b[1] - a[1])[0]?.[0];
  const matched = topErrorType ? banks.remediation.find((question) => question.errorType === topErrorType) : null;
  if (matched) return { ...matched };

  const index = state.practiceIndexes?.remediation ?? 0;
  return { ...banks.remediation[index % banks.remediation.length] };
}

function getPracticeModeLabel(mode) {
  if (mode === "exam") return "統測型題";
  if (mode === "remediation") return "錯題回補";
  return "題庫練習";
}

function buildPreviewLesson(chapter, concept, expected, hint) {
  return `課程重點：${concept}\n` +
    `基本概念：${chapter.goal}\n` +
    `原理說明：${hint}\n` +
    `預習整理：這一小節先掌握「${expected}」這個判斷，再用下一題確認是否理解。`;
}

function formatTeachingPrompt(step) {
  const visualBlock = step.visual ? `\n${step.visual.caption}\n${step.visual.markup}` : "";
  return `${step.teaching}${visualBlock}\n\n互動問題：${step.prompt}`;
}

function buildRemedialMessage(step) {
  const visualLine = step.visual ? `\n${step.visual.caption}\n${step.visual.markup}` : "";
  return `補救教學：先回到「${step.concept}」。${step.hint}${visualLine}\n` +
    `引導例題：如果題目問這個重點，先找關鍵字，再對照「${step.expected}」。\n` +
    `相似練習：請先確認這個原理，再回到原題作答。`;
}

function buildVisualAid(chapter, concept, expected) {
  const lower = `${chapter.title} ${chapter.goal} ${concept}`.toLowerCase();
  if (lower.includes("二極體") || lower.includes("pn") || lower.includes("整流") || lower.includes("稽納") || lower.includes("led")) {
    return {
      caption: `示意圖：${concept} 的電流方向與極性判斷。`,
      markup: `<figure class="visual-aid" role="img" aria-label="${concept} 二極體示意圖"><svg viewBox="0 0 260 92" xmlns="http://www.w3.org/2000/svg"><path d="M20 46h70" stroke="currentColor" stroke-width="5"/><path d="M90 22l52 24-52 24z" fill="none" stroke="currentColor" stroke-width="5"/><path d="M150 22v48" stroke="currentColor" stroke-width="5"/><path d="M150 46h90" stroke="currentColor" stroke-width="5"/><text x="28" y="24">P / A</text><text x="184" y="24">N / K</text><text x="82" y="86">順向較容易導通</text></svg><figcaption>看圖先分清楚陽極、陰極與電流方向。</figcaption></figure>`,
    };
  }
  if (lower.includes("bjt") || lower.includes("電晶體") || lower.includes("偏壓") || lower.includes("放大")) {
    return {
      caption: `示意圖：${concept} 的端子與訊號關係。`,
      markup: `<figure class="visual-aid" role="img" aria-label="${concept} BJT 端子示意圖"><svg viewBox="0 0 260 110" xmlns="http://www.w3.org/2000/svg"><circle cx="130" cy="54" r="34" fill="none" stroke="currentColor" stroke-width="4"/><path d="M70 54h46M130 20v-18M130 88v20M130 88l24 12" stroke="currentColor" stroke-width="4" fill="none"/><text x="54" y="48">B</text><text x="136" y="18">C</text><text x="136" y="106">E</text><text x="92" y="104">先看工作區，再判斷放大或開關</text></svg><figcaption>看圖先辨認 B、C、E，再判斷電流與工作區。</figcaption></figure>`,
    };
  }
  if (lower.includes("fet") || lower.includes("mosfet") || lower.includes("jfet")) {
    return {
      caption: `示意圖：${concept} 的閘極控制通道。`,
      markup: `<figure class="visual-aid" role="img" aria-label="${concept} FET 示意圖"><svg viewBox="0 0 260 110" xmlns="http://www.w3.org/2000/svg"><path d="M145 18v74M170 18v74M170 28h50M170 82h50M78 55h54" stroke="currentColor" stroke-width="5" fill="none"/><text x="56" y="50">G</text><text x="224" y="32">D</text><text x="224" y="86">S</text><text x="56" y="104">閘極電壓控制通道導通程度</text></svg><figcaption>看圖先辨認 G、D、S，重點是電壓控制。</figcaption></figure>`,
    };
  }
  if (lower.includes("op") || lower.includes("運算放大器") || lower.includes("比較器") || lower.includes("積分器") || lower.includes("微分器")) {
    return {
      caption: `示意圖：${concept} 的 OP 輸入與輸出。`,
      markup: `<figure class="visual-aid" role="img" aria-label="${concept} OP 示意圖"><svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg"><path d="M92 24v72l80-36z" fill="none" stroke="currentColor" stroke-width="5"/><path d="M40 42h52M40 78h52M172 60h54" stroke="currentColor" stroke-width="5"/><text x="70" y="38">+</text><text x="72" y="84">-</text><text x="226" y="64">Vo</text><text x="62" y="112">負回授時先用虛短、虛地</text></svg><figcaption>看圖先分清楚 +、- 輸入端與輸出端。</figcaption></figure>`,
    };
  }
  if (lower.includes("邏輯") || lower.includes("mux") || lower.includes("正反器") || lower.includes("555") || lower.includes("adc") || lower.includes("dac")) {
    return {
      caption: `表格示意：${concept} 的輸入輸出關係。`,
      markup: `<figure class="visual-aid" role="img" aria-label="${concept} 輸入輸出表"><svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg"><rect x="46" y="18" width="168" height="84" fill="none" stroke="currentColor" stroke-width="4"/><path d="M46 46h168M46 74h168M102 18v84M158 18v84" stroke="currentColor" stroke-width="3"/><text x="65" y="38">A</text><text x="121" y="38">B</text><text x="174" y="38">Y</text><text x="61" y="66">0</text><text x="119" y="66">1</text><text x="176" y="66">${String(expected).slice(0, 3)}</text><text x="48" y="116">先看輸入，再判斷輸出</text></svg><figcaption>用表格把輸入條件與輸出結果對齊。</figcaption></figure>`,
    };
  }
  return {
    caption: `示意圖：${concept} 的重點關係。`,
    markup: `<figure class="visual-aid" role="img" aria-label="${concept} 重點關係圖"><svg viewBox="0 0 260 100" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="30" width="76" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="4"/><path d="M104 50h48" stroke="currentColor" stroke-width="4"/><path d="M140 38l16 12-16 12" fill="none" stroke="currentColor" stroke-width="4"/><rect x="158" y="30" width="78" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="4"/><text x="42" y="55">條件</text><text x="174" y="55">結果</text></svg><figcaption>先看條件，再判斷結果。</figcaption></figure>`,
  };
}


window.TutorEngine = {
  COURSE,
  createInitialState,
  setLearnerMode,
  normalizeAnswer,
  evaluateAnswer,
  getCurrentStep,
  getCurrentPrompt,
  getCurrentVideoResources,
  getCurrentLessonGate,
  markCurrentLessonVideoComplete,
  getQuestionBankSummary,
  startPracticeQuestion,
  handlePracticeAnswer,
  handleStudentAnswer,
  summarizeProgress,
};
})();
