/* eslint-disable no-console */
import POTTER from './data/potter/potter.js';
import { ordenado, filtrado, buscar } from './datita.js';

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

const seleccionar = document.querySelector('.filtrar-casas');
divTodos.innerHTML = pintado(ordenado(POTTER), 'image', 'name', 'house');
let datos = '';
seleccionar.addEventListener('change', (evento) => {
  // borra el input de busqueda al cambiar de option en el select
  document.getElementById('valorDeBusqueda').value = '';

  const opcionSeleccionadaSelect = evento.target.value;

  divTodos.innerHTML = '';
  switch (opcionSeleccionadaSelect) {
    case 'todos':
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

const buscador = document.getElementById('valorDeBusqueda');
buscador.addEventListener('input', (event) => {
  const busqueda = event.target.value;
  divTodos.innerHTML = pintado((buscar(POTTER, busqueda)), 'image', 'name', '');
});

// let dataSeleccionada = '';
// let divSeleccionado = '';

// const filtradoSeleccionado = () => {
//   const valorDeFiltrado = document.querySelector('.filtrar-casas').value;
//   divTodos.innerHTML = '';
//   switch (valorDeFiltrado) {
//     case 'todos':
//       document.querySelector('#todos').innerHTML = mostrarPersonajes(ordenado(POTTER));
//       dataSeleccionada = POTTER;
//       divSeleccionado = divTodos;
//       break;
//     case 'gryffindor':
//       divSeleccionado = divTodos;
//       break;
//     case 'hufflepuff':
//       divSeleccionado = divTodos;
//       break;
//     case 'ravenclaw':
//       divSeleccionado = divTodos;
//       break;
//     case 'slytherin':
//       divSeleccionado = divTodos;
//       break;
//     default:
//   }
// };

// seleccionar.addEventListener('input', filtradoSeleccionado);
// filtradoSeleccionado();
