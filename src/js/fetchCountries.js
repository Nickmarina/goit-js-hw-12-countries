import errorMessage404 from './404message';
import serchResult from './searchResult';

function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url)
    .then(errorMessage404)
    .then(countries => serchResult(countries))
    .catch(error => console.log(error));
}

export default fetchCountries;
