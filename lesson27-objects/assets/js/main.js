const car = {
	brand: 'Toyota',
	model: 'Camry',
	year: 2023,
	avgSpeed: 90,
	fuelCapacity: 70,
	avgFuelConsumption: 9,
	drivers: ['Bohdan', 'Theo'],

	carInfo: function () {
		return `Brand: ${this.brand}<br>
			Model: ${this.model}<br>
			Year: ${this.year}<br>
			Average speed: ${this.avgSpeed} km/h<br>
			Fuel capacity: ${this.fuelCapacity} liters<br>
			Average fuel Consumption: ${this.avgFuelConsumption} l/100km<br>
			Drivers: ${this.drivers.join(', ')}`;
	},

	addDriver: function () {
		let input = document.getElementById('driverName');
		let name = input.value.trim();

		if (name) {
			this.drivers.push(name);
			input.value = '';
			this.showCarInfo();
		}
	},

	showCarInfo: function () {
		document.getElementById("car-info").innerHTML = this.carInfo();
	},

	checkDriver: function () {
		document.getElementById("check-driver").innerHTML = this.checkDriver();
	}
};




function checkDriver() {
	let input = document.getElementById('checkDriver');
	let name = input.value.trim();

	if (name) {
		if (car.drivers.includes(name)) {
			document.getElementById("driver-info").innerHTML = 
				`Driver ${name} is in the list`;
		} else {
			document.getElementById("driver-info").innerHTML = 
				`Driver ${name} is not in the list`;
		}
	}
}

function checkTime() {
	let input = document.getElementById('checkTime')
	let distance = parseFloat(input.value)
	const time = distance / car.avgSpeed;
	const breaks = Math.floor(time / 4);
	const totalTime = time + breaks;
	document.getElementById("check-time").innerHTML = 
	`Total time on the trip will be ${totalTime.toFixed(2)} hours`;

	let fuel = (car.avgFuelConsumption * distance) / 100;
	document.getElementById("check-time").innerHTML = 
	`For ${distance} km you will spend ${fuel} liters`;
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
		numerator: +document.getElementById('numerator1').value,
		denominator: +document.getElementById('denominator1').value
	}
	const exampleTwo = {
		numerator: +document.getElementById('numerator2').value,
		denominator: +document.getElementById('denominator2').value
	}
	const numSumPlus = exampleOne.numerator * exampleTwo.denominator + exampleTwo.numerator * exampleOne.denominator
	const denumSumPlus = exampleOne.denominator * exampleTwo.denominator

	document.getElementById("answer").innerHTML = `Сума дробів ${exampleOne.numerator}/${exampleOne.denominator} та ${exampleTwo.numerator}/${exampleTwo.denominator} буде ${(numSumPlus).toFixed(0)}/${(denumSumPlus).toFixed(0)}`;
}

function minus() {
	const exampleOne = {
		numerator: +document.getElementById('numerator1').value,
		denominator: +document.getElementById('denominator1').value
	}
	const exampleTwo = {
		numerator: +document.getElementById('numerator2').value,
		denominator: +document.getElementById('denominator2').value
	}
	const numSumMinus = exampleOne.numerator * exampleTwo.denominator - exampleTwo.numerator * exampleOne.denominator
	const denumSumMinus = exampleOne.denominator * exampleTwo.denominator

	document.getElementById("answer").innerHTML = `Віднімання дробів ${exampleOne.numerator}/${exampleOne.denominator} від ${exampleTwo.numerator}/${exampleTwo.denominator} буде ${(numSumMinus).toFixed(0)}/${(denumSumMinus).toFixed(0)}`
}

function multiply() {
	const exampleOne = {
		numerator: +document.getElementById('numerator1').value,
		denominator: +document.getElementById('denominator1').value
	}
	const exampleTwo = {
		numerator: +document.getElementById('numerator2').value,
		denominator: +document.getElementById('denominator2').value
	}
	let numMultiple = exampleOne.numerator * exampleTwo.numerator
	let denMultiple = exampleOne.denominator * exampleTwo.denominator
	function nsd(a, b) {
		return b === 0 ? a : nsd(b, a % b);
	}

	const divisor = nsd(numMultiple, denMultiple)
	numMultiple = numMultiple / divisor
	denMultiple = denMultiple / divisor

	document.getElementById("answer").innerHTML = `Множення дробів ${exampleOne.numerator}/${exampleOne.denominator} та ${exampleTwo.numerator}/${exampleTwo.denominator} буде ${(numMultiple).toFixed(0)} / ${(denMultiple).toFixed(0)}`
}

function devide() {
	const exampleOne = {
		numerator: +document.getElementById('numerator1').value,
		denominator: +document.getElementById('denominator1').value
	}
	const exampleTwo = {
		numerator: +document.getElementById('numerator2').value,
		denominator: +document.getElementById('denominator2').value
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

	document.getElementById("answer").innerHTML = `Ділення дробів ${exampleOne.numerator}/${exampleOne.denominator} та ${exampleTwo.numerator}/${exampleTwo.denominator} буде ${(numDev).toFixed(0)} / ${(denDev).toFixed(0)}`
}

function pruning() {
	const exampleOne = {
		numerator: +document.getElementById('numerator1').value,
		denominator: +document.getElementById('denominator1').value
	}
	const exampleTwo = {
		numerator: +document.getElementById('numerator2').value,
		denominator: +document.getElementById('denominator2').value
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

	document.getElementById("answer").innerHTML = `Скорочення дробів ${exampleOne.numerator}/${exampleOne.denominator} буде ${exampleOne.numerator / exampleOne.denominator} та ${exampleTwo.numerator}/${exampleTwo.denominator} буде ${(exampleTwo.numerator).toFixed(0)} / ${(exampleTwo.denominator).toFixed(0)}`
}