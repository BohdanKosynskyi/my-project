function userName(){
const name = prompt('Як вас звати?');
	alert('Привіт, ' + name)
}

function year(){
const year = 2025;
const birthtYear = prompt('В якому році ви народилися?')
alert('Вам ' + (year - birthtYear) +' років')
}

function lenght(){
const lenght = prompt('Введіть довжину сторони квадрата')
alert('Периметр вашого квадрата дорівнює ' + lenght*4)
}

function radius(){
const radius = prompt('Введіть радіус кола')
alert('Площа окружності кола складає '+ (Math.PI * (radius * radius )).toFixed(0) + ' сантиметрів')
}

function distanse(){
const distanse = prompt('Яка відстань між містами в кілометрах?')
const time = prompt('За скільки годин ви плануєте дістатися до міста?')
confirm('Щоб проїхати ' + distanse + ' кілометрів за ' + time + ' годин, вам потрібно в середньому їхати зі швидкістю ' 
	+ distanse / time + ' кілометрів на годину')
}

function rate(){
const rate = 0.8527;
const usdQty = prompt('Яку суму долларів ви хочете поміняти на евро?')
const usersQty = (usdQty * rate).toFixed(2)
confirm('Ви отримаєте ' + usersQty + ' евро')
}