let currentLanguage = 'zh_cn';

const supportedLanguages = {
    'zh_cn': {
        name: '中文',
        button: '🌏',
        title: 'MoY工作室| 官网开放 |倒计时'
    },
    'en_us': {
        name: 'English(US)',
        button: '🌎',
        title: 'MoY Studio| The official website is open |countdown'
    },
    'ru_ru': {
        name: 'Русский',
        button: '🌏',
        title: 'MOY Студия | Официальный сайт открыт |отсчёт'
    }
};

function loadLanguage(lang) {
    fetch(`./lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            updateUI(data);
            if (document.getElementById('language-toggle')) {
                document.getElementById('language-toggle').innerText = supportedLanguages[currentLanguage].button;
            }
            document.title = supportedLanguages[currentLanguage].title;
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
    if (document.getElementById('jump_loading')) {
        document.getElementById('jump_loading').innerText = data['jump.loading'];
    }
    if (document.getElementById('jump_title_home')) {
        document.getElementById('jump_title_home').innerText = data['jump.title.home'];
    }
    if (document.getElementById('jump_des_home')) {
        document.getElementById('jump_des_home').innerText = data['jump.des.home'];
    }
}

function toggleLanguage(event) {
    const languages = Object.keys(supportedLanguages);
    const currentIndex = languages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    currentLanguage = languages[nextIndex];
    loadLanguage(currentLanguage);
}

// IP位置判断
function determineDefaultLanguage() {
    fetch('https://ipinfo.io?token=03fcf3b352e7a2')
        .then(response => response.json())
        .then(data => {
            const country = data.country; // 获取国家代码

            if (country === 'CN') {
                currentLanguage = 'zh_cn'; // 中国
            } else if (country === 'RU') {
                currentLanguage = 'ru_ru'; // 俄罗斯
            } else if (country === 'US') {
                currentLanguage = 'en_us'; // 美国
            } else {
                currentLanguage = 'zh_cn'; // 默认中文
            }

            loadLanguage(currentLanguage);
        })
        .catch(error => {
            console.error('Error determining default language:', error);
            loadLanguage(currentLanguage); // 出错时加载默认语言
        });
}
