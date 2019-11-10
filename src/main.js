import POTTER from './data/potter/potter.js';

import { ordenado, filtrado, busqueda } from './data.js';


// CONST DE CADA UNO DE LOS DIV
const divTodos = document.getElementById('todos');
const divG = document.getElementById('soloG');
const divH = document.getElementById('soloH');
const divR = document.getElementById('soloR');
const divS = document.getElementById('soloS');

// FUNCION PARA MOSTRAR PERSONAJES
const mostrarPersonajes = (data) => {
  let templatePotter = '';
  data.forEach((extrae) => {
    templatePotter += `<div id="imagenes" class="casas-card">
              <img class="imagen" src= "${extrae.image}"/>
              <h1>${extrae.name}</h1>
              <p>${extrae.house}</p>
            </div>`;
  });
  return templatePotter;
};

// ordena TODOS los elementos
document.querySelector('#todos').innerHTML = mostrarPersonajes(ordenado(POTTER));

// Evento del select CASAS
const seleccionar = document.querySelector('.filtrar-casas');
seleccionar.addEventListener('change', (evento) => {
  // borra el input de busqueda al cambiar de option en el select
  const opcionSeleccionadaSelect = evento.target.value;

  divTodos.innerHTML = '';
  divG.innerHTML = '';
  divH.innerHTML = '';
  divR.innerHTML = '';
  divS.innerHTML = '';

  switch (opcionSeleccionadaSelect) {
    case 'Todos':
      divTodos.innerHTML = mostrarPersonajes(POTTER);
      break;
    case 'gryffindor':
      divG.innerHTML = mostrarPersonajes(filtrado(POTTER, 'house', 'Gryffindor'));
      break;
    case 'hufflepuff':
      divH.innerHTML = mostrarPersonajes(filtrado(POTTER, 'house', 'Hufflepuff'));
      break;
    case 'ravenclaw':
      divR.innerHTML = mostrarPersonajes(filtrado(POTTER, 'house', 'Ravenclaw'));
      break;
    case 'slytherin':
      divS.innerHTML = mostrarPersonajes(filtrado(POTTER, 'house', 'Slytherin'));
      break;
    default:
  }
}); // fin de evento del select CASAS

const buscador = document.querySelector('#buscador');
const valorB = buscador.value;
buscador.addEventListener('keyup', busqueda(POTTER, 'name', valorB));
busqueda();

// eslint-disable-next-line no-console
console.log(busqueda(POTTER, 'name', valorB));


// LO DEL MAIN v


// let dataSeleccionada = '';
// let divSeleccionado = '';

// const filtradoSeleccionado = () => {
//   const valorDeFiltrado = document.querySelector('.filtrar-casas').value;
//   divTodos.innerHTML = '';
//   divG.innerHTML = '';
//   divH.innerHTML = '';
//   divR.innerHTML = '';
//   divS.innerHTML = '';
//   switch (valorDeFiltrado) {
//     case 'Todos':
//       dataSeleccionada = POTTER;
//       divSeleccionado = divTodos;
//       break;
//     case 'gryffindor':
//       dataSeleccionada = filtrado(POTTER, 'house', 'Gryffindor');
//       divSeleccionado = divG;
//       break;
//     case 'hufflepuff':
//       dataSeleccionada = filtrado(POTTER, 'house', 'Hufflepuff');
//       divSeleccionado = divH;
//       break;
//     case 'ravenclaw':
//       dataSeleccionada = filtrado(POTTER, 'house', 'Ravenclaw');
//       divSeleccionado = divR;
//       break;
//     case 'slytherin':
//       dataSeleccionada = filtrado(POTTER, 'house', 'Slytherin');
//       divSeleccionado = divS;
//       break;
//     default:
//   }
// };

// seleccionar.addEventListener('input', filtradoSeleccionado);
// filtradoSeleccionado();


// const busqueda = () => {
//   divSeleccionado.innerHTML = '';
//   const textoBuscado = valorDeBusqueda.value.toLowerCase();
//   for (let i = 0; i < dataSeleccionada.length; i += 1) {
//     const dataSoloNombres = dataSeleccionada[i].name.toLowerCase();
//     const longitudBusqueda = textoBuscado.length;
//     const caracterEspacio = dataSoloNombres.indexOf(' ');
//     const primerNombre = dataSoloNombres.slice(0, caracterEspacio);
//     const segundoNombre = dataSoloNombres.slice(caracterEspacio + 1, dataSoloNombres.length);
//     if (primerNombre.slice(0, longitudBusqueda) === textoBuscado) {
//       divSeleccionado.innerHTML += `<div id="imagenes" class="casas-card">
//           <img class="imagen" src= "${dataSeleccionada[i].image}"/>
//           <p>${dataSeleccionada[i].name}</p>
//           </div>`;
//     } else if (segundoNombre.slice(0, longitudBusqueda) === textoBuscado) {
//       divSeleccionado.innerHTML += `<div id="imagenes" class="casas-card">
//           <img class="imagen" src= "${dataSeleccionada[i].image}"/>
//           <p>${dataSeleccionada[i].name}</p>
//           </div>`;
//     }
//   }
//   if (divSeleccionado.innerHTML === '') {
//     divSeleccionado.innerHTML += '<p>No se encontró ningún personaje</p>';
//   }
// };
