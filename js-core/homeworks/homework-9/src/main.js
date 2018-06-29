//hw9
console.log('***task1***');


// Отобразите достаточно ли у developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого
// разработчика метод isGoodDev --

/*
 * Количество требований к разработчику совпадает с его навыками.
 * Используйте в задаче this
 * */

let developer1 = {
    skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
    requirements: ['Node.js', 'JavaScript', 'OOP', 'PHP'],
    isGoodDev: goodDevGlobal
};
let developer2 = {
    experience: [
        {technology: 'java'},
        {technology: 'c++'},
        {technology: 'aws'},
        {technology: 'docker'}
    ],
    requirements: ['java', 'json', 'c++', 'JavaScript'],
    isGoodDev: goodDevGlobal

};

function goodDevGlobal(dev) {
    //console.log(this.requirements);
    let devThis = this;

    if (this.hasOwnProperty('skills')) {
        console.log('has skills');


        this.requirements.forEach(function (elem) {

            let searchResult;
            if (devThis.skills.indexOf(elem) === -1) {
                searchResult = 'fail';
            }
            else {
                searchResult = 'success';
            }
            console.log(`required: ${elem} ... ${searchResult}`);

        })
    }
    else if (this.hasOwnProperty('experience')) {
        console.log('has exp');
        this.requirements.forEach(function (reqElem) {

            let searchResult = 'fail';

            //console.log('22');
            // devThis.experience.forEach(function (expElem) {
            //     console.log(reqElem , expElem.technology);
            //     if(reqElem === expElem.technology){
            //         seachResult = 'success';
            //         return false;
            //     }
            //
            // })

            for(let key in devThis.experience){
                let expElem = devThis.experience[key];
                if(reqElem === expElem.technology){
                    searchResult = 'success';
                    break;
                }
            }
            console.log(`required: ${reqElem} ... ${searchResult}`);

        })
    }
}

console.log('**Developer1**');
developer1.isGoodDev();

console.log('**Developer2**');
developer2.isGoodDev();


console.log('***task2***');
/*
 *
 * TASK 2
 *
 *
 * Напишите функцию принимает 1 аргумент сортирует объект по
 * переданному значению (например age или name)
 *
 * При вызове функции используйте this
 *
 * */

let myObject = {
    database: [
        { age: 100, name: 'b' },
        { age: 15, name: 'c' },
        { age: 25, name: 'a' }
    ]
};


myObject.myFilter = function (sortKey) {
    var copy = this.database.slice(0);

    return copy.sort(function (p1, p2) {
        console.log(sortKey);
        var p1Val = p1[sortKey];
        var p2Val = p2[sortKey];
        // console.log(p1Val);
        if (p1Val < p2Val) {
            return -1;
        }
        else if (p1Val > p2Val) {
            return 1;
        }
        else if (p1Val === p2Val) {
            return 0;
        }
        //console.log(p1,p2);
    });

};

// {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}
console.log(myObject.myFilter('age'));

// {age:25, name:a}, {age:100, name: b} ...
 console.log(myObject.myFilter('name'));