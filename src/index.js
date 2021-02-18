// Styles
import './styles.css';

// Debounce
import debounce from 'lodash.debounce';

// Sources js files
import fetchCountries from './js/fetchCountries';
import refs from './js/refs';
import updateCountriesListFn from './js/createCountriesListFn';

refs.formControl.addEventListener('input', debounce(searchCountryFn, 500));

function searchCountryFn(event) {
  event.preventDefault();
  refs.countriesList.innerHTML = '';
  const inputValue = event.target.value;

  if (!inputValue) {
    return;
  }
  console.log(inputValue);

  fetchCountries(inputValue).then(updateCountriesListFn);
}
