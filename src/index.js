import './styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import refs from './js/refs';

refs.formControl.addEventListener('input', debounce(searchCountryFn, 500));

function searchCountryFn(event) {
  event.preventDefault();
  refs.countriesList.innerHTML = '';
  const inputValue = event.target.value;
  // if (!inputValue) {
  //   return clearCountriesList;
  // }

  fetchCountries(inputValue);
}
