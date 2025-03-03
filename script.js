document.addEventListener('DOMContentLoaded', () => {
    // Получаем элементы
    const burgerIcon = document.getElementById('burger-icon');
    const menu = document.getElementById('menu');
    const centerBlock = document.getElementById('center-block');
    let isMenuOpen = false;

    // Функция для открытия меню
function openMenu() {
    menu.classList.add('active');
    isMenuOpen = true;

    // Добавляем задержку для анимации кнопок
    const buttons = menu.querySelectorAll('.menu-btn');
    buttons.forEach((button, index) => {
        button.style.setProperty('--index', index); // Устанавливаем задержку для анимации
        button.style.setProperty('--total-buttons', buttons.length); // Общее количество кнопок
    });
}

    // Функция для закрытия меню
function closeMenu() {
    menu.classList.add('closing'); // Добавляем класс для анимации закрытия
    menu.addEventListener('animationend', () => {
        menu.classList.remove('active', 'closing'); // Убираем классы после завершения анимации
        isMenuOpen = false;
    }, { once: true }); // Обработчик сработает только один раз
}
    // Обработчик события для бургер-иконки
    burgerIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // Останавливаем всплытие, чтобы меню не закрывалось сразу
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Обработчик события для закрытия меню при любом клике, кроме бургер-иконки
    document.addEventListener('click', (event) => {
        if (isMenuOpen && !burgerIcon.contains(event.target)) {
            closeMenu();
        }
    });

    // Обработчик события для кнопок меню
    menu.querySelectorAll('.menu-btn').forEach((button, index) => {
        button.addEventListener('click', () => {
            let iframeSrc = '';
            switch (index) {
                case 0: // Кнопка 1 — game1.html
                    iframeSrc = 'game1.html';
                    break;
                case 1: // Кнопка 2 — game2.html
                    iframeSrc = 'game2.html';
                    break;
                case 2: // Кнопка 3 — game3.html
                    iframeSrc = 'game3.html';
                    break;
                case 3: // Кнопка 4 — game4.html
                    iframeSrc = 'game4.html';
                    break;
                case 4: // Кнопка 5 — game5.html
                    iframeSrc = 'game5.html';
                    break;
                case 5: // Кнопка 6 — game6.html
                    iframeSrc = 'game6.html';
                    break;
                case 6: // Кнопка 7 — game7.html
                    iframeSrc = 'game7.html';
                    break;
                case 7: // Кнопка 8 — game8.html
                    iframeSrc = 'game8.html';
                    break;
                case 8: // Кнопка 9 — game9.html
                    iframeSrc = 'game9.html';
                    break;
                case 9: // Кнопка 10 — game10.html
                    iframeSrc = 'game10.html';
                    break;
                default:
                    break;
            }

            if (iframeSrc) {
                const iframe = document.createElement('iframe');
                iframe.src = iframeSrc;
                iframe.style.border = 'none';

                // Проверяем ширину экрана
                if (window.innerWidth <= 992) { // Мобильная версия
                    iframe.style.width = '100%';
                    iframe.style.height = 'calc(100vh - 100px)'; // Вычитаем высоту верхнего и нижнего статус-баров
                } else { // Веб-версия
                    iframe.style.width = '100%';
                    iframe.style.height = 'calc(100vh - 280px)'; // Высота для веб-версии
                }

                // Очищаем центральный блок и добавляем iframe
                centerBlock.innerHTML = '';
                centerBlock.appendChild(iframe);
            } else {
                centerBlock.textContent = `Выбрана: ${button.textContent}`;
            }
            closeMenu();
        });
    });
});