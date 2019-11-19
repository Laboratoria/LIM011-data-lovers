
import POTTER from './data/potter/potter.js';
import {
  ascendente, genero, filterRole, filterRoleDos, houseUno, search,
} from './data.js';

const contentCharacter = document.querySelector('#contentCharacter');
const filterMenu = document.getElementById('filterMenu');
const imageIcon = document.getElementById('imageIcon');
const selectAlfab = document.getElementById('selectAlfab');
const gender = document.getElementById('gender');
const role = document.getElementById('role');
const house = document.getElementById('house');
const modal = document.getElementById('modal');
const informacion = document.getElementById('informacion');
// const flex = document.getElementById('flex');
// const openModal = document.getElementById('abrir');
const close = document.getElementById('close');

const showCharacters = (dataPotter) => {
  let templatePotter = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < dataPotter.length; i++) {
    templatePotter += `
    <div class=content id="content" name="mostrar" ${dataPotter[i].name}>
    <div class=styleCharacter id="openModal">
    <img id="abrir" class=imageCharacter src=${dataPotter[i].image}>
    <div class=name>${dataPotter[i].name}</div>
    </div>
    <div>
    </div>
    </div>
    `;
  }
  return templatePotter;
};
contentCharacter.innerHTML = showCharacters(POTTER);

// Modal
// const abrirModal = () => {
//   // eslint-disable-next-line no-restricted-globals
//   const eventPotter = event.target.parentElement.name;
//   const newArray = POTTER.map((obj) => obj.name).indexOf(eventPotter);
//   // eslint-disable-next-line no-restricted-globals
//   if (event.target.parentElement.getAttribute('name') === 'mostrar') {
//     modal.classList.remove('hide');
//     informacion.innerHTML = `
//     <div>
//     <div>${POTTER[newArray].gender}</div>
//     </div>
//     `;
//   }
// };
// Fin Modal

// Cerrar Modal
close.addEventListener('click', () => {
  modal.classList.add('hide');
});

contentCharacter.addEventListener('click', (event) => {
  // eslint-disable-next-line no-restricted-globals
  const eventPotter = event.target.name;
  console.log(eventPotter);
  const newArray = POTTER.map((obj) => obj.name).indexOf(eventPotter);
  // eslint-disable-next-line no-restricted-globals
  if (event.target.getAttribute('name') === 'mostrar') {
    modal.classList.remove('hide');
    informacion.innerHTML = `
    <div>
    <div>${POTTER[newArray].house}</div>
    </div>
    `;
  }
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

const searchCharacter = document.getElementById('searchCharacter');
searchCharacter.addEventListener('input', () => {
  // eslint-disable-next-line no-restricted-globals
  const findCharacter = search(POTTER, event.target.value.toLowerCase());
  contentCharacter.innerHTML = showCharacters(findCharacter);
});

// eslint-disable-next-line vars-on-top
const str = 'casa world, welcome to the universe.';
const n = str.startsWith('casa'); 
console.log(n);
