/**
 * Классы
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

// class Dog {
//   name = 'Lord';
//   paws = 4;
//   color = 'black';

//   constructor(name) {
//     console.log('Hello', name);
//   }
// }

// new Dog('Vasya');
// new Dog('Kolya');
// new Dog('Petya');

//!======================================================

// class Tesla {
//   constructor(color, model) {
//     this.brand = 'Tesla';
//     this.model = model;
//     this.color = color;
//   }

//   showInfo() {
//     console.log(this.model, this.color);
//   }
//   showInfo() {
//     console.log(this.model, this.color);
//   }
// }

// const car1 = new Tesla('black', 'S');
// const car2 = new Tesla('white', 'E');

// console.log(car1);
// console.log(car2);

//!======================================================

// class PizzaDay {
//   #balance;

//   constructor() {
//     this.#balance = 0;
//     this.balance = 100000;
//   }

//   buyPizza() {
//     this.#balance += 150;
//     return 'Pizza';
//   }

//   showBalance() {
//     console.log(this.#balance);
//   }

// }

// const pizzaDay1 = new PizzaDay();

// pizzaDay1.buyPizza();
// pizzaDay1.buyPizza();
// pizzaDay1.buyPizza();
// pizzaDay1.buyPizza();

// pizzaDay1.balance = 999999;

// pizzaDay1.showBalance();

// console.log(pizzaDay1);

//!======================================================

// class Account {
//   #balance = 0;

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   withdraw(amount) {
//     this.#balance -= amount;
//   }

//   get balance() {
//     return this.#balance;
//   }

//   set balance(value) {
//     if (value < 500) this.#balance += value;
//   }
// }

//!======================================================

class Item {
  static totalAmount = 0;
  static discount = 0;
  static company = 'Аврора';
  #name;
  #price;
  #amount;

  constructor(name, price, amount) {
    this.#name = name;
    this.#price = price;
    this.#amount = amount;
    Item.totalAmount += amount;
  }

  buy(amount) {
    if (this.#amount >= amount) {
      this.#amount -= amount;
      Item.totalAmount -= amount;
    }
  }

  howMuch(amount) {
    console.log(amount * this.#price * (1 - Item.discount / 100));
  }
}

const item1 = new Item('Apple Watch SE', 500, 15);
const item2 = new Item('Iphone 16', 2300, 10);
const item3 = new Item('Iphone 15', 1700, 25);

console.log(Item.totalAmount);

//!======================================================e
// const account1 = new Account();

// account1.deposit(100);
// account1.withdraw(50);

// account1.balance = 10;
// account1.balance = 10;
// account1.balance = 10;
// account1.balance = 10;
// account1.balance = 10;

// console.log(account1.balance);
