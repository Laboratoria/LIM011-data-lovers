//Manejo DOM
/*
 * import POKEMON from './data/pokemon/pokemon.js'
 */
import POKEMON from './data/pokemon/pokemon.js'

import { showPokemon } from './data.js';
console.log(POKEMON);
const contenedorPokemon = document.getElementById("muestrapokemon").innerHTML=showPokemon(POKEMON);



/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/
