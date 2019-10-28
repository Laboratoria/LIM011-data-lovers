import POKEMON from './data/pokemon/pokemon.js';
import { mostrarPokemon } from './data.js';

console.log(POKEMON);

document.querySelector('#insertar-pokemones').innerHTML = mostrarPokemon(POKEMON);
