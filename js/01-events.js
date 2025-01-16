/**
 * Подія сlick
 *
 * - addEventListener
 * - removeEventListener
 *
 * Натискаючи на кнопку "Click me" змусь
 * червоний квадратик зміщуватись на 50px по діагоналі
 */

// let counter = 0;

// function increment() {
//   counter += 1;
//   btnElem.textContent = `Click me ${counter}`;
// }

// btnElem.addEventListener('click', increment);
// btnElem.addEventListener('click', increment);

// btnElem.removeEventListener('click', increment);

// btnElem.addEventListener('click', () => {
//   console.log('click');
// });

//!======================================================

/* 
 onTargetEvent - onBtnClick
 handleTargetEvent - handleBtnElemClick
 targetEventHandler - btnClickHandler
*/

/*
 * Натискаючи на кнопку "Click me" змусь
 * червоний квадратик зміщуватись на 50px по діагоналі
 */

// const btnElem = document.querySelector('.js-click');
// const myBox = document.querySelector('.js-box');

// btnElem.addEventListener('click', onBtnClick);

// const position = {
//   x: 100,
//   y: 100,
// };
function onBtnClick(evt) {
  position.x += 50;
  position.y += 50;

  myBox.style.left = Math.round(Math.random() * 1000) + 'px';
  myBox.style.top = Math.round(Math.random() * 1000) + 'px';
}
