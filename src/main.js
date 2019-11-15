import dataPotter from './data/potter/potter.js';

import {
  showMainData, filterHouse, filterGender, showWands, filterRole,
} from './data.js';

const dataCharacters = document.querySelector('.data-characters');
const sectionFilters = document.querySelector('.filters');
const btnWand = document.querySelector('#btn-wand');
const btnPatronus = document.querySelector('#btn-patronus');

btnWand.addEventListener('click', () => {
  /* dataCharacters.classList.add('hide'); */
  dataCharacters.remove();
  sectionFilters.remove();

  showWands(dataPotter);
});
btnPatronus.addEventListener('click', () => {
  // dataCharacters.classList.add('hide');
  dataCharacters.remove();
});

showMainData(dataPotter);

// Event to call to function filterHouse
const selectElementHouse = document.querySelector('.selectHouse');
selectElementHouse.addEventListener('change', (event) => {
  const houseSelected = event.target.value;
  const dataPotterHouse = filterHouse(dataPotter, houseSelected);
  dataCharacters.querySelectorAll('.card-data').forEach((child) => child.remove());
  showMainData(dataPotterHouse);
});
// Event to call to function filterRole
const selectElementRole = document.querySelector('.selectRole');
selectElementRole.addEventListener('change', (event) => {
  const roleSelected = event.target.value;
  const dataPotterRole = filterRole(dataPotter, roleSelected);
  dataCharacters.querySelectorAll('.card-data').forEach((child) => child.remove());
  showMainData(dataPotterRole);
});
// Event to call to function filterGender
const selectElementGender = document.querySelector('.selectGender');
selectElementGender.addEventListener('change', (event) => {
  const genderSelected = event.target.value;
  const dataPotterGender = filterGender(dataPotter, genderSelected);
  dataCharacters.querySelectorAll('.card-data').forEach((child) => child.remove());
  showMainData(dataPotterGender);
});
