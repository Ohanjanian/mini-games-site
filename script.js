const gameDiv = document.getElementById("game");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

gameDiv.innerHTML = `
    <p>Я загадал число от 1 до 100. Попробуй угадать!</p>
    <input type="number" id="guess" placeholder="Введите число">
    <button onclick="checkGuess()">Проверить</button>
    <p id="result"></p>
`;

function checkGuess() {
    const guess = parseInt(document.getElementById("guess").value);
    attempts++;
    if (guess === randomNumber) {
        document.getElementById("result").innerText = `Поздравляю! Ты угадал за ${attempts} попыток.`;
    } else if (guess < randomNumber) {
        document.getElementById("result").innerText = "Слишком мало! Попробуй ещё.";
    } else {
        document.getElementById("result").innerText = "Слишком много! Попробуй ещё.";
    }
}