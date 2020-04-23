'use strict';
const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const ingredientsHTML = document.querySelector('#ingredients');
const fragment = document.createDocumentFragment();
const ingredientsList = ingredients.forEach(el => {
	let someIngridients = document.createElement('li');
	someIngridients.textContent = el;
	fragment.appendChild(someIngridients);
});
ingredientsHTML.appendChild(fragment);
