const MASTERIES = {
  symbols: "符號",
  ohmsLaw: "歐姆定律",
  unitConversion: "單位換算",
  power: "電功率",
  series: "串聯",
  parallel: "並聯",
  mixed: "混合電路",
  dcSource: "直流電源",
  kirchhoff: "KVL/KCL",
  bridge: "電橋與轉換",
  nodeMesh: "節點與迴路",
  theorems: "網路定理",
  capacitor: "電容",
  inductor: "電感",
  transient: "暫態",
  acBasics: "交流基礎",
  acCircuits: "交流電路",
  acPower: "交流功率",
  powerSystems: "電源系統",
  diagnosis: "總診斷",
};

const VIDEO_RESOURCES = [
  {
    title: "高中基本電學_電學基礎理論_電流_PART A",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=yDrYJrWWfc0",
    concepts: ["電流符號"],
    masteryKeys: ["symbols"],
    chapterIds: ["ch1-basics"],
  },
  {
    title: "高中基本電學_電學基礎理論_電流_PART B",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=yX5MYFl2Vlw",
    concepts: ["電流符號"],
    masteryKeys: ["symbols"],
    chapterIds: ["ch1-basics"],
  },
  {
    title: "高中基本電學_電學基礎理論_電壓_PART A",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=Xhd_YWy0TKo",
    concepts: ["電壓符號"],
    masteryKeys: ["symbols"],
    chapterIds: ["ch1-basics"],
  },
  {
    title: "高中基本電學_電學基礎理論_電壓_PART B",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=QNq5KUsMC4Q",
    concepts: ["電壓符號"],
    masteryKeys: ["symbols"],
    chapterIds: ["ch1-basics"],
  },
  {
    title: "高中基本電學_電學基礎理論_電的特性_PART C",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=OAwKEGDa4-I",
    concepts: ["電阻符號", "電阻概念"],
    masteryKeys: ["symbols"],
    chapterIds: ["ch1-basics"],
  },
  {
    title: "高中基本電學_電學基礎理論_電的單位_PART A",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=Oqnh182xfDg",
    concepts: ["mA 換 A", "kΩ 換 Ω", "mV 換 V"],
    masteryKeys: ["unitConversion"],
    chapterIds: ["ch3-units"],
  },
  {
    title: "高中基本電學_電學基礎理論_電的單位_PART B",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=OXtpXczD5AA",
    concepts: ["mA 換 A", "kΩ 換 Ω", "mV 換 V", "單位換算後代入"],
    masteryKeys: ["unitConversion"],
    chapterIds: ["ch3-units"],
  },
  {
    title: "高中基本電學_電學基礎理論_電功率_PART A",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=AsYKEFYRNYk",
    concepts: ["功率符號", "功率單位", "P = VI"],
    masteryKeys: ["power"],
    chapterIds: ["ch4-power"],
  },
  {
    title: "高中基本電學_電學基礎理論_電功率_PART B",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=GOAqeMwiiYo",
    concepts: ["P = VI", "P = I²R"],
    masteryKeys: ["power"],
    chapterIds: ["ch4-power"],
  },
  {
    title: "高中基本電學_電學基礎理論_電功率_PART C",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=QJF2Zkz76kc",
    concepts: ["功率單位", "P = VI", "P = I²R"],
    masteryKeys: ["power"],
    chapterIds: ["ch4-power"],
  },
  {
    title: "高中基本電學_直流網路分析_節點電壓法_part A",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=57f85pGbiwQ",
    concepts: ["節點電壓法核心", "參考節點", "電流表示", "節點方程"],
    masteryKeys: ["nodeMesh"],
    chapterIds: ["ch12-node-voltage"],
  },
  {
    title: "高中基本電學_直流網路分析_節點電壓法_part B",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=qvuIttVT_eM",
    concepts: ["電流表示", "節點方程"],
    masteryKeys: ["nodeMesh"],
    chapterIds: ["ch12-node-voltage"],
  },
  {
    title: "高中基本電學_直流網路分析_節點電壓法_part C",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=rWzeSP54CZI",
    concepts: ["節點方程"],
    masteryKeys: ["nodeMesh"],
    chapterIds: ["ch12-node-voltage"],
  },
  {
    title: "高中基本電學_直流網路分析_迴路電流法_part A",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=Q9u89Sgvw-c",
    concepts: ["迴路電流法核心", "網目電流方向", "單迴路計算", "共用電阻"],
    masteryKeys: ["nodeMesh"],
    chapterIds: ["ch13-mesh-current"],
  },
  {
    title: "高中基本電學_直流網路分析_迴路電流法_part B",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=LfMD_MELg4U",
    concepts: ["單迴路計算", "共用電阻"],
    masteryKeys: ["nodeMesh"],
    chapterIds: ["ch13-mesh-current"],
  },
  {
    title: "高中基本電學_直流網路分析_迴路電流法_part C",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=OHU0nyxQfa4",
    concepts: ["共用電阻"],
    masteryKeys: ["nodeMesh"],
    chapterIds: ["ch13-mesh-current"],
  },
  {
    title: "高中基本電學_直流網路分析_迴路電流法_part D",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=27o78ZWk0So",
    concepts: ["共用電阻"],
    masteryKeys: ["nodeMesh"],
    chapterIds: ["ch13-mesh-current"],
  },
  {
    title: "高中基本電學_直流網路分析_重疊定理_PART A",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=0qdghn82T40",
    concepts: ["重疊定理適用", "電壓源關閉", "電流源關閉", "結果加總"],
    masteryKeys: ["theorems"],
    chapterIds: ["ch14-superposition"],
  },
  {
    title: "高中基本電學_直流網路分析_重疊定理_PART B",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=KXRZ-QJU6-k",
    concepts: ["結果加總"],
    masteryKeys: ["theorems"],
    chapterIds: ["ch14-superposition"],
  },
  {
    title: "高中基本電學_直流網路分析_重疊定理_PART C",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=lwtW-dfjdJ8",
    concepts: ["結果加總"],
    masteryKeys: ["theorems"],
    chapterIds: ["ch14-superposition"],
  },
  {
    title: "高中基本電學_直流網路分析_重疊定理_PART D",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=aGXLhaFQSFY",
    concepts: ["結果加總"],
    masteryKeys: ["theorems"],
    chapterIds: ["ch14-superposition"],
  },
  {
    title: "高中基本電學_直流網路分析_戴維寧定理_PART A",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=877-oUAVSZo",
    concepts: ["戴維寧等效", "Vth 意義", "Rth 求法"],
    masteryKeys: ["theorems"],
    chapterIds: ["ch15-thevenin"],
  },
  {
    title: "高中基本電學_直流網路分析_戴維寧定理_PART B",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=l75m7rc9A1c",
    concepts: ["Vth 意義", "Rth 求法"],
    masteryKeys: ["theorems"],
    chapterIds: ["ch15-thevenin"],
  },
  {
    title: "高中基本電學_直流網路分析_戴維寧定理_PART C",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=vUvpvYAcbDs",
    concepts: ["戴維寧等效", "Rth 求法"],
    masteryKeys: ["theorems"],
    chapterIds: ["ch15-thevenin"],
  },
  {
    title: "高中基本電學_直流網路分析_最大功率轉移定理_PART A",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=SiU8ERqM_Fk",
    concepts: ["最大功率傳輸"],
    masteryKeys: ["theorems"],
    chapterIds: ["ch15-thevenin"],
  },
  {
    title: "高中基本電學_直流網路分析_最大功率轉移定理_PART B",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=aif4ruuo46M",
    concepts: ["最大功率傳輸"],
    masteryKeys: ["theorems"],
    chapterIds: ["ch15-thevenin"],
  },
  {
    title: "高中基本電學_直流網路分析_戴維寧與諾頓等效電路_PART A",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=TEoDnZ5vx48",
    concepts: ["諾頓等效", "In 意義", "Rn 與 Rth"],
    masteryKeys: ["theorems"],
    chapterIds: ["ch16-norton"],
  },
  {
    title: "高中基本電學_直流網路分析_戴維寧與諾頓等效電路_PART B",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=PpTAS2GXpsI",
    concepts: ["諾頓等效", "In 意義", "Rn 與 Rth"],
    masteryKeys: ["theorems"],
    chapterIds: ["ch16-norton"],
  },
  {
    title: "高中基本電學_直流網路分析_戴維寧與諾頓等效電路_PART C",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=Lclsk6LiYtE",
    concepts: ["In 意義", "Rn 與 Rth"],
    masteryKeys: ["theorems"],
    chapterIds: ["ch16-norton"],
  },
  {
    title: "高中基本電學_直流網路分析_戴維寧與諾頓等效電路_PART D",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=_MuOuS5Pi5I",
    concepts: ["戴維寧諾頓轉換", "Rn 與 Rth"],
    masteryKeys: ["theorems"],
    chapterIds: ["ch16-norton"],
  },
  {
    title: "高中基本電學：歐姆定律範例練習",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=Czyarzc0Z38",
    masteryKeys: ["ohmsLaw"],
    chapterIds: ["ch2-ohms-law"],
  },
  {
    title: "高中基本電學_電阻_歐姆定律",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=inSGFV-z-xc",
    concepts: ["求 V", "求 I", "求 R", "歐姆定律代入"],
    masteryKeys: ["ohmsLaw"],
    chapterIds: ["ch2-ohms-law"],
  },
  {
    title: "高中基本電學_電阻_電阻與電導範例練習",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=5G3jdorHLL0",
    concepts: ["電阻與電導", "電導單位"],
    masteryKeys: ["ohmsLaw", "symbols"],
    chapterIds: ["ch2-ohms-law"],
  },
  {
    title: "高中基本電學_電阻_色碼電阻器",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=1DKjkxlxqxc",
    concepts: ["電阻色碼", "色碼容許誤差"],
    masteryKeys: ["ohmsLaw"],
    chapterIds: ["ch2-ohms-law"],
  },
  {
    title: "高中基本電學實習_電阻之識別及量測",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=JPasXGPA3Fw",
    concepts: ["電阻色碼", "三用電表量測"],
    masteryKeys: ["ohmsLaw", "diagnosis"],
    chapterIds: ["ch2-ohms-law", "ch24-power-safety-diagnosis"],
  },
  {
    title: "均一教育平台：歐姆定律素養動畫",
    source: "均一教育平台",
    url: "https://www.junyiacademy.org/videos/arFkkxcaDig",
    masteryKeys: ["ohmsLaw"],
    chapterIds: ["ch2-ohms-law"],
  },
  {
    title: "高中基本電學_串並聯電路_3-1 電路組成基本型態",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=bde1bGlsrrM",
    concepts: ["通路斷路短路", "串聯判斷", "並聯判斷", "混合電路原則"],
    masteryKeys: ["series", "parallel", "mixed"],
    chapterIds: ["ch5-series", "ch6-parallel", "ch7-mixed"],
  },
  {
    title: "高中基本電學_串並聯電路_3-2 串聯電路定義及特性",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=cMhgqusWOFw",
    concepts: ["串聯判斷", "串聯電流", "串聯總電阻", "串聯總電流"],
    masteryKeys: ["series"],
    chapterIds: ["ch5-series"],
  },
  {
    title: "高中基本電學_串並聯電路_3-4 分壓定則",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=IKgLnlSA8vw",
    concepts: ["串聯分壓"],
    masteryKeys: ["series"],
    chapterIds: ["ch5-series"],
  },
  {
    title: "高中基本電學_串並聯電路_3-8 分流定則",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=hPKam2F2Jvo",
    concepts: ["並聯分流"],
    masteryKeys: ["parallel"],
    chapterIds: ["ch6-parallel"],
  },
  {
    title: "基本電學：元件的串聯與並聯",
    source: "角落的尾刀",
    url: "https://www.youtube.com/watch?v=_zZpf7cd5C0",
    masteryKeys: ["series", "parallel", "mixed"],
    chapterIds: ["ch5-series", "ch6-parallel", "ch7-mixed"],
  },
  {
    title: "高中基本電學：KCL 克希荷夫電流定律",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=11QeMziomc0",
    masteryKeys: ["kirchhoff"],
    chapterIds: ["ch10-kvl-kcl"],
  },
  {
    title: "高中基本電學_串並聯電路_電壓源及電流源",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=MmIn-c00jAs",
    concepts: ["電壓源", "電流源", "源等效轉換", "內阻判斷"],
    masteryKeys: ["dcSource"],
    chapterIds: ["ch9-sources"],
  },
  {
    title: "高中基本電學_串並聯電路_惠斯登電橋",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=W5qNKQbFKYE",
    concepts: ["惠斯登平衡", "電橋比例"],
    masteryKeys: ["bridge"],
    chapterIds: ["ch11-bridge-y-delta"],
  },
  {
    title: "高中基本電學實習_直流電路_惠斯登電橋",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=2-oB26loO2k",
    concepts: ["電橋比例", "惠斯登平衡"],
    masteryKeys: ["bridge"],
    chapterIds: ["ch11-bridge-y-delta"],
  },
  {
    title: "高中基本電學_串並聯電路_Y形-Δ形互換法_PART A",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=s9Q-LnVJLfk",
    concepts: ["Y-△ 用途", "轉換後化簡", "Y-△ 公式判斷"],
    masteryKeys: ["bridge"],
    chapterIds: ["ch11-bridge-y-delta"],
  },
  {
    title: "高中基本電學_串並聯電路_Y形-Δ形互換法_PART B",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=F7Wvfpgv2o8",
    concepts: ["Y-△ 公式判斷", "轉換後化簡"],
    masteryKeys: ["bridge"],
    chapterIds: ["ch11-bridge-y-delta"],
  },
  {
    title: "高中基本電學：RC 與 RL 混合電路暫態",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=29ftamPQY3I",
    masteryKeys: ["transient"],
    chapterIds: ["ch19-transient"],
  },
  {
    title: "高中基本電學：R-L-C 串並聯電路",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=sWBK9-W_KE0",
    masteryKeys: ["acCircuits", "acPower"],
    chapterIds: ["ch23-rlc-power-resonance"],
  },
  {
    title: "高中基本電學_電容與靜電_電容器種類規格與標示",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=iXoLslxtvzQ",
    concepts: ["電容功能", "電容單位", "電容並聯"],
    masteryKeys: ["capacitor"],
    chapterIds: ["ch17-capacitor"],
  },
  {
    title: "高中基本電學_電容與靜電_電場強度",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=8KI1RD3Z-zk",
    concepts: ["電場與電位", "Q = CV"],
    masteryKeys: ["capacitor"],
    chapterIds: ["ch17-capacitor"],
  },
  {
    title: "高中基本電學_電感與電磁_電感器",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=65cfVxuNC70",
    concepts: ["電感功能", "電感單位", "L 串聯"],
    masteryKeys: ["inductor"],
    chapterIds: ["ch18-inductor"],
  },
  {
    title: "高中基本電學_電感與電磁_磁的基本觀念",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=b6pIfQnERaQ",
    concepts: ["磁場與磁通"],
    masteryKeys: ["inductor"],
    chapterIds: ["ch18-inductor"],
  },
  {
    title: "高中基本電學_電感與電磁_法拉第電磁感應",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=ADEjijXllro",
    concepts: ["電磁感應"],
    masteryKeys: ["inductor"],
    chapterIds: ["ch18-inductor"],
  },
  {
    title: "高中基本電學_直流暫態_RC 充電進階例題",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=9Uz69Gj1BF4",
    concepts: ["RC 時間常數", "暫態意義"],
    masteryKeys: ["transient"],
    chapterIds: ["ch19-transient"],
  },
  {
    title: "高中基本電學_直流暫態_RC 放電公式解析",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=-N7IQEDxVJo",
    concepts: ["RC 充放電公式"],
    masteryKeys: ["transient"],
    chapterIds: ["ch19-transient"],
  },
  {
    title: "基本電學_直流暫態_RL 充電暫態",
    source: "莊凱喬電學講堂",
    url: "https://www.youtube.com/watch?v=N11yPxvbFfE",
    concepts: ["RL 時間常數", "五倍時間常數"],
    masteryKeys: ["transient"],
    chapterIds: ["ch19-transient"],
  },
  {
    title: "高中基本電學_交流電_頻率與週期",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=SoP7U02FsiE",
    concepts: ["頻率週期", "交流波形"],
    masteryKeys: ["acBasics"],
    chapterIds: ["ch20-ac-wave"],
  },
  {
    title: "高中基本電學_交流電_波形正弦波",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=DJhwz8XExz4",
    concepts: ["交流波形", "最大值換有效值"],
    masteryKeys: ["acBasics"],
    chapterIds: ["ch20-ac-wave"],
  },
  {
    title: "基本電學_交流電_有效值與正弦波",
    source: "角落的尾刀",
    url: "https://www.youtube.com/watch?v=VPORduqMluM",
    concepts: ["有效值", "最大值換有效值"],
    masteryKeys: ["acBasics"],
    chapterIds: ["ch20-ac-wave"],
  },
  {
    title: "高中基本電學_交流電_交流波形的相位",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=EzGmZmx5iIY",
    concepts: ["相位", "相量"],
    masteryKeys: ["acBasics"],
    chapterIds: ["ch21-phasor"],
  },
  {
    title: "高中基本電學_基本交流電路_RLC 交流特性與純電阻",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=BP2W7WRkevs",
    concepts: ["純電阻相位", "感抗", "容抗"],
    masteryKeys: ["acCircuits"],
    chapterIds: ["ch21-phasor", "ch22-ac-rc-rl"],
  },
  {
    title: "基本電學_交流電路_RL 串聯電路",
    source: "角落的尾刀",
    url: "https://www.youtube.com/watch?v=uFVfpolCqKo",
    concepts: ["交流 RL", "阻抗合成"],
    masteryKeys: ["acCircuits"],
    chapterIds: ["ch22-ac-rc-rl"],
  },
  {
    title: "高中基本電學實習_交流電路_RC 並聯交流電路",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=sGw5RYeG8Vw",
    concepts: ["交流 RC"],
    masteryKeys: ["acCircuits"],
    chapterIds: ["ch22-ac-rc-rl"],
  },
  {
    title: "高中基本電學_基本交流電路_R-L-C 串聯電路電壓與電流解析",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=lpPvkvKbsY8",
    concepts: ["RLC 串聯阻抗"],
    masteryKeys: ["acCircuits"],
    chapterIds: ["ch23-rlc-power-resonance"],
  },
  {
    title: "高中基本電學_交流電功率_瞬間功率",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=XQbVZ2-tx3w",
    concepts: ["交流功率"],
    masteryKeys: ["acPower"],
    chapterIds: ["ch23-rlc-power-resonance"],
  },
  {
    title: "高中基本電學_交流電功率_功率因數定義",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=IaeGUocXpTo",
    concepts: ["功率因數"],
    masteryKeys: ["acPower"],
    chapterIds: ["ch23-rlc-power-resonance"],
  },
  {
    title: "高中基本電學_諧振電路_R-L-C 串並聯諧振頻率",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=S689HgsToq4",
    concepts: ["諧振"],
    masteryKeys: ["acPower"],
    chapterIds: ["ch23-rlc-power-resonance"],
  },
  {
    title: "基本電學_交流電源_單相三線制",
    source: "莊凱喬電學講堂",
    url: "https://www.youtube.com/watch?v=0Ucuv-Eh1hY",
    concepts: ["單相電源"],
    masteryKeys: ["powerSystems"],
    chapterIds: ["ch24-power-safety-diagnosis"],
  },
  {
    title: "基本電學_交流電源_三相電源相序",
    source: "角落的尾刀",
    url: "https://www.youtube.com/watch?v=xfeaBFEot0I",
    concepts: ["三相電源"],
    masteryKeys: ["powerSystems"],
    chapterIds: ["ch24-power-safety-diagnosis"],
  },
  {
    title: "高中基本電學_交流電源_三相負載連接與電功率",
    source: "DeltaMOOCx",
    url: "https://www.youtube.com/watch?v=0esO14hmiEw",
    concepts: ["三相線相關係"],
    masteryKeys: ["powerSystems"],
    chapterIds: ["ch24-power-safety-diagnosis"],
  },
  {
    title: "基本電學_交流電源_Y 型、Δ 型線相特性整理",
    source: "莊凱喬電學講堂",
    url: "https://www.youtube.com/watch?v=n4DJx0ByYkM",
    concepts: ["全課程總診斷", "三相線相關係"],
    masteryKeys: ["powerSystems", "diagnosis"],
    chapterIds: ["ch24-power-safety-diagnosis"],
  },
];

