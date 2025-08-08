const car = {
	brand: 'Toyota',
	model: 'Camry',
	year: 2023,
	avgSpeed: 90,
	fuelCapacity: 70,
	avgFuelConsumption: 9,
	drivers: ['Bohdan', 'Theo'],

};

function carInfo() {
	alert(`Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year},Averege speed: ${avgSpeed} km/h, 
		Fuel capacity: ${fuelCapacity} liters, Averege fuel Consumption: ${avgFuelConsumption} l/100km, Drivers: ${car.drivers.join(', ')}`);
}

function addDriver() {
	let input = document.getElementById('driverName')
	let name = input.value.trim()

	if (name) {
		car.drivers.push(name)
		alert(`Driver ${name} added. Full drivers list are: ${car.drivers.join(', ')}`)
		input.value = ''
	}
}

function checkDriver() {
	let input = document.getElementById('checkDriver')
	let name = input.value.trim()

	if (car.drivers.includes(name)) {
		alert(`${name} is in the list`);
	} else {
		alert(`${name} is not in the list`);
	}
}

function checkTime() {
	let input = document.getElementById('checkTime')
	let distance = parseFloat(input.value)
	const time = distance / car.avgSpeed;
	const breaks = Math.floor(time / 4);
	const totalTime = time + breaks;
	alert(`Загальний час у дорозі буде ${totalTime.toFixed(2)} години`);

	let fuel = (car.avgFuelConsumption * distance) / 100;
	alert(`Для подолання ${distance} км, ви витратите ${fuel} літрів палива`);
	input.value = ''
}

let addSeconds = 0;
let addMinutes = 0;
let addHours = 0;
let baseTime = new Date();

function updateClock() {
	let now = new Date();
	let totalAddedSeconds = addSeconds + addMinutes * 60
	let adjustedTime = new Date(baseTime.getTime() + totalAddedSeconds * 1000 + (now.getTime() - baseTime.getTime()));
	let timeString = adjustedTime.toLocaleTimeString();
	document.getElementById('clock').innerHTML = timeString;
}

setInterval(updateClock, 1000);

function addSec() {
	let sec = +prompt('How many seconds would you like to add?');
	if (!isNaN(sec)) {
		addSeconds += sec;
	}
}

function addMin() {
	let min = +prompt('How many minutes would you like to add?');
	if (!isNaN(min)) {
		addSeconds += min * 60;
	}
}

function addHour() {
	let hour = +prompt('How many hours would you like to add?');
	if (!isNaN(hour)) {
		addSeconds += hour * 3600;
	}
}

function plus() {
	const exampleOne = {
		numerator: +prompt('Введіть верхню частину першого дробу'),
		denominator: +prompt('Введіть нижню частину першого дробу')
	}
	const exampleTwo = {
		numerator: +prompt('Введіть верхню частину другого дробу'),
		denominator: +prompt('Введіть нижню частину другого дробу')
	}
	const numSumPlus = exampleOne.numerator * exampleTwo.denominator + exampleTwo.numerator * exampleOne.denominator
	const denumSumPlus = exampleOne.denominator * exampleTwo.denominator

	alert(`Сума дробів ${exampleOne.numerator}/${exampleOne.denominator} та ${exampleTwo.numerator}/${exampleTwo.denominator} буде ${numSumPlus}/${denumSumPlus}`)

}
function minus() {
	const exampleOne = {
		numerator: +prompt('Введіть верхню частину першого дробу'),
		denominator: +prompt('Введіть нижню частину першого дробу')
	}
	const exampleTwo = {
		numerator: +prompt('Введіть верхню частину другого дробу'),
		denominator: +prompt('Введіть нижню частину другого дробу')
	}
	const numSumMinus = exampleOne.numerator * exampleTwo.denominator - exampleTwo.numerator * exampleOne.denominator
	const denumSumMinus = exampleOne.denominator * exampleTwo.denominator

	alert(`Віднімання дробів ${exampleOne.numerator}/${exampleOne.denominator} від ${exampleTwo.numerator}/${exampleTwo.denominator} буде ${numSumMinus}/${denumSumMinus}`)
}

function multiply() {
	const exampleOne = {
		numerator: +prompt('Введіть верхню частину першого дробу'),
		denominator: +prompt('Введіть нижню частину першого дробу')
	}
	const exampleTwo = {
		numerator: +prompt('Введіть верхню частину другого дробу'),
		denominator: +prompt('Введіть нижню частину другого дробу')
	}
	let numMultiple = exampleOne.numerator * exampleTwo.numerator
	let denMultiple = exampleOne.denominator * exampleTwo.denominator
	function nsd(a, b) {
		return b === 0 ? a : nsd(b, a % b);
	}

	const divisor = nsd(numMultiple, denMultiple)
	numMultiple = numMultiple / divisor
	denMultiple = denMultiple / divisor

	alert(`Множення дробів ${exampleOne.numerator}/${exampleOne.denominator} та ${exampleTwo.numerator}/${exampleTwo.denominator} буде ${numMultiple / denMultiple}`)
}

function devide() {
	const exampleOne = {
		numerator: +prompt('Введіть верхню частину першого дробу'),
		denominator: +prompt('Введіть нижню частину першого дробу')
	}
	const exampleTwo = {
		numerator: +prompt('Введіть верхню частину другого дробу'),
		denominator: +prompt('Введіть нижню частину другого дробу')
	}
	const recNum = exampleTwo.denominator
	const recDen = exampleTwo.numerator
	let numDev = exampleOne.numerator * recNum
	let denDev = exampleOne.denominator * recDen

	function nsd(a, b) {
		return b === 0 ? a : nsd(b, a % b);
	}

	const divisorDevide = nsd(numDev, denDev)
	numDev = numDev / divisorDevide
	denDev = denDev / divisorDevide

	alert(`Ділення дробів ${exampleOne.numerator}/${exampleOne.denominator} та ${exampleTwo.numerator}/${exampleTwo.denominator} буде ${numDev / denDev}`)
}

function pruning() {
	const exampleOne = {
		numerator: +prompt('Введіть верхню частину першого дробу'),
		denominator: +prompt('Введіть нижню частину першого дробу')
	}
	const exampleTwo = {
		numerator: +prompt('Введіть верхню частину другого дробу'),
		denominator: +prompt('Введіть нижню частину другого дробу')
	}

	function nsd(a, b) {
		return b === 0 ? a : nsd(b, a % b);
	}
	const divisorLeftOne = nsd(exampleOne.numerator, exampleOne.denominator)
	exampleOne.numerator /= divisorLeftOne
	exampleOne.denominator /= divisorLeftOne

	const divisorLeftTwo = nsd(exampleTwo.numerator, exampleTwo.denominator)
	exampleTwo.numerator /= divisorLeftTwo
	exampleTwo.denominator /= divisorLeftTwo

	alert(`Скорочення дробів ${exampleOne.numerator}/${exampleOne.denominator} буде ${exampleOne.numerator / exampleOne.denominator} та ${exampleTwo.numerator}/${exampleTwo.denominator} буде ${(exampleTwo.numerator / exampleTwo.denominator).toFixed(2)}`)
}