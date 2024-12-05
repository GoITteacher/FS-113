/**
 * Цикли
 *
 * - Цикл for
 * - Відлік від 0 до N
 * - Обратний відлік від N до 0
 * - Збільшення/зменшення лічильника на 2+
 * - Інкремент і декремент
 * - Цикли while і do...while
 */

//!======================================================

// for (let x = 0; x < 10; x++) {
//   console.log(x);
// }

//!======================================================
// debugger;
// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// let i = 20;

// const x = i++;
/* 
x=i
i+=1
 */

// const y = ++i;
/* 
i += 1;
y = i;
*/
// const res = 10 + ++i;
// const res = 10 + i++; // I+=1;

// console.log("Before");

// console.log("After");

/**
 * -------------------------------
 */

// console.log("Before");

// console.log("After");

/**
 * -------------------------------
 */

// let a = 10;

// console.log(a);
// console.log(b);

/**
 * -------------------------------
 */

// console.log("Before while loop");

// let counter = 0;

// console.log("After while loop");

//!======================================================

// let x = 25;

// while (x < 10) {
//   console.log(x);
//   x++;
// }

// do {
//   console.log(x++);
// } while (x < 10);

//!======================================================

// const dreamSalary = 1500;
// let currentSalary = 2000;

//!======================================================
// for (let i = 0; i < 3; i++) {
//   console.log('А можна трохи більше?');
//   currentSalary += Math.round(Math.random() * 100);
//   console.log(currentSalary);
// }

//!======================================================

// while (currentSalary < dreamSalary) {
//   console.log('А можна трохи більше?');
//   currentSalary += Math.round(Math.random() * 100) + 500;
//   console.log(currentSalary);
// }

// for( ;currentSalary < dreamSalary; ) {
//   console.log('А можна трохи більше?');
//   currentSalary += Math.round(Math.random() * 100) + 500;
//   console.log(currentSalary);
// }

//!======================================================
// do {
//   console.log('А можна трохи більше?');
//   currentSalary += Math.round(Math.random() * 100) + 500;
//   console.log(currentSalary);
// } while (currentSalary < dreamSalary);

//!======================================================

// const rand = Math.round(Math.random() * 500);
// console.log(rand);

// let x;

// do {
//   x = +prompt('Enter number');
//   if (x > rand) {
//     console.log('<');
//   } else {
//     console.log('>');
//   }
// } while (x !== rand);

// console.log('You won:', rand);

//!======================================================

// const max = 500;
// const rand = Math.round(Math.random() * max);
// console.log(rand);

// for (let i = 0; i < max; i++) {
//   console.log(i);
//   if (i === rand) {
//     console.log('the end');
//     break;
//   }
// }

//!======================================================

// const str = 'Hello World';
// debugger;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === ' ') {
//     continue;
//   }
//   console.log(str[i]);
// }

// for (let index = 0; index < 1000; index++) {
//   console.log('Hello');
// }
//!======================================================

// function foo(str) {
//   let result = '';

//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 0) {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i].toLowerCase();
//     }
//   }

//   return result;
// }

// const res1 = foo('Hello World');
// console.log(res1);
