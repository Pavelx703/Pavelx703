'use strict';

// import { resolve } from "dns";

// const animateString = (str, cb) => {
// 	let a = '';
// 	let i = 0;
// 	const p = document.createElement('p');
// 	document.body.append(p);
// 	document.body.scrollTop = document.body.offsetHeight;
//     animateLetter()
//         return new Promise(executor(resolve) => {

// 	function animateLetter()
// 		a += str[i];
// 		i++;
// 		p.textContent = a;
// 		const timer = setTimeout(animateLetter, 150);
// 		if (i === str.length) {
// 			clearTimeout(timer);
// 			resolve();
// 		}
// 	}
// };
// // animateString('111111111111111', () =>
// // 	animateString('111111111111222', () =>
// // 		animateString('221111111111112', () =>
// // 			animateString('211111111122', () => animateString('211111111122')),
// // 		),
// // 	),
// // );
// const animePromise()

// animateString('111')
// 	.then(() => animateString('222'))
// 	.then(() => animateString('222'))
// 	.then(() => animateString('222'))
// 	.then(() => animateString('222'));
// ========================PROMISE PRACTICE===============================
// const promise = new Promise((resolv, reject) => {
// 	setTimeout(() => {
// 		console.log('hello'), 1000;
// 	});
// });
// promise
// 	.then(result => console.log(result))
// 	.catch(error => console.log(error));

// const featchUserData = async () => {
// 	try {
// 			const result
// 		}
// 	}

// const button = document.querySelector('#button');
// const popup = document.querySelector('.popup');
// const confirmBtn = document.querySelector('#confirm');
// const rejectBtn = document.querySelector('#reject');

// // const confirmation = new Promise((resolve, reject) => {
// // 	confirmBtn.addEventListener('click', () => resolve());
// // 	rejectBtn.addEventListener('click', () => reject());
// // });

// // const togglePopup = () => {
// // 	popup.classlist.toggle('active');
// // };

// // button.addEventListener('click', () => {
// // 	popup.classList.add('active');
// // });

// const createConfirmationPromise = () => {
// 	return new Promise((resolve, reject) => {
// 		confirmBtn.addEventListener('click', () => resolve());
// 		rejectBtn.addEventListener('click', () => reject());
// 	});
// };

// const togglePopup = () => {
// 	popup.classList.toggle('active');
// };
// button.addEventListener('click', () => {
// 	togglePopup();
// 	createConfirmationPromise()
// 		.then(result => {
// 			console.log('process end');
// 			togglePopup();
// 		})
// 		.catch(error => togglePopup());
// });

const users = [
	{
		name: 'Alex',
		age: 25,
	},
	{
		name: 'John',
		age: 28,
	},
	{
		name: 'Trevor',
		age: 30,
	},
	{
		name: 'Pole',
		age: 18,
	},
];
// // const promise = new Promise((resolve, reject) => {
// // 	setTimeout(() => {
// // 		.then(resolve => {
// // 		const names = user.map(user => user.name);
// // 		togglePopup();
// // 	})
// // 	.catch(error => console.log('error'));, 1000);
// // });
// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		reject('There was an error :(');
// 	}, 2000);
// });

// /*
//  * then не выполнится так как в функции fn, внутри new Promise(fn),
//  * был вызван reject(). А catch как раз выполнится через 2 секунды
//  */
// promise
// 	.then(data => {
// 		console.log(data);
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	});

// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		/*
// 		 * Если какое-то условие выполняется, то есть все хорошо,
// 		 * вызываем resolve и получает данные. Условие зависит от задачи.
// 		 */
// 		resolve('Data passed into resolve function :)');

// 		// Если что-то не так, вызваем reject и передаем ошибку
// 		//   reject("Error passed into reject function :(")
// 	}, 2000);
// // });
// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve => {
// 			const names = user.map(user => user.name);
// 		};
// 	}, 2000);
// });
// // 	// //
// const names = [];
// // promise.then(names => user.map(user => user.name));
const getUsers = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(users);
		console.log(users);
		// const names => user.map(user => user.name)
	}, 1000);
});
// getUsers
// 	.then(users => {
// 		const userNames = users.map(users => users.name);
// 		console.log(userNames);
// 	})
// 	.then(userNames => {
// 		const result = userNames.join(', ');
// 		console.log(result);
// 	});

async function foo() {
	const users = await getUsers;
	const userNames = await users.map(user => user.name);
	console.log(userNames);
	return await userNames.join(', '); // join не работает

	// 	const result = userNames.join(', ');
	// 	console.log(result);
	// 	return result;
}
foo(users);
