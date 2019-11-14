import dataPotter from './data/potter/potter.js';
import { showMainData, filterHouse, filterRole } from './data.js';

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
  const roleSelected = event.target.value;
  const dataPotterRole = filterRole(dataPotter, roleSelected);
  const dataCharacters = document.querySelector('.data-characters');
  dataCharacters.querySelectorAll('.card-data').forEach((child) => child.remove());
  showMainData(dataPotterRole);
});
