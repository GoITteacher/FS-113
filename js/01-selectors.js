/*
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */

// const btnElems = document.getElementsByTagName('button');
// const elem = document.getElementById('js-link');
// const elem = document.getElementsByName('js-link');
// const elems = document.getElementsByClassName('site-nav__item');

// console.log(elems);

//!======================================================
// querySelector
// querySelectorAll

// const ulElem = document.querySelector('.site-nav');// null

// const liElem = ulElem.querySelectorAll('li');// []

// console.log(liElem);
//
//!======================================================

/*
 * Властивості «навігації» по DOM-вузлах
 *
 */

// const ulElem = document.querySelector('.js-site-nav');
// const pElem = ulElem.children[1];

// console.log(pElem);

// // parentElement
// // previousElementSibling
// // nextElementSibling
// // firstElementChild
// // lastElementChild
// // children
