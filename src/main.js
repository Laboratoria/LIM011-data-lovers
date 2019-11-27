/* eslint-disable import/extensions */
/* eslint-disable max-len */
// eslint-disable-next-line import/extensions
import POKEMON from './data/pokemon/pokemon.js';
// eslint-disable-next-line import/extensions
import {
  filtroTipoPokemon, filtroAlfabeticoAZ, filtroAlfabeticoZA, ordenNumerico, busquedaPokemonNombre, evolucionCaramelos,
} from './data.js';

const seleccionTipoPokemon = document.getElementById('pokemon-type');
const botonMostrarPantallaFiltro = document.getElementById('boton-pantalla-filtrotipo');
const botonMostrarPantallaCaramelos = document.getElementById('boton-pantalla-caramelos');
// pantalla de filtro tipo con todo, para ocultar y mostrar
const pageFiltro = document.getElementById('selector-filtro-wrap');
// pantalla de caramelos
const pageEvolucionCaramelos = document.getElementById('pantalla-caramelos');
// espacio donde muestra la lista de pokemones filtrados
const listaFiltroTipo = document.getElementById('muestra-lista-pokemon');
// busqueda por nombre de pokemon
const inputBusqueda = document.getElementById('busqueda-nombre-pokemon');
const fichaPokemonBuscado = document.getElementById('tarjeta-pokemon-buscado');
// Evolucion por caramelos
const nameCandyPokemon = document.getElementById('busqueda-nombre-pokemon-caramelos');
const candyCountUsuario = document.getElementById('candy-count');
const botonDescubrir = document.getElementById('btn-calculate');
const botonLimpiarCaramelos = document.getElementById('btn-limpiar-caramelos');
const muestraEvolucion = document.getElementById('caramelo-muestra-pokemon');

// Plantilla Solo imagen y nombre
// const showPicturePokemon = (data) => {
//   let plantillaPokemon = '';
//   data.forEach((item) => {
//     plantillaPokemon += `
//     <div class="singlepoke">
//     <div id="${item.id}" name="pokemon" class="ficha-pokemon">
//             <div class="fondo-pokemon"><img src="${item.img}"/></div>
//             <p>${item.name} #${item.num}</p>
//             </div>
//     </div>`;
//   });
//   return plantillaPokemon;
// };
// Muestra lista de nombres de pokemon en el datalist
const opcion = (data) => {
  const datalistName = document.getElementById('pokemon-name');
  // debugger;
  for (let i = 0; i < data.length; i += 1) {
    const option = document.createElement('option');
    option.innerHTML = data[i].name;
    datalistName.appendChild(option);
  }
};
opcion(POKEMON);
// Plantilla para mostrar evolucion por caramelos
const showEvolucionCaramelos = (data) => {
  for (let i = 0, len = showEvolucionCaramelos.length; i < len; i += 1) {
    if (data[i].numero === undefined) {
      muestraEvolucion.innerHTML = `
    <div id="${data[i].id}" name="pokemon" class="ficha-pokemon">
          <div class="fondo-pokemon">
            <p>${data[i].mensaje}</p>
            <img src="${data[i].img}"/>
          </div>
    </div>`;
    } else {
    // Evoluciona
      muestraEvolucion.innerHTML = `
    <div id="${data[i].id}" name="pokemon" class="ficha-pokemon">
          <div class="fondo-pokemon">
              <p>${data[i].mensaje}</p>
              <img src="${data[i].img}"/> <p>${data[i].mensaje2}</p>
              <img src="${data[i].imgEvo}"/>
          </div>
    </div>`;
    }
  }
};
// Plantilla con saber más
const showFichaPokemon = (data) => {
  let plantillaPokemon = '';
  data.forEach((item) => {
    plantillaPokemon += `
    <div id="${item.id}" name="pokemon" class="ficha-pokemon">
            <div class="fondo-pokemon"><img src="${item.img}"/></div>
            <p> ${item.name} ${item.num}</p>
            <p>Tipo: ${item.type.join('  /  ')}</p>
            <p>Debilidades: ${item.weaknesses.join('  /  ')}</p>
            <details id="details" class="details">
              <summary id="summary" class="summary">SABER MÁS</summary>
              <span>Peso: ${item.weight}<br>
              Tamaño: ${item.height}<br>
              Caramelos para Evolucionar: ${item.candy_count}<br>
              Huevo: ${item.egg}<br></span>
            </details>
        </div>`;
  });
  // console.log(plantillaPokemon);
  return plantillaPokemon;
};
// Plantilla con saber más
const showFichaPokemonBusqueda = (data) => {
  let plantillaPokemon = '';
  data.forEach((item) => {
    plantillaPokemon += `
    <div id="${item.id}" name="pokemon" class="ficha-pokemon">
            <div class="fondo-pokemon"><img src="${item.img}"/></div>
            <p> ${item.name} ${item.num}</p>
            <details id="details" class="details">
              <summary id="summary" class="summary">SABER MÁS</summary>
              <span>Tipo: ${item.type.join('  /  ')}
            <br>Debilidades: ${item.weaknesses.join('  /  ')}
            Peso: ${item.weight}<br>
            Tamaño: ${item.height}<br>
            Caramelos para Evolucionar: ${item.candy_count}<br>
            Huevo: ${item.egg}</span>
            </details>
        </div>`;
  });
  // console.log(plantillaPokemon);
  return plantillaPokemon;
};
inputBusqueda.addEventListener('input', () => {
  if (inputBusqueda.value.toLowerCase() === '') {
    fichaPokemonBuscado.innerHTML = '';
    pageFiltro.style.display = 'none';
  } else {
    fichaPokemonBuscado.innerHTML = (showFichaPokemonBusqueda(busquedaPokemonNombre(POKEMON, inputBusqueda.value.toLowerCase())));
    pageFiltro.style.display = 'block';
  }
  // return fichaPokemonBuscado;
});
seleccionTipoPokemon.addEventListener('click', () => {
  if (seleccionTipoPokemon.value === 'Todos') {
    listaFiltroTipo.innerHTML = showFichaPokemon(POKEMON);
    // return listaFiltroTipo;
  } else {
    listaFiltroTipo.innerHTML = showFichaPokemon(filtroTipoPokemon(POKEMON, seleccionTipoPokemon.value));
  } return listaFiltroTipo;
});
botonMostrarPantallaCaramelos.addEventListener('click', () => {
  pageFiltro.style.display = 'none';
  pageEvolucionCaramelos.style.display = 'block';
  seleccionTipoPokemon.value = '';
});
botonMostrarPantallaFiltro.addEventListener('click', () => {
  pageFiltro.style.display = 'block';
  pageEvolucionCaramelos.style.display = 'none';
  seleccionTipoPokemon.value = '';
  listaFiltroTipo.innerHTML = '';
  document.getElementById('caramelo-muestra-pokemon').innerHTML = '';
  document.getElementById('form').reset();
});

