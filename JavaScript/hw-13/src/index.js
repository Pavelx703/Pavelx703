import './styles.css';
import pixabayApi from './js/apiService.js';
import template from './templates/template.hbs';
import refs from './js/refs.js';

refs.search.addEventListener('click', onSearchClick);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

const LOCAL_STORAGE = 'LastQuery';
if (localStorage.getItem(LOCAL_STORAGE)) {
  refs.input.value = localStorage.getItem(LOCAL_STORAGE);
}

let currentPage = 0;
function onSearchClick(e) {
  localStorage.setItem(LOCAL_STORAGE, refs.input.value);
  currentPage++;
  refs.search.innerHTML = currentPage + ' page';
  pixabayApi(refs.input.value, currentPage, onDataCome);
}

function onDataCome(data) {
  const queryResult = template(data.hits);
  refs.gallery.insertAdjacentHTML('beforeend', queryResult);
}

function onLoadMore() {
  currentPage++;
  pixabayApi(refs.input.value, currentPage, onDataCome);
}
