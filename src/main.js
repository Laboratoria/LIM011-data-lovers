/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
/* eslint-disable no-alert */
import POTTER from './data/potter/potter.js';
import { ordenado, filtrado, busqueda, filtraDiferente } from './data.js';
// Variables globales
const inicio = document.getElementById('inicio-section');
const menus = document.getElementById('menus-section');
const casas = document.getElementById('casas');
const rol = document.getElementById('rol');
const personajes = document.getElementById('personajes');
const modal = document.getElementById('modalP');
let datos = '';
datos = POTTER;

// INICIO
document.getElementById('menu-inicio').addEventListener('click', () => {
  inicio.classList.remove('ocultar');
  menus.classList.add('ocultar');
});

// template
const pintado = (dataPorCasa, p1, p2, p3) => {
  let templatePotter = '';
  dataPorCasa.forEach((extrae) => {
    if (p3 !== '') {
      templatePotter += `<div class="casas-card">
              <img id= "${extrae[p2]}" class="imagen" src= "${extrae[p1]}"/>
              <p class="name">${extrae[p2]}</p>
              <p>${extrae[p3]}</p>
            </div>`;
    }
    if (p3 === '') {
      templatePotter += `<div class="casas-card">
        <img id= "${extrae[p2]}" class="imagen" src= "${extrae[p1]}"/>
        <p class="name">${extrae[p2]}</p>
        </div>`;
    }
  });
  return templatePotter;
};

// Modal
const pintadoModal = (extrae) => {
  const personaje = filtrado(datos, 'name', extrae);
  let { vivir, estudiante, staff, coma, patronus } = '';
  if (personaje[0].house === '') {
    coma = '';
  } else {
    coma = ', ';
  }
  if (personaje[0].alive === true) {
    vivir = 'Vivo';
  } else {
    vivir = 'Muerto';
  }
  if (personaje[0].hogwartsStudent === true) {
    estudiante = 'Estudiante - ';
  } else {
    estudiante = '';
  }
  if (personaje[0].hogwartsStaff === true) {
    staff = 'Staff - ';
  } else {
    staff = '';
  }
  if (personaje[0].patronus === '') {
    patronus = 'Desconocido';
  } else {
    patronus = personaje[0].patronus;
  }
  let personajeSelect = '';
  personajeSelect = `
      <div class="contenido-modal">
      <div id="nombre-persona">
       <h1 class="nombre-persona">${personaje[0].name}</h1>
       <span id="cerrar" class="cerrar">&times;</span>
       </div>
       <div id="foto">
        <img src="${personaje[0].image}" class="foto">
        <p>Actor/Actriz: ${personaje[0].actor}</p>
       </div>
       <div class="datos">
       <h3>${personaje[0].house}${coma}${estudiante}${staff}${vivir} </h3>
       <p>Especie: ${personaje[0].species}</p>
       <p>Género: ${personaje[0].gender}</p>
       <p>Color de cabello: ${personaje[0].hairColour}</p>
       <p>Color de Ojos: ${personaje[0].eyeColour}</p>
       </div>
       <div id="datos-v-p">
       <div class="varita">
       <h2>Varita</h2>
       <p>Madera: ${personaje[0].wand.wood}</p>
       <p>Núcleo: ${personaje[0].wand.core}</p>
       <p>Longitud: ${personaje[0].wand.length}</p>
       </div>
       <div class="patronus">
       <h2>Patronus</h2>
       <p>${patronus}</p>
       </div>
       </div>
     </div>`;
  return personajeSelect;
};

// PERSONAJES
document.getElementById('menu-personajes').addEventListener('click', () => {
  inicio.classList.add('ocultar');
  menus.classList.remove('ocultar');
  casas.classList.add('ocultar');
  rol.classList.add('ocultar');
  personajes.classList.remove('ocultar');
});

const divTodosP = document.getElementById('todosP');
divTodosP.innerHTML = pintado(ordenado(POTTER), 'image', 'name', '');

// MODAL DE PERSONAJES
const funcionModal = () => document.querySelectorAll('.imagen').forEach((elem) => {
  elem.addEventListener('click', () => {
    document.querySelector('#modalP').classList.remove('ocultar');
    document.querySelector('#modalP').innerHTML = pintadoModal(elem.getAttribute('id'));
    // cerrar modal
    document.querySelector('.contenido').addEventListener('click', () => {
      modal.innerHTML = '';
      document.querySelector('#modalP').classList.add('ocultar');
    });
  });
});
funcionModal();

// FILTROS PERSONAJES
const seleccionarP = document.querySelector('.filtrar-personajes');

// Evento del select PERSONAJES
seleccionarP.addEventListener('change', (evento) => {
  document.querySelector('#busquedaP').value = '';
  const opcionSeleccionadaGenero = evento.target.value;

  divTodosP.innerHTML = '';
  switch (opcionSeleccionadaGenero) {
    case 'todos':
      datos = POTTER;
      funcionModal();
      break;
    case 'femenino':
      datos = filtrado(POTTER, 'gender', 'female');
      divTodosP.innerHTML = pintado(datos, 'image', 'name', '');
      funcionModal();
      break;
    case 'masculino':
      datos = filtrado(POTTER, 'gender', 'male');
      divTodosP.innerHTML = pintado(datos, 'image', 'name', '');
      funcionModal();
      break;
    default:
  }
});

