'use strict';

// const film =  {
//     popularity: 404.293,
//     vote_count: 5450,
//     video: false,
//     poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
//     id: 475557,
//     adult: false,
//     backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
//     original_language: "en",
//     original_title: "Joker",
//     title: "Joker",
//     vote_average: 8.4,
//     overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
//     release_date: "2019-10-02"
// }

// class Film {
//     constructor({ title, vote_average, overview, release_date })
//     {
//         this.title = title;
//         this.vote_average = vote_average;
//         this.overview = overview;
//         this.release_date = release_date;
//     }
//     showRating() {
//         console.log(this.vote_average)
//     }
//     showTitle() {
//         console.log(this.title)
//     }
//     showOverview() {
//         console.log(this.overview)
//     }
// }

// const newFilm = new Film(film);

// newFilm.showRating();
// newFilm.showTitle();
// newFilm.showOverview();

// class HorrorFilm extends Film {
//     constructor(film) {
//         super(film);
//         this.janre = 'Sitcom'
//         this.something = 'something'
//     }
// }
// const bar = new HorrorFilm(film);
// console.log(bar)

// // Практика в PeremogaSpace

// // перебрать массив и получить доступ к каждому элементу
// // (используем функциональный метод массива)
// // сравнить элемент с соседним
// // if (===)
// // показать результат сравнения
// // return
// let numbers = [1, 2, 5, 3, 4, 7];
// let result = numbers.map((el, index, arr) => {
// 	if (el === arr[index + 1]) {
// 		return true;
// 	}
// 	return false;
// });
// console.log(myFunc);
// const myFunc = (name, num) => console.log(`Под номером ${num} находится ${name}`);
// const exampleArray = ['яблоко', 'зеленое', 'крапива', 'фрукт'];
// exampleArray.forEach((curr, i, arr) => myFunc(curr, i));
// const fruitsWithPrice = exampleArray.map((curr, i, arr) => {
// 	return `${curr}: ${(i + 1) * 2}`;
// });
// const priceList = exampleArray.map((curr, i) => ({
// 	name: curr,
// 	price: (i + 1) * 2,
// }));

// const notToCheap = priceList.filter((curr, i, arr) => {
// 	return curr.price > 3;
// });
// console.log(notToCheap);
// console.log(exampleArray);
// console.log(fruitsWithPrice);
// console.log(priceList);

// const chainedMapAndFilter = exampleArray
// 	.map((curr, i) => ({
// 		name: curr,
// 		price: (i + 1) * 2,
// 	}))
// 	.filter((curr, i, arr) => {
// 		return curr.price > 3;
// 	});
// console.log(chainedMapAndFilter);

// const arrayRedused = exampleArray.reduce((acc, curr, i, arr) => {
// 	const priceObj = {
// 		name: curr,
// 		price: (i + 1) * 2,
// 	};
// 	if (priceObj.price > 3) {
// 		return [...acc, priceObj];
// 	}
// 	return acc;
// }, []);
// console.log(arrayRedused);

// ======================= practice ===================

const users = [
	{
		name: 'John',
		age: 15,
		salary: 3000,
	},
	{
		name: 'Tom',
		age: 25,
		salary: 2000,
	},
	{
		name: 'Ann',
		age: 35,
		salary: 2500,
	},
	{
		name: 'Alex',
		age: 28,
		salary: 6000,
	},
];
//самый старый юзер
let olderUser = users.reduce((prev, cur) => (cur.age > prev.age ? cur : prev), {
	age: -Infinity,
});
console.log(olderUser);
//сортировка по возрасту без мутирования массива
console.log(users);

let sortByAge = users => [...users].sort((a, b) => a.age - b.age);

console.log(sortByAge(users));
console.log(users);
// сумма всех зарплат
// let totalSalary = users.reduce((sum, current) => sum.salary + current.salary, {});
let totalSalary = users.reduce(function(sum, current) {
	return sum.salary + current.salary;
});
console.log(totalSalary);

//вернуть список имен
const nameList = users.map(user => user.name);

console.log(nameList);
