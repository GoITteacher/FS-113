/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (const item of keys) {
//   console.log(`${item}: ${user[item]}`);
// }

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;

// for (const salary of Object.values(salaries)) {
//   sum += salary;
// }

// console.log(sum);

//!======================================================

// const arr1 = [1, 2, 4, 6, 8, 9, 2, 1];
// const arr2 = [5, 8, 9, 4, 6, 89, 0, 56, 45];

// function foo(arr1, arr2) {
//   const result = [1];
//   for (const item of arr1) {
//     if (!result.includes(item)) {
//       result.push(item);
//     }
//   }
//   for (const item of arr2) {
//     if (!result.includes(item)) {
//       result.push(item);
//     }
//   }

//   return result;
// }

// console.log(foo(arr1, arr2));

//!======================================================

// const arr = [1, 2, 5, 6, 2, 3, 56, 1, 2, 4, 6, 8, 2, 12, 45];

// function getArr(arr) {
//   const result = [];

//   for (const item of arr) {
//     const firstIndex = arr.indexOf(item);
//     const lastIndex = arr.lastIndexOf(item);

//     if (firstIndex === lastIndex) {
//       result.push(item);
//     }
//   }
//   return result;
// }

// console.log(getArr(arr));

//!======================================================

// function foo(arr) {
//   const result = [];

//   for (const item of arr) {
//     const firstIndex = arr.indexOf(item);
//     const secondIndex = arr.indexOf(item, firstIndex + 1);
//     const lastIndex = arr.lastIndexOf(item);
//     if (firstIndex != secondIndex && secondIndex === lastIndex) {
//       result.push(item);
//     }
//   }

//   return result;
// }

// console.log(foo([1, 4, 5, 1, 4, 6, 4, 7, 8, 7, 2]));

// //

// window.foo = function (name) {
//   console.log(`Hello ${name}`);
// };

//!======================================================
