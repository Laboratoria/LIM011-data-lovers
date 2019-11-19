/* eslint-disable import/extensions */
/* eslint-disable max-len */
// eslint-disable-next-line import/extensions
import POKEMON from './data/pokemon/pokemon.js';

// eslint-disable-next-line import/extensions
import {
  filtroTipoPokemon, filtroAlfabeticoAZ, filtroAlfabeticoZA, ordenNumerico, busquedaPokemonNombre,
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

const opcion = (data) => {
  const datalistName= document.getElementById('pokemon-name')
  // debugger;
  for(let i = 0; i < data.length ; i += 1){
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

//Plantilla para evolucion Pokemon
const nameCandyPokemon = document.getElementById('busqueda-nombre-pokemon-caramelos');
const candyCountUsuario = document.getElementById('candy-count');
const botonDescubrir= document.getElementById('btn-calculate');
botonDescubrir.addEventListener('click', () => {
  console.log (nameCandyPokemon.value)
  console.log (candyCountUsuario.value)

  
  // document.getElementById('caramelo-muestra-pokemon').innerHTML=nameCandyPokemon.value;
}) 
// return (nameCandyPokemon , candyCountUsuario)
// const plantillaResultado = (data, candyCountUsuario) => {
//   console.log (plantillaResultado(opcion(POKEMON.name),5));
// }


  // let respuestaCaramelos = 0;
  // for (let i = 0; i < data.length; i++) {
  //     if (candyCountUsuario < data[i].candy_Count) {
  //       respuestaCaramelos = data[i].candy_count - candyCountUsuario ;

  //         <div>
  //         <h1>Tu pokemon  es :</h1>
  //         <p>${nameCandyPokemon}</p>
  //         <img class="img-res" src='${data[i].img}'>
  //         <h1> Tienes ${candyCountUsuario} dulces, te faltan  ${respuestaCaramelos} para evolucionar a :</h1>                
  //         <p>${data[i].pokemonEvolutionName}</p>
  //         <img class="img-res" src='${data[i].pokemonEvolutionImg}'>
  //         </div>`;
          
  //     }
  //     }


