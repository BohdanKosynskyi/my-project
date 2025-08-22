//Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього
//стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.
let header = ['#', 'fruit', 'price', 'weight']

let list = [
    { position: 1, fruit: 'apple', price: 80, currency: 'UAH', weight: 1.2 + ' kg'},
    { position: 2, fruit: 'banana', price: 65, currency: 'UAH', weight: 1.1 + ' kg'},
    { position: 3, fruit: 'orange', price: 72, currency: 'UAH', weight: 1.3 + ' kg'},
    { position: 4, fruit: 'blueberry', price: 130, currency: 'UAH', weight: 0.8 + ' kg'},
    { position: 5, fruit: 'kiwi', price: 86, currency: 'UAH', weight: 0.9 + ' kg'},
    { position: 6, fruit: 'grape', price: 212, currency: 'UAH', weight: 1.0 + ' kg'},
    { position: 7, fruit: 'mango', price: 270, currency: 'UAH', weight: 1.5 + ' kg'},
    { position: 8, fruit: 'pear', price: 123, currency: 'UAH', weight: 1.1 + ' kg'},
    { position: 9, fruit: 'pineapple', price: 180, currency: 'UAH', weight: 2.5 + ' kg'},
    { position: 10, fruit: 'plum', price: 90, currency: 'UAH', weight: 0.7 + ' kg'},
    { position: 11, fruit: 'peach', price: 110, currency: 'UAH', weight: 1.3 + ' kg'},
    { position: 12, fruit: 'cherry', price: 210, currency: 'UAH', weight: 0.5 + ' kg'},
    { position: 13, fruit: 'lemon', price: 20, currency: 'UAH', weight: 0.6 + ' kg'},
    { position: 14, fruit: 'lime', price: 40, currency: 'UAH', weight: 0.6 + ' kg'},
    { position: 15, fruit: 'apricot', price: 80, currency: 'UAH', weight: 0.9 + ' kg'},
    { position: 16, fruit: 'nectarine', price: 112, currency: 'UAH', weight: 1.2 + ' kg'},
    { position: 17, fruit: 'strawberry', price: 180, currency: 'UAH', weight: 0.4 + ' kg'},
    { position: 18, fruit: 'raspberry', price: 148, currency: 'UAH', weight: 0.3 + ' kg'},
    { position: 19, fruit: 'blackberry', price: 168, currency: 'UAH', weight: 0.4 + ' kg'},
    { position: 20, fruit: 'papaya', price: 258, currency: 'UAH', weight: 1.8 + ' kg'}
];



let table = document.createElement('table')
document.body.appendChild(table)

let sort = {}

function createRow(cellArray, isHeader = false) {
    let row = document.createElement('tr');
    for (let i = 0; i < cellArray.length; i++) {
        let cell = isHeader ? document.createElement('th') : document.createElement('td');
        cell.innerText = cellArray[i];
        if (isHeader){
            cell.addEventListener('click', () => columnSort(i))
        }
        row.appendChild(cell);
    }
    return row;
}

let headerRow = createRow(header, true)
table.appendChild(headerRow)

for (let item of list){
    let dataRow = createRow([item.position, item.fruit, item.price, item.weight])
    table.appendChild(dataRow)
}

function erase(){
    table.innerHTML = ''
    let headerRow = createRow(header, true)
    table.appendChild(headerRow)

    for (let item of list){
        let row = createRow([item.position, item.fruit, item.price, item.weight])
        table.appendChild(row)
    }
}

function render(){
    table.innerHTML = ''
    let headerRow = createRow(header, true)
    table.appendChild(headerRow)

    for (let item of list){
        let row = createRow([item.position, item.fruit, item.price, item.weight])
        table.appendChild(row)
    }
}

function columnSort(index){
    let keys = ['position', 'fruit', 'price', 'weight']
    let key = keys[index]

    sort[key] = !sort[key]

    list.sort((a, b) => {
        let aVal = a[key]
        let bVal = b[key]

        if(key === 'weight'){
            aVal = parseFloat(aVal)
            bVal = parseFloat(bVal)
        }

        if (typeof aVal === 'string'){
            return sort[key]
            ? aVal.localeCompare(bVal)
            : bVal.localeCompare(aVal)
        } else{
            return sort[key]
            ? aVal - bVal
            : bVal - aVal
        }
    })
    render()
}
render()