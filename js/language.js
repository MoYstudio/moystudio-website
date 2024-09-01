let currentLanguage = 'zh_cn';

const supportedLanguages = {
    'zh_cn': {
        name: '中文',
        button: '切换语言'
    },
    'en_us': {
        name: 'English',
        button: 'Switch Language'
    },
    'ru_ru': {
        name: 'Русский',
        button: 'Сменить язык'
    }
};

function loadLanguage(lang) {
    fetch(`./lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('days-label').innerText = data['timer.days'];
            document.getElementById('hours-label').innerText = data['timer.hours'];
            document.getElementById('minutes-label').innerText = data['timer.minutes'];
            document.getElementById('seconds-label').innerText = data['timer.seconds'];
            document.getElementById('timer-text').innerText = data['timer.text'];
            document.getElementById('footer-text').innerText = data['footer.text'];
            document.getElementById('language-toggle').innerText = supportedLanguages[currentLanguage].button;
        })
        .catch(error => console.error('Error loading language:', error));
}

function toggleLanguage() {
    const languages = Object.keys(supportedLanguages);
    const currentIndex = languages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    currentLanguage = languages[nextIndex];
    loadLanguage(currentLanguage);
}

window.onload = function() {
    loadLanguage(currentLanguage);
};
