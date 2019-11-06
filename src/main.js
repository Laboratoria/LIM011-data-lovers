import POTTER from './data/potter/potter.js';

import { ordenado, filtrado, mostrarPersonajes } from './data.js';


const divTodos = document.getElementById('todos');
const divG = document.getElementById('soloG');
const divH = document.getElementById('soloH');
const divR = document.getElementById('soloR');
const divS = document.getElementById('soloS');

// let templatePotter = '';
// const mostrarPersonajes = (POTTER) => {
//     templatePotter +=`<div id="imagenes" class="casas-card">
//               <img class="imagen" src= "${POTTER.image}"/>
//               <p>${POTTER.name}</p>
//             </div>`;
//             return templatePotter;
//   }

document.querySelector('#todos').innerHTML = mostrarPersonajes(ordenado(POTTER));

const valorDeBusqueda = document.querySelector('#valorDeBusqueda');

const seleccionar = document.querySelector('.filtrar-casas');

seleccionar.addEventListener('change', (evento) => {
  // borra el input de busqueda al cambiar de option en el select
  document.getElementById('valorDeBusqueda').value = '';

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
      divG.innerHTML = mostrarPersonajes(filtrado(POTTER, 'Gryffindor'));
      break;
    case 'hufflepuff':
      divH.innerHTML = mostrarPersonajes(filtrado(POTTER, 'Hufflepuff'));
      break;
    case 'ravenclaw':
      divR.innerHTML = mostrarPersonajes(filtrado(POTTER, 'Ravenclaw'));
      break;
    case 'slytherin':
      divS.innerHTML = mostrarPersonajes(filtrado(POTTER, 'Slytherin'));
      break;
    default:
  }
});


let dataSeleccionada = '';
let divSeleccionado = '';

const filtradoSeleccionado = () => {
  const valorDeFiltrado = document.querySelector('.filtrar-casas').value;
  divTodos.innerHTML = '';
  divG.innerHTML = '';
  divH.innerHTML = '';
  divR.innerHTML = '';
  divS.innerHTML = '';
  switch (valorDeFiltrado) {
    case 'Todos':
      dataSeleccionada = POTTER;
      divSeleccionado = divTodos;
      break;
    case 'Gryffindor':
      dataSeleccionada = filtrado(POTTER, 'G');
      divSeleccionado = divG;
      break;
    case 'Hufflepuff':
      dataSeleccionada = filtrado(POTTER, 'H');
      divSeleccionado = divH;
      break;
    case 'Ravenclaw':
      dataSeleccionada = filtrado(POTTER, 'R');
      divSeleccionado = divR;
      break;
    case 'Slytherin':
      dataSeleccionada = filtrado(POTTER, 'S');
      divSeleccionado = divS;
      break;
    default:
  }
};

seleccionar.addEventListener('input', filtradoSeleccionado);
filtradoSeleccionado();


const busqueda = () => {
  divSeleccionado.innerHTML = '';
  const textoBuscado = valorDeBusqueda.value.toLowerCase();
  for (let i = 0; i < dataSeleccionada.length; i += 1) {
    const dataSoloNombres = dataSeleccionada[i].name.toLowerCase();
    const longitudBusqueda = textoBuscado.length;
    const caracterEspacio = dataSoloNombres.indexOf(' ');
    const primerNombre = dataSoloNombres.slice(0, caracterEspacio);
    const segundoNombre = dataSoloNombres.slice(caracterEspacio + 1, dataSoloNombres.length);
    if (primerNombre.slice(0, longitudBusqueda) === textoBuscado) {
      divSeleccionado.innerHTML += `<div id="imagenes" class="casas-card">
          <img class="imagen" src= "${dataSeleccionada[i].image}"/>
          <p>${dataSeleccionada[i].name}</p>
          </div>`;
    } else if (segundoNombre.slice(0, longitudBusqueda) === textoBuscado) {
      divSeleccionado.innerHTML += `<div id="imagenes" class="casas-card">
          <img class="imagen" src= "${dataSeleccionada[i].image}"/>
          <p>${dataSeleccionada[i].name}</p>
          </div>`;
    }
  }
  if (divSeleccionado.innerHTML === '') {
    divSeleccionado.innerHTML += '<p>No se encontró ningún personaje</p>';
  }
};
valorDeBusqueda.addEventListener('keyup', busqueda);
busqueda();
