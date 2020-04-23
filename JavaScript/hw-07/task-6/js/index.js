'use strict';
const input = document.getElementById('validation-input');
input.addEventListener('blur', inp => {
	if (Number(input.getAttribute('data-length')) === inp.target.value.length) {
		input.className = 'valid';
	} else {
		input.className = 'invalid';
	}
});
