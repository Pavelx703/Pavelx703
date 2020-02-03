'use strict';

class Storage {
	constructor(items) {
		this.items = items;
	}
	getItems = () => this.items;

	addItem = newItem => this.items.push(newItem);

	removeItem(oldItem) {
		this.items = this.items.filter(item => item !== oldItem);
	}
}

const storage = new Storage([
	'Нанитоиды',
	'Пролонгер',
	'Железные жупи',
	'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
