/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */

import POTTER from './data/potter/potter.js';
import { ascendente, genero, filterRole, filterRoleDos, houseUno } from './data.js';
// console.log(POTTER);

// const contentCharacter = document.getElementById('contentCharacter');
const contentCharacter = document.querySelector('#contentCharacter');
const filterMenu = document.getElementById('filterMenu');
const imageIcon = document.getElementById('imageIcon');
const selectAlfab = document.getElementById('selectAlfab');
const gender = document.getElementById('gender');
const role = document.getElementById('role');
const house = document.getElementById('house');
const modal = document.getElementById('modal');
let flex = document.getElementById('flex');
const openModal = document.getElementById('openModal');
let close = document.getElementById('close');

const showCharacters = (dataPotter) => {
  let templatePotter = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < dataPotter.length; i++) {
    templatePotter += `
    <div class=content id="content">
    <div class=styleCharacter id="openModal">
    <img id="name" class=imageCharacter src=${dataPotter[i].image}>
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

};

contentCharacter.addEventListener('click', (event) => {
  // console.log(event.target.name);
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

gender.addEventListener('change', () => {
  const filterGender = genero(POTTER, gender.value);
  contentCharacter.innerHTML = showCharacters(filterGender);
});


role.addEventListener('change', (event) => {
  const student = filterRole(POTTER);
  const staff = filterRoleDos(POTTER);
  if (event.target.value === 'hogwartsStudent') {
    contentCharacter.innerHTML = showCharacters(student);
  } else {
    contentCharacter.innerHTML = showCharacters(staff);
  }
});

house.addEventListener('change', () => {
  const chooseHouse = houseUno(POTTER, house.value);
  contentCharacter.innerHTML = showCharacters(chooseHouse);
});
