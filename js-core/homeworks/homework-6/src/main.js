// hw6
let listOfCompanys = [
    {
        company: 'ASIMILINE',
        name: {
            last: 'Watkins',
            first: 'Lindsay',
        },
        eyeColor: 'brown',
        age: 20,
        picture: 'http://placehold.it/32x32',
        balance: '$1,091.09',
        isActive: true,
        guid: '294814e3-4c89-428f-b0c9-da5c4c37ea5e',
        index: 0,
        _id: '584babb6eeb4137cf14c37a3',
    },
    {
        company: 'ENJOLA',
        name: {
            last: 'Price',
            first: 'Greene',
        },
        eyeColor: 'brown',
        age: 39,
        picture: 'http://placehold.it/32x32',
        balance: '$3,533.55',
        isActive: true,
        guid: 'e7b0824f-d6d1-4a82-b2c5-cd7a1ec8310c',
        index: 1,
        _id: '584babb6c7be9c2398ed263f',
    },
    {
        company: 'ZINCA',
        name: {
            last: 'Robertson',
            first: 'Barbara',
        },
        eyeColor: 'brown',
        age: 22,
        picture: 'http://placehold.it/32x32',
        balance: '$1,395.22',
        isActive: false,
        guid: '0735d8d9-a165-4ad1-893f-e821da37bf63',
        index: 2,
        _id: '584babb6cca4dbefa6001820',
    },
    {
        company: 'TALKOLA',
        name: {
            last: 'Cooke',
            first: 'Lea',
        },
        eyeColor: 'blue',
        age: 31,
        picture: 'http://placehold.it/32x32',
        balance: '$3,074.16',
        isActive: false,
        guid: '7d13cbc4-6b4d-4954-b3d3-df3cfe5f2373',
        index: 3,
        _id: '584babb6391a2b568f1e9416',
    },
    {
        company: 'GEEKKO',
        name: {
            last: 'Webb',
            first: 'Kline',
        },
        eyeColor: 'blue',
        age: 34,
        picture: 'http://placehold.it/32x32',
        balance: '$1,520.21',
        isActive: false,
        guid: '2b179de0-a659-4423-b3c4-11c6490e5c74',
        index: 4,
        _id: '584babb66d6ea73e8ed51208',
    },
];


/*
 *
 * TASK 1
 * Посчитайте количество букв а, в передаваемом параметре
 *
 * */
console.log('***Task1***');
let randomString = 'aaa b a w c ';

let user = {
    name: 'Albina',
};

let javaScript = {
    html: 'JavaScript',
};

function countLetterA(str) {
    let arr = str.split('');
    let counter = 0;
    arr.forEach(function (value) {
        if(value === 'a'){
            counter ++;
        }
    })
    return counter;
}

console.log(countLetterA(randomString)); // 4
console.log(countLetterA(user.name + javaScript.html)); // 3



console.log('***Task2***');

/*
 *
 * TASK 2
 * Вам дано предложение, вам необходимо перевернуть каждое
 * слово в предложении в обратном порядке
 *
 *  Добавьте в функцию reverseEachWord второй параметр,
 * данный параметр булево, если true - тогда предложение так же
 * переворачиваются в обратном порядке
 */

function reverseEachWord(str, boolean) {

    let arr = str.split(' ');
    let newArr = [];
    arr.forEach(function (elem) {
        let elemOfArr = elem.split('').reverse().join('');
        newArr.push(elemOfArr);
    })
    if(boolean === true){
        newArr.reverse();
    }
    return newArr.join(' ')

}

console.log(reverseEachWord('You don\'t have to do anything special to begin using the DOM. Different browsers have different implementations of the DOM', true));
console.log(reverseEachWord('The Document Object Model (DOM) is a programming interface for HTML and XML documents'));
console.log(reverseEachWord('Hi my Name is', false));




console.log('***Task3***');

/* TASK 3
 * Посчитайте сколько одинаковых слов в предложении.
 * Функция должна возвращать объект у которого свойства
 * это повторяющиеся слово,
 * а значение это количество повторений
 * */

// Both - Java - and - Java - Script - is - programming - and - programming - OOPBased



function wordCounter(sentence) {
    let myObj = {};
    let wordArr = sentence.split(' ');
    wordArr.forEach(function (elem) {
        let counter = 0;
        let elemArr = elem;
        wordArr.forEach(function (elem) {
            let nextElemArr = elem;
            if(elemArr === nextElemArr){
                counter++;
            }
            return counter;
        });
        myObj[elemArr] = counter;
    })
    return myObj;
    //console.log(wordArr);
}

console.log(
    wordCounter('Both Java and Java Script is programming and programming OOPBased Language'),
);
console.log(wordCounter('asd qwe asd'));
console.log(wordCounter('url http url www url http'));


console.log('***Task4***');
/*
  TASK 4
 // Функция принимает массив у которого есть свойста _id и Company.
 // верните объект, у которого ключ это _id, а значение Company
 */

function createHashTags(arr) {
    let companiesObj = {};
    arr.forEach(function (elem) {
        let companyName = elem.company;
        let idCompany = elem['_id'];
        companiesObj[idCompany] = companyName;
    })
   return companiesObj;
}

console.log(createHashTags(listOfCompanys));
//{"584babb6eeb4137cf14c37a3":"ASIMILINE", '584babb6eeb4137cf14c37a3':'Company2', }

console.log('***SUPER Task1***');
// @ SUPER
/*
 *
 * TASK 1
 * Выведите уникальные значения
 *
 * */
function uniqueElements(arr) {
    let uniqueArr = [];
    arr.forEach(function (number,index) {
        if (uniqueArr.indexOf(arr[index]) === -1){
            uniqueArr.push(arr[index]);
        }
    })
    return uniqueArr;
}


let notUniqueArray = [1, 1, 2, 2, 2, 5, 10, 25, 30, 5, 1, 0, 22, 3, 10, 3];
//
console.log(uniqueElements(notUniqueArray)); //1,2,5,10,25,30,0,22,3,
console.log(uniqueElements([1, 1, 2, 3, 3])); // 1,2,3



