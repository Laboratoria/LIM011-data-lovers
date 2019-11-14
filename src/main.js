import dataPotter from './data/potter/potter.js';

import {
  showMainData, filterHouse, filterRole, filterGender,
} from './data.js';

showMainData(dataPotter);

const selectElementHouse = document.querySelector('.selectHouse');
selectElementHouse.addEventListener('change', (event) => {
  const houseSelected = event.target.value;
  const dataPotterHouse = filterHouse(dataPotter, houseSelected);
  const dataCharacters = document.querySelector('.data-characters');
  dataCharacters.querySelectorAll('.card-data').forEach((child) => child.remove());
  showMainData(dataPotterHouse);
});

const selectElementRole = document.querySelector('.selectRole');
selectElementRole.addEventListener('change', (event) => {
  const roleSelected = event.target.value;
  const dataPotterRole = filterRole(dataPotter, roleSelected);
  const dataCharacters = document.querySelector('.data-characters');
  dataCharacters.querySelectorAll('.card-data').forEach((child) => child.remove());
  showMainData(dataPotterRole);
});

const selectElementGender = document.querySelector('.selectGender');
selectElementGender.addEventListener('change', (event) => {
  const genderSelected = event.target.value;
  const dataPotterGender = filterGender(dataPotter, genderSelected);
  const dataCharacters = document.querySelector('.data-characters');
  dataCharacters.querySelectorAll('.card-data').forEach((child) => child.remove());
  showMainData(dataPotterGender);
});
