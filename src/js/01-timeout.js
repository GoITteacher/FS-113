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
console.log(1);
setTimeout(() => {
  console.log(2);
}, 3000);
setTimeout(() => {
  console.log(3);
}, 1000);

console.log(4);

//!======================================================
/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */

/**
 * Можливість передати параметри для колбеку
 */
