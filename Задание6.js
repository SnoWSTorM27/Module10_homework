/*Задание 6.

Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах,
а обо всех. Проверить, все ли элементы в массиве одинаковые.*/

function Task6() {
    let randomArray = [4,2,6,7,8,2,7,9,5,27];
    let allSameElements = [5,5,5,5,5,5,5];
    function F1(array){
        let same = true;
        array.forEach((element,index,array) => {
            same = !same ? same: array[0] === element ? true: false
        });
        console.log(array);
        console.log('Все элементы массива одиннаковы -' + same);    
    }
    F1(randomArray)
    F1(allSameElements)
}

Task6();