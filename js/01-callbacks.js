/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

// function goToMusicSchool(name) {
//   console.log(`Піти до муз школи ${name}`);
//   console.log('Повернутись з муз школи');
// }

// function goToShopping() {
//   console.log('Піти до магазину');
//   console.log('Повернутись з муз школи');
// }

// function goToDanceSchool() {
//   console.log('Піти до школи танців');
//   console.log('Повернутись з школи танців');
// }

// function myDay(currentDay, money, callback) {
//   console.log(`Прокинутись`);
//   console.log(`Сьогодні ${currentDay}. Я маю ${money}грн`);
//   console.log('Піти до школи');
//   callback('Volodymyr');
//   console.log('Повернутись додому');
// }

// myDay(10,goToMusicSchool, 'Moday');

//!======================================================

// function foo(x) {
//   console.log(x);
// }
// const myValue = function myCallback(){}
// foo(myValue);

// function foo(x, y) {
//   console.log(x);
//   y(x * 2, x * 3);
// }

// foo(10, function (q, t) {
//   console.log(q, t);
// });

//!======================================================

/* 
Можна передавати колбек який приймає два параметри і щось повертає.
*/

/**
 * Функція calc(a, b, callback)
 */

// function sum(x1, x2) {
//   return x1 + x2;
// }

// function multiply(x1, x2) {
//   return x1 * x2;
// }

// function sub(x1, x2) {
//   return x1 * x2;
// }

// function calc(a,b,callback) {
//   const result = callback(a, b);
//   console.log(`A: ${a}, B: ${b}, RESULT: ${result}`);
// }

// calc(5, 6, sum);

//!======================================================
/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

function each(array, callback) {
  const arr = [];

  for (let i = 0; i < array.length; i++) {
    const item = callback(array[i], i);
    arr.push(item);
  }

  return arr;
}

//!======================================================

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  }),
);
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

const friends = ['Volodymyr', 'Roman', 'Natali', 'Valera', 'Vlad'];

function prepare(name) {
  return name.toUpperCase().slice(0, 5);
}
function prepare2(name) {
  return name.slice(0, 2).padStart(5, '$');
}
function prepare3(name, i) {
  return name.slice(0, i);
}

// console.log(each(friends, prepare3));
console.log(each(friends, prepare3));
