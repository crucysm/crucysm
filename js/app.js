// css must have [data-i18n] {white-space: pre-line;} for \n to work properly
const translations = {
  vi: {
    site: "tạp lục",
    nav1: "van mau",
    nav2: "thu nghiem ngay 14-11-2026.",
    nav3: "延伸",
    prev: "↼ 前一篇",
    next: "后一篇 ⇁",
    category: "紫微斗数捷览",
    article: "tiêu đề",
    de: "宋代·明辑 · 题[宋]陈希夷撰、[宋]白玉蟾增辑；明刊孤本，心一堂术数古籍整理编校小组点校",
    herocontent:
      "紫微斗数最早文献之孤本，明万历九年金陵书坊王氏洛川刊本。卷之一备列安星诸诀\n安身命、安紫府、布南北二斗、安四化及诸杂曜）卷之二论诸星庙陷生克制化与看命捷法、\n身命十二宫吉凶便览、流年太岁吉凶；卷之三收斗数指南、骨髓赋注解、女命骨髓赋注解与定富贫贱各局；\n卷之四分述十四正曜及各杂曜星论、入命入限吉凶；卷之五增补诸篇赋文断诀。较《紫微斗数全书》更为古远，\n倪海厦《天纪》体系可互为参证。",
    count: "共 23 节 · 逐段可检索",
    content:""
  },
  en: {
    site: "METHODOLOGY",
    nav1: "translated example",
    nav2: "prototype nov-14-26.",
  },
  zh: {
    site: "设计杂录",
    nav1: "示例",
    nav2: "原型",
    nav3: "延伸",
    prev: "↼ 前一篇",
    next: "后一篇 ⇁",
    tocbutton: "目\n录",
    toctitle: "目录",
    chapter: "章",
    category: "紫微斗数捷览",
    article: "« 文章标题 »",
    de: "宋代 · 明辑 · 题[宋]陈希夷撰 、[宋]白玉蟾增辑；明刊孤本 ，心一堂术数古籍整理编校小组点校",
    herocontent:
      "紫微斗数最早文献之孤本 ，明万历九年金陵书坊王氏洛川刊本 。卷之一备列安星诸诀\n安身命 、安紫府 、布南北二斗 、安四化及诸杂曜）卷之二论诸星庙陷生克制化与看命捷法 、\n身命十二宫吉凶便览、流年太岁吉凶；卷之三收斗数指南、骨髓赋注解、女命骨髓赋注解与定富贫贱各局；\n卷之四分述十四正曜及各杂曜星论、入命入限吉凶；卷之五增补诸篇赋文断诀。较《紫微斗数全书》更为古远，\n倪海厦《天纪》体系可互为参证。",
    count: "共 23 节 · 逐段可检索",
    p1: "弁言",
    p2: "明",
    p3: "紫微斗数",
    p4: "而本书实涉关",
    p5: "親枝",
    p6: "兩菜",
    p7: "久衣羽羊",
    img1: "IMG. Lemme check",
    backtotop: "↑ 回到卷首",
    footer0: "©2026 prototype",
    footer1: "。这些文章由",
    footer2: "编写及编辑，并将定期更新。"
  },
  ko: {
    site: "디자인 잡록",
    nav1: "예시",
    nav2: "프로토타입 십사일 십일월 이십유년.",
  },
};

// switch and save lang choice to local
function switchLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    // If the translation exists, update the text content
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
  localStorage.setItem("preferredLang", lang);

  document.querySelectorAll(".language-selector button").forEach((button) => {
    if (button.getAttribute("data-lang") === lang) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
    showOnlyLang(lang);
}

// eventlistener for language-selector buttons
document.querySelectorAll(".language-selector button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const selectedLang = event.target.getAttribute("data-lang");
    switchLanguage(selectedLang);
  });
});

// check saved lang choice
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLang") || "zh";
  switchLanguage(savedLang);
});

// auto-detect browser's language
function getInitialLanguage() {
  // check if there is saved choice
  const savedLang = localStorage.getItem("preferredLang");
  if (savedLang && translations[savedLang]) {
    return savedLang;
  }

  // detect
  const browserLang = navigator.language
    ? navigator.language.slice(0, 2)
    : "zh";
  if (translations[browserLang]) {
    return browserLang;
  }

  return "zh";
}

// show only paragraph and header in current selected lang
function showOnlyLang(selectedLang) {
    document.querySelectorAll("p[lang], h4[lang]").forEach(el => {
        el.style.display = el.getAttribute("lang") === selectedLang ? "" : "none";
    });
}
