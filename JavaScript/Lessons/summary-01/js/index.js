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

function formatString(string, limit) {
	limit = 40;
	if (string.length <= limit) return string;
	string = string.slice(0, limit);
	// const lastSpace = string.lastIndexOf(' ');
	// if (lastSpace > 0) {
	// 	string = string.substr(0, lastSpace);
	// }
	//в случае, если надо обрезать до последнего целого слова
	return string + '...';
}
