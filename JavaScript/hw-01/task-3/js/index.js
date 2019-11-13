'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let invite = prompt('Введите пароль', 'пароль');
console.log(message, invite);
if (invite === null) {
  message = 'Отменено пользователем!';
  console.log(message, invite);
} else if (invite === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
  console.log(message, invite);
} else {
  message = 'Доступ запрещен, неверный пароль!';
  console.log(message, invite);
}
console.log(message, invite);
alert(message);
