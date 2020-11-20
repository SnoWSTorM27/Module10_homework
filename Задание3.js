/*Задание 3.

Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH". */

function Task3(){
    let strText = prompt("Введите текст");
    console.log(`Перевёрнутый текст ${strText.split('').reverse().join('')}`)
}
Task3();