// BUSCADOR PERSONAJES
document.querySelector('#busquedaP').addEventListener('input', (event) => {
  const nombreBuscadoP = event.target.value;
  if (datos === POTTER) {
    divTodosP.innerHTML = pintado((busqueda(datos, nombreBuscadoP)), 'image', 'name', '');
    funcionModal();
  } else {
    funcionModal();
  }
  if (divTodosP.innerHTML === '') {
    divTodosP.innerHTML = '<h1>No se encontró ningún personaje</h1>';
  }
});

// MENU ROL
document.getElementById('menu-rol').addEventListener('click', () => {
  inicio.classList.add('ocultar');
  menus.classList.remove('ocultar');
  rol.classList.remove('ocultar');
  casas.classList.add('ocultar');
  personajes.classList.add('ocultar');
});

// pintado al elegir rol
const divTodosR = document.getElementById('todosR');
divTodosR.innerHTML = pintado(ordenado(POTTER), 'image', 'name', '');

const seleccionarR = document.querySelector('.filtrar-rol');
seleccionarR.addEventListener('change', (evento) => {
  // borra el input de busqueda al cambiar de option en el select
  document.querySelector('#busquedaR').value = '';
  const opcionSeleccionadaCasa = evento.target.value;
  divTodosR.innerHTML = '';
  const datosNoProf = filtrado(filtrado(POTTER, 'hogwartsStaff', true), 'house', '');
  const datosNoHogwarts = filtrado(filtrado(POTTER, 'hogwartsStaff', false), 'hogwartsStudent', false);

  switch (opcionSeleccionadaCasa) {
    case 'todos':
      datos = POTTER;
      divTodosR.innerHTML = pintado((POTTER), 'image', 'name', '');
      break;
    case 'alumno':
      datos = filtrado(POTTER, 'hogwartsStudent', true);
      divTodosR.innerHTML = pintado(datos, 'image', 'name', '');
      break;
    case 'profesor':
      datos = filtraDiferente(filtrado(POTTER, 'hogwartsStaff', true), 'house', '');
      divTodosR.innerHTML = pintado(datos, 'image', 'name', '');
      break;
    case 'otros':
      datos = datosNoProf.concat(datosNoHogwarts);
      divTodosR.innerHTML = pintado(datos, 'image', 'name', '');
      break;
    default:
  }
});

// BUSCADOR ROL
document.querySelector('#busquedaR').addEventListener('input', (event) => {
  const nombreBuscadoR = event.target.value;
  if (datos === POTTER) {
    divTodosR.innerHTML = pintado((busqueda(datos, nombreBuscadoR)), 'image', 'name', '');
  } else {
    divTodosR.innerHTML = pintado((busqueda(datos, nombreBuscadoR)), 'image', 'name', '');
  }
  if (divTodosR.innerHTML === '') {
    divTodosR.innerHTML = '<h1>No se encontró ningún personaje</h1>';
  }
});

// CASAS
document.getElementById('menu-casas').addEventListener('click', () => {
  inicio.classList.add('ocultar');
  menus.classList.remove('ocultar');
  casas.classList.remove('ocultar');
  personajes.classList.add('ocultar');
  rol.classList.add('ocultar');
});

const divTodosC = document.getElementById('todosC');

// FILTROS CASAS

divTodosC.innerHTML = pintado(ordenado(POTTER), 'image', 'name', 'house');
// datos = POTTER;
const seleccionarC = document.querySelector('.filtrar-casas');
// Evento del select CASAS
seleccionarC.addEventListener('change', (evento) => {
  // borra el input de busqueda al cambiar de option en el select
  document.querySelector('#busquedaC').value = '';
  const opcionSeleccionadaCasa = evento.target.value;

  divTodosC.innerHTML = '';
  switch (opcionSeleccionadaCasa) {
    case 'todos':
      datos = POTTER;
      divTodosC.innerHTML = pintado((POTTER), 'image', 'name', 'house');
      break;
    case 'gryffindor':
      datos = filtrado(POTTER, 'house', 'Gryffindor');
      divTodosC.innerHTML = pintado(datos, 'image', 'name', '');
      break;
    case 'hufflepuff':
      datos = filtrado(POTTER, 'house', 'Hufflepuff');
      divTodosC.innerHTML = pintado(datos, 'image', 'name', '');
      break;
    case 'ravenclaw':
      datos = filtrado(POTTER, 'house', 'Ravenclaw');
      divTodosC.innerHTML = pintado(datos, 'image', 'name', '');
      break;
    case 'slytherin':
      datos = filtrado(POTTER, 'house', 'Slytherin');
      divTodosC.innerHTML = pintado(datos, 'image', 'name', '');
      break;
    default:
  }
});

// BUSCADOR CASAS
document.querySelector('#busquedaC').addEventListener('input', (event) => {
  const nombreBuscadoC = event.target.value;
  if (datos === POTTER) {
    divTodosC.innerHTML = pintado((busqueda(datos, nombreBuscadoC)), 'image', 'name', 'house');
  } else {
    divTodosC.innerHTML = pintado((busqueda(datos, nombreBuscadoC)), 'image', 'name', '');
  }
  if (divTodosC.innerHTML === '') {
    divTodosC.innerHTML = '<h1>No se encontró ningún personaje</h1>';
  }
});

document.getElementById('menu-personajes').addEventListener('click', () => {
  inicio.classList.add('ocultar');
  menus.classList.remove('ocultar');
  casas.classList.add('ocultar');
  rol.classList.add('ocultar');
  personajes.classList.remove('ocultar');
});

document.getElementById('menu-rol').addEventListener('click', () => {
  inicio.classList.add('ocultar');
  menus.classList.remove('ocultar');
  rol.classList.remove('ocultar');
  casas.classList.add('ocultar');
  personajes.classList.add('ocultar');
});
