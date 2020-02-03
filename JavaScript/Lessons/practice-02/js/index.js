'use strict';

// 6 ложных(falsy) значений, приводящихся к false
// в логическом преобразовании:

//             0
//            NaN
//            null
//          undefined
//       пустая строка: "" или ''
//            false

// Абсолютно все остальное приводится к true.

// function formatString(string, limit) {
// 	limit = 40;
// 	if (string.length <= limit) return string;
// 	string = string.slice(0, limit);
// 	// const lastSpace = string.lastIndexOf(' ');
// 	// if (lastSpace > 0) {
// 	// 	string = string.substr(0, lastSpace);
// 	// }
// 	//в случае, если надо обрезать до последнего целого слова
// 	return string + '...';
// }

// =======Передача функции как аргумента

// function repeat(n, action) {
// 	for (let i = 0; i < n; i += 1) {
// 		action(i);
// 	}
// }
// repeat(5, console.log);

//  ======= метод Object.entries()

// const hotel = {
// 	name: 'Resort Hotel',
// 	stars: 5,
// 	capacity: 100,
// };

// const entries = Object.entries(hotel);
// console.log(entries);

// for (const entry of entries) {
// 	const key = entry[0];
// 	const value = entry[1];

// 	console.log(`${key}: ${value}`);
// }
const range = {
	from: 1,
	to: 12,
	*[Symbol.iterator]() {
		for (let i = this.from; i < this.to; i++) {
			yield i;
		}
	},
};
console.log('range' [...range]);