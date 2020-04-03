'use strict';

// Open Close Principle
​
​
//###################### ЭТАП 1 #############################
// Класс Shape - не менять!
class Square {
	constructor(size){
	this.size = size;
	squareArea() {
		return
		size*size
		}
	}
}
const square = new Square
console.log (square)
//имплементировать классы 
//Square(size),
//Triangle(a,b) - равнобедренный треугольник
//Rect(width, height) 
//которые наследуются от Shape.
​
​
// имплементировать метод sum класса AreaCalculator
// класс получает на входе массив фигур наследованых от Shape 
// метод sum - возвращает сумарную площать всех фигур 
​
//###################### ЭТАП 2 #############################
​
​
//Разкометировать строки начинающиеся с //####### 
//имплементировать класс
//Circle(radius), 
//не изменять класс AreaCalculator и его метод sum. Построить все так, (еще на первом этапе)   
//что бы в AreaCalculator можно было добавлять новые фигуры (например: Circle) не внося изменения в класс AreaCalculator.
​
​
class Shape {
  area() {
    throw new Error('Area method should be implemented')
  }
}
​
class Square extends Shape {}
class Rect extends Shape {}
class Triangle extends Shape {}
//####### class Circle extends Shape {}
​
class AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes
  }
​
  sum() {
    
  }
}
​
​
const calc = new AreaCalculator([
  new Square(10),
//####### new Circle(1),
//####### new Circle(5),
  new Rect(10, 20),
  new Triangle(10, 15)
])
​
console.log(calc.sum());//Проверка //375 - с закоментированными Circle; 456.6814089933346 - с раскоментированными