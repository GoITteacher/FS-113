/**
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

// function add(a, b, c) {
//   return a + b + c;
// }

// const addArrow = (a, b, c) => {
//   return a + b + c;
// };

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

//!======================================================

// const getTen = (a, b) => a + b;

// function sum(a, b) {
//   return a + b;
// }

//!======================================================

// const getResult = () => 'Hello';
// const getResult = () => 10;
// const getResult = () => true;
// const getResult = () => [];
// const getResult = () => {
//   console.log();
//   console.log();
//   return {};
// };

//!======================================================

// const getResult = (...args) => {
//   console.log(args);
// };

// getResult(10, 20);
//!======================================================

/**
 * Функція calc(a, b, callback)
 */

// function calc(a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// }

// calc(2, 3, (x, y) => x + y);
// calc(10, 8, (x, y) => x - y);

// calc(5, 6, (x, y) => (x * y * 2) / (x - y));
// calc(5, 6, function () {});
