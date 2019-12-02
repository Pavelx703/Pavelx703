'use strict';

let input;
const numbers = [];
let total = 0;

while (input !== null) {
	input = prompt('Введите число', '');

	if (input === null) {
		break;
	}
	input = Number(input);
	if (Number.isNaN(input)) {
		alert('Было введено не число,попробуйте еще раз');
		continue;
	}
	numbers.push(input);
}
for (let i of numbers) {
	total += i;
}
console.log(`Общая сумма чисел равна ${total}`);
