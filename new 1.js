// Получаем все пункты меню
const dropdownItems = document.querySelectorAll('.dropdown-content a');

// Добавляем обработчик клика
dropdownItems.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        // Получаем выбранный размер
        const size = this.getAttribute('data-size');

        // Находим контейнер .box
        const box = document.querySelector('.box');
        if (!box) {
            console.error("Элемент .box не найден!");
            return;
        }

        // Удаляем предыдущие классы размеров
        box.classList.remove('small', 'medium', 'large');

        // Добавляем новый класс размера
        box.classList.add(size);
    });
});