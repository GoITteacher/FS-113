/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */
//!======================================================

// const x = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       name: 'awd',
//       message: 'awdawd',
//     });
//   }, 5000);
// });

// console.log('ОТримав проміс');

//!======================================================

// function onFulfilled(message) {
//   console.log('Ням ням ням');
// }

// function onRejected(error) {
//   console.log('Error');
// }

// x.then(onFulfilled).catch(onRejected);
// x.then(onFulfilled, onRejected);

// x.then(
//   () => {
//     console.log('Hello');
//   },
//   () => {
//     console.log('Bye');
//   },
// );

// x.then(() => {
//   console.log('Hello');
//   console.log('Hello');
//   console.log('Hello');
//   console.log('Hello');
// }).catch(() => {
//   console.log('Bye');
//   console.log('Bye');
//   console.log('Bye');
//   console.log('Bye');
// });

//!======================================================
// const x = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('2555');
//   }, 300);
// });

// x.then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// });

// x.then(value => {
//   console.log(value);
// });

//!======================================================

// "Проміс виконався успішно, із результатом (виконаний, fulfilled)";
// "Проміс виконався з помилкою (відхилений, rejected)"

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// const x = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('2555');
//   }, 300);
// });

// const x = fetch('https://jsonplaceholder.typicode.com/todos/1');

// x.then().catch().finally();
// x.then(data => {
//   const value = data.json();
//   return value;
// })
//   .then(value => {
//     console.log(value);
//     e;
//     const title = value.title;
//     return title;
//   })
//   .then(title => {
//     document.body.textContent = title;
//   });

//!======================================================
