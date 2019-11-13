/* eslint-disable no-alert */
import POTTER from './data/potter/potter.js';
import { ordenado, filtrado, busqueda } from './data.js';
// import { classDeclaration } from '@babel/types';

const inicio = document.getElementById('inicio-section');
const menus = document.getElementById('menus-section');
const casas = document.getElementById('casas');
const rol = document.getElementById('rol');
const personajes = document.getElementById('personajes');

// INICIO
document.getElementById('menu-inicio').addEventListener('click', () => {
  inicio.classList.remove('ocultar');
  menus.classList.add('ocultar');
});

// template
const divTodos = document.getElementById('todos');
const pintado = (dataPorCasa, p1, p2, p3) => {
  let templatePotter = '';
  dataPorCasa.forEach((extrae) => {
    if (p3 !== '') {
      templatePotter += `<div id="imagenes" class="casas-card">
              <img class="imagen" src= "${extrae[p1]}"/>
              <p>${extrae[p2]}</p>
              <p>${extrae[p3]}</p>
            </div>`;
    }
    if (p3 === '') {
      templatePotter += `<div id="imagenes" class="casas-card">
        <img class="imagen" src= "${extrae[p1]}"/>
        <p>${extrae[p2]}</p>
        </div>`;
    }
  });
  return templatePotter;
};

// eventos menu-casas
document.getElementById('menu-casas').addEventListener('click', () => {
  inicio.classList.add('ocultar');
  menus.classList.remove('ocultar');
  casas.classList.remove('ocultar');
  personajes.classList.add('ocultar');
  rol.classList.add('ocultar');
});

// FILTROS CASAS
let datos = '';
const seleccionar = document.querySelector('.filtrar-casas');
divTodos.innerHTML = pintado(ordenado(POTTER), 'image', 'name', 'house');
datos = POTTER;

// Evento del select CASAS
seleccionar.addEventListener('change', (evento) => {
  // borra el input de busqueda al cambiar de option en el select
  const opcionSeleccionadaSelect = evento.target.value;

  divTodos.innerHTML = '';
  switch (opcionSeleccionadaSelect) {
    case 'todos':
      datos = POTTER;
      divTodos.innerHTML = pintado((POTTER), 'image', 'name', 'house');
      break;
    case 'gryffindor':
      datos = filtrado(POTTER, 'house', 'Gryffindor');
      divTodos.innerHTML = pintado(datos, 'image', 'name', '');
      break;
    case 'hufflepuff':
      datos = filtrado(POTTER, 'house', 'Hufflepuff');
      divTodos.innerHTML = pintado(datos, 'image', 'name', '');
      break;
    case 'ravenclaw':
      datos = filtrado(POTTER, 'house', 'Ravenclaw');
      divTodos.innerHTML = pintado(datos, 'image', 'name', '');
      break;
    case 'slytherin':
      datos = filtrado(POTTER, 'house', 'Slytherin');
      divTodos.innerHTML = pintado(datos, 'image', 'name', '');
      break;
    default:
  }
});

// pintado la busqueda
document.querySelector('#valorDeBusqueda').addEventListener('input', (event) => {
  const nombreBuscado = event.target.value;
  if (datos === POTTER) {
    divTodos.innerHTML = pintado((busqueda(datos, nombreBuscado)), 'image', 'name', 'house');
  } else {
    divTodos.innerHTML = pintado((busqueda(datos, nombreBuscado)), 'image', 'name', '');
  }
  if (divTodos.innerHTML === '') {
    divTodos.innerHTML = '<h1>No se encontró ningún personaje</h1>';
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
