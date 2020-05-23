'use strict';

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const refs = {
	startBtn: document.querySelector('button[data-action="start"]'),
	stopBtn: document.querySelector('button[data-action="stop"]'),
	body: document.querySelector('body'),
};

const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorChanger = {
	isActive: false,
	start() {
		if (this.isActive) {
			return;
		}

		this.isActive = true;
		this.switchColors = setInterval(() => {
			const min = 0;
			const max = colors.length - 1;
			let index = randomIntegerFromInterval(min, max);
			refs.body.style.backgroundColor = colors[index];
		}, 1000);
	},
	stop() {
		clearInterval(this.switchColors);
		this.isActive = false;
	},
};

refs.startBtn.addEventListener('click', colorChanger.start.bind(colorChanger));
refs.stopBtn.addEventListener('click', colorChanger.stop.bind(colorChanger));
