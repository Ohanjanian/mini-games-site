// Получаем все выпадающие меню
const dropdowns = document.querySelectorAll('.dropdown-content a');

// Добавляем обработчик событий для каждого пункта меню
dropdowns.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault(); // Отменяем стандартное поведение ссылки

        // Получаем выбранный размер
        const size = this.getAttribute('data-size');

        // Находим родительский контейнер (box)
        const box = this.closest('.box');

        // Удаляем предыдущие классы размеров
        box.classList.remove('small', 'medium', 'large');

        // Добавляем новый класс в зависимости от выбранного размера
        box.classList.add(size);
    });
});