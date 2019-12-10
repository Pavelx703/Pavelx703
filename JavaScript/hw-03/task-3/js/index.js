'use strict';

const findBestEmployee = employees => {
	const keys = Object.keys(employees);
	let productiveEmployee = ' ';
	let biggestValue = 0;
	for (const key of keys) {
		if (biggestValue < employees[key]) {
			biggestValue = employees[key];
			productiveEmployee = key;
		}
	}
	return productiveEmployee;
};
// или так через Object.entries

// const findBestEmployee = employees => {
// 	const keys = Object.entries(employees);
// 	let productiveEmployee = ' ';
// 	let biggestValue = 0;
// 	for (const key of keys) {
// 		if (biggestValue < key[1]) {
// 			biggestValue = key[1];
// 			productiveEmployee = key[0];
// 		}
// 	}
// 	return productiveEmployee;
// };

console.log(
	findBestEmployee({
		ann: 36,
		david: 35,
		george: 77,
		helen: 1,
		lorence: 99,
	}),
); // lorence$

console.log(
	findBestEmployee({
		poly: 12,
		mango: 17,
		ajax: 4,
	}),
); // mango

console.log(
	findBestEmployee({
		lux: 147,
		david: 21,
		kiwi: 19,
		chelsy: 38,
	}),
); // lux
