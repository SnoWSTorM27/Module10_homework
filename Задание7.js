

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