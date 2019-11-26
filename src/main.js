import dataPotter from './data/potter/potter.js';
import {
  filterHouse, filterGender, filterRole, filterWandCore, search, changeDataWand, filterPatronus,
} from './data.js';

const btnInicio = document.querySelector('#btn-home');
const filtersWands = document.querySelector('.filters-wands');
const sectionHome = document.querySelector('.section-home');
const dataCharacters = document.querySelector('.data-characters');
const filtersCharacters = document.querySelector('.filters-characters');
// const sectionWands = document.querySelector('.wands');
const btnFiltersWand = document.querySelector('.btn-filters-wands');
const selectElementHouse = document.querySelector('.selectHouse');
const selectElementRole = document.querySelector('.selectRole');
const selectElementGender = document.querySelector('.selectGender');
const dataWands = document.querySelector('.data-wands');
const btnWand = document.querySelector('#btn-wand');
const btnPatronus = document.querySelector('#btn-patronus');
const btnDragon = document.querySelector('#btn-dragon');
const btnUnicorn = document.querySelector('#btn-unicorn');
const btnPhoenix = document.querySelector('#btn-phoenix');
const btnCharacters = document.querySelector('#btn-characters');
const sectionSearch = document.querySelector('.search');

// function to get y show main data using template
const showMainTemplate = (objDataPotter) => {
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
  // event to create modal
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
      <section class = "main-modal"><
        <h3 class='modal-features' id='dateofBirth'> Fecha de Nac. :${objDataPotter.dateOfBirth}</h3>
        <h3 class='modal-features' id='ancestry'> Origen : ${objDataPotter.ancestry}</h3>
        <h3 class='modal-features' id='patronus'> Patronus : ${objDataPotter.patronus}</h3>
        <h3 class='modal-features' id='wand'> Varita :
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
// function to get y show wands data using template
const showTemplateWands = (objDataPotter) => {
  const template = document.createElement('article');
  template.className = 'card-data-wands';
  template.innerHTML = `
    <h4 class='card-name' id='name'>${objDataPotter.name}</h4>
    <div class='img-wand-card' >
      <img src='${objDataPotter.image}'/>
    </div>
    <div class='card-description-wands'>
      <div class='name-type'>
        <p id='wood'><i class="fas fa-magic"></i>Madera:</p>
        <p id='core'><i class="fas fa-atom"></i>Núcleo: </p>
        <p id='length'><i class="fas fa-ruler-horizontal"></i>Tamaño:</p>
      </div>
      <div class='type-wand'>
        <p>${objDataPotter.wand.wood}</p>
        <p>${objDataPotter.wand.core}</p>
        <p>${objDataPotter.wand.length}</p>
      </div>
    </div>`;
  return template;
};

// function to get y show patronus data using template
const showTemplatePatronus = (objDataPotter) => {
  const template = document.createElement('article');
  template.className = 'card-data-patronus';
  template.innerHTML = `
    <div class='card-details'>
      <h2 class='features' id='name'>${objDataPotter.name}</h2>
    </div>
    <div class='card-description'>
      <img class='img-modal-card' src='${objDataPotter.image}'/>
      <p id='patronus'> Patronus: ${objDataPotter.patronus} </p>
    </div>`;
  return template;
};
// function to go through for each object (characters)
const showMainData = (data) => {
  data.forEach((objDataPotter) => {
    document.querySelector('.data-characters').appendChild(showMainTemplate(objDataPotter));
  });
  return showMainData;
};
// function to go through for each object (wands)
const showWandsData = (listdataPotter) => {
  listdataPotter.forEach((objDataPotter) => {
    document.querySelector('.data-wands').appendChild(showTemplateWands(objDataPotter));
  });
  return showWandsData;
};
// function to go through for each object (patronus)
const showPatronusData = (listdataPotter) => {
  listdataPotter.forEach((objDataPotter) => {
    document.querySelector('.data-patronus').appendChild(showTemplatePatronus(objDataPotter));
  });
  return showPatronusData;
};
// Event to call to section wands
btnWand.addEventListener('click', () => {
  sectionHome.classList.add('hide');
  filtersWands.classList.remove('hide');
  dataCharacters.classList.add('hide');
  filtersCharacters.classList.add('hide');
  btnFiltersWand.classList.remove('hide');
  const property = 'wand';
  const newDataWands = changeDataWand(dataPotter, property);
  showWandsData(newDataWands);
});
// Event to call to function filterWandCore (core: dragon)
btnDragon.addEventListener('click', () => {
  const core = 'dragon';
  const property = 'wand';
  const newDataWands = changeDataWand(dataPotter, property);
  const dataWandDragon = filterWandCore(newDataWands, core);
  dataWands.querySelectorAll('.card-data-wands').forEach((child) => child.remove());
  showWandsData(dataWandDragon);
});
// Event to call to function filterWandCore (core: unicorn)
btnUnicorn.addEventListener('click', () => {
  const core = 'unicorn';
  const property = 'wand';
  const newDataWands = changeDataWand(dataPotter, property);
  const dataWandUnicorn = filterWandCore(newDataWands, core);
  dataWands.querySelectorAll('.card-data-wands').forEach((child) => child.remove());
  showWandsData(dataWandUnicorn);
});
// Event to call to function filterWandCore (core: phoenix)
btnPhoenix.addEventListener('click', () => {
  const core = 'phoenix';
  const property = 'wand';
  const newDataWands = changeDataWand(dataPotter, property);
  const dataWandPhoenix = filterWandCore(newDataWands, core);
  dataWands.querySelectorAll('.card-data-wands').forEach((child) => child.remove());
  showWandsData(dataWandPhoenix);
});
// Event to call to section patronus
btnPatronus.addEventListener('click', () => {
  sectionHome.classList.add('hide');
  dataCharacters.classList.add('hide');
  filtersCharacters.classList.add('hide');
  btnFiltersWand.classList.add('hide');
  const dataPatronus = filterPatronus(dataPotter);
  dataWands.querySelectorAll('.card-data-wands').forEach((child) => child.remove());
  showPatronusData(dataPatronus);
});

// Event to call to function filterHouse
selectElementHouse.addEventListener('change', (event) => {
  const houseSelected = event.target.value;
  const dataPotterHouse = filterHouse(dataPotter, houseSelected);
  dataCharacters.querySelectorAll('.card-data').forEach((child) => child.remove());
  showMainData(dataPotterHouse);
});
// Event to call to function filterRole
selectElementRole.addEventListener('change', (event) => {
  const roleSelected = event.target.value;
  const dataPotterRole = filterRole(dataPotter, roleSelected);
  dataCharacters.querySelectorAll('.card-data').forEach((child) => child.remove());
  showMainData(dataPotterRole);
});
// Event to call to function filterGender
selectElementGender.addEventListener('change', (event) => {
  const genderSelected = event.target.value;
  const dataPotterGender = filterGender(dataPotter, genderSelected);
  dataCharacters.querySelectorAll('.card-data').forEach((child) => child.remove());
  showMainData(dataPotterGender);
});
// Evento to call to function search
const searchBox = document.querySelector('#searchBar');
searchBox.addEventListener('keyup', (buscar) => {
  const searcher = buscar.target.value;
  const finded = search(dataPotter, searcher);
  dataCharacters.querySelectorAll('.card-data').forEach((child) => child.remove());
  showMainData(finded);
});
// events to navegation menu
btnInicio.addEventListener('click', () => {
  document.location.reload(true);
});
btnCharacters.addEventListener('click', () => {
  sectionHome.classList.add('hide');
  filtersCharacters.classList.remove('hide');
  sectionSearch.classList.remove('hide');
  dataCharacters.classList.remove('hide');
  showMainData(dataPotter);
});
