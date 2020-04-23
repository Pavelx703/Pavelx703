'use strict';
const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector('#value');
const increment = function () {
	const currentValue = Number(counterValue.textContent) + 1;
	counterValue.textContent = currentValue;
};
incrementButton.addEventListener('click', increment);
const decrement = function () {
	const currentValue = Number(counterValue.textContent) - 1;
	counterValue.textContent = currentValue;
};
decrementButton.addEventListener('click', decrement);
console.log(counterValue.textContent);
increment();
console.log(counterValue.textContent);
decrement();
console.log(counterValue.textContent);
