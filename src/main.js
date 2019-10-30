/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */
import POTTER from './data/potter/potter.js';
import { showCharacters } from './data.js';

// console.log(POTTER);

const contentCharacter = document.getElementById('contentCharacter');
let templatePotter = '';
// eslint-disable-next-line no-plusplus
for (let i = 0; i < POTTER.length; i++) {
  templatePotter += `
    <div class=content id="content">
    <div class=styleCharacter>
    <img class=imageCharacter src=${POTTER[i].image}>
    <div class=name>${POTTER[i].name}</div>
    </div>
    </div>
    `;
  contentCharacter.innerHTML = templatePotter;
}

console.log(showCharacters);

// Barra Lateral

const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', () => {
  document.getElementById('sideBar').classList.toggle('active');
});

// fin BarraLateral

// ordenar AZ
// const ascendant = document.querySelector('#ascendant');
// ascendant.addEventListener('click', (event) => {
//     if (event.target.value === '0') {
//         contentCharacter.innerHTML = mostrarPoke(ordenarPoke(pokeData));
//     }
// });

/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/
