/**
 * Функции
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */

//!======================================================

// function myDay(currentDay, money, time, y) {
//   console.log(`Зібрати ранець на ${currentDay}`);
//   console.log('Піти до школи');
// }

// myDay('Monday', 25, '18:00');
//!======================================================

// function getArea(r) {
//   const area = Math.PI * r ** 2;
//   return area;
// }
// const x = getArea(5);

//!======================================================

// function sum(x, y) {
//   const result = x + y;
//   return result;
// }

// const res2 = sum(5, 7) + sum(5, 1);
// console.log(res2);

// function getHelloMessage() {
//   const name = prompt('Enter your Name');
//   return `Hello ${name}`;
// }

// function getFullName() {
//   const firstName = prompt('Enter firstname');
//   const lastname = prompt('Enter lastname');
//   const result = `${firstName} ${lastname}`;
//   return result;
// }

// const fullName = getFullName();
// console.log(fullName);

//!======================================================
// function sayHello(firstName, lastName) {
//   console.log(`Hello ${firstName} ${lastName}`);
// }

// sayHello('Biba', 'Boba');
// sayHello('Pashenko', 'Volodka');

// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");

// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");

// console.log("Before fnC execution");
// fnC();
// console.log("After fnC execution");

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8

//!======================================================

// function sum(x, y) {
//   const result = x + y;
//   return result;
// }

// const result = sum(5, 5);

//!======================================================

// const x1 = 'Hello ${5 + 5}';
// const x2 = 'Hello ${5 + 5}';
// const x3 = `Hello ${5 + 5}`;

// console.log(x1);
// console.log(x2);
// console.log(x3);

// const test = 2;

// function sum(x, y) {
//   //let x = 5;
//   // let y = undefined
//   return x + y + test;
// }

// console.log(sum(5));
// console.log(sum(6));
// console.log(sum(1));

//!======================================================
/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

// const x = 'hello';

// const newX = x.replace('h', 't');

// console.log(newX);

function calcBMI(weight, height) {
  console.log(weight, height, 0);

  weight = weight.replace(',', '.');
  height = height.replace(',', '.');

  console.log(weight, height, 0);

  const w = parseFloat(weight);
  const h = parseFloat(height);

  console.log(w, h, 0);

  const res = w / h ** 2;
  return res;
}

// const w = 22.6

// const weight = prompt('- weight');
// const height = prompt('- height');
// calcBMI(weight, height);

// `
// Задача-1
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює останій літері str2. В іншому випадку функція повинна повернути булеве значення false.
// ```
function foo(str1, str2) {
  const firstLetter = str1[0];
  const lastLetter = str2[str2.length - 1];
  return firstLetter === lastLetter;
}

const res = foo('Hello', 'Alloh');
console.log(res);

// ```
// Задача-2
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює першій літері str2. В іншому випадку функція повинна повернути булеве значення false.
// ```
