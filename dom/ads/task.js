document.addEventListener('DOMContentLoaded', () => {
    // Получаем все ротаторы на странице
    const rotators = document.querySelectorAll('.rotator');

    // Функция для запуска ротатора
    const startRotator = (rotator) => {
        let index = 0;
        const cases = rotator.querySelectorAll('.rotator__case');

        // Функция для смены активного элемента
        const rotate = () => {
            // Удаляем класс активного элемента у текущего активного элемента
            cases[index].classList.remove('rotator__case_active');

            // Увеличиваем индекс
            index = (index + 1) % cases.length;

            // Добавляем класс активного элемента новому активному элементу
            cases[index].classList.add('rotator__case_active');

            // Устанавливаем цвет текста, если задан data-color
            const color = cases[index].getAttribute('data-color');
            if (color) {
                cases[index].style.color = color;
            }

            // Получаем скорость смены слайдов из data-speed
            const speed = parseInt(cases[index].getAttribute('data-speed'), 10) || 1000;

            // Устанавливаем таймер для следующей смены
            setTimeout(rotate, speed);
        };

        // Запускаем первую смену
        rotate();
    };

    // Запускаем все ротаторы на странице
    rotators.forEach(startRotator);
});
