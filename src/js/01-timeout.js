import * as basicLightbox from 'basiclightbox';
/*
 * Метод window.setTimeout(callback, delay, args)
 */

// function sayHello() {
//   alert('Hello world');
// }

// setTimeout(sayHello, 2000);

//!======================================================

// function showSpam() {
//   const instance = basicLightbox.create(`
//     <div class="modal" style="background-color: blue;">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

//   instance.show();
// }

// // setTimeout(showSpam, 5000);

// setTimeout(() => {
//   showSpam();
// }, 2000);
//!======================================================
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 3000);
// setTimeout(() => {
//   console.log(3);
// }, 1000);

// console.log(4);

//!======================================================
/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */

// const firstTimeout1 = setTimeout(() => {
//   console.log(1);
// }, 5000);
// const firstTimeout2 = setTimeout(() => {
//   console.log(2);
// }, 5000);
// const firstTimeout3 = setTimeout(() => {
//   console.log(3);
// }, 5000);
// const firstTimeout4 = setTimeout(() => {
//   console.log(5);
// }, 5000);
// const firstTimeout5 = setTimeout(() => {
//   console.log(6);
// }, 5000);

// console.log(firstTimeout1);
// console.log(firstTimeout2);
// console.log(firstTimeout3);
// console.log(firstTimeout4);
// console.log(firstTimeout5);

// clearTimeout(firstTimeout3);

/**
 * Можливість передати параметри для колбеку
 */
// const showMessage = (x1, x2, x3) => {
//   console.log(x1, x2, x3);
// };

// function createSpamMessage() {
//   const message = 'HELLO WORLD';

//   setTimeout(showMessage, 1000, 5);

//   setTimeout(() => {
//     showMessage(10, 5, 1);
//   }, 2000);
// }

// createSpamMessage();
