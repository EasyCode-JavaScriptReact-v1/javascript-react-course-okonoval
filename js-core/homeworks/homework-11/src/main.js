//hw11


/*
 *
 * Сделайте 4 объекта - не усложняйте, просто наследование
 * через __proto__
 - Пользователь +
 - Верифицированный пользователь(админ) +
 - Гость +
 - База данных +
 - База хранит информацию о пользователях +
 - Пользователи знают мыло админа +
 - админ знает пароль от базы данных +
 - Гости могут зарегистрироваться в базе данных
 *
 * */

let user = {
    name: 'userName',
    password: 'qazwsx'
}
let admin = {
    name: 'admin',
    password: 'admin88',
    adminEmail: 'adminMail@gmail.com'
}

let quest = {d}
let dataBase = {
    password: 'base',
}
dataBase.__proto__ = user;
user.__proto__.adminEmail = admin.adminEmail;
admin.__proto__ = dataBase;

console.log(user);
console.log(admin);
console.log(quest);
console.log(dataBase);


