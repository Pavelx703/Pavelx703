'use strict';

class Car {
	static getSpecs(car) {
		console.log(
			`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`,
		);
	}
	constructor({ maxSpeed, price }) {
		this.speed = 0;
		this.price = price;
		this.maxSpeed = maxSpeed;
		this.isOn = false;
		this.distance = 0;
	}
	set price(value) {
		this._price = value;
	}
	get price() {
		return this._price;
	}
	turnOn() {
		const TURN_ON_KEY = 'on';
		let inviteOn = prompt('invite key to start', 'key');
		if (inviteOn === TURN_ON_KEY) {
			this.isOn = true;
		}
	}
	turnOff() {
		const TURN_OFF_KEY = 'off';
		let inviteOff = prompt('invite key to stop', 'key');
		if (inviteOff === TURN_OFF_KEY) {
			(this.isOn = false), (this.speed = 0);
		}
	}
	accelerate(value) {
		if (this.isOn && this.speed + value <= this.maxSpeed) {
			this.speed += value;
		}
	}
	decelerate(value) {
		if (this.speed - value >= 0) {
			this.speed -= value;
		} else {
			this.speed = 0;
		}
	}
	drive(hours) {
		if (this.isOn) {
			this.distance += hours * this.speed;
		}
	}
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
