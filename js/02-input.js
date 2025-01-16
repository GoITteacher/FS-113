/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */
//!======================================================
// const userNameElem = document.querySelector('.js-user-name');
// const messageElem = document.querySelector('.js-message');

// userNameElem.addEventListener('input', ()=>{

// })

// function onInputChange() {
//   const minLen = +userNameElem.dataset.minLen;
//   const len = userNameElem.value.length;
//   if (len >= minLen) {
//     userNameElem.style.border = '5px solid green';
//     messageElem.textContent = '';
//   } else {
//     userNameElem.style.border = '5px solid red';
//     messageElem.textContent = 'Password is invalid';
//   }
// }

// userNameElem.addEventListener('input', onInputChange);
//!======================================================
/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */
//!======================================================

const userNameElem = document.querySelector('.js-user-name');
// // const messageElem = document.querySelector('.js-message');

// userNameElem.addEventListener('focus', () => {
//   userNameElem.style.border = 'none';
// });

userNameElem.addEventListener('blur', e => {
  const minLen = +userNameElem.dataset.minLen;
  const len = userNameElem.value.length;
  if (len >= minLen) {
    e.target.style.border = '5px solid green';
    // messageElem.textContent = '';
  } else {
    e.target.style.border = '5px solid red';
    // messageElem.textContent = 'Password is invalid';
  }
});

//!======================================================

// userNameElem.addEventListener('change', () => {
//   console.log('Change');
// });

//!======================================================
document.body.addEventListener('click', evt => {
  console.log(evt.currentTarget);
});
