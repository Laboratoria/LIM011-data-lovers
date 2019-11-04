/* eslint-disable no-console */

import POKEMON from './data/pokemon/pokemon.js';

import { pintaPokemones, pokemonAsc, pokemonDesc } from './data.js';

const pokemons = document.getElementById('pokemons');
document.querySelector('#pokemons').innerHTML = pintaPokemones(POKEMON);

const ascendente = document.getElementById('orAsc');
ascendente.addEventListener('click', () => {
  pokemons.innerHTML = '';
  // let asc = document.querySelector('input[name="ordena"]:checked');
  const ordeAsc = pokemonAsc(POKEMON);
  document.querySelector('#abc').innerHTML = pintaPokemones(ordeAsc);
  console.log(pokemonAsc(POKEMON));
});
const descendente = document.getElementById('orDesc');
descendente.addEventListener('click', () => {
  // const asc = document.querySelector('input[name="ordena"]:checked');
  const ordeDesc = pokemonDesc(POKEMON);
  document.querySelector('#cba').innerHTML = pintaPokemones(ordeDesc);
  console.log(pokemonDesc(POKEMON));
});
