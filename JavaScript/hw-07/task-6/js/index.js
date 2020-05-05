'use strict';
const input = document.getElementById('validation-input');
input.addEventListener('blur', inp => {
	if (Number(input.getAttribute('data-length')) === inp.target.value.length) {
		input.classList.remove('invalid');
		input.classList.add('valid');
	} else {
		input.classList.remove('valid');
		input.classList.add('invalid');
	}
});
