//hw8
console.log('***task1***');


/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные
 * ей аргументы, и прибавлять их в строку
 * и отображать в консоле всю строку
 *
 *
 * */

function solution1(someString) {
    let str = '';

    return function (param) {
        str +=  ' ' + param;
        return str;
    };
}

let stringBuffer = solution1();

stringBuffer('Замыкания'); // Замыкания
stringBuffer('Использовать нужно'); // Замыкания Использовать нужно
stringBuffer('Привет'); // Замыкания Использовать нужно Привет вызываем много раз
console.log(stringBuffer(''));



console.log('***task2***');
/*
 *
 * TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку
 * из скобочек и посчитайте, * что все скобочки закрываются корректно
 *
 * */

function validBraces(str) {
    if (str.length <= 1)
        return false;

    let matchingOpeningBracket, ch;
    let stack = [];

    let openingBrackets = ['[', '{', '('];
    let closingBrackets = [']', '}', ')'];

    for (let i = 0; i < str.length; i++) {
        ch = str[i];

        if (closingBrackets.indexOf(ch) > -1) {
            matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)];
            if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
                return false;
            }
        } else {
            stack.push(ch);
        }
    }

    return (stack.length == 0);
}


console.log(validBraces('(){}[]')); // => returns true
console.log(validBraces('(}')); // => returns false
console.log(validBraces('[(])')); // => returns false
console.log(validBraces('([{}])')); // => returns true
console.log(validBraces('({[]})')); // => returns true


console.log('***task3***');
// @SUPER

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму
 * всех натуральных чисел
 * sum(5) // 5+4+3+2+1
 *
 * Вычисления должны кешироваться, если в функцию попадает закешированное
 * значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * Нельзя использовать внешние значения/переменные/функции
 *
 * */
function solution2() {
    let cacheObj = {};
     function sum(num) {
        if(cacheObj[num]){
            return cacheObj[num] + ' Значение взято из кэша';
        }
        else{
            let result = num;
            for(let i = 0; i < num; i++){
                result += i;
            }
            cacheObj[num] = result;
            return result + ' Значение закешировано';
        }

    }
    return sum;
}
let testSum = solution2();
console.log(testSum(5)); //15 Значение кешировано
console.log(testSum(5)); //15 Значение взято из кэш
console.log(testSum(6)); //21 Значение Кешировано
console.log(testSum(6)); //21 Значение взято из кэша


