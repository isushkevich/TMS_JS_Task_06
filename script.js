"use strict";

// 1. 
function timeout1() {
    for (let i = 0; i < 9000; i++) {
        setTimeout(() => console.log(i), i * 1000);
    }
}
// запустить в консоли: timeout1();



// 2.
function recTimeout(i) {
    if (i < 1 || typeof i !== "number") {
        i = 1;
    }
    setTimeout(() => console.log(i), i * 1000);
    setTimeout(() => recTimeout(i + 1), i * 1000);
}
// запустить в консоли: recTimeout();


// P.S. Согласно условию задачи 2, первый элемент должен быть выведен в консоль через 1000 мс после старта.
// Второй - через 2000 мс после первого. Третий - через 3000 мс после второго.
// Проверим, правильно ли работает программа. Для этого добавим в вывод время, прошедшее от старта программы до вывода i в консоль. 
// Строчку recTimeout2(1); надо раскомментировать (иначе тайминг собъётся) и перезагрузить index.html.
// Мы должны получить что-то типа
// 1  1000
// 2  3000
// 3  6000

const startTime = new Date();

function recTimeout2(j) {
    if (j < 1 || typeof j !== "number") {
        j = 1;
    }
    setTimeout(() => console.log(j + "  " + (new Date() - startTime)), j * 1000);
    setTimeout(() => recTimeout2(j + 1), j * 1000);
}

// recTimeout2();