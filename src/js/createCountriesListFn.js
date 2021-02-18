// Templates
import countriesListTemplate from '../templates/countries.hbs';
import countryCardTemplate from '../templates/country.hbs';

// Another js files
import refs from './refs';
import error from './notify';

function updateCountriesListFn(countries) {
  if (countries.status === 404) {
    error('This country does not find');
    return;
  }
  //   if (countries === undefined) {
  //     return;
  //   }
  if (countries.length > 10) {
    error('Too many matches found.Please enter a more specific query!');
    return;
  }
  if (countries.length === 1) {
    createCountryCard(countries);
    return;
  }
  createCountriesList(countries);
}

function createCountryCard(country) {
  const markup = countryCardTemplate(country);
  refs.countriesList.insertAdjacentHTML('beforeend', markup);
}

function createCountriesList(countries) {
  const markup = countriesListTemplate(countries);
  refs.countriesList.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesListFn;
