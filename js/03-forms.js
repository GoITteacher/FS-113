/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

const form = document.querySelector('.js-form');
const messageListElem = document.querySelector('.js-container');

form.addEventListener('submit', onFormSubmit);

/* function onFormSubmit(e) {
  e.preventDefault();

  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;
  const comment = e.target.elements['user-text'].value;

  const data = {
    email: email,
    comment: comment,
  };

  const markup = messageTemplate(data);
  messageListElem.insertAdjacentHTML('afterbegin', markup);

  form.reset();
}
 */

// function onFormSubmit(e) {
//   e.preventDefault();

//   // const formData = new FormData(form);
//   const formData = new FormData(e.target);
//   const data = Object.fromEntries(formData.entries());
//   console.log(data);
// }

// function onFormSubmit(e) {
//   e.preventDefault();

//   // const formData = new FormData(form);
//   const formData = new FormData(e.target);
//   const data = {
//     email: formData.get('email'),
//     message: formData.get('comment'),
//   };
//   console.log(data);
// }

//!======================================================

function messageTemplate(messageObj) {
  return `<div class="message">
        <p>
          ${messageObj.comment}
        </p>
      </div>`;
}
