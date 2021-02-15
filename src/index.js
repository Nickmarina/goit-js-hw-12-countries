import './styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import refs from './js/refs';

refs.formControl.addEventListener('input', debounce(searchCountryFn, 500));

function searchCountryFn(event) {
  refs.countriesList.innerHTML = '';
  event.preventDefault();
  const inputValue = event.target.value;
  if (!inputValue) {
    return clearCountriesList;
  }

  fetchCountries(inputValue);
}
