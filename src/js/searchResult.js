import countries from '../templates/countries.hbs';
import countryCard from '../templates/country.hbs';
import refs from './refs';
import error from './notify';

function searchResult(countries) {
  // if (countries.length <= 1) {
  //     return;
  // }
  // if (countries === undefined) {
  //   return;
  // }
  if (countries.length > 10) {
    error('Too many matches found.Please enter a more specific query!');
    return;
  }
  if (countries.length === 1) {
    createCard(countries);
    return;
  }
  updateCountriesList(countries);
}

function updateCountriesList(item) {
  const markup = countries(item);
  refs.countriesList.insertAdjacentHTML('beforeend', markup);
}

function createCard(country) {
  const markup = countryCard(country);
  refs.countriesList.innerHTML = markup;
}

export default searchResult;
