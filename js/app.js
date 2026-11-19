// css must have [data-i18n] {white-space: pre-line;} for \n to work properly
const translations = {
  vi: {
    site: ".: tạp lục :.",
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
    site: "· 设计杂录 ·",
    nav1: "示例",
    nav2: "原型",
    nav3: "延伸",
    prev: "↼ 前一篇",
    next: "后一篇 ⇁",
    toc: "目录",
    category: "紫微斗数捷览",
    article: "《文章标题》",
    de: "宋代 · 明辑 · 题[宋]陈希夷撰 、[宋]白玉蟾增辑；明刊孤本 ，心一堂术数古籍整理编校小组点校",
    herocontent:
      "紫微斗数最早文献之孤本 ，明万历九年金陵书坊王氏洛川刊本 。卷之一备列安星诸诀\n安身命 、安紫府 、布南北二斗 、安四化及诸杂曜）卷之二论诸星庙陷生克制化与看命捷法 、\n身命十二宫吉凶便览、流年太岁吉凶；卷之三收斗数指南、骨髓赋注解、女命骨髓赋注解与定富贫贱各局；\n卷之四分述十四正曜及各杂曜星论、入命入限吉凶；卷之五增补诸篇赋文断诀。较《紫微斗数全书》更为古远，\n倪海厦《天纪》体系可互为参证。",
    count: "共 23 节 · 逐段可检索",
    content: "《新刻纂集紫微斗数捷览》。题[宋]陈希夷撰、[宋]白玉蟾增辑。四卷。线装四册。\n\n[明]万历九年金陵书坊王氏洛川刊本原书签跋云：[此书传本甚希，万历刻尤罕见，不得不重宝之]，此本迄今已逾四百年，为海内孤本，文献价值之珍稀不言而喻。\n\n紫微斗数，国学术数星命学之一种也。此术源于五星术，五星术盛于唐，至宋而衰，至民国废钦天监，殆亡。而此术于门中秘传，逮明方兴，大抵以虚拟十四正曜及诸辅曜杂曜罗布十二宫，循命限流年宫位顺次推衍而占人之祸福休咎。虽不明其所以，然颇有识验，故迄今与四柱并行，流行港台。惜此术传嗣未广，典籍零落，学者无所稽考，坊间流传民国以前的紫微斗数刻本古籍，只见《紫微斗数全书》及《紫微斗数全集》两种而已。而本书实涉关斗数之最古文献，是以原校者冯一先生苦心瘁力，奔营求索多年，终于己丑孟秋获得，费时耗日，辨识戡研，至辛卯仲春初稿竟全功，不负先圣之所传。后来心一堂术数古籍整理编校小组在冯一先生初稿基础上，再据虚白庐藏紫微斗数古本重新校注及整理又数年，才最终定稿。并书校记如下。"
  },
  ko: {
    site: "· 디자인 잡록 ·",
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
}

// eventlistener for buttons
document.querySelectorAll(".language-selector button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const selectedLang = event.target.getAttribute("data-lang");
    switchLanguage(selectedLang);
  });
});

// check saved lang choice
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLang") || "vi";
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
    : "vi";
  if (translations[browserLang]) {
    return browserLang;
  }

  return "vi";
}
