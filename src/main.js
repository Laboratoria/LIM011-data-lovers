import POTTER from './data/potter/potter.js';

import { ordenado, filtrado } from './data.js';


const divTodos = document.getElementById('todos');
const divG = document.getElementById('soloG');
const divH = document.getElementById('soloH');
const divR = document.getElementById('soloR');
const divS = document.getElementById('soloS');


const mostrarPersonajes = (dataPorCasa) => {
  let templatePotter = '';
  dataPorCasa.forEach((extrae) => {
    templatePotter += `<div id="imagenes" class="casas-card">
              <img class="imagen" src= "${extrae.image}"/>
              <p>${extrae.name}</p>
            </div>`;
  });
  return templatePotter;
};

const seleccionar = document.querySelector('.filtrar-casas');

seleccionar.addEventListener('change', (evento) => {
  // borra el input de busqueda al cambiar de option en el select
  document.getElementById('valorDeBusqueda').value = '';

  const opcionSeleccionadaSelect = evento.target.value;

  divTodos.innerHTML = '';
  // divG.innerHTML = '';
  // divH.innerHTML = '';
  // divR.innerHTML = '';
  // divS.innerHTML = '';

  switch (opcionSeleccionadaSelect) {
    case 'todos':
      divTodos.innerHTML = mostrarPersonajes(POTTER);
      break;
    case 'gryffindor':
      divTodos.innerHTML = mostrarPersonajes(filtrado(POTTER, 'house', 'Gryffindor'));
      break;
    case 'hufflepuff':
      divTodos.innerHTML = mostrarPersonajes(filtrado(POTTER, 'house', 'Hufflepuff'));
      break;
    case 'ravenclaw':
      divTodos.innerHTML = mostrarPersonajes(filtrado(POTTER, 'house', 'Ravenclaw'));
      break;
    case 'slytherin':
      divTodos.innerHTML = mostrarPersonajes(filtrado(POTTER, 'house', 'Slytherin'));
      break;
    default:
  }
});


let dataSeleccionada = '';
let divSeleccionado = '';

const filtradoSeleccionado = () => {
  const valorDeFiltrado = document.querySelector('.filtrar-casas').value;
  divTodos.innerHTML = '';
  // divG.innerHTML = '';
  // divH.innerHTML = '';
  // divR.innerHTML = '';
  // divS.innerHTML = '';
  switch (valorDeFiltrado) {
    case 'todos':
      document.querySelector('#todos').innerHTML = mostrarPersonajes(ordenado(POTTER), 'image', 'name', 'house', '');
      dataSeleccionada = POTTER;
      divSeleccionado = divTodos;
      break;
    case 'gryffindor':
      dataSeleccionada = filtrado(POTTER, 'house', 'Gryffindor');
      divSeleccionado = divTodos;
      break;
    case 'hufflepuff':
      dataSeleccionada = filtrado(POTTER, 'house', 'Hufflepuff');
      divSeleccionado = divTodos;
      break;
    case 'ravenclaw':
      dataSeleccionada = filtrado(POTTER, 'house', 'Ravenclaw');
      divSeleccionado = divTodos;
      break;
    case 'slytherin':
      dataSeleccionada = filtrado(POTTER, 'house', 'Slytherin');
      divSeleccionado = divTodos;
      break;
    default:
  }
};

seleccionar.addEventListener('input', filtradoSeleccionado);
filtradoSeleccionado();

// const datita = [{ name: 'Luna Lovegood', house: 'Ravenclaw' }, { name: 'Luna Chang', house: 'Ravenclaw' }, { name: 'Hermonie Granger', house: 'Gryffindor' }];

// const buscar = (data, textoB) => {
//   let indicesCoincidencias = '';
//   for (let i = 0; i < data.length; i += 1) {
//     const dataNombres = data[i].name.toLowerCase();
//     const longitud = textoB.length;
//     const caracterEspacio = dataNombres.indexOf(' ');
//     const nombre = dataNombres.slice(0, caracterEspacio);
//     const apellido = dataNombres.slice(caracterEspacio + 1, dataNombres.length);
//     if (nombre.slice(0, longitud) === textoB) {
//       indicesCoincidencias= 'data[i].name';
//     return indicesCoincidencias;
//             }
//   }
// };
// console.log(buscar(datita, 'Lun'))

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
// valorDeBusqueda.addEventListener('keyup', busqueda);
// busqueda()