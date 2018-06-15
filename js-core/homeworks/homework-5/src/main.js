//hw5
console.log('**task 1**');
/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 // concat
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */
let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
let arr2 = [
    'a',
    0,
    0,
    'b',
    null,
    'c',
    'd',
    0,
    1,
    false,
    0,
    1,
    0,
    3,
    [],
    0,
    1,
    9,
    0,
    0,
    {},
    0,
    0,
    9
];

function moveZeroToEnd(arr) {
    let arrContainZero = [];
    let arrWithoutZero = [];
    for (let i= 0; i < arr.length; i++){
       // console.log(arr1[i]);
        if (arr[i] === 0){
            arrContainZero.push(arr[i]);
        }
        if (arr[i] !== 0){
            arrWithoutZero.push(arr[i])
        }
    }
    // console.log(arrWithoutZero);
    // console.log(arrContainZero);
    let newArr;
    newArr = arrWithoutZero.concat(arrContainZero);
    return newArr;
}

 console.log(moveZeroToEnd(arr1));
 console.log(moveZeroToEnd(arr2));


console.log('**task 2**');
/*
2. Верните сумму двух найменьших чисел в массиве
[10,20,30,1,31,11,10] => 11
[-1,0,25] => -1
[-4,-10,25,10] => -14
[0,200,10,25,15] => 10
*/
let myArray = [10,20,30,2,31,11,10];
let myArray2 = [-1,0,25];
let myArray3 = [-4,-10,25,10];
let myArray4 = [0,200,10,25,15];

function sortArrayFunc(a, b) {
    return a-b;
}
function minimalNumber(arr) {
    arr.sort(sortArrayFunc);
    return arr[0] + arr[1];
}
console.log(minimalNumber(myArray));
console.log(minimalNumber(myArray2));
console.log(minimalNumber(myArray3));
console.log(minimalNumber(myArray4));


console.log('**task 3**');
/*
 3. Напишите функцию которая меняет местами имя и фамилию

 */

function nameShuffler(str) {
    let array = str.split(' ').reverse().join(' ');
    console.log(array);
}

nameShuffler('john McClane');
nameShuffler('Arnold Schwarzenegger');
nameShuffler('James Bond');


console.log('**task 4**');
/*
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

 */

let arr3 = ['jo', 'nelson', 'jurie', 'kramer'];
let arr4 =  ['KARLY', 'DANIEL', 'KELSEY'];
function capMe(arr) {
    for (let i = 0; i < arr.length; i ++) {
        let elem  = arr[i];

        arr[i] = elem[0].toUpperCase() + elem.slice(1).toLowerCase();
    }
    console.log(arr);
}
capMe(arr3);
capMe(arr4);

