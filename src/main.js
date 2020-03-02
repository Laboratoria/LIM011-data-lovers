import POTTER from './data/potter/potter.js';
import {
  // eslint-disable-next-line import/named
  agregarNewData, filtrar, searchName, filterPatronus, filterVarita,
} from './data.js';

console.log(filterPatronus(agregarNewData(POTTER)));
console.log(filterVarita(agregarNewData(POTTER)));
const newData = agregarNewData(POTTER);
// START SCREEN-HOME
// eslint-disable-next-line no-unused-vars
const mostrarVideo = () => {
  let res = '';
  res += `<video id="video" autoplay muted loop>
     <source src="/imagenes/videofondo.mp4" />
     </video>
    `;
  document.querySelector('#paint-template').innerHTML = res;
};
const mostrarInicio = () => {
  const template = document.createElement('div');
  template.className = 'container-all';
  template.innerHTML = ` 
        <input type="radio" id="1" name="image-slide" hidden/>
        <input type="radio" id="2" name="image-slide" hidden/>
        <input type="radio" id="3" name="image-slide" hidden/>
        <input type="radio" id="4" name="image-slide" hidden/>
        <div class="slide">
            <div class="item-slide">
                <img src="img/image2.jpg">   
            </div>
            <div class="item-slide">
                <img src="img/imagen1.jpg">   
            </div>
            <div class="item-slide">
                <img src="img/imagen2.jpg">
            </div>
            <div class="item-slide">
                <img src="img/imagen3.jpg">
            </div>
        </div>
        <div class="pagination">  
            <label class="pagination-item" for="1">
                <img src="img/image2.jpg">
            </label>  
            <label class="pagination-item" for="2">
                <img src="img/imagen1.jpg">
            </label> 
            <label class="pagination-item" for="3">
                <img src="img/image1.jpg">
            </label>  
            <label class="pagination-item" for="4">
                <img src="img/imagen3.jpg">
            </label> 
        </div>
    `;
  return template;
};

// CHARACTER SCREEN
const DataforCharacter = (dataPotter) => {
  const template = document.createElement('article');
  template.className = 'template-holder-character';
  template.innerHTML = `
    <div class="card">
    <div class="front">
      <div class="imagenes-casa"><img src=${dataPotter.imagenCasa}></div>
      <h2>${dataPotter.name}</h2>
      <div class ="imagenes"><img src=${dataPotter.image}></div>
      </div>
      <div class="back">
      <div class="imagelogo"><img src=img/logowi.png></div>
      <p> <i class="fab fa-galactic-senate"></i>  Specie: ${dataPotter.species.toUpperCase()}</p>
      <p> <i class="fab fa-galactic-senate"></i>  Gender: ${dataPotter.gender.toUpperCase()}</p>
      <p> <i class="fab fa-galactic-senate"></i>  House: ${dataPotter.house.toUpperCase()}</p>
      <p> <i class="fab fa-galactic-senate"></i>  Rol: ${dataPotter.rol.toUpperCase()}</p>
      <p> <i class="fab fa-galactic-senate"></i> Birth: ${dataPotter.dateOfBirth.toUpperCase()}</p>
      <p> <i class="fab fa-galactic-senate"></i> Actor: ${dataPotter.actor.toUpperCase()}</p>
      </div>
      </div>
      `;
  return template;
};
// WANDS SCREEN
const DataforWand = (dato) => {
  const template = document.createElement('div');
  template.className = 'template';
  let varitaH = '';
  varitaH = `
            <div class = "box-wands">
            <div class="imagenes"><img src=img/varita.gif></div>
             <label>  ${dato.name}
             <div class = "icono-personajes"> <img src=${dato.image}> </div>
            <button> Madera: ${dato.wood}</button>
            <label> Núcleo :${dato.core}
            <div class="imagenes-nucleo"><img src=${dato.nucleo}></div>
            <label> Longitud: ${dato.length}
            <div class="icono-longitud"><img src=img/longitud.PNG></div>
            
            </div>
            `;
  template.innerHTML = varitaH;
  return template;
};

