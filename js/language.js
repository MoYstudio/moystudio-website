
let currentLanguage = 'zh_cn';

const supportedLanguages = {
    'zh_cn': {
        name: '中文',
        button: '🌏',
        title: {
            index: 'MoY工作室| 官网开放 |倒计时',
            jump: 'MoY Studio | ( •̀ ω •́ )✧ | 跳转！'
        }
    },
    'en_us': {
        name: 'English(US)',
        button: '🌎',
        title: {
            index: 'MoY Studio| The official website is open |countdown',
            jump: 'MoY Studio | ( •̀ ω •́ )✧ | JUMPING!'
        }
    },
    'ru_ru': {
        name: 'Русский',
        button: '🌏',
        title: {
            index: 'MOY Студия | Официальный сайт открыт |отсчёт',
            jump: 'MoY Studio | ( •̀ ω •́ )✧ | Прыгать!'
        }
    }
};

function changeLanguage() {
    const selectElement = document.getElementById('language-toggle');
    currentLanguage = selectElement.value;
    loadLanguage(currentLanguage);
}

function loadLanguage(lang) {
    fetch(`./lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            updateUI(data);
            
            const selectElement = document.getElementById('language-toggle');
            selectElement.value = currentLanguage;
            
            const pageName = window.location.pathname.split('/').pop();
            if (pageName === 'index.html') {
                document.title = supportedLanguages[currentLanguage].title.index;
            } else if (pageName === 'jump_index.html') {
                document.title = supportedLanguages[currentLanguage].title.jump;
            }
        })
        .catch(error => console.error('Error loading language:', error));
}

function updateUI(data) {
    // 更新倒计时元素
    if (document.getElementById('days-label')) {
        document.getElementById('days-label').innerText = data['timer.days'];
    }
    if (document.getElementById('hours-label')) {
        document.getElementById('hours-label').innerText = data['timer.hours'];
    }
    if (document.getElementById('minutes-label')) {
        document.getElementById('minutes-label').innerText = data['timer.minutes'];
    }
    if (document.getElementById('seconds-label')) {
        document.getElementById('seconds-label').innerText = data['timer.seconds'];
    }
    if (document.getElementById('timer-text')) {
        document.getElementById('timer-text').innerText = data['timer.text'];
    }
    if (document.getElementById('timer-end-text')) {
        document.getElementById('timer-end-text').innerText = data['timer.end.text'];
    }
    if (document.getElementById('footer-text')) {
        document.getElementById('footer-text').innerText = data['footer.text'];
    }

    // 更新跳转页元素
    if (document.getElementById('jump-loading')) {
        document.getElementById('jump-loading').innerText = data['jump.loading'];
    }
    if (document.getElementById('jump-title-home')) {
        document.getElementById('jump-title-home').innerText = data['jump.title.home'];
    }
    if (document.getElementById('jump-des-home')) {
        document.getElementById('jump-des-home').innerText = data['jump.des.home'];
    }    
    if (document.getElementById('jump-title-member')) {
        document.getElementById('jump-title-member').innerText = data['jump.title.member'];
    }
    if (document.getElementById('jump-des-member')) {
        document.getElementById('jump-des-member').innerText = data['jump.des.member'];
    }
    if (document.getElementById('jump-title-work')) {
        document.getElementById('jump-title-work').innerText = data['jump.title.work'];
    }
    if (document.getElementById('jump-des-work')) {
        document.getElementById('jump-des-work').innerText = data['jump.des.work'];
    }
    if (document.getElementById('jump-title-contact')) {
        document.getElementById('jump-title-contact').innerText = data['jump.title.contact'];
    }
    if (document.getElementById('jump-des-contact')) {
        document.getElementById('jump-des-contact').innerText = data['jump.des.contact'];
    }
}

function toggleLanguage(event) {
    const languages = Object.keys(supportedLanguages);
    const currentIndex = languages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    currentLanguage = languages[nextIndex];
    loadLanguage(currentLanguage);
}

function determineDefaultLanguage() {
    fetch('https://ipinfo.io?token=03fcf3b352e7a2')
        .then(response => response.json())
        .then(data => {
            const country = data.country;

            if (country === 'CN') {
                currentLanguage = 'zh_cn';
            } else if (country === 'RU') {
                currentLanguage = 'ru_ru';
            } else if (country === 'US') {
                currentLanguage = 'en_us';
            } else {
                currentLanguage = 'zh_cn';
            }

            loadLanguage(currentLanguage);
        })
        .catch(error => {
            console.error('Error determining default language:', error);
            loadLanguage(currentLanguage);
        });
}

document.addEventListener('DOMContentLoaded', determineDefaultLanguage);
