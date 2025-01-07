document.addEventListener('DOMContentLoaded', () => {
    // Получаем все контейнеры вкладок
    const tabContainers = document.querySelectorAll('.tabs');

    // Перебираем каждый контейнер вкладок
    tabContainers.forEach(container => {
        // Получаем все вкладки и содержимое вкладок в текущем контейнере
        const tabs = container.querySelectorAll('.tab');
        const contents = container.querySelectorAll('.tab__content');

        // Регистрируем обработчик события click для каждой вкладки
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Находим индекс кликнутой вкладки
                const index = Array.from(tabs).indexOf(tab);

                // Удаляем класс tab_active у всех вкладок
                tabs.forEach(t => t.classList.remove('tab_active'));
                // Добавляем класс tab_active кликнутой вкладке
                tab.classList.add('tab_active');

                // Удаляем класс tab__content_active у всех содержимых вкладок
                contents.forEach(content => content.classList.remove('tab__content_active'));
                // Добавляем класс tab__content_active соответствующему содержимому
                contents[index].classList.add('tab__content_active');
            });
        });
    });
});
