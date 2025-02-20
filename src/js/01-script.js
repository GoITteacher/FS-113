import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { articlesTemplate } from './templates/render-functions.js';
import { fetchArticles } from './modules/newsAPI.js';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  loadElem: document.querySelector('.js-loader'),
};

const params = {
  query: null,
  page: null,
  total: null,
  perPage: 20,
};

//!======================================================

refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();

  showSpinner();

  params.query = e.target.elements.query.value;
  params.page = 1;
  try {
    const result = await fetchArticles(
      params.query,
      params.page,
      params.perPage,
    );
    const markup = articlesTemplate(result.articles);
    refs.articleListElem.innerHTML = markup;
    params.total = result.totalResults;
  } catch {
    refs.articleListElem.innerHTML = '';
    iziToast.error('Error');
  }

  checkBtnStatus();
  hideSpinner();
});

//!======================================================

refs.btnLoadMore.addEventListener('click', async () => {
  params.page += 1;
  showSpinner();
  checkBtnStatus();
  const result = await fetchArticles(params.query, params.page, params.perPage);
  const markup = articlesTemplate(result.articles);
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);
  hideSpinner();

  scrollPage();
});

//!======================================================

function showLoadMoreBtn() {
  refs.btnLoadMore.disabled = false;
  // refs.btnLoadMore.classList.remove('hidden');
}

function hideLoadMoreBtn() {
  refs.btnLoadMore.disabled = true;
  // refs.btnLoadMore.classList.add('hidden');
}

function checkBtnStatus() {
  const perPage = 20;
  const maxPage = Math.ceil(params.total / perPage);

  if (params.page >= maxPage) {
    hideLoadMoreBtn();
    iziToast.info('This is last page');
  } else {
    showLoadMoreBtn();
  }
}

//!======================================================
function showSpinner() {
  refs.loadElem.classList.remove('hidden');
}

function hideSpinner() {
  refs.loadElem.classList.add('hidden');
}

//!======================================================

function scrollPage() {
  const info = refs.articleListElem.firstElementChild.getBoundingClientRect();
  const height = info.height;
  scrollBy({
    behavior: 'smooth',
    top: height * 2,
  });
}
