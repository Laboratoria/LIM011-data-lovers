import POTTER from './data/potter/potter.js';
import { ordenado, filtrado, busqueda, filtraDiferente } from './data.js';

// Variables globales
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
const pintado = (dataPorCasa, p1, p2, p3) => {
  const templatePotter = [];
  dataPorCasa.forEach((extrae) => {
    if (p3 !== '') {
      templatePotter.push(`<div class="casas-card">
              <img id= "${extrae[p2]}" class="imagen" src= "${extrae[p1]}"/>
              <p>${extrae[p2]}</p>
              <p>${extrae[p3]}</p>
            </div>`);
    }
    if (p3 === '') {
      templatePotter.push(`<div class="casas-card">
        <img id= "${extrae[p2]}" class="imagen" src= "${extrae[p1]}"/>
        <p>${extrae[p2]}</p>
        </div>`);
    }
  });
  return templatePotter;
};

const card = (obj) => {
    const divElement = document.createElement('div');
    divElement.classList.add('tarjeta');
    divElement.innerHTML = pintado()
// PERSONAJES
document.getElementById('menu-personajes').addEventListener('click', () => {
  inicio.classList.add('ocultar');
  menus.classList.remove('ocultar');
  casas.classList.add('ocultar');
  rol.classList.add('ocultar');
  personajes.classList.remove('ocultar');
});



// // Modal
// const pintadoModal = (extrae) => {
//   const personaje = filtrado(datos, 'name', extrae);
//   // const person = filtrado(POTTER, 'name', extrae);
//   console.log(personaje);
//   let vivir = '';
//   if (personaje[0].alive === true) {
//     vivir = 'vivo';
//   } else {
//     vivir = 'muerto';
//   }
//   console.log(vivir);
//   let personajeSelect = '';
//   personajeSelect = `<div class="flex">
//       <div class="contenido-modal">
//       <span class="cerrar" id="cerrar">X</span>
//        <div class="foto">
//         <img src="${personaje[0].image}">
//         <p>${personaje[0].actor}</p>
//        </div>
//        <div class="nombre-persona">
//        <h1>${personaje[0].name}</h1>
//        </div>
//        <div class="datos">
//        <h2>${personaje[0].house}, ${vivir} </h2>
//        <div class="varita">
//        </div>
//        <div class="patronus">
//        </div>
//        </div>
//       </div>
//      </div>`;
//   return personajeSelect;
// };

// // PERSONAJES
// document.getElementById('menu-personajes').addEventListener('click', () => {
//   inicio.classList.add('ocultar');
//   menus.classList.remove('ocultar');
//   casas.classList.add('ocultar');
//   rol.classList.add('ocultar');
//   personajes.classList.remove('ocultar');
// });

// const divTodosP = document.getElementById('todosP');
// divTodosP.innerHTML = pintado(ordenado(POTTER), 'image', 'name', '');

// // FILTROS PERSONAJES
// const seleccionarP = document.querySelector('.filtrar-personajes');

// // Evento del select PERSONAJES
// seleccionarP.addEventListener('change', (evento) => {
//   document.querySelector('#busquedaP').value = '';
//   const opcionSeleccionadaGenero = evento.target.value;

//   divTodosP.innerHTML = '';
//   switch (opcionSeleccionadaGenero) {
//     case 'todos':
//       datos = POTTER;
//       divTodosP.innerHTML = pintado((POTTER), 'image', 'name', 'house');
//       break;
//     case 'femenino':
//       datos = filtrado(POTTER, 'gender', 'female');
//       divTodosP.innerHTML = pintado(datos, 'image', 'name', '');
//       break;
//     case 'masculino':
//       datos = filtrado(POTTER, 'gender', 'male');
//       divTodosP.innerHTML = pintado(datos, 'image', 'name', '');
//       break;
//     default:
//   }
// });

// // BUSCADOR PERSONAJES
// document.querySelector('#busquedaP').addEventListener('input', (event) => {
//   const nombreBuscadoP = event.target.value;
//   if (datos === POTTER) {
//     divTodosP.innerHTML = pintado((busqueda(datos, nombreBuscadoP)), 'image', 'name', '');
//   } else {
//     divTodosP.innerHTML = pintado((busqueda(datos, nombreBuscadoP)), 'image', 'name', '');
//   }
//   if (divTodosP.innerHTML === '') {
//     divTodosP.innerHTML = '<h1>No se encontró ningún personaje</h1>';
//   }
// });
