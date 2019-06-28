const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const searchForm = document.querySelector('.search-form');
const searchInput = searchForm.querySelector('.search');
let searchSuggestions = searchForm.querySelector('.suggestions');


fetch(endpoint)
  .then(blob => blob.json())
  .then(res => cities.push(...res))

function matchWord(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatch() {
  const matchArray = matchWord(this.value, cities);
  searchForm.removeChild(searchSuggestions);

  let newSearchSuggestions = document.createElement('ul');
  newSearchSuggestions.classList.add('suggestions');

  matchArray.forEach((match) => {
    let suggestionEl = document.createElement('li');
    let populationEl = document.createElement('span');

    suggestionEl.textContent = `${match.city}, ${match.state}`
    populationEl.textContent = `${match.population}`;
    suggestionEl.appendChild(populationEl);

    newSearchSuggestions.appendChild(suggestionEl);
  });

  searchForm.appendChild(newSearchSuggestions);
  searchSuggestions = searchForm.querySelector('.suggestions');
}


searchInput.addEventListener('change', displayMatch);
searchInput.addEventListener('keyup', displayMatch);
