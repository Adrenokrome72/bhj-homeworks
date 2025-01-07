document.addEventListener('DOMContentLoaded', () => {
    // Получаем все элементы с классом reveal
    const reveals = document.querySelectorAll('.reveal');

    // Функция для проверки видимости элементов
    const checkReveals = () => {
        reveals.forEach(reveal => {
            // Получаем координаты элемента относительно viewport
            const rect = reveal.getBoundingClientRect();
            // Проверяем, находится ли элемент в поле зрения
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                reveal.classList.add('reveal_active');
            } else {
                reveal.classList.remove('reveal_active');
            }
        });
    };

    // Регистрируем обработчик события scroll
    window.addEventListener('scroll', checkReveals);

    // Проверяем видимость элементов при загрузке страницы
    checkReveals();
});
