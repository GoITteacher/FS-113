/**
 * Деструктуризація об'єкта
 */

//!======================================================

// const user = {
//   username: 'Jacob name',
//   number: '+38099561234',
//   city: 'Dnipro',
//   country: 'Ukraine',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
//   sayHello() {},
// };

// const {sayHello: myFunction} = user;
// myFunction()

// let { city, username, number, country } = user;

// let username = user.username;
// let country = user.country;
// let number = user.number;
// let city = user.city;

//!======================================================

/**
 * Глибока деструктуризація об'єкта
 */
// const country = 'Ukraine';

// const user = {
//   username: 'Jacob name',
//   number: '+38099561234',
//   city: 'Dnipro',
//   country: 'Ukraine',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
//   location: {
//     x: 100,
//     y: 200,
//   },
// };

// const {
//   skills: { html, css, js },
// } = user;

// const {
//   location: { x, y },
//   skills: { html, css, js },
// } = user;
// const { skills } = user;
// const { html, css, js } = skills;
// const {html, css, js} = user.skills
//!======================================================
// const user = {
//   username: 'Jacob name',
//   number: '+38099561234',
//   city: 'Dnipro',
//   country: 'Ukraine',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
//   location: {
//     x: 100,
//     y: 200,
//   },
// };

// const { country, x:{test}, y } = user;

// const country = user.country;
// const {test} = user.x;
// const y = user.y;

//!======================================================
// const user = {
//   username: 'Jacob name',
//   number: '+38099561234',
//   city: 'Dnipro',
//   country: 'Ukraine',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
//   location: {
//     x: 100,
//     y: 200,
//   },
// };

// const { x = 0, y = 0 } = user;

// const x = 'Hello' || 0
// const y = user.y || 0

// console.log(x, y);

//!======================================================
// const user = {
//   username: 'Jacob name',
//   number: '+38099561234',
//   city: 'Dnipro',
//   country: 'Ukraine',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
//   location: {
//     x: 100,
//     y: 200,
//   },

//   x: 'Hello World',
// };

// const {
//   x: text,
//   location: { x: locX = 10, y=10 },
// } = user;

// const {city: x, city: y, city: q} = user;
/* 
const x = user.city
const y = user.city
const q = user.city
*/

//!======================================================

/**
 * Деструктуризація масива
 */

// const rgb = [150, 200, 58];

// const [red = 0, green = 0, blue = 0, a = 1] = rgb;

// console.log(red, green, blue);

//!======================================================

// let x = 10;
// let y = 50;
// let tmp = x;
// x = y;
// y = tmp;

//!======================================================

// let x = 10;
// let y = 20;
// let q = 30;
// let t = 25;
// let u = 60;
// let r = 70;

// [t, q, r, u, q, x, y] = [x, y, q, t, u, r];
