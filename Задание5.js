/*Задание 5.

Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.*/

function Task5(){
    let randArray = [4,2,6,7,8,2,7,9,5,27];

    console.log('Дина массива ' + randArray.length);
    randArray.forEach(el => {
        console.log(el)
    });
}

Task5();