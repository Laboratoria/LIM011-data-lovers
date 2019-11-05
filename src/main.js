/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */

import POTTER from './data/potter/potter.js';
import { ascendente } from './data.js';
// console.log(POTTER);

const contentCharacter = document.getElementById('contentCharacter');
const filterMenu = document.getElementById('filterMenu');
const imageIcon = document.getElementById('imageIcon');
const selectAlfab = document.getElementById('selectAlfab');
const modal = document.getElementById('modal');
let flex = document.getElementById('flex');
// const openModal = document.getElementById('openModal');
let close = document.getElementById('close');

const showCharacters = (dataPotter) => {
  let templatePotter = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < dataPotter.length; i++) {
    templatePotter += `
    <div class=content id="content">
    <div class=styleCharacter id="openModal">
    <img class=imageCharacter src=${dataPotter[i].image}>
    <div class=name>${dataPotter[i].name}</div>
    </div>
    </div>
    `;
  }
  return templatePotter;
};
contentCharacter.innerHTML = showCharacters(POTTER);

// Modal
const abrirModal = () => {
  // const newArray = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < POTTER.length; i++) {
    // eslint-disable-next-line no-const-assign
    // eslint-disable-next-line no-unused-expressions
    POTTER[i];
  }
  // console.log(newArray);
};

// openModal.addEventListener('click', () => {
//   modal.classList.add('hide');
// });
// Fin modal

contentCharacter.addEventListener('click', () => {
  abrirModal();
});

// Barra Lateral
let open = 0;
imageIcon.addEventListener('click', () => {
  if (open === 0) {
    filterMenu.classList.remove('hide');
    filterMenu.classList.add('show');
    open = 1;
  } else {
    filterMenu.classList.remove('show');
    open = 0;
  }
});
// Fin de Barra Lateral

// OrdenarAZ
selectAlfab.addEventListener('change', (event) => {
  if (event.target.value === '0') {
    contentCharacter.innerHTML = showCharacters(ascendente(POTTER));
  } else {
    contentCharacter.innerHTML = showCharacters(ascendente(POTTER).reverse());
  }
});
// Fin OrdenarAZ


// console.log(example);
// console.log(POTTER);


/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/
