'use strict';

// // Пустой массив
// const arr = [];

// // Массив clients с тремя элементами
// const clients = ['Mango', 'Poly', 'Ajax'];

// console.log(clients); // ["Mango", "Poly", "Ajax"]

// =======================================

// const clients = ['Mango', 'Poly', 'Ajax'];

// // Указывая в скобках индекс элемента мы получаем его значение
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax

// =======================================

// const clients = ['Mango', 'Poly', 'Ajax'];

// // Значение элемента можно заменить
// clients[0] = 'Kiwi';
// console.log(clients[0]); // Kiwi

// // Или добавить
// clients[3] = 'Alex';
// console.log(clients[3]); // Alex

// console.log(clients); // ["Kiwi", "Poly", "Ajax", "Alex"]

// =======================================

// const clients = ['Mango', 'Poly', 'Ajax'];

// // length вернет текущую длину массива
// console.log(clients.length); // 3

// clients.length = 5;
// console.log(clients.length); // 5
// console.log(clients); // ["Mango", "Poly", "Ajax", empty × 2]
// console.log(clients[4]); // undefined

// clients.length = 2;
// console.log(clients); // ["Mango", "Poly"]

// =======================================

// МЕТОД SLICE

// slice(begin, end)
// Копирует элементы от begin, до, но не включая, end.

// Оба аргумента ( begin и end) не обязательны.

// Параметр begin определяет индекс, с которого следует начинать извлечение.

// Параметр end, определяет индекс элемента, на котором следует
// закончить извлечение.

// Метод slice не включает элемент с идексом end в извлеченные элементы.

// Если begin и end не указаны, копирование будет с начала массива, с индекса 0,
//     - тоесть скопируется весь массив.

// Если не указать параметр end, метод slice будет использовать длину массива(length)
// для параметра end.

// Метод slice не изменяет исходный массив, а возвращает новый массив,
//     содержащий копию элементов исходного.

// Можно использовать отрицательные индексы, они отсчитываются с конца

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// // Вернет новый массив в котором будут элементы с индексами от 1 до 2
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// // Вернет новый массив в котором будут
// // элементы с индексами от 1 до (clients.length - 1)
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]

// // Вернет копию исходного массива
// console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

// // Вернет новый массив состоящих из последних двух элементом исходного
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]
// ======================================

//  МЕТОД  SPLICE

// splice(position, num, new element-1, new el-2,,,,)

// position — указывает позицию (индекс) первого элемента для удаления
// num — определяет количество удаляемых элементов

// Метод splice изменяет исходный массив и возвращает
// массив, содержащий удаленные элементы.

// // Предположим, у вас есть массив языков программирования из четырех элементов.
// const languages = ['C', 'C++', 'Java', 'JavaScript'];

// // Следующая операция заменяет второй элемент на новый.
// languages.splice(1, 1, 'Python');

// // В массиве языков теперь все еще четыре элемента,
// // но второй элемент теперь «Python» вместо «C++».
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Вы можете заменить один элемент на несколько элементов,
// // передав больше аргументов
// languages.splice(2, 1, 'C#', 'Swift', 'Go');

// console.log(languages);
// // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// -------МЕТОД indexOf--------

// array.indexOf(x) — возвращает первый индекс,
// в котором элемент x был найден в массиве, или число - 1,
// если такого элемента нет.Используйте indexOf тогда, когда необходимо
// получить непосредсвенно индекс элемента.

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// console.log(clients.indexOf('Poly')); // 2
// console.log(clients.indexOf('Monkong')); // -1

// -------МЕТОД includes--------

// array.includes(x) — определяет, содержит ли массив
// некоторый элемент x, возвращая true или false соответственно.
// Используйте includes тогда, когда необходимо проверить есть ли
// элемент в массиве и не важен его порядковый номер.

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// console.log(clients.includes('Poly')); // true
// console.log(clients.includes('Monkong')); // false

// // Выносим варианты в массив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';

// if (redFruits.includes(fruit)) {
//   сonsole.log('It is a red fruit!');
// }

// -----Методы push(), pop(), shift(), unshift()

// push() — позволяет добавить один или несколько
// элементов в конец массива.
// Метод возвращает значение свойства length,
// которое определяет количество элементов в массиве.

// pop() — удаляет элемент из конца
// массива и возвращает удаленный элемент.
// Если массив пуст, метод возвращает undefined.

// --------пример:

// // Создаем пустой массив
// const stack = [];

// // Добавляем элементы в конец массива
// stack.push(1);
// console.log(stack); // [1]

// stack.push(2);
// console.log(stack); // [1, 2]

// stack.push(3);
// console.log(stack); // [1, 2, 3]

// // Удаляем элементы из конца массива
// console.log(stack.pop()); //  3
// console.log(stack); // [1, 2]

// console.log(stack.pop()); //  2
// console.log(stack); // [1]

// console.log(stack.pop()); //  1
// console.log(stack); // []

// console.log(stack.pop()); //  undefined

// shift() — удаляет элемент из начала массива
// и возвращает его(элемента) значение.

// unshift() — добавляет элемент в начало массива.

// --------пример:

// const clients = ['Mango', 'Ajax', 'Poly'];

// console.log(clients.shift()); // Mango
// console.log(clients); // ["Ajax", "Poly"]

// clients.unshift('Kiwi');
// console.log(clients); // ["Kiwi", "Ajax", "Poly"]

// =========== МЕТОД concat()

// Используется для объединения двух или
// более массивов.Этот метод не изменяет
// исходный массив, а возвращает новый.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);
// // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// console.log(oldClients);
// // ["Mango", "Ajax", "Poly", "Kiwi"]

// console.log(newClients);
// // ["Monkong", "Singu"]

// =======================================
//   ПЕРЕБОР МАССИВА ЦИКЛОМ for

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
// 	console.log('Logging clients: ', clients[i]);
// }

// const numbers = [];

// for (let i = 0; i <= 3; i += 1) {
// 	numbers.push(`label-${i}`); // добавляет по 1 с 0 индекса
// 	console.log('numbers: ', numbers);
// 	console.log(numbers.push(`label-${i}`));
// 	console.log('numbers: ', numbers);
// 	console.log(numbers.push(`label-${i}`));
// 	console.log('numbers: ', numbers);
// }

// console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']

// =======================================
//   ПЕРЕБОР МАССИВА ЦИКЛОМ for...of

// const clients = ['Mango', 'Ajax', 'Poly'];

for (const value of clients) {
	console.log(value);
}
