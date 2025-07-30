// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

function Age() {
	const userAge = Math.floor(+prompt('Вкажіть ваш вік'))

	if (userAge <= 11){
		alert('Ви ще дитина')
	} else if (userAge <= 17){
		alert('Ви підліток')
	} else if (userAge <= 59){
		alert('Ви вже дорослий')
	} else if (60 <= userAge){
		alert('Ви пенсіонер')
	} else {
		alert('Невірне значення')
	}
}

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

function symbol() {
	const userSymbol = +prompt('Вкажіть чило від 0 до 9')

	switch (userSymbol){
		case 0:
			alert(')')
			break
		case 1:
			alert('!')
			break
		case 2:
			alert('@')
			break
		case 3:
			alert('#')
			break
		case 4:
			alert('$')
			break
		case 5:
			alert('%')
			break
		case 6:
			alert('^')
			break
		case 7:
			alert('&')
			break
		case 8:
			alert('*')
			break
		case 9:
			alert('(')
			break
		default:
			alert('Ви ввели невірне значення')
	}
}

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
function sumArray(start, end){
	const firstNum = +prompt('Введіть перше значення')
	const secondtNum = +prompt('Введіть останне значення')
	let sum = 0

	if(firstNum >= secondtNum){
		alert('Спробуйте ще раз')
	} else { 
		for (let i = firstNum; i <= secondtNum; i++){
		sum +=i
	}
	alert('Сума чисел у діапазоні з ' + firstNum + ' по ' + secondtNum + ' буде ' + sum)
	}
}

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

function devide(){

	const devideNum = (a, b) =>{
		if (b!==0) {
			const c = a % b
			return devideNum(b, c)
		}
		return a
	}

	const firstNum = +prompt('Введіть перше число для найбільшого дільника')
	const secondNum = +prompt('Введіть друге число для найбільшого дільника')
	alert('Найбільший дільник буде '+ devideNum(firstNum, secondNum))

}


// Запитай у користувача число і виведи всі дільники цього числа.

function allDevide() {
    let a = +prompt('Введіть число для пошуку дільників');
    let devideAll = [];


    for (let i = 1; i <= a; i++) {
        if (a % i === 0) {
            devideAll.push(i);
        }
    }

    alert('Дільники числа ' + a + ': ' + devideAll.join(', '));
}


// Норма

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

function palindrom(){
	const userNumber = prompt('Введіть число')
	const reverseUserNumber = userNumber.split('').reverse().join('')
	const result = userNumber === reverseUserNumber
	
	alert(result ? 'Паліндром' : 'Не паліндром')
	return result
}

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

function discount(){
	let totalSum = +prompt('Яка вартість товарів?')

	while(isNaN(totalSum) || totalSum <=0 ){
		alert('Ведіть коректну суму')
		totalSum = +prompt('Яка вартість товарів?')
	}

	if(200 <= totalSum && totalSum <= 299){
		const saleSum = totalSum - (totalSum * (3 /100))
		const saleSumTotal = saleSum.toFixed(2)
		alert('Сума зі знижкою ' + saleSumTotal + ' грн')
	} else if(300 <= totalSum && totalSum <= 500){
		const saleSum = totalSum - (totalSum * (5 /100))
		const saleSumTotal = saleSum.toFixed(2)
		alert('Сума зі знижкою ' + saleSumTotal + ' грн')
	} else if(500 <= totalSum){
		const saleSum = totalSum - (totalSum * (7 /100))
		const saleSumTotal = saleSum.toFixed(2)
		alert('Сума зі знижкою ' + saleSumTotal + ' грн')
	} else {
		alert('Нажаль знижки не буде, сума до сплати ' + totalSum + ' грн')
	}
}
// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

function tenNumbers() {
	let arr = prompt('Введіть 10 чисел через кому')
	let stringArray = arr.trim().split(',')
	let numArray = stringArray.map(num => +num.trim())
	let positive = numArray.filter(arr => arr > 0)
	let negative = numArray.filter(arr => arr < 0)
	let zero = numArray.filter(arr => arr === 0)
	let pair = numArray.filter(arr => arr % 2 === 0)
	let nonPair = numArray.filter(arr => arr % 2 === 1)
	alert('Додатні числа: ' + positive.join(', ') + ' , загалом штук: ' + positive.length + 'від`ємні числа: ' + negative.join(', ') + ',  загалом штук: ' + negative.length + ' нульві числа: ' + zero.join(', ') + ',  загалом штук: ' + zero.length + ' парні числа: ' + pair.join(', ') + ', ' + pair.length + ' непарні: ' + nonPair.join(', ') + '  загалом штук: ' + nonPair.length)
}

// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
function weekDay() {
	let weekArr = ['понеділок', 'вівторок', 'середа', 'четвер', 'пя`тниця', 'субота', 'неділя']
	let i = 0

	while (true) {
		let result = confirm(weekArr[i] + ', бажаєте побачити наступний день?')

		if (!result){
			break
		}

		i = (i + 1) % weekArr.length
	}
}

// Максимум

// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").



// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
// Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
