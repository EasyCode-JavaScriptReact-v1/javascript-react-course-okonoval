//hw10
console.log('***task1***');


/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать
 * передаваемую строку в html тэг
 *
 *
 * */

let $ = function (tag) {
    return `<${tag}></${tag}>`

};
let createBODY = $('body');
let createDIV = $('div');
console.log(createBODY); // <body></body>
console.log(createDIV); // <div></div>


console.log('***task2***');
/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
  // obj.method().method().method()
  ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
 * */

var ezjQuery2 = {
    buffer: '',
    add: function (tagName) {
        this.buffer += `<${tagName}></${tagName}>`;
        console.log(this.buffer);
        return this;
    }
};
ezjQuery2
    .add('body') // <body></body>
    .add('div') // <body></body><div></div>
    .add('h1'); // <body></body><div></div><h1></h1>


console.log('***task3***');
/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий
 * тэг помещался внутри предыдущего !
 ---
 * И добавьте объекту ezjQuery метод render, который будет возвращать
 * сгенерированную строку
 -----
 * Методу add - второй параметр, который будет размещать
 * информацию внутри тэга
 *
 */

// example
var ezjQuery = {
    buffer: '',
    bufferCloseTags: [],
    add: function (tagName, content) {
        if (content === undefined) {
            content = '';
        }
        // this.buffer += `<${tagName}>${content}</${tagName}>`;
        this.buffer += `<${tagName}>${content}`;
        this.bufferCloseTags.push(tagName);
        //console.log(this.bufferCloseTags);
        return this;
    },
    render: function () {
        let bufferCopy = this.buffer;
        let closeTagsStr = '';

        this.bufferCloseTags.reverse();
        this.bufferCloseTags.forEach(function (value) {
            closeTagsStr += `</${value}>`

        });

        this.buffer = '';
        this.bufferCloseTags = [];

        bufferCopy += closeTagsStr;

        return bufferCopy;
    }
};
var helloList = ezjQuery
    .add('body') // <body></body>
    .add('div') // <body><div></div></body>
    .add('ul') // <body><div><ul></ul></div></body>
    .add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
    .render();
console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
//  Обратите внимание, что после вызова render создание строки началось сначала

var bodyDiv = ezjQuery
    .add('body') //<body></body>
    .add('div') //<body><div></div></body>
    .render();
console.log(bodyDiv); //<body><div></div></body>