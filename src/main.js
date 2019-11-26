/* eslint-disable import/extensions */
/* eslint-disable max-len */
// eslint-disable-next-line import/extensions
import POKEMON from './data/pokemon/pokemon.js';
// eslint-disable-next-line import/extensions
import {
  filtroTipoPokemon, filtroAlfabeticoAZ, filtroAlfabeticoZA, ordenNumerico, busquedaPokemonNombre, caramelos,
} from './data.js';

// Plantilla Solo imagen y nombre
const showPicturePokemon = (data) => {
  let plantillaPokemon = '';
  data.forEach((item) => {
    plantillaPokemon += `    
    <div class="singlepoke">    
    <div id="${item.id}" name="pokemon" class="ficha-pokemon">
            <div class="fondo-pokemon"><img src="${item.img}"/></div>
            <p>${item.name} #${item.num}</p>
            </div>
    </div>`;
  });
  return plantillaPokemon;
};

// Plantilla buscador por nombre, añade al datalist los nombres directo del pokemon.js
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

// selecciona el tipo de pokemon de las opciones
const seleccionTipoPokemon = document.getElementById('pokemon-type');
// Boton en nav para filtro tipo muestra todo
const botonMostrarPantallaFiltro = document.getElementById('boton-pantalla-filtrotipo');
// boton caramelos
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

inputBusqueda.addEventListener('input', () => {
  if (inputBusqueda.value.toLowerCase() === '') {
    fichaPokemonBuscado.innerHTML = '';
    // return fichaPokemonBuscado;
  }
  fichaPokemonBuscado.innerHTML = (showFichaPokemon(busquedaPokemonNombre(POKEMON, inputBusqueda.value.toLowerCase())));
  pageFiltro.style.display = 'block';
  // return fichaPokemonBuscado;
});

seleccionTipoPokemon.addEventListener('click', () => {
  if (seleccionTipoPokemon.value === 'Todos') {
    listaFiltroTipo.innerHTML = showPicturePokemon(POKEMON);
    return listaFiltroTipo;
  }
  listaFiltroTipo.innerHTML = showPicturePokemon(filtroTipoPokemon(POKEMON, seleccionTipoPokemon.value));
  return listaFiltroTipo;
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
});

const botonOrdenAZ = document.getElementById('az');
botonOrdenAZ.addEventListener('click', () => {
  if (seleccionTipoPokemon.value === 'Todos') {
    listaFiltroTipo.innerHTML = showPicturePokemon(filtroAlfabeticoAZ(POKEMON));
  }
  listaFiltroTipo.innerHTML = showPicturePokemon(filtroAlfabeticoAZ(filtroTipoPokemon(POKEMON, seleccionTipoPokemon.value)));
});
const botonOrdenZA = document.getElementById('za');
botonOrdenZA.addEventListener('click', () => {
  if (seleccionTipoPokemon.value === 'Todos') {
    listaFiltroTipo.innerHTML = showPicturePokemon(filtroAlfabeticoZA(POKEMON));
  }
  listaFiltroTipo.innerHTML = showPicturePokemon(filtroAlfabeticoZA(filtroTipoPokemon(POKEMON, seleccionTipoPokemon.value)));
});

const botonOrdenNumerico = document.getElementById('n');
botonOrdenNumerico.addEventListener('click', () => {
  if (seleccionTipoPokemon.value === 'Todos') {
    listaFiltroTipo.innerHTML = showPicturePokemon(ordenNumerico(POKEMON));
  }
  listaFiltroTipo.innerHTML = showPicturePokemon(ordenNumerico(filtroTipoPokemon(POKEMON, seleccionTipoPokemon.value)));
});

// Plantilla para evolucion Pokemon
const nameCandyPokemon = document.getElementById('busqueda-nombre-pokemon-caramelos');
const candyCountUsuario = document.getElementById('candy-count');
const botonDescubrir = document.getElementById('btn-calculate');



