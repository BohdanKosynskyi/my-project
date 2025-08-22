// Створити HTML-сторінку для відображення/редагування тексту. 
//     При відкритті сторінки текст відображається за допомогою тега div. 
//     При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. 
//     При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. 
//     Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

let textDiv = document.createElement('div')
textDiv.id = 'textZoneDiv'
textDiv.classList.add('zoneTextDiv')

let textSpan = document.createElement('span')
textSpan.id = 'editText'
textSpan.classList.add('textEdit')
textSpan.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Repudiandae ea delectus vel ullam iusto est corrupti enim nobis saepe aliquam, alias cumque possimus. 
    Esse rem voluptatum architecto vero nam quae. Molestiae enim minima natus modi blanditiis consequuntur 
    aliquid suscipit, quod similique vero perspiciatis quo, explicabo cumque animi quidem dolor illo architecto 
    commodi, voluptates expedita labore ex et atque. Corporis, voluptatum?`

document.body.appendChild(textDiv)
textDiv.appendChild(textSpan)

let editor = document.createElement('textarea')
editor.id = 'edit'
editor.classList.add('editTextarea')
document.body.appendChild(editor)

document.addEventListener('keydown', function(event){
    if(event.ctrlKey && event.key.toLowerCase() === 'e'){
        event.preventDefault()
        editText()
    }
})

document.addEventListener('keydown', function(event){
    if(event.ctrlKey && event.key.toLowerCase() === 's'){
        event.preventDefault()
        saveText()
    }
})

function editText(){
    editor.value = textSpan.innerText
    textDiv.style.display = 'none'
    editor.style.display = 'block'
    editor.focus()
}

function saveText(){
    textSpan.innerText = editor.value
    textDiv.style.display = 'block'
    editor.style.display = 'none'
}