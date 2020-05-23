'use strict';

const refs = {
	days: document.querySelector('.value[data-value="days"]'),
	hours: document.querySelector('.value[data-value="hours"]'),
	mins: document.querySelector('.value[data-value="mins"]'),
	secs: document.querySelector('.value[data-value="secs"]'),
	timeIsUp: document.getElementById('timer-1'),
};

class CountdownTimer {
	constructor({ selector, targetDate }) {
		this.selector = selector;
		this.targetDate = targetDate;
	}

	timerValue = setInterval(() => {
		const currentTime = Date.now();
		const time = this.targetDate - currentTime;
		this.updateTime(time);
		this.finishTime(time);
	}, 1000);

	updateTime(time) {
		const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
		const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
		const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
		const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
		refs.days.textContent = `${days}`;
		refs.hours.textContent = `${hours}`;
		refs.mins.textContent = `${mins}`;
		refs.secs.textContent = `${secs}`;
	}

	pad(value) {
		return String(value).padStart(2, '0');
	}

	finishTime(time) {
		if (time <= 0) {
			clearInterval(this.timerValue);
			refs.timeIsUp.textContent = 'Time is up!';
		}
	}
}

new CountdownTimer({
	selector: '#timer-1',
	targetDate: new Date('May 27, 2020'),
});
