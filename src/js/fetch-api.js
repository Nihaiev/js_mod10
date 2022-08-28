/**
 * Http запити в барузері
 */

import '../css/common.css';
import pokemoncardTpl from '../template/pokemon-card.hbs';
import API from './api-service'; //робота з бекендом
import getRefs from './get-refs'; //отримання рефів

const refs = getRefs

// робота з інтерфейсом 

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  API.fetchPokemon(searchQuery)
    .then(renderpokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function renderpokemonCard(pokemon) {
  const markup = pokemoncardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert(' Упс, щось пішло не так');
}
