const translations = {
    vi: {
        heroTitle: "van mau",
        heroText: "thu nghiem ngay 14-11-2026."
    },
    en: {
        heroTitle: "translated example",
        heroText: "prototype nov-14-26."
    },
    zh: {
        heroTitle: "示例",
        heroText: "原型."
    },
    ko: {
        heroTitle: "예시",
        heroText: "프로토타입 십사일 십일월 이십유년."
    }
};

// switch and save lang choice to local
function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        // If the translation exists, update the text content
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
    localStorage.setItem('preferredLang', lang);

    document.querySelectorAll('.language-selector button').forEach(button => {
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// eventlistener for buttons
document.querySelectorAll('.language-selector button').forEach(button => {
    button.addEventListener('click', (event) => {
        const selectedLang = event.target.getAttribute('data-lang');
        switchLanguage(selectedLang);
    });
});

// check saved lang choice
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'vi';
    switchLanguage(savedLang);
});

// auto-detect browser's language
function getInitialLanguage() {
    // check if there is saved choice
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && translations[savedLang]) {
        return savedLang;
    }

    // detect
    const browserLang = navigator.language ? navigator.language.slice(0, 2) : 'vi';
    if (translations[browserLang]) {
        return browserLang;
    }

    return 'vi';
}