// eslint-disable-next-line import/extensions
import POKEMON from './data/pokemon/pokemon.js';

// eslint-disable-next-line import/extensions
import { showPokemon, filtroTipoPokemon } from './data.js';

const contenedorPokemon = document.getElementById('lista-pokemones').innerHTML = showPokemon(POKEMON);

console.log(filtroTipoPokemon(POKEMON, 'Electric'));
