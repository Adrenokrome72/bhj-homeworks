// Получаем элементы из HTML
const clickerCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const clickSpeedElement = document.createElement('div');
clickSpeedElement.id = 'clicker__speed';
clickSpeedElement.textContent = 'Скорость клика: 0';
document.querySelector('.clicker__status').appendChild(clickSpeedElement);

// Инициализируем счётчик кликов и время последнего клика
let clickCount = 0;
let lastClickTime = null;

// Функция для обновления счётчика кликов
function updateClickerCounter() {
    clickerCounter.textContent = clickCount;
}

// Функция для изменения размера печеньки
function toggleCookieSize() {
    const currentWidth = cookie.width;
    const currentHeight = cookie.height;
    if (currentWidth === 200) {
        cookie.width = 180;
        cookie.height = 180;
    } else {
        cookie.width = 200;
        cookie.height = 200;
    }
}

// Функция для обновления скорости клика
function updateClickSpeed() {
    const currentTime = new Date().getTime();
    if (lastClickTime) {
        const timeDiff = (currentTime - lastClickTime) / 1000; // Время в секундах
        const clickSpeed = 1 / timeDiff;
        clickSpeedElement.textContent = `Скорость клика: ${clickSpeed.toFixed(2)}`;
    }
    lastClickTime = currentTime;
}

// Обработчик события клика на печеньку
cookie.onclick = function() {
    clickCount++;
    updateClickerCounter();
    toggleCookieSize();
    updateClickSpeed();
};
