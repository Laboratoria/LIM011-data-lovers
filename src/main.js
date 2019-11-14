import dataPotter from './data/potter/potter.js';
import { showMainData, filtrarHouse } from './data.js';

showMainData(dataPotter);
const selectElement = document.querySelector('.select');
selectElement.addEventListener('change', (event) => {
  const houseSelected = event.target.value;
  const dataPotterHouse = filtrarHouse(dataPotter, houseSelected);
  const dataCharacters = document.querySelector('.data-characters');
  dataCharacters.querySelectorAll('.card-data').forEach((child) => child.remove());
  showMainData(dataPotterHouse);
});
