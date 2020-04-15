'use strict';
const allCategories = document.querySelectorAll('ul#categories li.item');
console.log(`В списке ${allCategories.length} категории`);
const tagsH2 = document.querySelectorAll('ul#categories li.item h2');
const tagsUl = document.querySelectorAll('ul#categories li.item ul');
[...tagsUl].map((elem,idx) =>{
  console.log(`Категория: ${[...tagsH2][idx].textContent}\nКоличество элементов: ${elem.children.length}`);
})
