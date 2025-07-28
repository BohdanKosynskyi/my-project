// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
function plus(){
	const a = 0.1
	const b = 0.2
	const c = a + b
	alert(c.toFixed(1))
}

// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
function plusSecond(){
	const a = '1'
	const b = 2
	const c = +a + b
	alert(c)
}
// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
function usb(){
	const usbCapacity = prompt('Введіть обсяг флешки')
	const qty = Math.floor((usbCapacity * 1024) / 820).toFixed(0)
	alert('Ваша флешка може вмістити ' + qty + ' файлів')
}

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
function chocolate(){
	const walletSum = prompt('Сума грошей в гаманці')
	const chocolatePrice = prompt('Ціна однієї шоколадки')
	const chocolatQty = Math.floor(walletSum / chocolatePrice).toFixed(0)
	const restSum = walletSum % chocolatePrice
	alert('Ви можете придбати ' + chocolatQty + ' шоколадок, та у вас ще залишиться ' + restSum + ' UAH')
}
// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
function numbers(){
	const userNumber = prompt('Введіть число')
	const someNumber = userNumber % 10;
	const tens = Math.floor((userNumber % 100) / 10);
	const hundreds = Math.floor(userNumber / 100);
	const reversed = someNumber * 100 + tens * 10 + hundreds;
	alert('Ваше число задом наперед буде ' + reversed)
}

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
function bank(){
	const deposit = +prompt('Яку суму плануєте внести?')
	const percent = 5
	const total = ((deposit * (percent / 100)) / 6).toFixed(2)
	alert('Відсотки за 2 місяці складуть ' + total + ' UAH')
}

// Що повернуть вирази:
//  2 && 0 && 3 поверне 0

//  2 || 0 || 3 поверне 2

// 2 && 0 || 3 поверне 3

