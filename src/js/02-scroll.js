import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchArticles } from './modules/newsAPI2.js';
import { articlesTemplate } from './templates/render-functions.js';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  targetElem: document.querySelector('.js-target'),
  loadElem: document.querySelector('.js-loader'),
};
//!======================================================

const PER_PAGE = 10;
let query;
let page;
let maxPage;

//!======================================================

refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();
  page = 1;
  query = e.target.elements.query.value;

  const result = await fetchArticles(query, page, PER_PAGE);
  maxPage = Math.ceil(result.totalResults / PER_PAGE);
  const markup = articlesTemplate(result.articles);
  refs.articleListElem.innerHTML = markup;

  updateObserver();
});

async function loadMore() {
  console.log('LOAD MORE');

  page += 1;
  const result = await fetchArticles(query, page, PER_PAGE);
  const markup = articlesTemplate(result.articles);
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);
  updateObserver();
}
//!======================================================

const options = {
  rootMargin: '0px',
  threshold: 1,
};

const observer = new IntersectionObserver(arr => {
  const info = arr[0];
  if (info.isIntersecting) {
    loadMore();
  }
}, options);

//!======================================================

function updateObserver() {
  if (page < maxPage) {
    console.log('+observer');
    observer.observe(refs.targetElem);
  } else {
    console.log('-observer');
    observer.unobserve(refs.targetElem);
  }
}
