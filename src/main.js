/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */
import POTTER from './data/potter/potter.js';
// Ejemplo funciona
// eslint-disable-next-line import/named
import { showCharacters, ascendente } from './data.js';

document.querySelector('#contentCharacter').innerHTML = showCharacters(POTTER);

document.querySelector('#contentCharacter').innerHTML = ascendente(POTTER);

// Ejemplo funciona
// const result = showCharacters();
// console.log(`result: ${result}`);
// console.log(POTTER);

// console.log(showCharacters);

// Barra Lateral

const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', () => {
  document.getElementById('sideBar').classList.toggle('active');
});
// fin BarraLateral

// ordenar AZ

// const hola = document.getElementById('hola');
// hola.addEventListener('click', (ascendente)=>{

// });

// const ascendant = document.querySelector('#ascendant');
// ascendant.addEventListener('click', () => {
//   const numero = showCharacters();
//   console.log(`result: ${numero}`);
// });

/*
 * console.log(POTTER)
*/
// if (event.target.value === '0') {
//     // contentCharacter.innerHTML = mostrarPoke(ordenarPoke(pokeData));
//   }