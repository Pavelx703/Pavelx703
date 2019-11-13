'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let invite = prompt('Ваш заказ: ', 'количество дроидов');
let totalPrice = invite * pricePerDroid;

if (invite === null) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  let rest = credits - totalPrice;
  console.log(`Вы купили ${invite} дроидов, на счету осталось ${rest} кредитов.`);
}
