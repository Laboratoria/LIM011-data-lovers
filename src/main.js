import dataPotter from './data/potter/potter.js';

import { filterHouse, filterGender, filterRole } from './data.js';

const dataCharacters = document.querySelector('.data-characters');
const sectionFilters = document.querySelector('.filters');
// function to get y show data using template
const showTemplate = (objDataPotter) => {
  const template = document.createElement('article');
  template.className = 'card-data';
  template.innerHTML = `
    <div class='card-details'>
      <img class='img-card' src='${objDataPotter.image}'/>
    </div>
    <div class='card-description'> 
      <h2 class='features' id='name'>${objDataPotter.name}</h2>
      <h3 class='features' id='house'>~ ${objDataPotter.house} ~</h3>
      <button class='btn-general features btn-knowmore' type='submit'>DESCUBRE MAS</button> 
    </div> `;
  const buttonElem = template.querySelector('button');
  // event to get data and create modal using template
  buttonElem.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    const cardPotter = `
      <div class="popup" id="popup">
      <section class = "header-modal">
        <a href="#" id="btn-cerrar-popup" class="btn-cerrar-popup"><i class="fas fa-times"></i></a>
        <img class='img-modal-card' src='${objDataPotter.image}'/>
        <h2 class='features' id='name'>${objDataPotter.name}</h2>
        <h3 class='features' id='house'>~ ${objDataPotter.house} ~</h3>
      <section/>
      <section class = "main-modal">
        <h3 class='modal-features' id='dateofBirth'> Fecha de Nac. :${objDataPotter.dateOfBirth}</h3>
        <h3 class='modal-features' id='ancestry'> Origen : ${objDataPotter.ancestry}</h3>
        <h3 class='modal-features' id='patronus'> Patronus : ${objDataPotter.patronus}</h3>
        <h3 class='modal-features' id='patronus'> Varita :
          <div> 
            <p> Madera : ${objDataPotter.wand.wood} </p>
            <p> Nucleo : ${objDataPotter.wand.core} </p>
            <p> Tamaño : ${objDataPotter.wand.length} </p>
          </div>
        </h3>
      <section/>`;
    overlay.innerHTML = cardPotter;
    document.querySelector('.modal').appendChild(overlay);
    const popup = overlay.querySelector('.popup');
    overlay.classList.add('active');
    popup.classList.add('active');
    const closePopup = overlay.querySelector('.btn-cerrar-popup');
    closePopup.addEventListener('click', () => {
      overlay.classList.remove('active');
      popup.classList.remove('active');
    });
  });
  return template;
};
//  function to go through for each object (Wands)
export const showTemplateWands = (objDataPotter) => {
  const template = document.createElement('article');
  template.className = 'card-data-wands';
  template.innerHTML = `
    <div class='card-details'>
      <h2 class='features' id='name'>${objDataPotter.name}</h2>
    </div>
    <div class='card-description'>
      <p> Madera : ${objDataPotter.wand.wood} </p>
      <p> Nucleo : ${objDataPotter.wand.core} </p>
      <p> Tamaño : ${objDataPotter.wand.length} </p>
    </div> `;
  return template;
};
// function to go through for each object (Characters)
const showMainData = (data) => {
  data.forEach((objDataPotter) => {
    document.querySelector('.data-characters').appendChild(showTemplate(objDataPotter));
  });
  return showMainData;
};
showMainData(dataPotter);

export const showWands = (listdataPotter) => {
  listdataPotter.forEach((objDataPotter) => {
    document.querySelector('.data-wands').appendChild(showTemplateWands(objDataPotter));
  });
};
// Event to call to section wands
const btnPatronus = document.querySelector('#btn-patronus');
const btnWand = document.querySelector('#btn-wand');
btnWand.addEventListener('click', () => {
  dataCharacters.remove();
  sectionFilters.remove();
  showWands(dataPotter);
});
// Event to call to section patronus
btnPatronus.addEventListener('click', () => {
  dataCharacters.remove();
});
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