// PATRONUS SCREEN
const DataforPatronus = (dataPotter) => {
  const template = document.createElement('div');
  template.className = 'template-contairner-patronus';
  template.innerHTML = `
  <div class="card-patronus"> 
    <img class="img-patronus" src='${dataPotter.image}'/>
    <h1 id="letter1" >${dataPotter.name}</h1>
    <h1 id="letter1" >-${dataPotter.patronus}-</h1>
    <button class="boton">VER PATRONUS</button> 
  </div> `;
  template.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();
    console.log(dataPotter.name, dataPotter.patronus);
    const overlayPatronus = document.createElement('div');
    overlayPatronus.className = 'overlay-patronus';
    const cardPotterPatronus = `
    <div class='popup-patronus'>
    <section class = 'header-modal'>
      <a href='#' id='btn-cerrar-popup' class='btn-cerrar-popup'><i class='fas fa-times'></i></a>
      <h3 class='modal-features'> Patronus : ${dataPotter.patronus}</h3>
      <img class='img-characters-patronus' src='${dataPotter.imagepatronus}'/>
      <h3 class='modal-features'> Descripcion</h3>
      <p class='letter-modal'>${dataPotter.description} </p>
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

// foreach de personajes
const dataPersonaje = (data) => {
  document.querySelector('#paint-template').innerHTML = '';
  data.forEach((dataPotter) => {
    document.querySelector('#paint-template').appendChild(DataforCharacter(dataPotter));
  });
};
// foreach de patronus
const datapatronus = (data) => {
  document.querySelector('#paint-template').innerHTML = '';
  data.forEach((obj) => {
    document.querySelector('#paint-template').appendChild(DataforPatronus(obj));
  });
};
// foreach de varitas
const dataVarita = (data) => {
  document.querySelector('#paint-template').innerHTML = '';
  data.forEach((obj) => {
    document.querySelector('#paint-template').appendChild(DataforWand(obj));
  });
};
// DO RETURN TO DATA
document.querySelector('#menu-home').addEventListener('click', () => {
  document.querySelector('#input-search').classList.add('ocultar');
  document.querySelector('#rol').classList.add('ocultar');
  document.querySelector('#house').classList.add('ocultar');
  document.querySelector('#core').classList.add('ocultar');
  document.querySelector('#home-video').classList.add('ocultar');
  document.querySelector('#paint-template').innerHTML = '';
  document.querySelector('#paint-template').appendChild(mostrarInicio());
});

document.querySelector('#personajes').addEventListener('click', () => {
  document.querySelector('#input-search').classList.remove('ocultar');
  document.querySelector('#rol').classList.remove('ocultar');
  document.querySelector('#house').classList.remove('ocultar');
  document.querySelector('#core').classList.add('ocultar');
  dataPersonaje(newData);
});
document.querySelector('#rol').addEventListener('change', () => {
  const seleccionarcasa = document.querySelector('#rol').value;
  const muestracasa = filtrar(newData, 'rol', seleccionarcasa);
  dataPersonaje(muestracasa);
});
document.querySelector('#house').addEventListener('change', () => {
  const seleccionarcasa = document.querySelector('#house').value;
  const muestracasa = filtrar(newData, 'house', seleccionarcasa);
  dataPersonaje(muestracasa);
});

document.querySelector('#input-search').addEventListener('input', () => {
  const name = document.getElementById('input-search').value;
  const buscar = searchName(newData, name);
  dataPersonaje(buscar);
});
document.querySelector('#varitas').addEventListener('click', () => {
  document.getElementById('core').classList.remove('ocultar');
  document.getElementById('input-search').classList.add('ocultar');
  document.getElementById('rol').classList.add('ocultar');
  document.getElementById('house').classList.add('ocultar');
  const filtrarVarita = filterVarita(newData);
  dataVarita(filtrarVarita);
});
document.querySelector('#patronus').addEventListener('click', () => {
  document.getElementById('input-search').classList.add('ocultar');
  document.getElementById('rol').classList.add('ocultar');
  document.getElementById('house').classList.add('ocultar');
  document.getElementById('core').classList.add('ocultar');
  const filtrarpatronuss = filterPatronus(newData);
  datapatronus(filtrarpatronuss);
});

document.querySelector('#core').addEventListener('change', () => {
  const seleccionarNucleo = document.querySelector('#core').value;
  const muestracore = filtrar(newData, 'core', seleccionarNucleo);
  dataVarita(muestracore);
});
