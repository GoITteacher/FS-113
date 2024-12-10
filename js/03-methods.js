/**
 * Методи масиву
 *
 * - join
 * - split
 * - slice
 * - concat
 * - indexOf
 * - push/pop
 * - includes
 */

//!======================================================
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// const coursesStr = courses.join(', ');

// const message = `Я вивчаю курси: ${coursesStr}.`;
// console.log(message);

//!======================================================

// const message = 'Hello world test - info ban word';

// const elems = message.split('rgdsrgsdr');

// console.log(elems);

//!======================================================

// const arr = [1, 2, 3, 4, 5];

// const copy = arr.slice(0, -2); //[1, 2, 3, 4, 5]

// copy[4] = 'Hello world';

// console.log(arr);
// console.log(copy);

// const rgba = [20, 12, 20, 0.5];

// const rgb = rgba.slice(0, -1);

// console.log(rgb, rgba);

// const arr = [102, 4, 5, 1, 32, 4, 67, 512, 1, 23, 47, 87, 2, 1];

// const firstPart = arr.slice(0, 2);
// const secondPart = arr.slice(-2);

// const result = [].concat(firstPart, secondPart);
// console.log(result);

//!======================================================

// const arr = [1,2,3];
// arr.concat([4,5,6], [7,8,9])

// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];
// const num3 = [7, 8, 9];

// const result = num1.concat(num3, num2); // [1,2,3,4,5,6,7,8,9]

// console.log(result);

//!======================================================

// const arr = ['Vova', 'Vasya', 'Petya', 'Anton', 'Mykola', 'Anton', 'Petro'];

// const index = arr.indexOf('Anton', 5);
// const index1 = arr.lastIndexOf('Anton', 1);

// arr[index1] = 'Antonio';

// console.log(arr);

//!======================================================

// PUSH POP

// const countries = ['Ukraine', 'Poland'];

// const newLength = countries.push('USA', 'Dania');

// countries.pop();

// console.log(countries);

//!======================================================
// SHIFT UNSHIFT
// const countries = ['Ukraine', 'Poland'];
// countries.unshift('1', '2', '3');

// console.log(countries);
// let name;

// const arr = ['Vova', 'Vasya', 'Petya', 'Anton', 'Mykola', 'Anton', 'Petro'];
// console.log(arr);
// name = arr.shift();
// console.log(`${name} Заходьте`);

// console.log(arr);

// name = arr.shift();
// console.log(`${name} Заходьте`);

// console.log(arr);

//!======================================================

// const friends = ['Vova', 'Vasya', 'Petya', 'Anton', 'Mykola', 'Anton', 'Petro'];

// const result = friends.includes('Mykola');
// console.log(result);
