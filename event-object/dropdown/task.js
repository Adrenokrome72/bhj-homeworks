document.addEventListener('DOMContentLoaded', () => {
    // Получаем все элементы с классом dropdown__value
    const dropdownValues = document.querySelectorAll('.dropdown__value');

    // Добавляем обработчик события click для каждого элемента dropdown__value
    dropdownValues.forEach(dropdownValue => {
        dropdownValue.addEventListener('click', (event) => {
            // Находим ближайший родительский элемент с классом dropdown
            const dropdown = dropdownValue.closest('.dropdown');
            if (dropdown) {
                // Находим элемент с классом dropdown__list внутри dropdown
                const dropdownList = dropdown.querySelector('.dropdown__list');
                if (dropdownList) {
                    // Переключаем класс dropdown__list_active
                    dropdownList.classList.toggle('dropdown__list_active');
                }
            }
        });
    });

    // Получаем все элементы с классом dropdown__link
    const dropdownLinks = document.querySelectorAll('.dropdown__link');

    // Добавляем обработчик события click для каждого элемента dropdown__link
    dropdownLinks.forEach(dropdownLink => {
        dropdownLink.addEventListener('click', (event) => {
            event.preventDefault(); // Предотвращаем переход по ссылке

            // Находим ближайший родительский элемент с классом dropdown
            const dropdown = dropdownLink.closest('.dropdown');
            if (dropdown) {
                // Находим элемент с классом dropdown__value внутри dropdown
                const dropdownValue = dropdown.querySelector('.dropdown__value');
                if (dropdownValue) {
                    // Устанавливаем новое значение в dropdownValue
                    dropdownValue.textContent = dropdownLink.textContent;
                }

                // Находим элемент с классом dropdown__list внутри dropdown
                const dropdownList = dropdown.querySelector('.dropdown__list');
                if (dropdownList) {
                    // Закрываем список
                    dropdownList.classList.remove('dropdown__list_active');
                }
            }
        });
    });
});