const COURSE = {
  title: "基本電學互動式家教",
  videoResources: VIDEO_RESOURCES,
  chapters: [
    {
      id: "ch1-basics",
      title: "第一章：電荷、電流、電壓、電阻",
      goal: "分辨 I、V、R 與 A、V、Ω。",
      steps: [
        {
          concept: "電流符號",
          teaching: "電流是電荷在導體中流動的速率，用 I 表示，單位是 A（安培）。先記住：I 是 current，不是電壓。",
          prompt: "先從電流開始。I 代表什麼？",
          accepted: ["電流", "I"],
          expected: "電流",
          masteryKey: "symbols",
          errorType: "符號錯",
          hint: "I 不是電壓，I 代表電流，單位是 A。",
          success: "對。I 代表電流，單位是 A，讀作安培。",
        },
        {
          concept: "電壓符號",
          teaching: "電壓是兩點之間的電位差，用 V 表示，單位也是 V（伏特）。電壓像推動電荷移動的壓力。",
          prompt: "V 代表電壓、電流，還是電阻？",
          accepted: ["電壓", "V"],
          expected: "電壓",
          masteryKey: "symbols",
          errorType: "符號錯",
          hint: "V 在這裡代表電壓，像推動電流的力量。",
          success: "對。V 代表電壓，單位也是 V，讀作伏特。",
        },
        {
          concept: "電阻符號",
          teaching: "電阻表示材料阻礙電流通過的程度，用 R 表示，單位是 Ω（歐姆）。電阻越大，電流越小。",
          prompt: "R 代表什麼？",
          accepted: ["電阻", "R"],
          expected: "電阻",
          masteryKey: "symbols",
          errorType: "符號錯",
          hint: "R 代表電阻，像阻擋電流流動的程度。",
          success: "對。R 代表電阻，單位是 Ω，讀作歐姆。",
        },
        {
          concept: "電阻概念",
          teaching: "在相同電壓下，電阻越大，電流越小；電阻越小，電流越大。這就是歐姆定律的直覺基礎。",
          prompt: "如果電阻 R 變大，電流比較容易流過去，還是比較不容易流過去？",
          accepted: ["不容易", "比較不容易", "變小", "小"],
          expected: "比較不容易流過去",
          masteryKey: "symbols",
          errorType: "概念錯",
          hint: "電阻像阻擋，阻擋越大，電流越不容易流過去。",
          success: "對。電阻越大，電流越不容易流過去。",
        },
        {
          concept: "自由電子",
          teaching: "金屬導體中有容易移動的自由電子。當外加電壓形成電場時，自由電子會定向移動，形成電流。",
          prompt: "金屬導體中容易移動、形成電流的粒子通常稱為什麼電子？",
          accepted: ["自由電子", "電子"],
          expected: "自由電子",
          masteryKey: "symbols",
          errorType: "概念錯",
          hint: "能在金屬內移動、形成電流的是自由電子。",
          success: "對。金屬導體靠自由電子形成電流。",
        },
        {
          concept: "導體半導體絕緣體",
          teaching: "導體容易讓電流通過，絕緣體不容易通過；半導體介於兩者之間，會受到材料、溫度或摻雜影響。",
          prompt: "銅線屬於導體、半導體，還是絕緣體？",
          accepted: ["導體"],
          expected: "導體",
          masteryKey: "symbols",
          errorType: "分類錯",
          hint: "銅很容易導電，所以是導體。",
          success: "對。銅線屬於導體。",
        },
      ],
    },
    {
      id: "ch2-ohms-law",
      title: "第二章：歐姆定律三種變形",
      goal: "依照題目要求選 V、I、R 公式。",
      steps: [
        {
          concept: "求 V",
          teaching: "歐姆定律的核心是 V = I × R。題目要求電壓 V 時，把電流 I 與電阻 R 相乘。",
          prompt: "已知 I = 2A，R = 5Ω，求 V。要用哪個公式？",
          accepted: ["V=I*R", "V=IR", "V = I × R", "V = I*R", "V=I×R", "電壓=電流乘電阻"],
          expected: "V = I × R",
          masteryKey: "ohmsLaw",
          errorType: "公式錯",
          hint: "題目要求 V，所以公式左邊要是 V。要求 V，用 V = I × R。",
          success: "對。要求 V，用 V = I × R。",
        },
        {
          concept: "求 I",
          teaching: "要求電流 I 時，把歐姆定律 V = IR 變形成 I = V ÷ R。注意電阻在分母。",
          prompt: "已知 V = 12V，R = 6Ω，求 I。要用哪個公式？",
          accepted: ["I=V/R", "I = V ÷ R", "I=V÷R", "I = V/R", "電流=電壓除電阻"],
          expected: "I = V ÷ R",
          masteryKey: "ohmsLaw",
          errorType: "公式錯",
          hint: "題目要求 I。要求 I，用 I = V ÷ R。",
          success: "對。要求 I，用 I = V ÷ R。",
        },
        {
          concept: "求 R",
          teaching: "要求電阻 R 時，把 V = IR 變形成 R = V ÷ I。單位要得到 Ω。",
          prompt: "已知 V = 20V，I = 4A，求 R。要用哪個公式？",
          accepted: ["R=V/I", "R = V ÷ I", "R=V÷I", "R = V/I", "電阻=電壓除電流"],
          expected: "R = V ÷ I",
          masteryKey: "ohmsLaw",
          errorType: "公式錯",
          hint: "題目要求 R。要求 R，用 R = V ÷ I。",
          success: "對。要求 R，用 R = V ÷ I。",
        },
        {
          concept: "歐姆定律代入",
          teaching: "代入公式前先看題目要求什麼量，再選公式。這題要求 I，所以用 I = V/R。",
          prompt: "已知 V = 36V，R = 6Ω，求 I，答案是多少？",
          accepted: ["6A", "6 A", "6安培", "6"],
          expected: "6A",
          masteryKey: "ohmsLaw",
          errorType: "代入錯",
          hint: "要求 I，用 I = V ÷ R，所以 I = 36 ÷ 6 = 6A。",
          success: "對。I = 36 ÷ 6 = 6A。",
        },
        {
          concept: "電阻與電導",
          teaching: "電導 G 表示導電能力，和電阻 R 互為倒數：G = 1/R。電阻越大，電導越小。",
          prompt: "電導 G 和電阻 R 的關係是 G = 1/R，還是 G = R？",
          accepted: ["G=1/R", "1/R", "倒數", "G = 1 ÷ R"],
          expected: "G = 1/R",
          masteryKey: "ohmsLaw",
          errorType: "公式錯",
          hint: "電導是電阻的倒數。",
          success: "對。電導 G = 1/R。",
        },
        {
          concept: "電導單位",
          teaching: "電阻單位是 Ω，電導單位是 S（西門子）。題目看到 G 時，要想到導電能力，不是電阻值本身。",
          prompt: "電導的單位是 S，還是 Ω？",
          accepted: ["S", "西門子", "siemens"],
          expected: "S",
          masteryKey: "ohmsLaw",
          errorType: "單位錯",
          hint: "Ω 是電阻，S 是電導。",
          success: "對。電導單位是 S。",
        },
        {
          concept: "電阻色碼",
          teaching: "色碼電阻通常用前兩環或前三環表示有效數字，下一環表示倍率，最後一環表示容許誤差。先讀數字，再乘倍率。",
          prompt: "四環電阻的最後一環通常表示倍率，還是容許誤差？",
          accepted: ["容許誤差", "誤差", "公差"],
          expected: "容許誤差",
          masteryKey: "ohmsLaw",
          errorType: "色碼判讀錯",
          hint: "四環電阻常見讀法是數字、數字、倍率、容許誤差。",
          success: "對。最後一環通常表示容許誤差。",
        },
        {
          concept: "色碼容許誤差",
          teaching: "容許誤差表示實際電阻可能偏離標示值的範圍。例如 ±5% 代表實際值可比標示值大或小 5%。",
          prompt: "100Ω、容許誤差 ±5% 的電阻，實際值可能在 95Ω 到 105Ω 之間，對嗎？",
          accepted: ["對", "正確", "是"],
          expected: "對",
          masteryKey: "ohmsLaw",
          errorType: "誤差觀念錯",
          hint: "100Ω 的 5% 是 5Ω，所以範圍是 95Ω 到 105Ω。",
          success: "對。±5% 表示 95Ω 到 105Ω 都可能合理。",
        },
      ],
    },
    {
      id: "ch3-units",
      title: "第三章：單位換算",
      goal: "先換 mA、mV、kΩ，再代公式。",
      steps: [
        {
          concept: "mA 換 A",
          teaching: "m 是 milli，代表千分之一。mA 換 A 要除以 1000，不能乘以 1000。",
          prompt: "500mA 等於幾 A？",
          accepted: ["0.5A", "0.5 A", "0.5"],
          expected: "0.5A",
          masteryKey: "unitConversion",
          errorType: "單位換算錯",
          hint: "mA 換 A 要除以 1000。500 ÷ 1000 = 0.5A。",
          success: "對。500mA = 0.5A。",
        },
        {
          concept: "kΩ 換 Ω",
          teaching: "k 是 kilo，代表 1000 倍。kΩ 換 Ω 要乘以 1000。",
          prompt: "2kΩ 等於幾 Ω？",
          accepted: ["2000Ω", "2000 Ω", "2000歐姆", "2000"],
          expected: "2000Ω",
          masteryKey: "unitConversion",
          errorType: "單位換算錯",
          hint: "k 代表 1000 倍。2kΩ = 2 × 1000 = 2000Ω。",
          success: "對。2kΩ = 2000Ω。",
        },
        {
          concept: "mV 換 V",
          teaching: "mV 是千分之一伏特。mV 換 V 要除以 1000。",
          prompt: "250mV 等於幾 V？",
          accepted: ["0.25V", "0.25 V", "0.25"],
          expected: "0.25V",
          masteryKey: "unitConversion",
          errorType: "單位換算錯",
          hint: "mV 換 V 要除以 1000。250 ÷ 1000 = 0.25V。",
          success: "對。250mV = 0.25V。",
        },
        {
          concept: "單位換算後代入",
          teaching: "含 mA、mV、kΩ 的題目，先換成 A、V、Ω，再代公式。先換單位可以避免答案差 1000 倍。",
          prompt: "已知 I = 200mA，R = 10Ω，求 V。答案是多少？",
          accepted: ["2V", "2 V", "2伏特", "2"],
          expected: "2V",
          masteryKey: "unitConversion",
          errorType: "忘記換單位",
          hint: "先換單位：200mA = 0.2A。再算 V = I × R = 0.2 × 10 = 2V。",
          success: "對。先換成 0.2A，再算出 V = 2V。",
        },
        {
          concept: "μF 換 F",
          teaching: "μ 是 micro，代表百萬分之一。電容題常用 μF，換成 F 要除以 1,000,000。",
          prompt: "10μF 等於多少 F？",
          accepted: ["0.00001F", "0.00001 F", "1e-5F", "10^-5F"],
          expected: "0.00001F",
          masteryKey: "unitConversion",
          errorType: "單位換算錯",
          hint: "10μF = 10 × 10^-6 F = 0.00001F。",
          success: "對。10μF = 0.00001F。",
        },
        {
          concept: "電度 kWh",
          teaching: "電費常用 kWh（度）計算。1kWh 表示 1kW 的電器使用 1 小時所消耗的電能。",
          prompt: "1kW 的電器使用 2 小時，消耗幾 kWh？",
          accepted: ["2kWh", "2 kWh", "2度", "2"],
          expected: "2kWh",
          masteryKey: "unitConversion",
          errorType: "電能計算錯",
          hint: "電能 = 功率 × 時間 = 1kW × 2h = 2kWh。",
          success: "對。消耗 2kWh，也就是 2 度電。",
        },
      ],
    },
    {
      id: "ch4-power",
      title: "第四章：電功率",
      goal: "理解 P 與 W，使用功率公式。",
      steps: [
        {
          concept: "功率符號",
          teaching: "功率 P 表示能量轉換的快慢，單位是 W。電路中常用 P = VI 來算電功率。",
          prompt: "P 代表什麼？",
          accepted: ["功率", "電功率", "P"],
          expected: "功率",
          masteryKey: "power",
          errorType: "符號錯",
          hint: "P 代表功率，單位是 W，讀作瓦特。",
          success: "對。P 代表功率。",
        },
        {
          concept: "功率單位",
          teaching: "W 讀作瓦特，是功率單位。不要和電能單位 Wh 或 kWh 混淆。",
          prompt: "W 是什麼的單位？",
          accepted: ["功率", "電功率", "瓦特", "W"],
          expected: "功率",
          masteryKey: "power",
          errorType: "單位錯",
          hint: "W 是功率的單位，讀作瓦特。",
          success: "對。W 是功率單位。",
        },
        {
          concept: "P = VI",
          teaching: "若知道電壓和電流，功率用 P = V × I。這是最直接的功率公式。",
          prompt: "已知 V = 10V，I = 3A，求 P，答案是多少？",
          accepted: ["30W", "30 W", "30瓦特", "30"],
          expected: "30W",
          masteryKey: "power",
          errorType: "公式錯",
          hint: "求功率用 P = V × I，所以 P = 10 × 3 = 30W。",
          success: "對。P = 10 × 3 = 30W。",
        },
        {
          concept: "P = I²R",
          teaching: "若知道電流與電阻，可用 P = I²R。平方代表電流加倍時，電阻上發熱功率會變成四倍。",
          prompt: "已知 I = 3A，R = 2Ω，求 P，答案是多少？",
          accepted: ["18W", "18 W", "18瓦特", "18"],
          expected: "18W",
          masteryKey: "power",
          errorType: "平方計算錯",
          hint: "用 P = I² × R。3² = 9，所以 P = 9 × 2 = 18W。",
          success: "對。3² × 2 = 18W。",
        },
        {
          concept: "P = V²/R",
          teaching: "若知道電壓與電阻，可用 P = V²/R。這個公式由 P = VI 和 I = V/R 合併而來。",
          prompt: "已知 V = 12V，R = 6Ω，用 P = V²/R，功率是多少？",
          accepted: ["24W", "24 W", "24瓦特", "24"],
          expected: "24W",
          masteryKey: "power",
          errorType: "公式錯",
          hint: "P = 12² ÷ 6 = 144 ÷ 6 = 24W。",
          success: "對。P = 24W。",
        },
        {
          concept: "電功 W = Pt",
          teaching: "電功或電能可用 W = P × t 計算。這裡 W 是 work/energy，不是瓦特單位 W，要從題意分辨。",
          prompt: "100W 電燈使用 2 小時，消耗的電能是 200Wh，對嗎？",
          accepted: ["對", "正確", "是", "200Wh"],
          expected: "對",
          masteryKey: "power",
          errorType: "電能計算錯",
          hint: "電能 = 功率 × 時間 = 100W × 2h = 200Wh。",
          success: "對。100W 使用 2 小時是 200Wh。",
        },
        {
          concept: "效率",
          teaching: "效率 = 有效輸出 ÷ 輸入 × 100%。如果輸入 100W，真正輸出有用功率 80W，效率就是 80%。",
          prompt: "輸入 100W、有效輸出 80W，效率是多少？",
          accepted: ["80%", "80％", "0.8", "80"],
          expected: "80%",
          masteryKey: "power",
          errorType: "效率計算錯",
          hint: "效率 = 80 ÷ 100 × 100% = 80%。",
          success: "對。效率是 80%。",
        },
      ],
    },
    {
      id: "ch5-series",
      title: "第五章：串聯電路",
      goal: "掌握一條路、電流相同、總電阻相加。",
      steps: [
        {
          concept: "串聯判斷",
          teaching: "串聯電路只有一條電流路徑，電流從電源出來後會依序通過每一個元件。只要中間任何一個地方斷開，整條電路都會停止導通。",
          prompt: "只有一條路、電流沒有分岔，這是串聯還是並聯？",
          accepted: ["串聯"],
          expected: "串聯",
          masteryKey: "series",
          errorType: "串並聯判斷錯",
          hint: "只有一條路是串聯；有分岔路才是並聯。",
          success: "對。只有一條路是串聯。",
        },
        {
          concept: "串聯電流",
          teaching: "串聯因為只有一條路，電流沒有地方可以分流，所以每一個元件的電流都相同。題目若問不同電阻上的電流，不要因為電阻值不同就把電流算成不同。",
          prompt: "串聯中，如果 R1 的電流是 2A，R2 的電流是多少？",
          accepted: ["2A", "2 A", "2安培", "2"],
          expected: "2A",
          masteryKey: "series",
          errorType: "概念錯",
          hint: "串聯只有一條路，所以每個元件電流相同。",
          success: "對。串聯電流相同，所以 R2 也是 2A。",
        },
        {
          concept: "串聯總電阻",
          teaching: "串聯電阻會讓電流依序通過，每多一個電阻就多一段阻礙，所以總電阻直接相加：RT = R1 + R2 + ...。",
          prompt: "R1 = 4Ω，R2 = 6Ω 串聯，總電阻是多少？",
          accepted: ["10Ω", "10 Ω", "10歐姆", "10"],
          expected: "10Ω",
          masteryKey: "series",
          errorType: "公式錯",
          hint: "串聯總電阻直接相加：4 + 6 = 10Ω。",
          success: "對。串聯總電阻是 10Ω。",
        },
        {
          concept: "串聯總電流",
          teaching: "串聯題先求總電阻，再用歐姆定律求總電流。步驟是 RT = R1 + R2，接著 I = V ÷ RT。",
          prompt: "R1 = 2Ω，R2 = 4Ω 串聯，電源 18V，總電流是多少？",
          accepted: ["3A", "3 A", "3安培", "3"],
          expected: "3A",
          masteryKey: "series",
          errorType: "公式錯",
          hint: "先算 RT = 2 + 4 = 6Ω，再算 I = V ÷ R = 18 ÷ 6 = 3A。",
          success: "對。RT = 6Ω，I = 3A。",
        },
        {
          concept: "串聯分壓",
          teaching: "串聯電路的電壓會分配到各電阻上，電阻越大分到的電壓越大。常用公式是 VR = V總 × 該電阻 ÷ 總電阻。",
          prompt: "R1 = 2Ω、R2 = 4Ω 串聯接 12V，R2 分到多少電壓？",
          accepted: ["8V", "8 V", "8伏特", "8"],
          expected: "8V",
          masteryKey: "series",
          errorType: "分壓公式錯",
          hint: "RT = 2 + 4 = 6Ω，R2 分壓 = 12 × 4 ÷ 6 = 8V。",
          success: "對。R2 分到 8V。",
        },
      ],
    },
    {
      id: "ch6-parallel",
      title: "第六章：並聯電路",
      goal: "掌握分岔路、電壓相同、電流分流、總電阻變小。",
      steps: [
        {
          concept: "並聯判斷",
          teaching: "並聯電路有兩條以上的支路，電流到節點時會分開走，最後再匯合。判斷重點不是元件畫得直不直，而是兩端是否接在同一對節點上。",
          prompt: "有分岔路、電流可以分開走，這是串聯還是並聯？",
          accepted: ["並聯"],
          expected: "並聯",
          masteryKey: "parallel",
          errorType: "串並聯判斷錯",
          hint: "有分岔路是並聯；只有一條路才是串聯。",
          success: "對。有分岔路是並聯。",
        },
        {
          concept: "並聯電壓",
          teaching: "並聯支路的兩端接在同一對節點上，所以每條支路的電壓都相同，也都等於電源電壓。",
          prompt: "兩個電阻並聯在 12V 電源上，每條支路電壓是多少？",
          accepted: ["12V", "12 V", "12伏特", "12"],
          expected: "12V",
          masteryKey: "parallel",
          errorType: "概念錯",
          hint: "並聯每條支路電壓相同，都等於電源電壓。",
          success: "對。並聯支路電壓相同，所以都是 12V。",
        },
        {
          concept: "相同電阻並聯",
          teaching: "相同電阻並聯時，電流多了路徑可以走，總電阻會變小。兩個相同電阻並聯時，總電阻等於單一電阻的一半。",
          prompt: "R1 = 6Ω，R2 = 6Ω 並聯，總電阻是多少？",
          accepted: ["3Ω", "3 Ω", "3歐姆", "3"],
          expected: "3Ω",
          masteryKey: "parallel",
          errorType: "公式錯",
          hint: "兩個相同電阻並聯，總電阻變一半。6Ω 和 6Ω 並聯是 3Ω。",
          success: "對。兩個 6Ω 並聯是 3Ω。",
        },
        {
          concept: "兩電阻並聯公式",
          teaching: "兩個不同電阻並聯常用公式 RT = R1R2 ÷ (R1 + R2)。算完後要檢查：並聯總電阻一定比最小的支路電阻還小。",
          prompt: "R1 = 2Ω，R2 = 6Ω 並聯，總電阻是多少？",
          accepted: ["1.5Ω", "1.5 Ω", "1.5歐姆", "1.5"],
          expected: "1.5Ω",
          masteryKey: "parallel",
          errorType: "公式錯",
          hint: "RT = (R1 × R2) ÷ (R1 + R2) = 12 ÷ 8 = 1.5Ω。",
          success: "對。RT = 1.5Ω。",
        },
        {
          concept: "並聯分流",
          teaching: "並聯電路電流會分流，電阻越小的支路電流越大。兩支路並聯時，可先算總電流，再依電阻大小判斷分流比例。",
          prompt: "R1 = 6Ω、R2 = 3Ω 並聯在 12V 上，哪一個支路電流比較大？",
          accepted: ["R2", "3Ω", "R2比較大", "3歐姆"],
          expected: "R2",
          masteryKey: "parallel",
          errorType: "分流判斷錯",
          hint: "並聯電壓相同，I = V ÷ R。電阻越小，電流越大。",
          success: "對。3Ω 的 R2 電阻較小，所以支路電流較大。",
        },
      ],
    },
    {
      id: "ch7-mixed",
      title: "第七章：串並聯混合電路",
      goal: "先找小區塊，再逐步化簡。",
      steps: [
        {
          concept: "混合電路原則",
          teaching: "串並聯混合電路不要一開始就套單一公式。先找已經明確串聯或並聯的小區塊，化簡成一個等效電阻，再繼續往外合併。",
          prompt: "遇到混合電路時，要整張圖一起算，還是先找小區塊化簡？",
          accepted: ["先找小區塊", "小區塊", "先化簡", "化簡"],
          expected: "先找小區塊化簡",
          masteryKey: "mixed",
          errorType: "合併順序錯",
          hint: "混合電路不要整張一起算，先找可以合併的小區塊。",
          success: "對。先找小區塊，逐步化簡。",
        },
        {
          concept: "先並後串",
          teaching: "如果有一組電阻先共用同一對節點，那一組先並聯化簡。化簡後再看新的等效電阻是否和其他電阻串聯。",
          prompt: "R1 = 6Ω、R2 = 6Ω 並聯後，再和 R3 = 3Ω 串聯，總電阻是多少？",
          accepted: ["6Ω", "6 Ω", "6歐姆", "6"],
          expected: "6Ω",
          masteryKey: "mixed",
          errorType: "合併順序錯",
          hint: "先算 6Ω 和 6Ω 並聯 = 3Ω，再和 3Ω 串聯：3 + 3 = 6Ω。",
          success: "對。先並聯成 3Ω，再串聯成 6Ω。",
        },
        {
          concept: "先串後並",
          teaching: "如果兩個電阻中間沒有分岔，先把它們串聯相加。相加後形成的等效電阻，再和另一支路做並聯。",
          prompt: "R1 = 2Ω、R2 = 4Ω 串聯後，再和 R3 = 6Ω 並聯，總電阻是多少？",
          accepted: ["3Ω", "3 Ω", "3歐姆", "3"],
          expected: "3Ω",
          masteryKey: "mixed",
          errorType: "合併順序錯",
          hint: "先算 2 + 4 = 6Ω，再和 6Ω 並聯。兩個 6Ω 並聯 = 3Ω。",
          success: "對。先串成 6Ω，再並聯成 3Ω。",
        },
        {
          concept: "混合電路求電流",
          teaching: "混合電路求總電流時，先把電路化簡成總電阻 RT，再用 I = V ÷ RT。不要在還沒化簡完成時就把每個支路電流相加。",
          prompt: "R1 = 6Ω、R2 = 6Ω 並聯後，再和 R3 = 3Ω 串聯，接 12V 電源，總電流是多少？",
          accepted: ["2A", "2 A", "2安培", "2"],
          expected: "2A",
          masteryKey: "mixed",
          errorType: "公式錯",
          hint: "先算總電阻：6Ω 和 6Ω 並聯 = 3Ω，再串 3Ω，RT = 6Ω。I = 12 ÷ 6 = 2A。",
          success: "對。RT = 6Ω，所以 I = 2A。",
        },
        {
          concept: "混合電路檢查",
          teaching: "混合電路算完要做合理性檢查：串聯會讓等效電阻變大，並聯會讓等效電阻小於最小支路。這能抓出很多合併順序錯誤。",
          prompt: "兩個電阻並聯後的等效電阻，會比最小的那個電阻大還是小？",
          accepted: ["小", "更小", "比較小", "小於"],
          expected: "比最小支路電阻還小",
          masteryKey: "mixed",
          errorType: "合理性檢查錯",
          hint: "並聯多了一條路，總阻力會下降，所以比最小支路還小。",
          success: "對。並聯等效電阻會比最小支路電阻還小。",
        },
      ],
    },
    {
      id: "ch8-review",
      title: "第八章：總複習與診斷",
      goal: "混合檢查符號、單位、公式、串並聯。",
      steps: [
        {
          concept: "符號診斷",
          teaching: "總診斷會把前面學過的符號、單位、公式、串並聯一起檢查。第一步先確認最基本的單位。",
          prompt: "總診斷第 1 題：Ω 是什麼的單位？",
          accepted: ["電阻", "歐姆", "Ω"],
          expected: "電阻",
          masteryKey: "diagnosis",
          errorType: "單位錯",
          hint: "Ω 讀作歐姆，是電阻的單位。",
          success: "對。Ω 是電阻單位。",
        },
        {
          concept: "單位診斷",
          teaching: "單位換算是後面所有計算的前置步驟。k 代表 1000，所以 kΩ 換 Ω 要乘以 1000。",
          prompt: "總診斷第 2 題：4kΩ 等於幾 Ω？",
          accepted: ["4000Ω", "4000 Ω", "4000歐姆", "4000"],
          expected: "4000Ω",
          masteryKey: "diagnosis",
          errorType: "單位換算錯",
          hint: "k 代表 1000 倍，所以 4kΩ = 4000Ω。",
          success: "對。4kΩ = 4000Ω。",
        },
        {
          concept: "色碼診斷",
          teaching: "電阻色碼題先讀有效數字，再讀倍率，最後看容許誤差。四環電阻常見順序是數字、數字、倍率、誤差。",
          prompt: "總診斷第 3 題：四環電阻最後一環通常表示什麼？",
          accepted: ["容許誤差", "誤差", "公差"],
          expected: "容許誤差",
          masteryKey: "diagnosis",
          errorType: "色碼判讀錯",
          hint: "最後一環通常不是有效數字，而是容許誤差。",
          success: "對。最後一環通常表示容許誤差。",
        },
        {
          concept: "公式診斷",
          teaching: "歐姆定律診斷先看要求量。要求 I，就用 I = V/R。",
          prompt: "總診斷第 4 題：已知 V = 12V，R = 4Ω，求 I，答案是多少？",
          accepted: ["3A", "3 A", "3安培", "3"],
          expected: "3A",
          masteryKey: "diagnosis",
          errorType: "公式錯",
          hint: "要求 I，用 I = V ÷ R，所以 I = 12 ÷ 4 = 3A。",
          success: "對。I = 3A。",
        },
        {
          concept: "功率診斷",
          teaching: "功率題常見 P = VI、P = I²R、P = V²/R。選公式時看題目給的是哪兩個量。",
          prompt: "總診斷第 5 題：已知 V = 10V、I = 2A，功率 P 是多少？",
          accepted: ["20W", "20 W", "20瓦特", "20"],
          expected: "20W",
          masteryKey: "diagnosis",
          errorType: "公式錯",
          hint: "P = V × I = 10 × 2 = 20W。",
          success: "對。功率是 20W。",
        },
        {
          concept: "電能診斷",
          teaching: "電能用功率乘以時間。kWh 是電費常用單位，也稱為度。",
          prompt: "總診斷第 6 題：0.5kW 的電器使用 4 小時，消耗幾 kWh？",
          accepted: ["2kWh", "2 kWh", "2度", "2"],
          expected: "2kWh",
          masteryKey: "diagnosis",
          errorType: "電能計算錯",
          hint: "0.5kW × 4h = 2kWh。",
          success: "對。消耗 2kWh。",
        },
        {
          concept: "混合診斷",
          teaching: "混合電路不要一次整張圖硬算。先處理最明顯的串聯或並聯小區塊，再逐步化簡。",
          prompt: "總診斷第 7 題：4Ω 和 4Ω 並聯後，再和 2Ω 串聯，總電阻是多少？",
          accepted: ["4Ω", "4 Ω", "4歐姆", "4"],
          expected: "4Ω",
          masteryKey: "diagnosis",
          errorType: "合併順序錯",
          hint: "先算 4Ω 和 4Ω 並聯 = 2Ω，再和 2Ω 串聯，RT = 4Ω。",
          success: "對。先並聯得 2Ω，再串聯得 4Ω。",
        },
      ],
    },
    {
      id: "ch9-sources",
      title: "第九章：電壓源、電流源與電源等效",
      goal: "理解理想電源、內阻與源等效轉換。",
      steps: [
        {
          concept: "電壓源",
          teaching: "理想電壓源的任務是維持端電壓固定。負載改變時，電流會跟著改變；所以分析時先把電壓視為已知量。",
          prompt: "理想電壓源的特色是電壓固定，還是電流固定？",
          accepted: ["電壓固定", "電壓", "固定電壓"],
          expected: "電壓固定",
          masteryKey: "dcSource",
          errorType: "概念錯",
          hint: "電壓源的重點是端電壓保持固定，電流會依負載改變。",
          success: "對。理想電壓源保持電壓固定。",
        },
        {
          concept: "電流源",
          teaching: "理想電流源的任務是維持輸出電流固定。端電壓會依外接負載調整，因此不要把電流源誤認成固定電壓源。",
          prompt: "理想電流源的特色是電流固定，還是電壓固定？",
          accepted: ["電流固定", "電流", "固定電流"],
          expected: "電流固定",
          masteryKey: "dcSource",
          errorType: "概念錯",
          hint: "電流源的重點是輸出電流保持固定，端電壓會依負載改變。",
          success: "對。理想電流源保持電流固定。",
        },
        {
          concept: "源等效轉換",
          teaching: "電壓源串聯電阻可以轉成電流源並聯同一個電阻；轉換公式是 I = V/R。反過來，電流源並聯電阻可轉成 V = IR。",
          prompt: "10V 電壓源串聯 5Ω，轉成電流源時電流是多少？",
          accepted: ["2A", "2 A", "2安培", "2"],
          expected: "2A",
          masteryKey: "dcSource",
          errorType: "公式錯",
          hint: "源等效轉換用 I = V ÷ R，所以 I = 10 ÷ 5 = 2A。",
          success: "對。等效電流源是 2A，並聯同一個 5Ω。",
        },
        {
          concept: "內阻判斷",
          teaching: "實際電源會有內阻。電壓源模型常畫成理想電壓源串聯內阻；電流源模型常畫成理想電流源並聯內阻。",
          prompt: "電壓源的內阻在等效模型中通常和電源串聯，還是並聯？",
          accepted: ["串聯"],
          expected: "串聯",
          masteryKey: "dcSource",
          errorType: "概念錯",
          hint: "電壓源模型常用理想電壓源串聯內阻表示。",
          success: "對。電壓源的內阻用串聯表示。",
        },
        {
          concept: "負載效應",
          teaching: "等效電源轉換不能改變負載端看到的電壓電流關係。也就是外部負載接上去後，兩種等效模型對負載的效果相同。",
          prompt: "電源等效轉換後，對外部負載的效果應該相同還是完全不同？",
          accepted: ["相同", "一樣", "等效"],
          expected: "相同",
          masteryKey: "dcSource",
          errorType: "等效觀念錯",
          hint: "等效的意思是從外部端點看起來效果相同。",
          success: "對。等效轉換後對外部負載效果相同。",
        },
      ],
    },
    {
      id: "ch10-kvl-kcl",
      title: "第十章：KVL 與 KCL",
      goal: "掌握克希荷夫電壓定律與電流定律。",
      steps: [
        {
          concept: "KVL 意義",
          teaching: "KVL 是能量守恆在電路中的表現。沿封閉迴路走一圈，所有升壓與降壓的代數和為 0。",
          prompt: "KVL 是迴路電壓總和為 0，還是節點電流總和為 0？",
          accepted: ["迴路電壓", "電壓總和", "KVL"],
          expected: "迴路電壓總和為 0",
          masteryKey: "kirchhoff",
          errorType: "定律混淆",
          hint: "KVL 看一個封閉迴路，升壓與降壓相加等於 0。",
          success: "對。KVL 是迴路電壓總和為 0。",
        },
        {
          concept: "KCL 意義",
          teaching: "KCL 是電荷守恆在節點上的表現。一個節點不會憑空產生或消失電荷，所以流入電流總和等於流出電流總和。",
          prompt: "KCL 是節點電流總和為 0，還是迴路電壓總和為 0？",
          accepted: ["節點電流", "電流總和", "KCL"],
          expected: "節點電流總和為 0",
          masteryKey: "kirchhoff",
          errorType: "定律混淆",
          hint: "KCL 看一個節點，流入電流總和等於流出電流總和。",
          success: "對。KCL 是節點電流守恆。",
        },
        {
          concept: "KCL 計算",
          teaching: "KCL 題先分清楚流入與流出。流入總和 = 流出總和，未知電流就用方程式求。",
          prompt: "一個節點流入 5A，流出 2A 和 I，I 是多少？",
          accepted: ["3A", "3 A", "3安培", "3"],
          expected: "3A",
          masteryKey: "kirchhoff",
          errorType: "代入錯",
          hint: "流入 = 流出，所以 5 = 2 + I，I = 3A。",
          success: "對。I = 3A。",
        },
        {
          concept: "KVL 計算",
          teaching: "KVL 題先標出電源升壓與各元件壓降。單一電源迴路常可用電源電壓 = 所有壓降總和。",
          prompt: "一個迴路有 12V 電源和兩個壓降 5V、Vx，Vx 是多少？",
          accepted: ["7V", "7 V", "7伏特", "7"],
          expected: "7V",
          masteryKey: "kirchhoff",
          errorType: "代入錯",
          hint: "電源電壓等於壓降總和，所以 12 = 5 + Vx，Vx = 7V。",
          success: "對。Vx = 7V。",
        },
        {
          concept: "電壓極性",
          teaching: "列 KVL 前要先指定行走方向與元件極性。方向選錯不一定會錯，重點是全程符號規則一致。",
          prompt: "列 KVL 時，元件電壓正負號要保持同一套方向規則，對嗎？",
          accepted: ["對", "正確", "是", "要"],
          expected: "對",
          masteryKey: "kirchhoff",
          errorType: "符號規則錯",
          hint: "KVL 最怕同一題中符號規則前後不一致。",
          success: "對。KVL 的方向與正負號規則要一致。",
        },
      ],
    },
    {
      id: "ch11-bridge-y-delta",
      title: "第十一章：惠斯登電橋與 Y-△ 互換",
      goal: "判斷平衡電橋並理解 Y-△ 轉換用途。",
      steps: [
        {
          concept: "惠斯登平衡",
          teaching: "惠斯登電橋平衡時，中間兩點電位相同，因此檢流計支路沒有電流。這時可把中間支路視為沒有作用。",
          prompt: "惠斯登電橋平衡時，中間檢流計電流是 0 還是不一定？",
          accepted: ["0", "零", "沒有電流", "0A"],
          expected: "0A",
          masteryKey: "bridge",
          errorType: "概念錯",
          hint: "平衡時橋的兩端電位相同，所以中間支路沒有電流。",
          success: "對。平衡電橋中間支路電流為 0。",
        },
        {
          concept: "電橋比例",
          teaching: "惠斯登電橋平衡看的是左右兩邊電阻比例，而不是單純總和。常用條件是 R1/R2 = R3/R4。",
          prompt: "惠斯登電橋平衡條件可看成 R1/R2 = R3/R4，還是 R1+R2 = R3+R4？",
          accepted: ["R1/R2=R3/R4", "比例", "R1/R2"],
          expected: "R1/R2 = R3/R4",
          masteryKey: "bridge",
          errorType: "公式錯",
          hint: "平衡電橋看比例，不是看單純相加。",
          success: "對。惠斯登電橋平衡看兩邊電阻比。",
        },
        {
          concept: "Y-△ 用途",
          teaching: "有些三端電阻網路不能直接看成串聯或並聯。這時可用 Y-△ 或 △-Y 互換，把形狀改成容易化簡的等效電路。",
          prompt: "遇到不能直接串並聯化簡的三端電阻網路，可以用哪種轉換？",
          accepted: ["Y-△", "Y-Δ", "星三角", "三角星", "Y轉△"],
          expected: "Y-△ 互換",
          masteryKey: "bridge",
          errorType: "方法選擇錯",
          hint: "三端網路常用 Y-△ 或 △-Y 轉換後再化簡。",
          success: "對。這種情況可用 Y-△ 互換。",
        },
        {
          concept: "Y-△ 公式判斷",
          teaching: "△ 轉 Y 時，每個 Y 電阻等於相鄰兩個 △ 電阻相乘，再除以三個 △ 電阻總和。先判斷方向，再套公式。",
          prompt: "△ 轉 Y 時，分母通常是三個 △ 電阻的總和，對嗎？",
          accepted: ["對", "正確", "是"],
          expected: "對",
          masteryKey: "bridge",
          errorType: "公式錯",
          hint: "△ 轉 Y 的分母是 Ra + Rb + Rc。",
          success: "對。△ 轉 Y 的分母是三個 △ 電阻總和。",
        },
        {
          concept: "轉換後化簡",
          teaching: "完成 Y-△ 轉換後，不是題目結束；還要回頭找新的串聯或並聯區塊，繼續等效化簡。",
          prompt: "Y-△ 互換的目的，是讓電路變成可串並聯化簡，還是讓電壓變成 0？",
          accepted: ["串並聯", "可化簡", "化簡"],
          expected: "變成可串並聯化簡",
          masteryKey: "bridge",
          errorType: "概念錯",
          hint: "轉換是為了改變等效形狀，讓後續能用串並聯或其他方法處理。",
          success: "對。Y-△ 互換是為了方便等效化簡。",
        },
      ],
    },
    {
      id: "ch12-node-voltage",
      title: "第十二章：節點電壓法",
      goal: "用 KCL 建立節點電壓方程式。",
      steps: [
        {
          concept: "節點電壓法核心",
          teaching: "節點電壓法把未知量設成各節點對參考點的電壓，再用 KCL 列出電流方程式。它適合支路多、節點少的電路。",
          prompt: "節點電壓法主要使用 KCL 還是 KVL？",
          accepted: ["KCL", "節點電流"],
          expected: "KCL",
          masteryKey: "nodeMesh",
          errorType: "方法混淆",
          hint: "節點電壓法是在節點列電流方程式，所以核心是 KCL。",
          success: "對。節點電壓法主要用 KCL。",
        },
        {
          concept: "參考節點",
          teaching: "參考節點通常選接地或連接最多元件的節點，設定為 0V。其他節點電壓都以它為基準。",
          prompt: "節點電壓法通常先選一個什麼節點當 0V？",
          accepted: ["參考節點", "接地", "地", "0V"],
          expected: "參考節點",
          masteryKey: "nodeMesh",
          errorType: "步驟錯",
          hint: "先選參考節點，也常稱為接地點，當作 0V。",
          success: "對。先選參考節點作為 0V。",
        },
        {
          concept: "電流表示",
          teaching: "節點到地的電阻支路，電流可用 I = V/R 表示。例如 Va 經 2Ω 到地，電流就是 Va/2。",
          prompt: "節點 Va 經 2Ω 接到地，這支路電流可寫成 Va/2 還是 2/Va？",
          accepted: ["Va/2", "Va÷2"],
          expected: "Va/2",
          masteryKey: "nodeMesh",
          errorType: "公式錯",
          hint: "用 I = V/R，對地電壓是 Va，所以電流是 Va/2。",
          success: "對。支路電流可寫成 Va/2。",
        },
        {
          concept: "超節點判斷",
          teaching: "若兩個非參考節點之間直接接著電壓源，常需要把它們視為超節點，再加上電壓源約束式。",
          prompt: "兩個非參考節點中間接理想電壓源時，常可形成超節點，對嗎？",
          accepted: ["對", "正確", "是"],
          expected: "對",
          masteryKey: "nodeMesh",
          errorType: "方法選擇錯",
          hint: "電壓源夾在兩個非參考節點間時，常用超節點處理。",
          success: "對。這種情況常用超節點。",
        },
        {
          concept: "節點方程",
          teaching: "列節點方程時，把流入與流出用同一方向規則整理。若只有一個電阻到地，方程會很簡單。",
          prompt: "若流入節點 3A，從 3Ω 到地流出，節點電壓 Va 是多少？",
          accepted: ["9V", "9 V", "9伏特", "9"],
          expected: "9V",
          masteryKey: "nodeMesh",
          errorType: "代入錯",
          hint: "KCL：3 = Va/3，所以 Va = 9V。",
          success: "對。Va = 9V。",
        },
      ],
    },
    {
      id: "ch13-mesh-current",
      title: "第十三章：迴路電流法",
      goal: "用 KVL 建立迴路電流方程式。",
      steps: [
        {
          concept: "迴路電流法核心",
          teaching: "迴路電流法把未知量設成每個網目的假想電流，再沿每個網目用 KVL 列方程。它適合網目少的平面電路。",
          prompt: "迴路電流法主要使用 KVL 還是 KCL？",
          accepted: ["KVL", "迴路電壓"],
          expected: "KVL",
          masteryKey: "nodeMesh",
          errorType: "方法混淆",
          hint: "迴路電流法是在封閉迴路列電壓方程式，所以核心是 KVL。",
          success: "對。迴路電流法主要用 KVL。",
        },
        {
          concept: "網目電流方向",
          teaching: "網目電流方向可先全部假設為順時針。若最後算出負值，代表實際電流方向與假設相反，不代表方法錯。",
          prompt: "設定網目電流時，方向可以先假設嗎？",
          accepted: ["可以", "可", "能"],
          expected: "可以",
          masteryKey: "nodeMesh",
          errorType: "概念錯",
          hint: "方向可以先假設，算出負值就代表實際方向相反。",
          success: "對。網目電流方向可以先假設。",
        },
        {
          concept: "單迴路計算",
          teaching: "單迴路時只有一個電流，先合併串聯電阻，再用 I = V/R。這是迴路電流法的最簡情況。",
          prompt: "一個 12V 電源串聯 3Ω 和 1Ω，迴路電流是多少？",
          accepted: ["3A", "3 A", "3安培", "3"],
          expected: "3A",
          masteryKey: "nodeMesh",
          errorType: "代入錯",
          hint: "總電阻 3 + 1 = 4Ω，I = 12 ÷ 4 = 3A。",
          success: "對。迴路電流是 3A。",
        },
        {
          concept: "共用電阻",
          teaching: "兩個網目共用電阻時，該電阻上的實際電流取決於兩個網目電流的差。寫方程時要注意方向。",
          prompt: "兩個網目共用電阻時，該電阻電流通常寫成兩個網目電流的和或差？",
          accepted: ["差", "相減", "差值"],
          expected: "差",
          masteryKey: "nodeMesh",
          errorType: "共用支路錯",
          hint: "若兩網目在共用電阻方向相反，支路電流常寫成 I1 - I2。",
          success: "對。共用電阻常用網目電流差表示。",
        },
        {
          concept: "超網目判斷",
          teaching: "如果電流源位在兩個網目共用支路上，常用超網目處理，再加上電流源造成的約束關係。",
          prompt: "電流源在兩個網目共用支路上時，常可使用超網目，對嗎？",
          accepted: ["對", "正確", "是"],
          expected: "對",
          masteryKey: "nodeMesh",
          errorType: "方法選擇錯",
          hint: "共用支路上的電流源常讓 KVL 不好直接列，這時用超網目。",
          success: "對。這種情況常用超網目。",
        },
      ],
    },
    {
      id: "ch14-superposition",
      title: "第十四章：重疊定理",
      goal: "一次只保留一個獨立電源，最後加總效果。",
      steps: [
        {
          concept: "重疊定理適用",
          teaching: "重疊定理只適用線性電路。它的想法是一次只看一個獨立電源的影響，最後把各次結果代數相加。",
          prompt: "重疊定理適用在線性電路，還是非線性電路？",
          accepted: ["線性", "線性電路"],
          expected: "線性電路",
          masteryKey: "theorems",
          errorType: "概念錯",
          hint: "重疊定理只適用線性電路。",
          success: "對。重疊定理適用於線性電路。",
        },
        {
          concept: "電壓源關閉",
          teaching: "重疊定理中，關閉獨立電壓源代表把它的電壓設為 0V；理想 0V 電壓源等效為短路。",
          prompt: "使用重疊定理時，關閉理想電壓源要用短路還是開路代替？",
          accepted: ["短路"],
          expected: "短路",
          masteryKey: "theorems",
          errorType: "電源處理錯",
          hint: "理想電壓源內阻為 0，關閉時用短路代替。",
          success: "對。理想電壓源關閉用短路。",
        },
        {
          concept: "電流源關閉",
          teaching: "關閉獨立電流源代表把它的電流設為 0A；理想 0A 電流源等效為開路。",
          prompt: "使用重疊定理時，關閉理想電流源要用開路還是短路代替？",
          accepted: ["開路"],
          expected: "開路",
          masteryKey: "theorems",
          errorType: "電源處理錯",
          hint: "理想電流源內阻無限大，關閉時用開路代替。",
          success: "對。理想電流源關閉用開路。",
        },
        {
          concept: "受控源保留",
          teaching: "重疊定理只關閉獨立電源。受控源的大小由電路變數控制，不能任意關閉，否則電路關係會被破壞。",
          prompt: "使用重疊定理時，受控源通常要保留還是關閉？",
          accepted: ["保留", "留下", "不關閉"],
          expected: "保留",
          masteryKey: "theorems",
          errorType: "電源處理錯",
          hint: "只關閉獨立電源，受控源要保留。",
          success: "對。受控源要保留。",
        },
        {
          concept: "結果加總",
          teaching: "各獨立電源造成的電壓或電流要代數相加，方向相同加、方向相反減。功率通常不能直接重疊相加。",
          prompt: "重疊定理最後要把各電源造成的電壓或電流相加，還是相乘？",
          accepted: ["相加", "加總", "加"],
          expected: "相加",
          masteryKey: "theorems",
          errorType: "方法錯",
          hint: "各個獨立電源造成的效果要用代數和相加。",
          success: "對。最後用代數和相加。",
        },
      ],
    },
    {
      id: "ch15-thevenin",
      title: "第十五章：戴維寧定理",
      goal: "將線性二端網路化成 Vth 串聯 Rth。",
      steps: [
        {
          concept: "戴維寧等效",
          teaching: "戴維寧定理把複雜線性二端網路化成一個 Vth 串聯 Rth。這能讓負載分析變簡單。",
          prompt: "戴維寧等效電路是電壓源串聯電阻，還是電流源並聯電阻？",
          accepted: ["電壓源串聯電阻", "電壓源", "串聯"],
          expected: "電壓源串聯電阻",
          masteryKey: "theorems",
          errorType: "定理混淆",
          hint: "戴維寧等效是 Vth 串聯 Rth。",
          success: "對。戴維寧等效是電壓源串聯電阻。",
        },
        {
          concept: "Vth 意義",
          teaching: "Vth 是負載端開路時量到的端電壓。求 Vth 前通常先把負載拆掉，再分析端點電壓。",
          prompt: "Vth 通常是負載端開路電壓，還是短路電流？",
          accepted: ["開路電壓", "負載端開路電壓", "Vth"],
          expected: "開路電壓",
          masteryKey: "theorems",
          errorType: "概念錯",
          hint: "拆掉負載後量到的端電壓就是 Vth。",
          success: "對。Vth 是負載端開路電壓。",
        },
        {
          concept: "Rth 求法",
          teaching: "求 Rth 時，若只有獨立源，可關閉獨立源後從端點看進去求等效電阻。電壓源短路，電流源開路。",
          prompt: "求 Rth 時，獨立電壓源關閉後用短路還是開路？",
          accepted: ["短路"],
          expected: "短路",
          masteryKey: "theorems",
          errorType: "電源處理錯",
          hint: "求等效電阻時，理想電壓源關閉用短路。",
          success: "對。理想電壓源關閉用短路。",
        },
        {
          concept: "負載電流",
          teaching: "得到戴維寧等效後，負載電流可用 IL = Vth / (Rth + RL)。這是戴維寧化簡後最常用的計算。",
          prompt: "Vth = 12V、Rth = 2Ω、RL = 4Ω，負載電流 IL 是多少？",
          accepted: ["2A", "2 A", "2安培", "2"],
          expected: "2A",
          masteryKey: "theorems",
          errorType: "公式錯",
          hint: "IL = 12 ÷ (2 + 4) = 2A。",
          success: "對。負載電流 IL = 2A。",
        },
        {
          concept: "最大功率傳輸",
          teaching: "直流最大功率傳輸條件是 RL = Rth。此時負載獲得最大功率，但整體效率不一定最高。",
          prompt: "直流最大功率傳輸時，負載電阻 RL 要等於 Rth 還是 2Rth？",
          accepted: ["Rth", "等於Rth", "RL=Rth"],
          expected: "RL = Rth",
          masteryKey: "theorems",
          errorType: "公式錯",
          hint: "最大功率傳輸條件是負載電阻等於戴維寧電阻。",
          success: "對。最大功率傳輸時 RL = Rth。",
        },
      ],
    },
    {
      id: "ch16-norton",
      title: "第十六章：諾頓定理",
      goal: "將線性二端網路化成 In 並聯 Rn。",
      steps: [
        {
          concept: "諾頓等效",
          teaching: "諾頓定理把複雜線性二端網路化成一個 In 並聯 Rn。它和戴維寧是同一個二端網路的兩種等效形式。",
          prompt: "諾頓等效電路是電流源並聯電阻，還是電壓源串聯電阻？",
          accepted: ["電流源並聯電阻", "電流源", "並聯"],
          expected: "電流源並聯電阻",
          masteryKey: "theorems",
          errorType: "定理混淆",
          hint: "諾頓等效是 In 並聯 Rn。",
          success: "對。諾頓等效是電流源並聯電阻。",
        },
        {
          concept: "In 意義",
          teaching: "In 通常是輸出端短路時流過短路線的電流。求 In 時要小心短路後電路電流分配改變。",
          prompt: "In 通常是輸出端短路電流，還是開路電壓？",
          accepted: ["短路電流", "輸出端短路電流", "In"],
          expected: "短路電流",
          masteryKey: "theorems",
          errorType: "概念錯",
          hint: "把輸出端短路後流過短路的電流就是 In。",
          success: "對。In 是輸出端短路電流。",
        },
        {
          concept: "Rn 與 Rth",
          teaching: "同一個線性二端網路中，諾頓電阻 Rn 與戴維寧電阻 Rth 是同一個等效電阻，所以數值相等。",
          prompt: "同一個線性網路中，Rn 和 Rth 通常相等嗎？",
          accepted: ["相等", "一樣", "等於"],
          expected: "相等",
          masteryKey: "theorems",
          errorType: "概念錯",
          hint: "戴維寧電阻和諾頓電阻是同一個等效電阻。",
          success: "對。Rn = Rth。",
        },
        {
          concept: "戴維寧諾頓轉換",
          teaching: "戴維寧與諾頓互換使用 Vth = In × Rn，或 In = Vth / Rth。電阻值保持相同。",
          prompt: "已知 Vth = 12V、Rth = 4Ω，諾頓電流 In 是多少？",
          accepted: ["3A", "3 A", "3安培", "3"],
          expected: "3A",
          masteryKey: "theorems",
          errorType: "公式錯",
          hint: "In = Vth ÷ Rth = 12 ÷ 4 = 3A。",
          success: "對。In = 3A。",
        },
      ],
    },
    {
      id: "ch17-capacitor",
      title: "第十七章：電容與靜電",
      goal: "理解電容儲存電荷與串並聯等效。",
      steps: [
        {
          concept: "電容功能",
          teaching: "電容器像兩片相隔很近的金屬板，中間隔著絕緣材料。它不是把電荷消耗掉，而是把正負電荷分開儲存在兩極板上，形成電場能量。",
          prompt: "電容主要儲存電荷，還是消耗電荷？",
          accepted: ["儲存電荷", "儲存", "電荷"],
          expected: "儲存電荷",
          masteryKey: "capacitor",
          errorType: "概念錯",
          hint: "電容器可以在兩極板間儲存電荷與電場能量。",
          success: "對。電容主要用來儲存電荷。",
        },
        {
          concept: "電容單位",
          teaching: "電容用 C 表示，單位是 F（法拉）。1F 很大，實際電路常看到 μF、nF、pF，所以題目常會考單位換算。",
          prompt: "電容 C 的單位是 F 還是 H？",
          accepted: ["F", "法拉", "法拉第"],
          expected: "F",
          masteryKey: "capacitor",
          errorType: "單位錯",
          hint: "F 是法拉，H 是電感的亨利。",
          success: "對。電容單位是 F，法拉。",
        },
        {
          concept: "電場與電位",
          teaching: "靜電章常把電荷、電場、電位放在一起看。電場描述電荷受力的環境；電位差就是電壓，代表單位電荷移動時能量改變多少。",
          prompt: "電位差在電路中通常也稱為電壓，還是電阻？",
          accepted: ["電壓", "V", "伏特"],
          expected: "電壓",
          masteryKey: "capacitor",
          errorType: "概念錯",
          hint: "電壓就是兩點之間的電位差。",
          success: "對。電位差就是電壓。",
        },
        {
          concept: "Q = CV",
          teaching: "電容儲存的電荷量用 Q = C × V 計算。C 越大或電壓 V 越高，能儲存的電荷 Q 越多。",
          prompt: "已知 C = 2F，V = 3V，電荷 Q 是多少？",
          accepted: ["6C", "6 C", "6庫倫", "6"],
          expected: "6C",
          masteryKey: "capacitor",
          errorType: "公式錯",
          hint: "Q = C × V = 2 × 3 = 6C。",
          success: "對。Q = 6C。",
        },
        {
          concept: "電容並聯",
          teaching: "電容並聯時，等於讓可儲存電荷的板面面積變大，所以總電容直接相加；這和電阻並聯的公式不同。",
          prompt: "2F 和 3F 電容並聯，總電容是多少？",
          accepted: ["5F", "5 F", "5法拉", "5"],
          expected: "5F",
          masteryKey: "capacitor",
          errorType: "串並聯錯",
          hint: "電容並聯直接相加，所以 2F + 3F = 5F。",
          success: "對。並聯總電容是 5F。",
        },
      ],
    },
    {
      id: "ch18-inductor",
      title: "第十八章：電感、磁與電磁感應",
      goal: "理解電感反抗電流變化與磁場儲能。",
      steps: [
        {
          concept: "電感功能",
          teaching: "電感器通常是線圈。電流流過線圈會建立磁場；當電流想快速改變時，電感會產生反向感應電壓來抵抗改變。",
          prompt: "電感主要反抗電流變化，還是反抗電壓存在？",
          accepted: ["反抗電流變化", "電流變化", "反抗變化"],
          expected: "反抗電流變化",
          masteryKey: "inductor",
          errorType: "概念錯",
          hint: "電感會因磁場儲能而反抗電流快速改變。",
          success: "對。電感反抗電流變化。",
        },
        {
          concept: "電感單位",
          teaching: "電感用 L 表示，單位是 H（亨利）。電感值越大，越不容易讓電流快速變化。",
          prompt: "電感 L 的單位是 H 還是 F？",
          accepted: ["H", "亨利"],
          expected: "H",
          masteryKey: "inductor",
          errorType: "單位錯",
          hint: "H 是亨利，F 是電容的法拉。",
          success: "對。電感單位是 H，亨利。",
        },
        {
          concept: "磁場與磁通",
          teaching: "磁場可以想成磁力作用的空間；磁通量表示穿過某個面積的磁場總量。電感與電磁感應都和磁通量變化有關。",
          prompt: "電磁感應最關鍵的是磁通量改變，還是電阻顏色改變？",
          accepted: ["磁通量改變", "磁通改變", "磁通量"],
          expected: "磁通量改變",
          masteryKey: "inductor",
          errorType: "概念錯",
          hint: "法拉第電磁感應定律重點是磁通量改變會產生感應電壓。",
          success: "對。磁通量改變是電磁感應的核心。",
        },
        {
          concept: "電磁感應",
          teaching: "法拉第定律說：磁通量改變會產生感應電壓；楞次定律則說感應效果會反抗原本造成變化的原因。",
          prompt: "磁通量改變會感應出電壓，這稱為電磁感應還是靜電屏蔽？",
          accepted: ["電磁感應", "感應"],
          expected: "電磁感應",
          masteryKey: "inductor",
          errorType: "概念錯",
          hint: "磁場或磁通量改變產生感應電壓，稱為電磁感應。",
          success: "對。這是電磁感應。",
        },
        {
          concept: "L 串聯",
          teaching: "理想電感串聯時，等效電感直接相加；並聯時才要用倒數關係，這一點和電阻的串並聯形式相似。",
          prompt: "2H 和 4H 電感串聯，總電感是多少？",
          accepted: ["6H", "6 H", "6亨利", "6"],
          expected: "6H",
          masteryKey: "inductor",
          errorType: "串並聯錯",
          hint: "電感串聯直接相加，所以 2H + 4H = 6H。",
          success: "對。串聯總電感是 6H。",
        },
      ],
    },
    {
      id: "ch19-transient",
      title: "第十九章：RC 與 RL 暫態",
      goal: "掌握時間常數與充放電趨勢。",
      steps: [
        {
          concept: "暫態意義",
          teaching: "暫態是開關切換後，電容電壓或電感電流從舊狀態走向新穩態的過程。這段過程不是瞬間完成，而是按時間常數逐步接近。",
          prompt: "開關剛切換後，到穩定前的變化過程稱為暫態還是諧振？",
          accepted: ["暫態"],
          expected: "暫態",
          masteryKey: "transient",
          errorType: "概念錯",
          hint: "暫態是從一個狀態變到另一個穩定狀態的過程。",
          success: "對。這段變化過程稱為暫態。",
        },
        {
          concept: "RC 時間常數",
          teaching: "RC 電路時間常數 τ = R × C。τ 越大，電容充放電越慢；約 1τ 到 63.2%，約 5τ 可視為接近完成。",
          prompt: "RC 電路的時間常數 τ 是 R×C 還是 R÷C？",
          accepted: ["R×C", "RC", "R*C", "R乘C"],
          expected: "τ = RC",
          masteryKey: "transient",
          errorType: "公式錯",
          hint: "RC 暫態的時間常數是電阻乘電容。",
          success: "對。RC 時間常數 τ = RC。",
        },
        {
          concept: "RC 充放電公式",
          teaching: "RC 充電時，電容電壓由 0 逐漸上升到電源電壓；放電時由原電壓逐漸下降到 0。題目常用曲線方向判斷是充電還是放電。",
          prompt: "RC 充電時，電容電壓通常是逐漸上升還是瞬間跳到最大？",
          accepted: ["逐漸上升", "上升", "慢慢上升"],
          expected: "逐漸上升",
          masteryKey: "transient",
          errorType: "圖形判讀錯",
          hint: "電容電壓不能瞬間改變，所以是逐漸上升。",
          success: "對。RC 充電時電容電壓逐漸上升。",
        },
        {
          concept: "RL 時間常數",
          teaching: "RL 電路時間常數 τ = L/R。電感電流不能瞬間改變，所以剛接通時像開路，穩態時理想電感近似短路。",
          prompt: "RL 電路的時間常數 τ 是 L/R 還是 R/L？",
          accepted: ["L/R", "L÷R"],
          expected: "τ = L/R",
          masteryKey: "transient",
          errorType: "公式錯",
          hint: "RL 暫態的時間常數是電感除以電阻。",
          success: "對。RL 時間常數 τ = L/R。",
        },
        {
          concept: "五倍時間常數",
          teaching: "暫態計算常用 5τ 當作近似完成，因為充電或放電已經非常接近最後值。這是統測題常用估算規則。",
          prompt: "一般估算中，暫態約經過幾個時間常數後可視為穩定？",
          accepted: ["5", "五", "5個", "五個"],
          expected: "5 個時間常數",
          masteryKey: "transient",
          errorType: "概念錯",
          hint: "工程上常用 5τ 近似為幾乎完成暫態。",
          success: "對。約 5 個時間常數後可視為穩定。",
        },
      ],
    },
    {
      id: "ch20-ac-wave",
      title: "第二十章：交流波形、週期、頻率與有效值",
      goal: "理解交流波形、有效值與最大值。",
      steps: [
        {
          concept: "交流波形",
          teaching: "直流的方向固定；交流的大小與方向會隨時間週期性變化。基本電學最常用正弦波來表示交流電壓或電流。",
          prompt: "電壓大小與方向週期性變化，稱為交流還是直流？",
          accepted: ["交流", "AC"],
          expected: "交流",
          masteryKey: "acBasics",
          errorType: "概念錯",
          hint: "交流會隨時間週期性改變大小與方向。",
          success: "對。這是交流 AC。",
        },
        {
          concept: "頻率週期",
          teaching: "週期 T 是完成一次波形所需時間；頻率 f 是每秒完成幾次。兩者互為倒數：f = 1/T。",
          prompt: "頻率 f 和週期 T 的關係是 f = 1/T 還是 f = T？",
          accepted: ["f=1/T", "1/T", "f=1÷T"],
          expected: "f = 1/T",
          masteryKey: "acBasics",
          errorType: "公式錯",
          hint: "頻率是每秒幾次，週期是一次多久，所以互為倒數。",
          success: "對。f = 1/T。",
        },
        {
          concept: "有效值",
          teaching: "交流有效值代表和直流相比能產生相同熱效應的大小。正弦波的有效值 Vrms = Vm/√2，其中 Vm 是最大值。",
          prompt: "正弦波有效值 Vrms 約等於 Vm/√2，還是 Vm×√2？",
          accepted: ["Vm/√2", "Vm÷√2", "最大值除以根號2"],
          expected: "Vm/√2",
          masteryKey: "acBasics",
          errorType: "公式錯",
          hint: "正弦波有效值是最大值除以 √2。",
          success: "對。正弦波 Vrms = Vm/√2。",
        },
        {
          concept: "角速度",
          teaching: "角速度 ω 表示正弦波相位前進的快慢，和頻率的關係是 ω = 2πf。看到 sin(ωt) 時，ω 不是電阻，是角速度。",
          prompt: "交流正弦波中，ω 和頻率 f 的關係是 ω = 2πf，還是 ω = f/2π？",
          accepted: ["ω=2πf", "2πf", "omega=2πf"],
          expected: "ω = 2πf",
          masteryKey: "acBasics",
          errorType: "公式錯",
          hint: "角速度等於 2π 乘以頻率。",
          success: "對。ω = 2πf。",
        },
        {
          concept: "最大值換有效值",
          teaching: "若題目給最大值 Vm，要換成正弦波有效值就除以 √2；若給有效值要回推最大值，就乘以 √2。",
          prompt: "正弦波最大值 14.14V，有效值約是多少？",
          accepted: ["10V", "10 V", "10伏特", "10"],
          expected: "10V",
          masteryKey: "acBasics",
          errorType: "計算錯",
          hint: "14.14 ÷ 1.414 約等於 10V。",
          success: "對。有效值約 10V。",
        },
      ],
    },
    {
      id: "ch21-phasor",
      title: "第二十一章：相位、相量與交流阻抗",
      goal: "用相量描述交流大小與相位。",
      steps: [
        {
          concept: "相位",
          teaching: "相位用角度描述波形在時間上的位置。兩個波形若峰值出現時間不同，就有相位差。",
          prompt: "兩個交流波形時間上錯開，稱為相位差還是電阻差？",
          accepted: ["相位差", "相位"],
          expected: "相位差",
          masteryKey: "acBasics",
          errorType: "概念錯",
          hint: "交流波形的前後關係用相位差描述。",
          success: "對。這稱為相位差。",
        },
        {
          concept: "相量",
          teaching: "相量把交流量寫成大小加角度，例如 10∠30°。這樣能同時處理大小與相位，適合交流電路計算。",
          prompt: "相量用來表示交流量的大小與相位，還是只表示直流電阻？",
          accepted: ["大小與相位", "相位", "交流量"],
          expected: "大小與相位",
          masteryKey: "acBasics",
          errorType: "概念錯",
          hint: "相量是用複數或向量方式表示交流大小與角度。",
          success: "對。相量表示大小與相位。",
        },
        {
          concept: "感抗",
          teaching: "電感在交流中形成感抗 XL，公式 XL = 2πfL。頻率越高，電感越不容易讓交流電流通過。",
          prompt: "電感在交流中的阻抗稱為感抗 XL，還是容抗 XC？",
          accepted: ["感抗", "XL"],
          expected: "感抗 XL",
          masteryKey: "acCircuits",
          errorType: "符號錯",
          hint: "L 對應感抗 XL；C 對應容抗 XC。",
          success: "對。電感的交流阻抗稱為感抗 XL。",
        },
        {
          concept: "容抗",
          teaching: "電容在交流中形成容抗 XC，公式 XC = 1/(2πfC)。頻率越高，電容越容易讓交流通過，所以容抗變小。",
          prompt: "電容在交流中的阻抗稱為容抗 XC，還是感抗 XL？",
          accepted: ["容抗", "XC"],
          expected: "容抗 XC",
          masteryKey: "acCircuits",
          errorType: "符號錯",
          hint: "C 對應容抗 XC；L 對應感抗 XL。",
          success: "對。電容的交流阻抗稱為容抗 XC。",
        },
      ],
    },
    {
      id: "ch22-ac-rc-rl",
      title: "第二十二章：交流 RC 與交流 RL 電路",
      goal: "判斷 RC、RL 電路中的相位關係。",
      steps: [
        {
          concept: "純電阻相位",
          teaching: "純電阻交流電路中，電壓和電流波形同步到達最大值與零點，所以兩者同相。",
          prompt: "純電阻交流電路中，電壓和電流同相還是相差 90 度？",
          accepted: ["同相"],
          expected: "同相",
          masteryKey: "acCircuits",
          errorType: "相位錯",
          hint: "純電阻中電壓與電流同相。",
          success: "對。純電阻電壓與電流同相。",
        },
        {
          concept: "交流 RL",
          teaching: "交流 RL 電路有電阻與電感。電感會讓電流落後電壓，因此總電流相位會落後電源電壓。",
          prompt: "交流 RL 電路中，電流通常落後電壓，還是超前電壓？",
          accepted: ["落後", "電流落後", "落後電壓"],
          expected: "電流落後電壓",
          masteryKey: "acCircuits",
          errorType: "相位錯",
          hint: "電感會讓電流變化慢，所以 RL 中電流落後電壓。",
          success: "對。RL 電路中電流落後電壓。",
        },
        {
          concept: "交流 RC",
          teaching: "交流 RC 電路有電阻與電容。電容電流會超前電壓，因此總電流相位會超前電源電壓。",
          prompt: "交流 RC 電路中，電流通常超前電壓，還是落後電壓？",
          accepted: ["超前", "電流超前", "超前電壓"],
          expected: "電流超前電壓",
          masteryKey: "acCircuits",
          errorType: "相位錯",
          hint: "電容電流會超前電壓。",
          success: "對。RC 電路中電流超前電壓。",
        },
        {
          concept: "RL/RC 阻抗",
          teaching: "RL 或 RC 串聯時，總阻抗不是單純把數字硬加，因為電抗和電阻方向相差 90°，通常要用相量或平方和處理。",
          prompt: "RL 串聯阻抗大小常用 √(R²+XL²)，還是 R+XL 一定直接相加？",
          accepted: ["√(R²+XL²)", "平方和", "根號", "相量"],
          expected: "√(R²+XL²)",
          masteryKey: "acCircuits",
          errorType: "公式錯",
          hint: "電阻與感抗相差 90°，所以用平方和開根號。",
          success: "對。RL 串聯阻抗大小用平方和開根號。",
        },
        {
          concept: "阻抗合成",
          teaching: "交流阻抗有方向，計算時要保留正負與相位。只把 R、XL、XC 當普通數字相加，通常會算錯。",
          prompt: "交流電路計算總阻抗時，要考慮相量，還是只把 R、XL、XC 當普通數字相加？",
          accepted: ["相量", "考慮相量", "複數"],
          expected: "考慮相量",
          masteryKey: "acCircuits",
          errorType: "方法錯",
          hint: "交流阻抗有大小與相位，常用相量或複數處理。",
          success: "對。交流阻抗要用相量概念處理。",
        },
      ],
    },
    {
      id: "ch23-rlc-power-resonance",
      title: "第二十三章：RLC 電路、交流功率與諧振",
      goal: "整合 RLC 阻抗、功率因數與諧振概念。",
      steps: [
        {
          concept: "RLC 串聯阻抗",
          teaching: "RLC 串聯中，感抗 XL 與容抗 XC 相位相反，所以先看淨電抗 XL - XC，再和 R 用相量合成。",
          prompt: "RLC 串聯電路中，總電抗可看成 XL - XC，還是 XL + XC 一定相加？",
          accepted: ["XL-XC", "XL - XC", "相減", "差"],
          expected: "XL - XC",
          masteryKey: "acCircuits",
          errorType: "公式錯",
          hint: "感抗與容抗相位相反，所以總電抗看差值 XL - XC。",
          success: "對。RLC 串聯總電抗看 XL - XC。",
        },
        {
          concept: "交流功率",
          teaching: "交流功率分成實功率 P、虛功率 Q、視在功率 S。P 的單位是 W，代表真正轉成熱、光、機械功的部分。",
          prompt: "交流電路中，P 代表實功率，單位是 W 還是 var？",
          accepted: ["W", "瓦特", "實功率"],
          expected: "W",
          masteryKey: "acPower",
          errorType: "單位錯",
          hint: "實功率 P 的單位是 W；虛功率 Q 的單位是 var。",
          success: "對。實功率 P 的單位是 W。",
        },
        {
          concept: "功率因數",
          teaching: "功率因數 PF = cosθ，表示視在功率中有多少比例變成實功率。PF 越接近 1，代表電能利用越有效。",
          prompt: "功率因數 PF 通常等於 cosθ，還是 sinθ？",
          accepted: ["cosθ", "cos", "餘弦"],
          expected: "cosθ",
          masteryKey: "acPower",
          errorType: "公式錯",
          hint: "功率因數是電壓與電流相位角的 cos 值。",
          success: "對。PF = cosθ。",
        },
        {
          concept: "諧振",
          teaching: "RLC 諧振時，感抗與容抗大小相等、方向相反，彼此抵消。串聯諧振時總阻抗最小，電流最大。",
          prompt: "串聯 RLC 諧振時，XL 和 XC 大小相等，還是 R 等於 0？",
          accepted: ["XL=XC", "相等", "大小相等"],
          expected: "XL = XC",
          masteryKey: "acPower",
          errorType: "概念錯",
          hint: "諧振時感抗與容抗互相抵消，XL = XC。",
          success: "對。串聯諧振時 XL = XC。",
        },
      ],
    },
    {
      id: "ch24-power-safety-diagnosis",
      title: "第二十四章：單相、三相、用電安全與全課程總診斷",
      goal: "整合電源系統、安全觀念與全課程弱點診斷。",
      steps: [
        {
          concept: "單相電源",
          teaching: "單相電源常用於一般照明與住家用電。基本判斷先掌握單相二線、單相三線，以及線路間電壓關係。",
          prompt: "一般住家常見低壓供電可先理解為單相，還是一定是三相？",
          accepted: ["單相"],
          expected: "單相",
          masteryKey: "powerSystems",
          errorType: "概念錯",
          hint: "住家常見供電可先用單相概念理解；工業動力常見三相。",
          success: "對。住家常見用電可先理解為單相供電。",
        },
        {
          concept: "三相電源",
          teaching: "三相電源有三組相位彼此相差 120° 的交流電，常用於馬達與工業供電，因為輸出較平順、效率較好。",
          prompt: "三相電源的三組相電壓相位通常彼此相差幾度？",
          accepted: ["120度", "120", "120°"],
          expected: "120度",
          masteryKey: "powerSystems",
          errorType: "概念錯",
          hint: "三相平衡電源三相彼此相差 120 度。",
          success: "對。三相彼此相差 120 度。",
        },
        {
          concept: "三相線相關係",
          teaching: "三相系統常考線電壓、相電壓、線電流、相電流。Y 接與 Δ 接的線相對應不同，解題前一定先判斷接法。",
          prompt: "三相題目要先判斷 Y 接或 Δ 接，再找線電壓與相電壓關係，對嗎？",
          accepted: ["對", "正確", "要", "是"],
          expected: "對",
          masteryKey: "powerSystems",
          errorType: "解題策略錯",
          hint: "Y 接與 Δ 接的線相公式不同，所以先判斷接法。",
          success: "對。三相題先判斷接法，再套線相關係。",
        },
        {
          concept: "三用電表量測",
          teaching: "三用電表是基本電學實作常用工具。量電壓要並聯在元件兩端；量電流要串聯進電路；量電阻通常要斷電後量測。",
          prompt: "用三用電表量電壓時，表筆應和被測元件並聯還是串聯？",
          accepted: ["並聯"],
          expected: "並聯",
          masteryKey: "diagnosis",
          errorType: "量測觀念錯",
          hint: "電壓是兩點間電位差，所以要並聯量測。",
          success: "對。量電壓要並聯在被測元件兩端。",
        },
        {
          concept: "電容電感總診斷",
          teaching: "電容主要和電場、電荷儲存有關；電感主要和磁場、電流變化有關。先分清 C 與 L 的物理意義。",
          prompt: "電容主要儲存電場能量，電感主要儲存磁場能量，對嗎？",
          accepted: ["對", "正確", "是"],
          expected: "對",
          masteryKey: "diagnosis",
          errorType: "概念混淆",
          hint: "電容看電場，電感看磁場。",
          success: "對。電容儲存電場能量，電感儲存磁場能量。",
        },
        {
          concept: "暫態總診斷",
          teaching: "RC 暫態時間常數是 RC；RL 暫態時間常數是 L/R。看到 C 或 L，要先判斷是哪一種暫態。",
          prompt: "RC 電路的時間常數是 RC，還是 L/R？",
          accepted: ["RC", "R×C", "R*C", "R乘C"],
          expected: "RC",
          masteryKey: "diagnosis",
          errorType: "公式錯",
          hint: "RC 暫態時間常數就是 R 乘 C。",
          success: "對。RC 電路時間常數是 RC。",
        },
        {
          concept: "交流總診斷",
          teaching: "正弦交流的有效值 Vrms = Vm/√2。家用交流電壓常說的 110V/220V 通常指有效值，不是最大值。",
          prompt: "正弦波最大值 28.28V，有效值約是多少？",
          accepted: ["20V", "20 V", "20伏特", "20"],
          expected: "20V",
          masteryKey: "diagnosis",
          errorType: "有效值計算錯",
          hint: "28.28 ÷ 1.414 約等於 20V。",
          success: "對。有效值約 20V。",
        },
        {
          concept: "諧振總診斷",
          teaching: "串聯 RLC 諧振時 XL = XC，兩者抵消後總阻抗最小，電流最大。這是交流章常考觀念。",
          prompt: "串聯 RLC 諧振時，XL 與 XC 的大小關係是相等，還是不相等？",
          accepted: ["相等", "XL=XC", "一樣"],
          expected: "相等",
          masteryKey: "diagnosis",
          errorType: "諧振觀念錯",
          hint: "諧振條件是 XL = XC。",
          success: "對。串聯諧振時 XL = XC。",
        },
        {
          concept: "用電安全",
          teaching: "用電安全不是只背名詞，要理解保護接地、漏電斷路器、過電流保護的目的：讓故障時電流走安全路徑或快速斷電。",
          prompt: "用電安全中，保護接地的目的主要是降低觸電危險，還是增加耗電？",
          accepted: ["降低觸電危險", "觸電", "安全", "保護"],
          expected: "降低觸電危險",
          masteryKey: "powerSystems",
          errorType: "安全觀念錯",
          hint: "保護接地是讓故障電流有安全路徑，降低人員觸電風險。",
          success: "對。保護接地是為了降低觸電危險。",
        },
        {
          concept: "全課程總診斷",
          teaching: "全課程混合題不要急著代公式。先辨認電源種類、元件接法、要求量，再化簡成等效電路，最後才代入公式。",
          prompt: "全課程總診斷：若題目同時出現電源、電阻網路與負載，應先找等效電路還是直接猜答案？",
          accepted: ["等效電路", "先找等效", "化簡", "分析"],
          expected: "先找等效電路",
          masteryKey: "diagnosis",
          errorType: "解題策略錯",
          hint: "全課程混合題要先整理電路、找等效，再代入公式。",
          success: "對。混合題先整理成等效電路，再解題。",
        },
      ],
    },
  ],
};

