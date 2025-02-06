/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

//!======================================================

// function foo() {
//   const promise = new Promise(() => {});
//   return promise;
// }
// const x = foo();

//!======================================================

function createPromise(value, delay, success) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });

  return promise;
}

// const p1 = createPromise('Hello 1', 4000);
// const p2 = createPromise('Hello 2', 2000);
// const p3 = createPromise('Hello 3', 5000);
// const p4 = createPromise('Hello 4', 1000);
// const p5 = createPromise('Hello 5', 3000);

// function onFulfilled(value) {
//   console.log('✅', value);
// }
// function onRejected(error) {
//   console.log('❌', error);
// }

// p1.then((value)=>{}).catch((error)=>{});
// p2.then(onFulfilled).catch(onRejected);
// p3.then(onFulfilled).catch(onRejected);
// p4.then(onFulfilled).catch(onRejected);
// p5.then(onFulfilled).catch(onRejected);
//!======================================================

// function showData(url) {
//   return fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       return data;
//     });
// }

// const p1 = showData('https://jsonplaceholder.typicode.com/todos/1');
// const p2 = showData('https://jsonplaceholder.typicode.com/todos/2');
// const p3 = showData('https://jsonplaceholder.typicode.com/todos/3');

//!======================================================

// p1.then(data => {
//   console.log(data);
// });

// p2.then(data => {
//   console.log(data);
// });

//!======================================================

// const makeOrder = (dish, onSuccess, onError) => {
//   const passed = Math.random() > 0.5;

//   setTimeout(() => {
//     if (passed) {
//       onSuccess(`✅ Ваше замовлення: ${dish}`);
//     }

//     onError("❌ Упс, у нас закінчилися продукти");
//   }, 1000);
// };

// makeOrder(
//   "пиріжок",
//   (result) => {
//     console.log("onMakeOrderSuccess");
//     console.log(result);
//   },
//   (error) => {
//     console.log("onMakeOrderError");
//     console.log(error);
//   }
// );

/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// function getArr() {
//   const arr = [1, 2, 3, 4, 5];
//   return arr;
// }

// const x = Promise.resolve('Hello');
// const y = Promise.reject('Hello');
//!======================================================

// const promise = createPromise(7, 2000, true);

// promise
//   .then(value => {
//     console.log(value);
//     if (value % 2 !== 0) {
//       return Promise.reject('Sorry');
//     }
//   })
//   .catch(err => {
//     console.log(err);
//   });
//!======================================================

// Promise.all
// Promise.race
// Promise.allS

const p1 = createPromise('Hello 1', 4000, true);
const p2 = createPromise('Hello 2', 2000, false);
const p3 = createPromise('Hello 3', 5000, true);
const p4 = createPromise('Hello 4', 1000, false);
const p5 = createPromise('Hello 5', 3000, true);

const promises = [p1, p2, p3, p4, p5];

//!======================================================

Promise.allSettled(promises).then(res => {
  console.log(res);
});

//!======================================================
// const result = Promise.race(promises);

// result.then(data => console.log(data));
//!======================================================
// const result = Promise.all(promises); // [10,20,30,40,5] ||

// result
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
