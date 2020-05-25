'use strict';
import countrySearch from './services/fetchCountry.js';
import refs from './refs.js';
import articlesOneCountry from '../templates/oneCountry.hbs';
import countryList from '../templates/manyCoutry.hbs';

import '@pnotify/core/dist/BrightTheme.css';
const { error } = require('@pnotify/core');
var debounce = require('lodash.debounce');

refs.searchForm.addEventListener(
  'input',
  debounce(countrySearchInputHandler, 500),
);

function countrySearchInputHandler(e) {
  e.preventDefault();
  clearArticlesContainer();
  const queryValue = e.target.value;
  if (queryValue) {
    countrySearch
      .fetchArticles(queryValue)
      .then(data => {
        if (data.length > 10) {
          error({
            text: 'Too many matches found. Please enter a more specific query!',
          });
        } else if (data.status === 404) {
          error({
            text:
              'No country has been found. Please enter a more specific query!',
          });
        } else if (data.length === 1) {
          buildListMarkup(data, articlesOneCountry);
        } else if (data.length <= 10) {
          buildListMarkup(data, countryList);
        }
      })
      .catch(Error => {
        Error({
          text: 'You must enter query parameters!',
        });
        console.log(Error);
      });
  }
}
function buildListMarkup(countryes, template) {
  const markup = countryes.map(count => template(count)).join();
  refs.articlesContainer.insertAdjacentHTML('afterbegin', markup);
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}
