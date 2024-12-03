/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean('')); // false

// console.log(Boolean(Infinity)); // true
// console.log(Boolean(-Infinity)); // true
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean('hello')); // true
// console.log(Boolean('false')); // true
// console.log(Boolean('0')); // true

// const userNumber = +prompt('Enter number:');

/**
 * --------------------------------
 */

/* 
Завжди повератає перше фолс
Якщо немає повертає останній операнд
*/
// 5000 && maldivi && awdawd && awdawd

// console.log(5 && 4);
// console.log(5 && 'mango');

/**
 * --------------------------------
 */
/* 
Завжди повератає перше true
Якщо немає повертає останній операнд
*/
// console.log(false || 5); //5
// console.log(false || null); // null

// /**
//  * --------------------------------
//  */

// console.log(!5);// false
// console.log(!false);// true
// console.log(!!7);// true
// console.log(Boolean(7));// true
// console.log(+'4');// true

/**
 * --------------------------------
 */

/* 
&&
Завжди повератає перше фолс
Якщо немає повертає останній операнд
*/

// console.log(true && 3); // 3

// console.log(false && 3); //false

// console.log(true && 4 && 'kiwi'); // 'kiwi'

// console.log(true && 0 && 'kiwi'); //0

// console.log(true || 3); // true

// console.log(true || 3 || 4); // true

// console.log(true || false || 7); // true

// console.log(null || 2 || undefined); // 2

// console.log((1 && null && 2) > 0); //f
// console.log(null || (2 && 3) || 4); //3

//!======================================================

// const userSalary = '';

// const result = userSalary || 1000;

// console.log(result);

//!======================================================

// const userName = prompt('Enter Name');

// const result = userName || 'Anonym';

// console.log(`Hello ${result}`);

//!======================================================

// const firstName = 'Hello';
// const lastName = 'World';
// const city = 'Dnipro';

// if (firstName && lastName && city) {
//   console.log('OK');
// }

// true - 1
// false - 0
// || - +
// && - *
//!======================================================