const char = (data) =>{
for ( let i=0, len = char.length; i<len; i++) {
  if (data[i]['numero'] === undefined){
    //Ya no evoluciona
    document.getElementById('caramelo-muestra-pokemon').innerHTML =`
    <div id="${data[i]['id']}" name="pokemon" class="ficha-pokemon">
           <div class="fondo-pokemon">
               <p>${data[i]['mensaje']}</p>
               <img src="${data[i]['img']}"/></div>
          </div>`;
  } else {
    //Evoluciona
    console.log(' :B');
    document.getElementById('caramelo-muestra-pokemon').innerHTML =`
    <div id="${data[i]['id']}" name="pokemon" class="ficha-pokemon">
           <div class="fondo-pokemon">
               <p>${data[i]['mensaje']}</p>
               <img src="${data[i]['img']}"/> <p>${data[i]['mensaje2']}</p>
               <img src="${data[i]['imgEvo']}"/>
               </div>
          </div>`;
  };
};
};
console.log(char(caramelos(POKEMON, nameCandyPokemon.value, candyCountUsuario.value)));

botonDescubrir.addEventListener('click', () => {
  event.preventDefault();
  document.getElementById('caramelo-muestra-pokemon').innerHTML = caramelos(POKEMON, nameCandyPokemon.value, candyCountUsuario.value);
  console.log(caramelos(POKEMON, nameCandyPokemon.value, candyCountUsuario.value));

  });

  const botonLimpiarCaramelos = document.getElementById('btn-limpiar-caramelos')
  
  botonLimpiarCaramelos.addEventListener('click',() =>{
    document.getElementById('caramelo-muestra-pokemon').innerHTML = ''
    document.getElementById('form').reset()})

  // tieneEvolucion(POKEMON);
  // Hallar caramelos 
    // for (let i = 0; i < POKEMON.length; i++) {
    //   if(POKEMON[i].name === nameCandyPokemon.value){
    //     if (POKEMON[i].candy_count === undefined){
    //       let muestrarNaCaramelos = 
    //       `<div>
    //       <h1 class="letterCaramelos">Tu pokemon no puede evolucionar:</h1>
    //       <img src= "${POKEMON[i].img}" class="img-pokemon-caramelos">
    //       <p class="name-pokemon">${nameCandyPokemon.value}</p>
    //       <h1 class="letterCaramelos"> Te sobra ${candyCountUsuario.value} caramelos. </h1>  
    //       </div>`;
    //       document.getElementById('caramelo-muestra-pokemon').innerHTML = muestrarNaCaramelos
    //     }
        
    //     if (parseInt(candyCountUsuario.value) < POKEMON[i].candy_count){
    //       let muestrarFaltaCaramelos = (POKEMON[i].candy_count - parseInt(candyCountUsuario.value));
    //       const faltaCaramelos =
    //       `<div>
    //       <h1 class="letterCaramelos">Tu pokemon  es :</h1>
    //       <img class="img-pokemon-caramelos" src= "${POKEMON[i].img}" > 
    //       <p class="name-pokemon">${nameCandyPokemon.value}</p>
    //       <h1 class="letterCaramelos"> Tienes ${candyCountUsuario.value} caramelos, te faltan  ${muestrarFaltaCaramelos} para evolucionar a :</h1>                
    //       <img class="img-pokemon-caramelos" src= "${POKEMON[i+1].img}">
    //       <p class="name-pokemon">${POKEMON[i].next_evolution[0].name}</p>
    //       </div>`;
    //       document.getElementById('caramelo-muestra-pokemon').innerHTML = faltaCaramelos
    //   }

    //   if (parseInt(candyCountUsuario.value) > POKEMON[i].candy_count){
    //       let muestraSobraCaramelos = (parseInt(candyCountUsuario.value) - POKEMON[i].candy_count)
    //       const sobraCaramelos =
    //       `<div>
    //       <h1 class="letterCaramelos">Tu pokemon  es :</h1>
    //       <img class="img-pokemon-caramelos" src="${POKEMON[i].img}">
    //       <p class="name-pokemon">${nameCandyPokemon.value}</p>
    //       <h1 class="letterCaramelos"> Tienes ${candyCountUsuario.value} caramelos, ya podrías evolucionarlo a :</h1>                
    //       <img class="img-pokemon-caramelos" src= "${POKEMON[i+1].img}">
    //       <p class="name-pokemon">${POKEMON[i+1].name}</p>
    //       <h1 class="letterCaramelos">Y aun así, te sobran  ${muestraSobraCaramelos} caramelos.<h1>
    //       </div>`
    //       document.getElementById('caramelo-muestra-pokemon').innerHTML = sobraCaramelos;}
    //   }};
      
        
        