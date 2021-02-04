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

// Функция запроса у пользователя соглашения на дальнейшие действия
const userConfirm = function(text) {
    return confirm(text);
};

const gameStart = function() {

    const min = 1; // Минимальное число для гнерации случайного числа
    const max = 100; // Максимальное число для гнерации случайного числа
    const correct = `Угадайте число от ${min} до ${max}`; // Фраза для первой попытки ввода
    const incorrect = `Введите число от ${min} до ${max}`; // Фраза для НЕ первой попытки ввода
    const gameMore = 'Поздравляю, Вы угадали!!! Хотели бы сыграть еще?'; // Фраза для оповещения, что пользователь угадал число
    const attemptsEnded = 'Попытки закончились, хотите сыграть еще?'; // Фраза оповещения при окончании попыток
    let attempts = 10; // Количество попыток

    // Загадывание случайного числа от 1 до 100
    const numRandom = getRandomInt(min, max);

    // Функция бота
    const gameBot = function(correct, incorrect) {

        let numAns = numPromt(correct, incorrect);

        attempts--;

        if (numAns === null) {
            alert('Игра окончена');
            return;
        } else if (attempts < 1) {
            if (userConfirm(attemptsEnded)) {
                gameStart();
            }
        } else if (numAns < min || numAns > max) {
            gameBot(correct, incorrect);
        } else if (numAns > numRandom) {
            correct = `Загаданное число меньше. Угадайте число от ${min} до ${max}. Осталось попыток ${attempts}`;
            gameBot(correct, incorrect);
        } else if (numAns < numRandom) {
            correct = `Загаданное число больше. Угадайте число от ${min} до ${max}. Осталось попыток ${attempts}`;
            gameBot(correct, incorrect);
        } else {
            if (userConfirm(gameMore)) {
                gameStart();
            }
        }
    };

    gameBot(correct, incorrect);
};

gameStart();