const botonOrdenAZ = document.getElementById('az');
botonOrdenAZ.addEventListener('click', () => {
  if (seleccionTipoPokemon.value === 'Todos') {
    listaFiltroTipo.innerHTML = showFichaPokemon(filtroAlfabeticoAZ(POKEMON));
  } else {
    listaFiltroTipo.innerHTML = showFichaPokemon(filtroAlfabeticoAZ(filtroTipoPokemon(POKEMON, seleccionTipoPokemon.value)));
  }
});
const botonOrdenZA = document.getElementById('za');
botonOrdenZA.addEventListener('click', () => {
  if (seleccionTipoPokemon.value === 'Todos') {
    listaFiltroTipo.innerHTML = showFichaPokemon(filtroAlfabeticoZA(POKEMON));
  } else {
    listaFiltroTipo.innerHTML = showFichaPokemon(filtroAlfabeticoZA(filtroTipoPokemon(POKEMON, seleccionTipoPokemon.value)));
  }
});
const botonOrdenNumerico = document.getElementById('n');
botonOrdenNumerico.addEventListener('click', () => {
  if (seleccionTipoPokemon.value === 'Todos') {
    listaFiltroTipo.innerHTML = showFichaPokemon(ordenNumerico(POKEMON));
  } else {
    listaFiltroTipo.innerHTML = showFichaPokemon(ordenNumerico(filtroTipoPokemon(POKEMON, seleccionTipoPokemon.value)));
  }
});

botonDescubrir.addEventListener('click', () => {
  // eslint-disable-next-line no-restricted-globals
  event.preventDefault();
  showEvolucionCaramelos(evolucionCaramelos(POKEMON, nameCandyPokemon.value, candyCountUsuario.value));
});

botonLimpiarCaramelos.addEventListener('click', () => {
  document.getElementById('caramelo-muestra-pokemon').innerHTML = '';
  document.getElementById('form').reset();
});
