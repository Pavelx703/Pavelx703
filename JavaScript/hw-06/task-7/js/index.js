'use strict';
const message = `В JavaScript имеются как строгие сравнения, 
так исравнения с преобразов nisi анием типа операндов.Строгие
 сравнеnisiния(к примеру, ===) истиnisi только в том случае,
  если типы сравниваемых значений являются
   одинаковыми(к примеру: string - string, number - number).Однако,
    чаще используются сравнения с преобразованием типов(к примеру, ==).
    Такой тип сравнения, перед nisi тем как непосредстnisiвенно выполнить сравнение,
     приводит операнды к одному типу.В случае же, абстрактного реляционного 
     сравнения, опера nisi нды сперва преобразуются в примитивы, затем приводятся к 
одному типу, и только после этого сравниnisiваются.`;
function foo1(m) {
	// const newMessage = m.replace(/nisi/g, '(nisi)');
	// return newMessage;
	return m.split(arguments[1]).join(arguments[2]);
}
function foo2(m) {
	// const wordMatch = m.match(/'nisi'/g).length;
	// return wordMatch;
	return m.split(arguments[1]).length - 1;
}
console.log(foo1(message, 'nisi', '(nisi)'));
console.log(foo2(message, 'nisi'));
