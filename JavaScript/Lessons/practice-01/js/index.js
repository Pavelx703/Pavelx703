'use strict';

let names = ['Радар', 'Сканер', 'Дроид', 'Захват'];
let prices = [1300, 2700, 400, 1200];
const calculateTotalPrice = (arr, arg) => {
	// console.log(arg);
	// let names = [];
	// let prices = [];
	for (let product of products) {
		if (arg in product) {
			names.push(product[arg]);
			prices.push(product[arg]);
		}
	}
	return names, prices;
};
// console.log(names);
// console.log(prices);

const products = [
	{ name: 'Радар', price: 1300, quantity: 4 },
	{ name: 'Сканер', price: 2700, quantity: 3 },
	{ name: 'Дроид', price: 400, quantity: 7 },
	{ name: 'Захват', price: 1200, quantity: 2 },
];

// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800
console.log(calculateTotalPrice(products, 'name')); // 5200

console.log(calculateTotalPrice(products, 'price')); // 2800

const combine = (names, prices) => {
	// const combined = [];
	const obj = {};
	for (let i = 0; i < names.length; i += 1) {
		console.log(names);
		console.log(prices);

		const obj = {
			name: names[i],
			price: prices[i],
		};
	}
	return obj;
};

console.log(combine(names, prices));
