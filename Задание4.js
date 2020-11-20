
/* Задание 4.

Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math. */

function Task4(){
    let randomNumber = Math.floor(Math.random()*101);
    console.log(`Рандомное число от 0 до 100 = ${randomNumber}`);
}

Task4();