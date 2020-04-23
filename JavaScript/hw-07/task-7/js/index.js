'use strict';

const input = document.getElementById('font-size-control');
const span = document.getElementById('text');
input.addEventListener('input', inp => {
	span.style.fontSize = `${inp.target.value}px`;
});
