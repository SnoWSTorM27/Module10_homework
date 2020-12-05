

/*Задание 7.

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.*/

//Будем понимать что нулевой элемент это 0


function Task7() {
    let randomArray = [4,2,6,7,8,2,null,7,0,9,5,27,0];
    console.log('Массив ' + randomArray);
    console.log('Массив чётных элементов = ' + randomArray.filter(element => element ? element % 2 === 0 : false));
    console.log('Количество чётных = ' + randomArray.filter(element => element ? element % 2 === 0 : false).length);
    console.log('Массив нечётных элементов = ' + randomArray.filter(element => element ? element % 2 !== 0 : false));
    console.log('Количество нечётных = ' + randomArray.filter(element => element ? element % 2 !== 0 : false).length);
    console.log('Массив чётных элементов = ' + randomArray.filter(element => !element ? element === 0 : false));
    console.log('Количество чётных = ' + randomArray.filter(element => !element ? element === 0 : false).length);
    
}

Task7();

// Задание решеноне совсем верно. Во-первых, используется избыточное количество переборов массива (вы перебираете массив при каждом использовании filter). При большом объеме массива это может серьезно замедлить работу программы. Для выполнения задачи достаточно одного прохода по массиву
// Кроме того, в вашем решении не хватает проверки на тип. По условию массив может содержать что угодно (строки, null, NaN, логические значения и т.д.). Чтобы отфильтровать только числа, нужны доп. проверки на typeof и NaN. Ниже написала верный вариант решения.

let array = [3, 5, 6, 15, 8, 29, 0, 0, '48', null, NaN, undefined, true, false];
let even = 0, odd = 0, zero = 0;

array.forEach(el => {
    if (typeof el === 'number' && !isNaN(el)) {
        if (el === 0) {
            zero++;
        } else if (el % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
});

console.log('Количество чётных = ' + even);
console.log('Количество нечётных = ' + odd);
console.log('Количество нулей = ' + zero);
