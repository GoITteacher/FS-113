// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.css';

// new SimpleLightbox('.some-element a', { /* options */ });

const STORAGE_KEY = 'feedback-msg';

const refs = {
  form: document.querySelector('.feedback-form'),
  container: document.querySelector('.js-container'),
};

let arr = [];

//!======================================================

refs.form.addEventListener('input', e => {
  const name = e.currentTarget.elements.name.value;
  const message = e.currentTarget.elements.message.value;
  const data = { name, message };
  saveToLS(STORAGE_KEY, data);
});

//!======================================================

function initPage() {
  const formData = loadFromLS(STORAGE_KEY);
  refs.form.elements.name.value = formData?.name || 'Anonym';
  refs.form.elements.message.value = formData?.message || '';

  arr = loadFromLS('data') || [];
  refs.container.innerHTML = cardsTemplate(arr);
}

initPage();

//!======================================================

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const name = e.currentTarget.elements.name.value;
  const message = e.currentTarget.elements.message.value;
  const data = { name, message };

  arr.push(data);

  refs.container.innerHTML = cardsTemplate(arr);
  saveToLS('data', arr);
  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
});

//!======================================================

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const body = localStorage.getItem(key);
  try {
    const data = JSON.parse(body);
    return data;
  } catch {
    return body;
  }
}

function cardTemplate(card) {
  return `<div>
        <p>${card.name}</p>
        <p>${card.message}</p>
      </div>`;
}

function cardsTemplate(cards) {
  return cards.map(cardTemplate).join('\n');
}
