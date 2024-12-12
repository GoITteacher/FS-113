/**
 * Псевдомасив arguments и Array.from
 */

//!======================================================

// function foo() {
//   const arr = Array.from(arguments); // [10, 20, 30]
//   const includesZero = arr.includes(0); // false
//   return includesZero;
// }

// const res1 = foo(10, 20, 30);
// const res2 = foo(10, 20, 30, 0);

// console.log(res1);
// console.log(res2);

//!======================================================

// Math.max(10,10,340,601,23,2)
// Math.min();
// [].push('Hello', 'World', 'test')

//!======================================================
// function fn(x,y,q) {
//   const args = Array.from(arguments);
//   console.log(args);
// }

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

//!======================================================

/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

// function sum() {
//   let total = 0;
//   for (const item of arguments) {
//     total += item;
//   }
//   return total;
// }

// const res1 = sum(10, 20, 30, 40);
// const res2 = sum(50, 60);
// const res3 = sum(50);
// const res4 = sum();

// console.log(res1);

//!======================================================
/**
 * Напиши функцію calAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */

function calAverage() {
  const arr = Array.from(arguments);
  let total = 0;

  for (const item of arr) {
    total += item;
  }

  return total / arr.length;
}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

//!======================================================

//!======================================================

const x = 500;
