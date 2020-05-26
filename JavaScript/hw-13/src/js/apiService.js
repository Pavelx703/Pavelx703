const API_KEY = '16179084-bcee517f085901c089ac4ea9d';
const PER_PAGE = 12;
let url;

export default function pixabayApi(search, currentPage, callback) {
  url = `https://pixabay.com/api/?q=${search}&page=${currentPage}&per_page=${PER_PAGE}&key=${API_KEY}`;
  fetch(url)
    .then(j => j.json())
    .then(data => callback(data))
    .catch(e => console.log('ERROR: ', e));
}
