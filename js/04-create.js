/*
 * Створення та додавання елементів
 */
//!======================================================
const myElem = document.createElement('img');

myElem.setAttribute(
  'src',
  'https://as1.ftcdn.net/v2/jpg/05/71/06/76/1000_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg',
);

myElem.setAttribute('alt', 'cat');
myElem.style.width = '320px';
myElem.style.backdropFilter = '320px';
myElem.classList.add('test');

// const containerElem = document.querySelector('.js-hero');

// containerElem.appendChild(myElem);

//!======================================================
/*
//  * Створюємо заголовок
//  */
// // const titleEl = document.createElement('h1');
// // titleEl.textContent = 'Hello Text';
// // titleEl.classList.add('invalid-text');

// // document.body.prepend(titleEl);

// /*
//  * Створюємо зображення
//  * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
//  * valais-alpine-mountains-glacier
//  */
// const imageEl = document.createElement('img');

// const heroEl = document.querySelector('.hero');

// /*
//  * Створюємо та додаємо новий пункт меню
//  */
// const navItemEl = document.createElement('li');

//!======================================================

// const ulElem = document.querySelector('ul');

// console.log(ulElem);

// const myBox = [];

// for (let i = 1; i <= 100; i++) {
//   const liElem = document.createElement('li');
//   liElem.textContent = `Item ${i}`;
//   myBox.push(liElem);
// }

// console.log(myBox);

// ulElem.append(...myBox);

//!======================================================

// const arr = [
//   'html',
//   'css',
//   'js',
//   'react',
//   'node.js',
//   'express',
//   'mongodb',
//   'git',
// ];
// const ulElem = document.querySelector('ul');

// const myElems = arr.map(el => {
//   const liElem = document.createElement('li');
//   liElem.textContent = el;
//   return liElem;
// });
// ulElem.append(...myElems);

//!======================================================
