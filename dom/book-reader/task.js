document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book');

    // Функция для изменения размера шрифта
    const changeFontSize = (size) => {
        const fontSizes = document.querySelectorAll('.font-size');
        fontSizes.forEach(fontSize => {
            fontSize.classList.remove('font-size_active');
        });
        document.querySelector(`.font-size[data-size="${size}"]`).classList.add('font-size_active');

        book.classList.remove('book_fs-small', 'book_fs-big');
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    };

    // Функция для изменения цвета текста
    const changeTextColor = (color) => {
        const textColors = document.querySelectorAll('.color[data-text-color]');
        textColors.forEach(textColor => {
            textColor.classList.remove('color_active');
        });
        document.querySelector(`.color[data-text-color="${color}"]`).classList.add('color_active');

        book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
        book.classList.add(`book_color-${color}`);
    };

    // Функция для изменения цвета фона
    const changeBackgroundColor = (color) => {
        const bgColors = document.querySelectorAll('.color[data-bg-color]');
        bgColors.forEach(bgColor => {
            bgColor.classList.remove('color_active');
        });
        document.querySelector(`.color[data-bg-color="${color}"]`).classList.add('color_active');

        book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
        book.classList.add(`book_bg-${color}`);
    };

    // Обработчики событий для изменения размера шрифта
    document.querySelectorAll('.font-size').forEach(fontSize => {
        fontSize.addEventListener('click', (event) => {
            event.preventDefault();
            const size = fontSize.dataset.size;
            changeFontSize(size);
        });
    });

    // Обработчики событий для изменения цвета текста
    document.querySelectorAll('.color[data-text-color]').forEach(textColor => {
        textColor.addEventListener('click', (event) => {
            event.preventDefault();
            const color = textColor.dataset.textColor;
            changeTextColor(color);
        });
    });

    // Обработчики событий для изменения цвета фона
    document.querySelectorAll('.color[data-bg-color]').forEach(bgColor => {
        bgColor.addEventListener('click', (event) => {
            event.preventDefault();
            const color = bgColor.dataset.bgColor;
            changeBackgroundColor(color);
        });
    });
});
