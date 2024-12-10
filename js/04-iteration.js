/**
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */

//!======================================================
// const arr = [
//   'Mango',
//   'Kiwi',
//   'Poly',
//   'Ajax',
//   'Mango',
//   'Kiwi',
//   'Poly',
//   'Ajax',
//   'Mango',
//   'Kiwi',
//   'Poly',
//   'Ajax',
// ];

// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i].toUpperCase();
// }

// console.table(arr);

//!======================================================
// FOR OF
// 1 - не потрібні індекси
// 1 - не потрібно змінювати масив
// 1 - від початку до кінця

// const arr = [
//   'Mango',
//   'Kiwi',
//   'Poly',
//   'Ajax',
//   'Mango',
//   'Kiwi',
//   'Poly',
//   'Ajax',
//   'Mango',
//   'Kiwi',
//   'Poly',
//   'Ajax',
// ];

// for (const item of arr) {
//   console.log(item);
// }
//!======================================================

// const salaries = [500, 700, 100, 400, 800];

// let sum = 0;

// for (const elem of userList) {
//   sum += salary;
// }

// for (let i = 0; i < salaries.length; i++) {
//   sum += salaries[i];
// }

// console.log(sum);

//!======================================================
// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);

// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] += `-${i}`;
// }

// console.table(friends);

// for (let friend of friends) {
//   console.log(friend);
//   console.log(friends);
// }

/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

// const values = '8 11';
// const numbers = values.split(' ');
// console.log(numbers);

// const area = numbers[0] * numbers[1];

// console.log(area);

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = fruits.length - 1; i >= 0; i--) {
//   const message = `${i + 1}: ${fruits[i]}`;
//   console.log(message);
// }

function foo(arr) {
  arr.entries;
}
