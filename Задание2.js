/*Задание 2.

Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».

Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён». */

function Task2(){
    let x1 = 4;
    let x2 = "str";
    let x3 = true;
    let x4 = {};
    function checkVariable(X){
        switch (typeof X) {
            case ('number'):
                console.log('X - число')
                break;
            case ('string'):
                console.log('X - строка')
                break;
            case ('boolean'):
                console.log('X - логический тип')
                break;
            default:
                console.log("Тип x не определён")
                break;
        }
    }
    console.log(`X = ${x1}`)
    checkVariable(x1);
    console.log(`X = ${x2}`)
    checkVariable(x2);
    console.log(`X = ${x3}`)
    checkVariable(x3);
    console.log(`X = ${x4}`)
    checkVariable(x4);
}

Task2();