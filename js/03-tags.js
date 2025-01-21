// const refs = {
//   firstTagsList: document.querySelector('.tags-box[data-group="group-1"]'),
//   secondTagsList: document.querySelector('.tags-box[data-group="group-2"]'),
// };
//!======================================================
// refs.firstTagsList.addEventListener('click', e => {
//   if (e.target === e.currentTarget) return;

//   const liElem = e.target.closest('li.tag-item');
//   liElem.classList.toggle('active');
// });

// function sendData() {
//   const firstActiveList = refs.firstTagsList.querySelectorAll('.active');
//   const arr = [...firstActiveList].map(el => el.textContent.trim());
//   console.log(arr);
// }
//!======================================================

// refs.secondTagsList.addEventListener('click', e => {
//   if (e.target === e.currentTarget) return;
//   const liElem = e.target.closest('li');
//   const oldActiveElem = refs.secondTagsList.querySelector('.active');

//   if (oldActiveElem) {
//     oldActiveElem.classList.remove('active');
//   }

//   liElem.classList.add('active');
// });
