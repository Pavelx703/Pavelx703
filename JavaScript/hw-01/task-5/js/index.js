'use strict';

const CHINA = 'Китай';
const CHINA_PRICE = 100;
const CHILE = 'Чили';
const CHILE_PRICE = 250;
const AUSTRALIA = 'Австралия';
const AUSTRALIA_PRICE = 170;
const INDIA = 'Индия';
const INDIA_PRICE = 80;
const JAMAICA = 'Ямайка';
const JAMAICA_PRICE = 120;
let country;
let price;
const message5 = (country, price) =>
  `Доставка в ${country} будет стоить ${price} кредитов`;
let delivery = prompt('Укажите страну доставки', 'Ваша страна');
switch (delivery.toLowerCase()) {
  case 'чили':
    alert(message5(CHILE, CHILE_PRICE));
    break;
  case 'австралия':
    alert(message5(AUSTRALIA, AUSTRALIA_PRICE));
    break;
  case 'индия':
    alert(message5(INDIA, INDIA_PRICE));
    break;
  case 'ямайка':
    alert(message5(JAMAICA, JAMAICA_PRICE));
    break;
  case 'китай':
    alert(message5(CHINA, CHINA_PRICE));
    break;
  default:
    alert('В вашей стране доставка не доступна!');
}
