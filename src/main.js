import POTTER from './data/potter/potter.js';
import {
  ordenado, filtrado, busqueda, filtraDiferente,
} from './data.js';
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
  // son las variables que luego tomaran otros valores para el modal
  let {
    vivir, estudiante, staff, coma, patronus, grisesImagen, iconoLuto, varita,
  } = '';

  if (personaje[0].house === '') {
    coma = '';
  } else {
    coma = ', ';
  }
  if (personaje[0].alive === true) {
    vivir = 'Vivo';
    grisesImagen = '';
    iconoLuto = '';
  } else {
    vivir = 'Muerto';
    grisesImagen = '<style> #imagenSelect{ filter: grayscale(100%);} </style>';
    iconoLuto = '<img class="icono" src="images/lazo.png">';
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
  if (personaje[0].wand.wood === '' && personaje[0].wand.core === '' && personaje[0].wand.length === '') {
    varita = 'Desconocida';
  } else {
    varita = `Madera: ${personaje[0].wand.wood}<br>Núcleo: ${personaje[0].wand.core}<br>Longitud: ${personaje[0].wand.length}`;
  }
  let personajeSelect = '';
  personajeSelect = `
      <div class="contenido-modal">
      <div id="nombre-persona">
       <h1 class="nombre-persona">${personaje[0].name}</h1>
       <span id="cerrar" class="cerrar">&times;</span>
       </div>
       <div id="foto">
        <img id="imagenSelect" class="foto" src="${personaje[0].image}">
        <div class="icono">${iconoLuto}</div>
        ${grisesImagen}
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
       <p>${varita}<p>
       </div>
       <div class="patronus">
       <h2>Patronus</h2>
       <p>${patronus}</p>
       </div>
       </div>
     </div>`;
  return personajeSelect;
};
const divTodosP = document.getElementById('todosP');
divTodosP.innerHTML = pintado(ordenado(POTTER), 'image', 'name', '');

// Funcion del modal
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

// PERSONAJES
document.getElementById('menu-personajes').addEventListener('click', () => {
  inicio.classList.add('ocultar');
  menus.classList.remove('ocultar');
  casas.classList.add('ocultar');
  rol.classList.add('ocultar');
  personajes.classList.remove('ocultar');
  document.querySelector('.filtrar-personajes').reset();
  divTodosP.innerHTML = pintado(ordenado(POTTER), 'image', 'name', '');
  datos = POTTER;
  funcionModal();
});

let opcionSeleccionada = '';
const seleccionarP = document.querySelector('.filtrar-personajes');
seleccionarP.addEventListener('change', (evento) => {
  document.querySelector('#busquedaP').value = '';
  opcionSeleccionada = evento.target.value;
  divTodosP.innerHTML = '';
  if (opcionSeleccionada === '') {
    datos = POTTER;
  } else {
    datos = filtrado(POTTER, 'gender', opcionSeleccionada);
  }
  divTodosP.innerHTML = pintado(datos, 'image', 'name', '');
  funcionModal();
});


// BUSCADOR PERSONAJES
document.querySelector('#busquedaP').addEventListener('input', (event) => {
  const nombreBuscadoP = event.target.value;
  if (datos === POTTER) {
    divTodosP.innerHTML = pintado((busqueda(datos, nombreBuscadoP)), 'image', 'name', '');
    funcionModal();
  } else {
    divTodosP.innerHTML = pintado((busqueda(datos, nombreBuscadoP)), 'image', 'name', '');
    funcionModal();
  }
  if (divTodosP.innerHTML === '') {
    divTodosP.innerHTML = '<h1>No se encontró ningún personaje</h1>';
  }
});

const divTodosR = document.getElementById('todosR');
// MENU ROL
document.getElementById('menu-rol').addEventListener('click', () => {
  inicio.classList.add('ocultar');
  menus.classList.remove('ocultar');
  rol.classList.remove('ocultar');
  casas.classList.add('ocultar');
  personajes.classList.add('ocultar');
  document.querySelector('.filtrar-rol').reset();
  // pintado al elegir rol
  divTodosR.innerHTML = pintado(ordenado(POTTER), 'image', 'name', '');
  datos = POTTER;
});

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

const divTodosC = document.getElementById('todosC');
// CASAS
document.getElementById('menu-casas').addEventListener('click', () => {
  inicio.classList.add('ocultar');
  menus.classList.remove('ocultar');
  casas.classList.remove('ocultar');
  personajes.classList.add('ocultar');
  rol.classList.add('ocultar');
  document.querySelector('.filtrar-casas').reset();
  divTodosC.innerHTML = pintado(ordenado(POTTER), 'image', 'name', 'house');
  datos = POTTER;
});

// FILTROS CASAS
const seleccionarC = document.querySelector('.filtrar-casas');
seleccionarC.addEventListener('change', (evento) => {
  document.querySelector('#busquedaC').value = '';
  opcionSeleccionada = evento.target.value;
  divTodosP.innerHTML = '';
  if (opcionSeleccionada === '') {
    datos = POTTER;
    divTodosC.innerHTML = pintado(datos, 'image', 'name', 'house');
  } else {
    datos = filtrado(POTTER, 'house', opcionSeleccionada);
    divTodosC.innerHTML = pintado(datos, 'image', 'name', '');
  }
  funcionModal();
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
