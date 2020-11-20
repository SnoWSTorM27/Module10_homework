

/*Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

Используйте шаблонные строки.*/

function Task8() {
    let students = new Map ([
        ['student1',"Ivan Ivanov"],
        ['student2',"Egor Pupkov"],
        ['student3',"Petya Golovin"]
    ]);
    console.log(students);
    for (key of students.keys()){
    console.log(`Ключ - ${key}; Значение - ${students.get(key)}`)

    }
}

Task8();