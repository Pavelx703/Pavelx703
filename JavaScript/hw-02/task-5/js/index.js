'use strict';

// function checkForSpam(str) {
// 	str = str.toLowerCase();
// 	const forbiddenWordFirst = 'spam';
// 	const forbiddenWordSecond = 'sale';
// 	if (str.includes(forbiddenWordFirst) || str.includes(forbiddenWordSecond)) return true;
// 	else return false;
// }
// const checkForSpam = str => {
// 	const source = str.toLowerCase();
// 	return source.includes('spam') || source.includes('sale');
// };

// Продвинутый пример с использованием замыкания
// 	- частичное применение функций(будем еще учить):
const checkForSpam = setSpamWords('spam', 'sale');
function setSpamWords(...spamWords) {
	return function checkInclude(s) {
		const arg = [...spamWords];
		s = s.toLowerCase();
		for (let i = 0; i < arg.length; i += 1) {
			if (s.includes(arg[i])) return true;
		}
		return false;
	};
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
