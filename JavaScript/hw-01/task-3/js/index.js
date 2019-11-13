'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let invite = prompt('Введите пароль', 'пароль');

if (invite === null) {
  message = 'Отменено пользователем!';
} else if (invite === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
