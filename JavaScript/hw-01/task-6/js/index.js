'use strict';

let input;
let total = 0;
console.log(input, total);
while (input !== null) {
  console.log(input, total);
  input = prompt('Введите число', '');
  console.log(input, total);
  if (input === null) {
    console.log(input, total);
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }
  console.log(input, total);
  input = Number(input);
  if (Number.isNaN(input)) {
    console.log(input, total);
    alert('Было введено не число,попробуйте еще раз');
    continue;
    console.log(input, total);
  }
  total += Number(input);
  console.log(input, total);
}
console.log(input, total);
