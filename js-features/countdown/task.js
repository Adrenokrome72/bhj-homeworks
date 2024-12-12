// Получаем начальное значение таймера из HTML
const initialSeconds = parseInt(document.getElementById('timer').innerText);

// Функция для форматирования времени в hh:mm:ss
function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return [h, m, s].map(n => String(n).padStart(2, '0')).join(':');
}

// Функция для обновления таймера
function updateTimer(seconds) {
    const timerElement = document.getElementById('timer');
    timerElement.innerText = formatTime(seconds);
}

// Функция для обратного отсчёта
function countdown() {
    let timeLeft = initialSeconds;

    const intervalId = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(intervalId);
            alert('Вы победили в конкурсе!');
        } else {
            updateTimer(timeLeft);
            timeLeft--;
        }
    }, 1000);
}

// Запускаем обратный отсчёт
countdown();