function createInitialState() {
  return {
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
    practiceIndexes: {
      practice: 0,
      exam: 0,
      remediation: 0,
    },
    practiceHistory: [],
    completedVideoLessons: [],
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
  return step ? formatTeachingPrompt(step) : "課程已完成。";
}

function formatTeachingPrompt(step) {
  const teaching = step.teaching || `先理解這個概念：${step.concept}。${step.hint}`;
  return `概念教學：${teaching}\n\n確認問題：${step.prompt}`;
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
  const matches = [...conceptMatches, ...broaderMatches];

  return uniqueResources(matches).slice(0, 3).map(withVideoEmbedUrl);
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
    messages:
      selectedMode === "remediation"
        ? [`錯題回補：概念回補：${question.teaching}`, `類似題：${question.prompt.replace(/^錯題回補：/, "")}`]
        : [`${getPracticeModeLabel(selectedMode)}：${question.prompt}`],
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
    messages: [`這題錯在「${question.errorType}」。${question.hint}`, "請再選一題相似題練習。"],
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
    if (nextState.wrongStreak >= 2) {
      messages.push(`完整示範：標準答案是「${step.expected}」。我們先不要往下，請你再回答一次同一題。`);
    } else {
      messages.push("請你再試一次。");
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
    practiceIndexes: { practice: 0, exam: 0, remediation: 0, ...(state.practiceIndexes ?? {}) },
    practiceHistory: [...(state.practiceHistory ?? [])],
    completedVideoLessons: [...(state.completedVideoLessons ?? [])],
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
      return chapter.steps.map((step, stepIndex) => {
        return toBankQuestion("practice", chapter, chapterIndex, step, stepIndex, `題庫練習：${step.prompt}`);
      });
    }),
    exam: course.chapters.flatMap((chapter, chapterIndex) => {
      return chapter.steps.slice(-2).map((step, stepIndex) => {
        return toBankQuestion("exam", chapter, chapterIndex, step, stepIndex, `統測型題：${chapter.title.replace(/^第.+?：/, "")}。${step.prompt}`);
      });
    }),
    remediation: course.chapters.flatMap((chapter, chapterIndex) => {
      return chapter.steps.map((step, stepIndex) => {
        return toBankQuestion("remediation", chapter, chapterIndex, step, stepIndex, `錯題回補：${step.prompt}`);
      });
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
    teaching: step.teaching || step.hint,
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

window.TutorEngine = {
  COURSE,
  createInitialState,
  evaluateAnswer,
  getCurrentVideoResources,
  getCurrentLessonGate,
  getQuestionBankSummary,
  getCurrentPrompt,
  handlePracticeAnswer,
  handleStudentAnswer,
  markCurrentLessonVideoComplete,
  startPracticeQuestion,
  summarizeProgress,
};
