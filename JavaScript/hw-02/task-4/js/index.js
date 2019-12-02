'use strict';

function formatString(string, limit) {
	limit = 40;
	if (string.length <= limit) return string;
	string = string.slice(0, limit);
	return string + '...';
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
	formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'),
);
// вернется форматированная строка
