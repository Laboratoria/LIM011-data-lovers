import dataPotter from './data/potter/potter.js';
import { showMainData, filterHouse, filterRol } from './data.js';

showMainData(dataPotter);

const selectElementHouse = document.querySelector('.selectHouse');
selectElementHouse.addEventListener('change', (event) => {
  const houseSelected = event.target.value;
  const dataPotterHouse = filterHouse(dataPotter, houseSelected);
  const dataCharacters = document.querySelector('.data-characters');
  dataCharacters.querySelectorAll('.card-data').forEach((child) => child.remove());
  showMainData(dataPotterHouse);
});

const selectElementRol = document.querySelector('.selectRol');
selectElementRol.addEventListener('change', (event) => {
  const rolSelected = event.target.value;
  const dataPotterRol = filterRol(dataPotter, rolSelected);
  console.log(rolSelected);
  const dataCharacters = document.querySelector('.data-characters');
  dataCharacters.querySelectorAll('.card-data').forEach((child) => child.remove());
  showMainData(dataPotterRol);
});
