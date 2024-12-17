/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;
// for (const key in feedback) {
//   totalFeedback += feedback[key];
// }
// console.log('totalFeedback: ', totalFeedback);

/**
 * ---------------------------------
 */
// const keys = feedback;
// console.log(keys);

// console.log("totalFeedback: ", totalFeedback);

// const values = feedback;
// console.log(values);

// console.log('totalFeedback: ', totalFeedback);

//!======================================================

// const objA = {
//   x1: 10,
//   x2: 20,
//   x3: 30,
//   x1: 10,
//   x2: 20,
//   x3: 30,
//   x1: 10,
//   x2: 20,
//   x3: 30,
//   x1: 10,
//   x2: 20,
//   x3: 30,
//   x1: 10,
//   x2: 20,
//   x3: 30,
//   x1: 10,
//   x2: 20,
//   x3: 30,
//   x1: 10,
//   x2: 20,
//   x3: 30,
// };

// const objB = {
//   y1: 40,
//   y2: 50,
//   __proto__: objA,
// };

// for (const key in objB) {
//   console.log(key);
// }

//!======================================================

// Object.keys();
// Object.values();
// Object.entries();

// const user = {
//   name: 'Vasya',
//   age: 20,
// };

// const arr = Object.keys(user); // ['name', 'age']

// for (const key of arr) {
//   // key = 'name'
//   console.log(`${key} - ${user[key]}`);
// }

//!======================================================

// const feedback = {
//   good: 3,
//   neutral: 5,
//   bad: 2,
// };

// const keys = Object.keys(feedback);

// for (const key of keys) {
//   feedback[key] = (feedback[key] / 5) * 100;
// }

// console.log(feedback);

//!======================================================

// const feedback = {
//   good: 3,
//   neutral: 5,
//   bad: 2,
// };

// const values = Object.values(feedback);

// let sum = 0;

// for (const item of values) {
//   sum += item;
// }

// console.log(sum / values.length);

//!======================================================

// const feedback = {
//   good: 3,
//   neutral: 5,
//   bad: 2,
// };

// delete feedback.bad;

// console.log(feedback);

//!======================================================
// const feedback = {
//   good: 3,
//   neutral: 5,
//   bad: 2,
// };

// const arr = Object.entries(feedback);

// /*
// [
//   ['good', 3],
//   ['neutral', 5],
//   ['bad', 2],
// ]
// */

// for (const pair of arr) {
//   console.log(pair[0], pair[1]);
// }
