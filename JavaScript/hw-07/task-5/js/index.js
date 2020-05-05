'use strict';

const input = document.getElementById('name-input');
const span = document.getElementById('name-output');
input.addEventListener('input', inp => {
	span.textContent = inp.target.value || 'незнакомец';
});
