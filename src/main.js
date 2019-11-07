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
  // const newArray = [];
  // eslint-disable-next-line no-plusplus
  // for (let i = 0; i < POTTER.length; i++) {
  // /* console.log(POTTER[i]); */

  //   console.log(POTTER[0]);
  // }
  // console.log(newArray);
  // eslint-disable-next-line no-restricted-globals
  // const positionCharacater = event.target.id;
  // const dataP = POTTER.map((obj)=>obj.id)
  const dataP = POTTER.map(a => {
    return a;
  });
  console.log(dataP[0]);
  // eslint-disable-next-line no-restricted-globals
  // const potercito = event.target.parentElement.POTTER - 1;
  // // eslint-disable-next-line no-restricted-globals
  // if (event.target.parentElement.getAttribute('name') === 'POTTER') {
  //   // eslint-disable-next-line no-undef
  //   console.log(potercito );
  // }
};

// openModal.addEventListener('click', () => {
//   modal.classList.add('hide');
// });
// Fin modal

contentCharacter.addEventListener('click', (event) => {
  // console.log(event.target.name);
  abrirModal();
  alert('Estamos en manteniento proximamente');
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
