/*
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const innerChild = document.querySelector('#inner-child');

parent.addEventListener('click', e => {
  console.log(e.currentTarget);
});

// child.addEventListener('click', e => {
//   console.log(e.currentTarget);
// });

// innerChild.addEventListener('click', e => {
//   console.log(e.currentTarget);
// });
// innerChild.addEventListener('click', e => {
//   console.log(e.currentTarget);
//   e.stopImmediatePropagation();
// });
// innerChild.addEventListener('click', e => {
//   console.log(e.currentTarget);
//   e;
// });
