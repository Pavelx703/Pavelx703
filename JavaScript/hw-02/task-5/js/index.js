'use strict';

function checkForSpam(str) {
	str = str.toLowerCase();
	const forbiddenWordFirst = 'spam';
	const forbiddenWordSecond = 'sale';
	const spamDetected = true;
	const spamNotDetected = false;
	if (str.includes(forbiddenWordFirst) || str.includes(forbiddenWordSecond))
		return spamDetected;
	else return spamNotDetected;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
