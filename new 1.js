const gameFrame = document.getElementById('game-frame');
const menu = document.getElementById('menu');
const timerElement = document.getElementById('timer');

function toggleMenu() {
    menu.classList.toggle('active');
}

function loadGame(gameUrl, gameName) {
    gameFrame.src = gameUrl;
    desktopGameFrame.src = gameUrl;
    menu.classList.remove('active'); 
    gameTitle.innerText = gameName; 
    resetTimer();

    // Убираем нижнюю панель при запуске игры
    document.querySelector('.bottom-bar').style.display = 'none';
}

// Показываем панель снова, если нужно
function showBottomBar() {
    document.querySelector('.bottom-bar').style.display = 'flex';
}



function setDifficulty(difficulty) {
    if (gameFrame.src !== 'about:blank') {
        gameFrame.contentWindow.postMessage({ type: 'setDifficulty', difficulty }, '*');
    }
    menu.classList.remove('active');
}

let seconds = 0;
let timerInterval;

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    timerElement.innerText = '00:00';
    startTimer();
}

function updateTimer() {
    seconds++;
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const timeString = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    timerElement.innerText = timeString;
}

startTimer();

// Переключение темы
const themeToggle = document.createElement('button');
themeToggle.innerText = 'Тема';
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
});
document.querySelector('.top-bar').appendChild(themeToggle);