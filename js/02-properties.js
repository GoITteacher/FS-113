/*
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const imageEl = document.querySelector('.hero__image');
const heroTitleEl = document.querySelector('.hero__title');
//!======================================================

// imageEl.alt = 'Hello world';
// imageEl.src =
//   'https://as1.ftcdn.net/v2/jpg/05/71/06/76/1000_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg';

//!======================================================
/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

// imageEl.setAttribute('alt', 'Hello alt');
// imageEl.setAttribute('hello', 'Hello world');
// imageEl.removeAttribute('data-name');

// if (imageEl.hasAttribute('data-name')) {
//   console.log(`Hello ${imageEl.getAttribute('data-name')}`);
// }

// // const x = imageEl.getAttribute('data-name');
//!======================================================
/*
 * Data-атрибути
 */

// console.log(imageEl.dataset);
// imageEl.dataset.test = 'Vasya';

// const actions = document.querySelectorAll('.actions button');
