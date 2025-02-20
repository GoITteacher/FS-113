import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  createBook,
  getAllBooks,
  resetBook,
  updateBook,
} from './modules/booksAPI';

const refs = {
  createFormElem: document.querySelector('.js-create-form'),
  updateFormElem: document.querySelector('.js-update-form'),
  resetFormElem: document.querySelector('.js-reset-form'),
  deleteFormElem: document.querySelector('.js-delete-form'),
  bookListElem: document.querySelector('.js-article-list'),
};

//!======================================================

refs.createFormElem.addEventListener('submit', handleCreateBook);
refs.updateFormElem.addEventListener('submit', handleUpdateBook);
refs.resetFormElem.addEventListener('submit', handleResetBook);
refs.deleteFormElem.addEventListener('submit', handleDeleteBook);

//!======================================================

async function handleCreateBook(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const data = {
    rating: Math.round(Math.random() * 10),
    price: Math.round(Math.random() * 1000),
  };

  for (const [key, value] of formData.entries()) {
    const newKey = key.slice(4).toLowerCase();
    data[newKey] = value;
  }

  const newBook = await createBook(data);
  const markup = bookTemplate(newBook);
  refs.bookListElem.insertAdjacentHTML('afterbegin', markup);

  e.target.reset();
}

async function handleUpdateBook(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const id = e.target.elements.bookId.value;
  const data = {};

  for (const [key, value] of formData.entries()) {
    if (!value.trim()) continue;
    const newKey = key.slice(4).toLowerCase();
    data[newKey] = value;
  }

  try {
    const newBook = await updateBook(id, data);
    const markup = bookTemplate(newBook);
    const oldBook = document.querySelector(`[data-id="${id}"]`);
    oldBook.insertAdjacentHTML('beforebegin', markup);
    oldBook.remove();
  } catch (err) {
    iziToast.error({
      title: 'Sorry',
      message: err,
    });
  }

  e.target.reset();
}

async function handleResetBook(e) {
  e.preventDefault();

  const id = e.target.elements.bookId.value;
  const data = {
    title: e.target.elements.bookTitle.value,
    author: e.target.elements.bookAuthor.value,
    desc: e.target.elements.bookDesc.value,
    rating: Math.round(Math.random() * 10),
    price: Math.round(Math.random() * 1000),
  };

  try {
    const newBook = await resetBook(id, data);
    const markup = bookTemplate(newBook);
    const oldBook = document.querySelector(`[data-id="${id}"]`);
    oldBook.insertAdjacentHTML('beforebegin', markup);
    oldBook.remove();
  } catch (err) {
    iziToast.error({
      title: 'Sorry',
      message: err,
    });
  }

  e.target.reset();
}

async function handleDeleteBook(e) {
  e.preventDefault();

  const id = e.target.elements.bookId.value;
  const data = {
    title: e.target.elements.bookTitle.value,
    author: e.target.elements.bookAuthor.value,
    desc: e.target.elements.bookDesc.value,
    rating: Math.round(Math.random() * 10),
    price: Math.round(Math.random() * 1000),
  };

  const newBook = await resetBook(id, data);
  const markup = bookTemplate(newBook);
  const oldBook = document.querySelector(`[data-id="${id}"]`);
  oldBook.insertAdjacentHTML('beforebegin', markup);
  oldBook.remove();
  e.target.reset();
}

//!======================================================

// function bookTemplate(book) {
//   const { id, title, author, desc, price, rating } = book;
//   const radnomId = Math.round(Math.random() * 100);
//   return `<li class="book-item card" data-id="${id}">
//         <img
//           class="book-img"
//           src="https://picsum.photos/id/${radnomId}/720/1280"
//           alt=""
//         />
//         <h5 class="book-title">${id} - ${title}</h5>
//         <h6>Author: ${author}</h6>
//         <p class="book-desc">${desc}</p>
//         <div class="book-info">
//           <span>Price: ${price}</span>
//           <span>Rating: ${rating}</span>
//         </div>
//       </li>`;
// }

// function booksTemplate(arr) {
//   return arr.map(bookTemplate).join('');
// }

// const data = await getAllBooks();
// const markup = booksTemplate(data);
// refs.bookListElem.innerHTML = markup;

//!======================================================

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 1000);

// Promise.resolve(1).then(() => {
//   setTimeout(() => {
//     console.log('3');
//   }, 1000);
// });

// console.log(4);

//!======================================================

// const arr = [promise1, Path2D,p3,p4];

// Promise.all(promises);
// Promise.allSettled(arr) // -> []
// Promise.race(arr)
// Promise.any(arr) ->

// Promise.then(() => {
//   console.log(1);
// }).then(() => {
//   console.log(2);
// });

// Promise.then(() => {
//   console.log(1_1);
// }).then(() => {
//   console.log(2_2);
// });
