
function userCar(){
	const car = {
	brand: 'Toyota',
	model: 'Camry',
	year: 2023,
	avgSpeed: 90,
	fuelCapacity: 70,
	avgFuelConsumption: 9,
	drivers: ['Bohdan', 'Theo'],

	carInfo(){
		alert(`Brand: ${this.brand}, Model ${this.model}, Year: ${this.year}, Drivers: ${this.drivers.join(', ')}`)
	},

	checkDriver(name){
		if (this.drivers.includes(name)){
			alert(`${name} є у списку`)
		} else {
			alert(`${name} немає в списку`)
		}
	},

	calculateTime(distance){
		const time = distance / this.avgSpeed
		const breaks = Math.floor(time / 4)
		const totalTime = time + breaks

		alert(`Загальний час у дорозі буде ${totalTime.toFixed(2)} години`)
	}
}
car.drivers.push('Vladislav')
car.checkDriver(prompt('Вкажіть ім`я водія англійською мовою'))
car.carInfo()
let distance = +prompt('Яку дистанцію плануєте проїхати?')
car.calculateTime(distance)

let fuel = (car.avgFuelConsumption * distance) / 100
alert(`Для подолання ${distance} км, ви витратите ${fuel} літрів палива`)

}


function currentTime(){
	let time = {
		hours: 18,
		minutes: 57,
		seconds: 42,
		showTime(){
			alert(`Під час написання данного коду на годиннику автора було ${this.hours} годин ${this.minutes} хвилин та ${this.seconds} секунд`)
		},

		addSeconds(sec){
			this.seconds += sec;
			this.minutes += Math.floor(this.seconds / 60)
			this.seconds %= 60
			this.hours += Math.floor(this.minutes / 60)
			this.minutes %= 60
			this.hours %= 24
		}
	}
	time.showTime()
	let userTime = +prompt('Введіть кількість секунд яку ви хочете додати до часу')
	
	if (!isNaN(userTime)){
		time.addSeconds(userTime)
		time.showTime()
	} elsr{
		alert('Впишіть коректне число')
	}
	
}


function object(){
	const exampleOne = {
		numerator: 3,
		denominator: 4
	}
	const exampleTwo = {
		numerator: 5,
		denominator: 6
	}
	const numSumPlus = exampleOne.numerator * exampleTwo.denominator + exampleTwo.numerator * exampleOne.denominator
	const denumSumPlus = exampleOne.denominator * exampleTwo.denominator 

	alert(`Сума дробів 3/4 та 5/6 буде ${numSumPlus}/${denumSumPlus}`)

	const numSumMinus = exampleOne.numerator * exampleTwo.denominator - exampleTwo.numerator * exampleOne.denominator
	const denumSumMinus = exampleOne.denominator * exampleTwo.denominator 

	alert(`Віднімання дробів 3/4 від 5/6 буде ${numSumMinus}/${denumSumMinus}`)

	let numMultiple = exampleOne.numerator * exampleTwo.numerator
	let denMultiple = exampleOne.denominator * exampleTwo.denominator
	function nsd(a, b) {
		return b === 0 ? a : nsd(b, a % b);
	}

	const divisor = nsd(numMultiple, denMultiple)
	numMultiple = numMultiple / divisor
	denMultiple = denMultiple / divisor

	alert(`Множення дробів 3/4 та 5/6 буде ${numMultiple/denMultiple}`)

	const recNum = exampleTwo.denominator
	const recDen = exampleTwo.numerator
	let numDev = exampleOne.numerator * recNum
	let denDev = exampleOne.denominator * recDen

	const divisorDevide = nsd(numDev, denDev)
	numDev = numDev / divisorDevide
	denDev = denDev / divisorDevide

	alert(`Ділення дробів 3/4 та 5/6 буде ${numDev/denDev}`)

	const divisorLeftOne = nsd(exampleOne.numerator, exampleOne.denominator)
	exampleOne.numerator /= divisorLeftOne
	exampleOne.denominator /= divisorLeftOne
	
	const divisorLeftTwo = nsd(exampleTwo.numerator, exampleTwo.denominator)
	exampleTwo.numerator /= divisorLeftTwo
	exampleTwo.denominator /= divisorLeftTwo

	alert(`Скорочення дробів 3/4 буде ${exampleOne.numerator/exampleOne.denominator} та 5/6 буде ${(exampleTwo.numerator/exampleTwo.denominator).toFixed(2)}`)
}