/* eslint-disable import/named */
import dataPotter from './data/potter/potter.js';
import {
  filterHouse, filterGender, filterRole, filterWandCore, search, filterPatronus,
  newDataPotter,
} from './data.js';

const btnInicio = document.querySelector('#btn-home');
const filtersWands = document.querySelector('.filters-wands');
const sectionHome = document.querySelector('.section-home');
const textPatronus = document.querySelector('.text-patronus');
const tittlePatronus = document.querySelector('.title-patronus');
// const sectionPatronus = document.querySelector('data-patronus');
const dataCharacters = document.querySelector('.data-characters');
const filtersCharacters = document.querySelector('.filters-characters');
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
  const btnShow = template.querySelector('button');
  // event to create modal
  btnShow.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    const cardPotter = `
      <div class='popup' id='popup'>
      <section class = 'header-modal'>
        <a href='#' id='btn-cerrar-popup' class='btn-cerrar-popup'><i class='fas fa-times'></i></a>
        <img class='img-modal-card' src='${objDataPotter.image}'/>
        <h2 class='features' id='name'>${objDataPotter.name}</h2>
        <h3 class='features' id='house'>~ ${objDataPotter.house} ~</h3>
      <section/>
      <section class = 'main-modal'><
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
  <div class= 'card-wand-header'>
    <h4 class='card-name' id='name'>${objDataPotter.name}</h4>
    <img class='img-wand-characters' src='${objDataPotter.image}'/>
  </div>
  <div class='card-description-wands'>
    <h4 class='tittle-wand'>Varita</h4>
    <div class='card-wood'>
      <p class='wood'>Madera:</p>
      <p class='wood'>${objDataPotter.wood}</p>
      <img class='img-wood' src='./img/wood.png'/>
    </div>
    <div class='card-lenght'>
      <p class='length'>Tamaño:</p>
      <p class='length'>${objDataPotter.length}''</p>
      <img class='img-ruler' src='./img/ruler.png'/> 
    </div>
    <div class='card-core'>
        <p class='core'>Núcleo:</p>
        <p>${objDataPotter.core}</p>
        <img class='img-core' src='${objDataPotter.imgCore}'/>
    </div>
  </div>
    `;
  return template;
};

// function to get y show patronus data using template
const showTemplatePatronus = (objDataPotter) => {
  const template = document.createElement('article');
  template.className = 'card-data-patronus';
  template.innerHTML = `
      <div class='card-header-patronus'>
        <h2 class='card-name-patronus'>${objDataPotter.name}</h2>
      </div>
      <div class='card-description-patronus'>
        <img class='img-characters-patronus' src='${objDataPotter.image}'/>
        <p class='card-name-patronus'> Patronus: </p>
        <p class='card-name-patronus'>${objDataPotter.patronus} </p>
        <button class='btn-general btn-show-patronus' type='submit'>MOSTRAR MÁS</button> 
      </div>
    `;
  const btnShow = template.querySelector('button');
  btnShow.addEventListener('click', () => {
    const overlayPatronus = document.createElement('div');
    overlayPatronus.className = 'overlay-patronus';
    const cardPotterPatronus = `
    <div class='popup-patronus'>
    <section class = 'header-modal'>
      <a href='#' id='btn-cerrar-popup' class='btn-cerrar-popup'><i class='fas fa-times'></i></a>
      <h3 class='modal-features'> Patronus : ${objDataPotter.patronus}</h3>
      <img class='img-characters-patronus' src='${objDataPotter.imgPatronus}'/>
      <h3 class='modal-features'> Descripcion</h3>
      <p>${objDataPotter.descriptionPatronus} </p>
    <section/>`;
    overlayPatronus.innerHTML = cardPotterPatronus;
    document.querySelector('.modal-patronus').appendChild(overlayPatronus);
    const popupPatronus = overlayPatronus.querySelector('.popup-patronus');
    overlayPatronus.classList.add('active');
    popupPatronus.classList.add('active');
    const closePopup = overlayPatronus.querySelector('.btn-cerrar-popup');
    closePopup.addEventListener('click', () => {
      overlayPatronus.classList.remove('active');
      popupPatronus.classList.remove('active');
    });
  });
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
  // const property = 'wand';
  const newDataWands = newDataPotter(dataPotter);
  showWandsData(newDataWands);
});
// Event to call to function filterWandCore (core: dragon)
btnDragon.addEventListener('click', () => {
  const core = 'dragon';
  // const property = 'wand';
  const newDataWands = newDataPotter(dataPotter);
  const dataWandDragon = filterWandCore(newDataWands, core);
  dataWands.querySelectorAll('.card-data-wands').forEach((child) => child.remove());
  showWandsData(dataWandDragon);
});
// Event to call to function filterWandCore (core: unicorn)
btnUnicorn.addEventListener('click', () => {
  const core = 'unicorn';
  // const property = 'wand';
  const newDataWands = newDataPotter(dataPotter);
  const dataWandUnicorn = filterWandCore(newDataWands, core);
  dataWands.querySelectorAll('.card-data-wands').forEach((child) => child.remove());
  showWandsData(dataWandUnicorn);
});
// Event to call to function filterWandCore (core: phoenix)
btnPhoenix.addEventListener('click', () => {
  const core = 'phoenix';
  // const property = 'wand';
  const newDataWands = newDataPotter(dataPotter);
  const dataWandPhoenix = filterWandCore(newDataWands, core);
  dataWands.querySelectorAll('.card-data-wands').forEach((child) => child.remove());
  showWandsData(dataWandPhoenix);
});
// Event to call to section patronus
btnPatronus.addEventListener('click', () => {
  sectionHome.classList.add('hide');
  dataCharacters.classList.add('hide');
  filtersCharacters.classList.add('hide');
  filtersWands.classList.add('hide');
  tittlePatronus.classList.remove('hide');
  textPatronus.classList.remove('hide');
  const newDataPatronus = newDataPotter(dataPotter);
  const dataPatronus = filterPatronus(newDataPatronus);
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
