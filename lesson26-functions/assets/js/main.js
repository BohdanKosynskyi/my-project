
// Напиши всі можливі варіанти створення функцій.

function first(){
	const a = ('first function')
	alert(a)
}

let second = function(){
	let a = ('second')
	let b = (' function')
	alert(a + b)
}

let third = (a, b) => a + b
	
// Створи функцію, яка буде виводити кількість переданих їй аргументів.

function userArguments(){
	const argumentsQty = prompt('Введіть аргументи через пробіл')
	let qty = argumentsQty.split(' ')
	alert(qty.length)
}

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function getNumber(){
	const firstNumber = +prompt('Ввесдіть перше число')
	const secondNumber = +prompt('Ввесдіть друге число')

	if(firstNumber > secondNumber){
		return -1
	} else if(firstNumber < secondNumber){
		return 1
	} else {
		return 0
	}
}

// Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(){
	
	const userNumber = +prompt('Ввесдіть число')
	let result = 1

	if(isNaN(userNumber) || userNumber <= 0){
		alert('Введіть число більше 0')
		return
	} 

	for(let i = 1; i <= userNumber; i++){
		result *= i
	}
	alert('факторіал числа ' + userNumber + ' буде ' + result)
}

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function threeNumbers(){
	const first = +prompt('Введіть перше число')
	const second = +prompt('Введіть друге число')
	const third = +prompt('Введіть трете число')

	const sum = first * 100 + second * 10 + third

	alert('Числа разом: ' + sum)
}

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function triangel(){
	const width = prompt('Ввесдіть ширину')
	const height = prompt('Ввесдіть висоту')
	let answer

	if (isNaN(width) && !isNaN(height)){
		answer = height * height
	} else if (isNaN(height) && !isNaN(width)){
		answer = width * width
	} else if (!isNaN(width) && !isNaN(height)){
		answer = width * height
	} else{
		alert('Спробуйте ще раз')
		return
	}
	alert(answer)
}

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function perfectNumber(number){

	let someNumber = 1
	for(let i = 2; i * i <=number; i++){
		if(number % i === 0){
			someNumber += i
			if(i * i !== number){
				someNumber += number / i
			}
		}
	}
	return someNumber === number
}

function perfectNumberFunc(){
	const userPerfectNumber = prompt('Введіть число')
	if (userPerfectNumber === null){
		alert('Відміна')
	} else{
		const number = +userPerfectNumber
		if (isNaN(number) || number <= 0){
			alert('Введіть число більше за 0')
		} else{
			if(perfectNumber(number)){
				alert(number + ' досконале число')
			} else{
				alert(number + ' не досконале число')
			}
		}
	}
}

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function minMaxPerfect(){
	const min = +prompt('Введіть мінімальне число')
	const max = +prompt('Введіть максимальне число')
	const perfectArr = []
	if(min >= max){
		alert('Невірне значення')
		return
	}

	for(let i = min; i <= max; i++){
		if (perfectNumber(i)){
			perfectArr.push(i)
		}
	}
	alert('У проміжку який ви вказали є досконалі числа, а саме ' + perfectArr.join(', '))
}

