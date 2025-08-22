
// Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку
    // в правому нижньому кутку і тягнути її далі.
let textZone = document.createElement('div')
textZone.id = 'zoneForText'
textZone.classList.add('zoneForText')
document.body.appendChild(textZone)

let resizeElement = document.createElement('div')
resizeElement.id = 'resizeDiv'
resizeElement.classList.add('resize')
textZone.appendChild(resizeElement)

let resizing = false

resizeElement.addEventListener('mousedown', function(e){
    resizing = true

    document.addEventListener('mousemove', resize)
    document.addEventListener('mouseup', stopResize)
})

function resize(e){
    if(resizing){
        textZone.style.width = e.clientX - zoneForText.offsetLeft + 'px'
        textZone.style.height = e.clientY - zoneForText.offsetTop + 'px'
    }
}

function stopResize(){
    resizing = false
    document.removeEventListener('mousemove', resize)
    document.removeEventListener('mouseup', stopResize)
}