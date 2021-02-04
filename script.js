'use strict';

// Функция проверки переменной на число
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

// Функция для получения случайного чилса. Максимум и минимум включаются
const getRandomInt = function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция для опроса пользователя при помощи prompt
const numPromt = (correct, incorrect, repeat = false, defValue = '') => {
    const promtText = repeat ? incorrect : correct;
    let num = prompt(promtText, defValue);
    if (num === null) {
        return num;
    }
    if (!isNumber(num)) {
        num = numPromt(correct, incorrect, true, defValue);
    }
    return +num;
};

const gameStart = function() {

    const min = 1; // Минимальное число для гнерации случайного числа
    const max = 100; // Максимальное число для гнерации случайного числа
    const correct = `Угадайте число от ${min} до ${max}`;
    const incorrect = `Введите число от ${min} до ${max}`;

    // Загадывание случайного числа от 1 до 100
    const numRandom = getRandomInt(min, max);

    // Функция бота
    const gameBot = function(correct, incorrect) {

        let numAns = numPromt(correct, incorrect);

        if (numAns === null) {
            alert('Игра окончена');
            return;
        } else if (numAns < min || numAns > max) {
            gameBot(correct, incorrect);
        } else if (numAns > numRandom) {
            correct = `Загаданное число меньше. Угадайте число от ${min} до ${max}`;
            gameBot(correct, incorrect);
        } else if (numAns < numRandom) {
            correct = `Загаданное число больше. Угадайте число от ${min} до ${max}`;
            gameBot(correct, incorrect);
        } else {
            alert('Поздравляю, Вы угадали!!!');
        }
    };

    gameBot(correct, incorrect);
};

gameStart();