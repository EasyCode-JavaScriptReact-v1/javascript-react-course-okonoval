/*
* Напишите функцию которая будет принимать 1 аргумент и в зависимости от типа аргумента
*
* Если тип аргумента число или объект -> возвращать true
* Если тип аргумента функция -> возвращать false
* Если тип аргумента Строка и длина этой строки не равна 10 -> возвращать "длина вашей строки: <длина строки>
*                            Если длина 10 -> 'you win'

* */
function typeOfArgument(someDate) {
    if (typeof(someDate) === 'function'){
        return false;
    }
    if (typeof someDate === 'object' || typeof someDate === 'number') {
        return true;
    }
    if(typeof someDate === 'string' && someDate.length !== 10){
        return someDate.length;
    }
    if(typeof someDate === 'string' && someDate.length === 10){
        return 'you win';
    }
}

console.log(typeOfArgument(function(){}));
console.log(typeOfArgument({1:2, 3:4,}));
console.log(typeOfArgument(5));
console.log(typeOfArgument('awwq q weww ewe'));
console.log(typeOfArgument('qqaassddff'));



/*
*
*  Задача в классе !
*
* */
const webStore = {
    category: {
        pc: 'some pc',
        noteBook: ['asus', 'lenovo', 'dell'], //i =1
        mobile: ['nokia', 'sony', 'apple'],
    }
}
const categoriesVar = webStore.category;
function displayCategories(inputCategories) {
    for (let key in inputCategories) {
        console.log(`категория: ${key}`);

        const subCategories = inputCategories[key];

        //console.log(subCategories);
        if (Array.isArray(subCategories)) {
            for (let subKey in subCategories) {
                //console.log(`Содержимое категории: ${subCategories[subKey]}`);
                displaySubName(subCategories[subKey]);
            }
        }
        else {
            //console.log(`Содержимое категории: ${subCategories}`);
            displaySubName(subCategories);
        }
    }
}
function displaySubName(name){
    console.log(`Содержимое категории: ${name}`);
}
displayCategories(categoriesVar);
/*
 1. Напишите функцию которая принимает 2 числа
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

function numbersBetween(a, b) {
    let myArray = [];
    for(let i = a; i <= b; i++ ){
        myArray.push(i)
    }
    console.log(myArray);
}

numbersBetween(3, 5);
// 3, 4, 5

numbersBetween(10, 12);
// 10, 11, 12





/*
 2. Перепишите задачу FizzBuzz, но с использованием цикла.
 Расчет чисел должен идти до 100
 */

// 1. FizzBuzz 3, 5, 3 && % 5


function FizzBuzz(number) {
    let str = '';
    if (!(number % 3)) {
        str += 'Fizz';
    }
    if (!(number % 5)) {
        str += 'Buzz';
    }
    return str ? str : number;
}

function fizzBuzz100(numberMin , numberMax) {
    for (let i = numberMin; i <= numberMax; i++){
        console.log(FizzBuzz(i));
    }
}
fizzBuzz100(50,90);



/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

let arr = [1, null, undefined, 'str', {}, [], function() {}];

function typeDefinition(elemType) {
    let arr = [];
    for( let i = 0 ; i < elemType.length; i++ ){
        arr[i] = typeof elemType[i];
    }
    return arr;

}
console.log(typeDefinition(arr));


/*
1. @@SUPER@@. Вам дан массив array, содержащий внутри объекты.
    Напишите функцию которая внутри цикла проходится по каждому элементу массива
И проверяет какой тип данных содержит свойство age, если тип данных NaN,
    тогда добавляет данному объекту свойство unknownAge: true*/








