//hw7
console.log('***task1***');
/*
 *
 * TASK 1
 *
 * Напишите функцию которая будет вызываться трижды и складывать
 * все передаваемые ей числа
 *
 * */

function add(x) {

    return function (y) {
        return function (z) {
            return x+y+z;
        }
    }
}

console.log(add(1)(2)(3)); // 6
console.log(add(10)(5)(15)); // 30



console.log('**** Task 2****');
/*
 *
 * TASK 2
 *
 * Напишите функцию которая возвращает объект и одно из свойств объекта
 * это функция
 * После каждого нового вызова метода объекта(функции объекта) в консоле должно отображаться
 * число на 1 больше чем предыдущее
 * ---------------------------------------
 * так же у объекта должен быть метод обнуления счетчика
 * Узнать счетчик напрямую в объекте, нельзя
 *
 * */

function patternModule() {
    let obj = {};
    let counter = 0;
    obj.method = function () {
        //return ++counter;
        console.log(++counter);
    }
    obj.reset = function () {
        counter = 0;
    }
    //return console.log(obj);
    return obj;

}

// patternModule

let test = patternModule(); // 0
test.method(); //1
test.method(); //2
test.method(); //3

test.reset();
test.method(); //1




console.log('**task3**');
/*
 * TASK 1
 *
 * Напишите функцию которая принимает 4 аргумента:
 *
 * -  Объект
 * -  Имя свойства с которым связывается метод
 * -  Сколько раз можно вызвать метод *
 * -  Объявление привязываемого метода ( функция )
 *
 *  При вызове метода отобразите сумму передаваемых
 *  параметров.
 *  Когда заканчивается счетчик, отображается ошибка
 *
 * */

let jun = {};

function methodCounter(obj, name, num, fn) {
    let counter = 0;

    obj[name] = function () {
        if (counter < num) {
            // console.log(arguments);
            console.log('Вызов колбека ' + counter);
            counter++;
            
            let argsSum = 0;
            for (let i = 0; i < arguments.length; i++) {

                argsSum = argsSum + arguments[i];

            }
            console.log(argsSum);

            fn(arguments);
        }
        else{
            console.log('ERROR ! add more methods');
        }

    }
}

methodCounter(jun, 'logger', 2, function (args) {
     //console.log("inside cb ", args);

});


jun.logger(1, 2, 3, 4); // 2, 10
jun.logger(5, 5, 5, 5); // 1, 20
jun.logger(5, 5); // ERROR ! add more methods





