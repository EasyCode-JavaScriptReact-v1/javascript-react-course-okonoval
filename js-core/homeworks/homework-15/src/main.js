/*
TASK 0
Проверьте что строка содержит все символы от "a" до "z"
  solution("wyyga") // false
  solution("qwertyuioplkjhgfdsazxcvbnm") // true
  solution("ejuxggfsts") // false
  solution("qpwoeirutyalskdjfhgmznxbcv") // true
  solution("qqqqqqqqpwoeirutyallskkdjfhgmmznxbcv") // true
  solution("0123456789abcdefghijklmnop") // false
*/



const solution = inputStr => {
    let pattern = 'abcdefghijklmnopqrstuvwxyz';
    let arr = pattern.split('');
    let hasAllCharacters = true;

    for (let i = 0; i < arr.length; i++) {
        let checkSymbol = arr[i];
        //console.log(checkSymbol, inputStr.includes(checkSymbol));
        if (!inputStr.includes(checkSymbol)) {
            hasAllCharacters = false;
            break;
        }
    }
    return hasAllCharacters;
};
console.log(solution("wyyga"));
console.log(solution("qwertyuioplkjhgfdsazxcvbnm"));
console.log(solution("ejuxggfsts") );
console.log(solution("qpwoeirutyalskdjfhgmznxbcv"));
console.log(solution("qqqqqqqqpwoeirutyallskkdjfhgmmznxbcv"));
console.log(solution("0123456789abcdefghijklmnop"));


/*
TASK 2
Виртуализировать таблицу, сделать рендер всей
таблицы через JavaScript.
*/

let contacts = [
    {firstName: 'Alex', lastName: 'Len', email: 'Alex23@gmail.com'},
    {firstName: 'Barak', lastName: 'Obama', email: 'barak61.gov.us'},
    {firstName: 'Alex', lastName: 'Len', email: 'Alex23@gmail.com'},
    {firstName: 'Barak', lastName: 'Obama', email: 'barak61.gov.us'},
    {firstName: 'Alex', lastName: 'Len', email: 'Alex23@gmail.com'},
    {firstName: 'Barak', lastName: 'Obama', email: 'barak61.gov.us'},
    {firstName: 'Alex', lastName: 'Len', email: 'Alex23@gmail.com'},
    {firstName: 'Barak', lastName: 'Obama', email: 'barak61.gov.us'},
    {firstName: 'Alex', lastName: 'Len', email: 'Alex23@gmail.com'},
];
let contactsHeader = [ 'Name' , 'Last Name' ,'Email'];
const app = {
    contacts: contacts,
    contactsHeader : contactsHeader,
    render() {
        const table = this.newEl('table');
        table.setAttribute('class', 'table table-hover contacts')
        const thead = this.newEl('thead');
        const tbody = this.newEl('tbody');
        const tr = this.newEl('tr');

        document.getElementById('phoneBookWrapper').appendChild(table);
        table.appendChild(thead);
        table.appendChild(tbody);

        this.contactsHeader.forEach( inputHeading => {
            const th = this.newEl('th');
            th.textContent = inputHeading;
            //console.log(th);
            thead.appendChild(tr);
            tr.appendChild(th);
        });

        for (let key in contacts){
            const contact = contacts[key];
            const tr = this.newEl('tr');

            this.appendContactField(tr, contact.firstName);
            this.appendContactField(tr, contact.lastName);
            this.appendContactField(tr, contact.email);

            tbody.appendChild(tr);
        }
    },

    appendContactField(tr, val) {
        const td = this.newEl('td');
        td.textContent = val;
        tr.appendChild(td);
    },
    newEl(elName) {
        return document.createElement(elName);
    }
}

app.render();