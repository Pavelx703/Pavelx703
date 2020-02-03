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
// воля 239
// газ
// электро(текущ 28665)(предыдущ 28290)(разница 7)
// гор вода(текущ 7.8)(предыдущ 1.3)(разница 7)
// отопление
// хол вода(текущ 16.3)(предыдущ 12.1)(разница 4)
// ГИОЦ

// =======Передача функции как аргумента

function repeat(n, action) {
	for (let i = 0; i < n; i += 1) {
		action(i);
	}
}
repeat(5, console.log);

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
