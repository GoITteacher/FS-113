/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */
//!======================================================
// const arr = [1, 2, 3, 4, 5, 6];

// const copy = [...arr];

// arr.push('End');

// console.log(copy);
// console.log(arr);

//!======================================================

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const result = [...arr2, ...arr1, ...arr3];

// console.log(result);

//!======================================================

// const arr = [1, 3, 6, 7, 2, 3, 56, 8, 92];
// Math.max(...arr);

//!======================================================

const obj = {
  a: 10,
  b: 20,
};

// const result = { ...obj };

// console.log(result);

//!======================================================

const numbers = [];

/**
 * Пошук найменшої аьо найбільшої температури (числа)
 */
// const temps = [18, 14, 12, 21, 17, 29, 24];
// const minTemp = Math.min(...temps);
// const maxTemp = Math.max(...temps);

//!======================================================
/**
 * Створення масиву і тип за посиланням
 */
// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];

// a.pop();

// console.log(a === b);

// a[0].x = 50;

// console.log('a: ', a);
// console.log('b: ', b);

//!======================================================
/*
 * Поєднуємо кілька масивів в один через spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

//!======================================================
/*
 * Створення об'єкта
 */
// const objA = { x: 1, y: 2 };
// const objB = { x: 0, z: 3 };
// const objC = {
//   x: 1,
//   y: 2,
//   x: 0,
//   z: 3,
// };

// console.log(objC);
//!======================================================
/**
 * Оновлюємо налаштування користувача
 */

// const defaultSettings = {
//   theme: 'light',
//   showNotifications: true,
//   hideSidebar: false,
//   fontSize: '24px',
//   color: 'black',
// };

// const userSettings = {
//   showNotifications: false,
//   hideSidebar: true,
//   fontSize: '20px',
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };

// console.log(finalSettings);

//!======================================================
//!======================================================
//!======================================================
//!======================================================
//!======================================================

// const test = [1,2,3,5,6]

// function foo(a, b, ...test) {
//   console.log(a, b);
//   console.log(test);
// }

// foo(1,2,3,5,6);

//!======================================================

// const arr = [1, 2, 3, 4, 567];
// const x = [...arr];

// function foo(x, ...arr) {
//   // const x = 5
//   // const ...arr = 10
// }

// foo(5, 10);

//!======================================================

// function foo(min, ...numbers) {
//   const res = [];

//   for (const item of numbers) {
//     if (item > min) {
//       res.push(item);
//     }
//   }

//   return res;
// }

// const result = foo(5, 1, 4, 6, 2, 4, 7, 89, 4, 12, 345, 7, 3);
// console.log(result);

//!======================================================
