import POKEMON from './data/pokemon/pokemon.js';


import {
  traerDataPokemon,
  // traerDataPokemonModal,
  ordenarAscOdescData,
  filtrarPokemones,
  mostrarTop,
  buscarPokemon,
  // buscarPokemonId
} from './data.js';

const radioInput = document.querySelectorAll('input[name=ordena]');

const generarTemplatePokemones = (arr) => {
  let catalogoImagenes = '';
  arr.forEach((obj) => {
    catalogoImagenes += `
    <div class="pokemonModal" align="center">
    <img src = "${obj.imagen}"/>
    <h1>${obj.identificador}</h1><p>${obj.nombre}</p>
    </div>
    `;
  });
  return catalogoImagenes;
};

// const generarTemplatePokemonesModal = (obj) => {
//   `
//     <div align="center">
//     <img src = "${obj.imagen}"/>
//     <h1> ${obj.identificador}</h1><p>  ${obj.nombre}</p>
//     <p> ${obj.altura}</p><p> ${obj.peso}</p>
//     </div>
//     `;
// };

const template = generarTemplatePokemones(traerDataPokemon(POKEMON));
// const templateModal = generarTemplatePokemonesModal(traerDataPokemonModal(POKEMON));

const pintarPokemonesEnPantalla = (plantilla, id) => {
  document.querySelector(id).innerHTML = '';
  document.querySelector(id).innerHTML = plantilla;
};

pintarPokemonesEnPantalla(template, '#contenedor-pokemons');

const clasePokemonModal = document.querySelectorAll('.pokemonModal');
console.log(clasePokemonModal)
for (let i = 0; i < clasePokemonModal.length; i += 1) {
clasePokemonModal[i].addEventListener('click', (event) => {
let idPokemonABuscar = clasePokemonModal[i].children[1].firstChild;
console.log('id capturado', idPokemonABuscar);
let cantidad=idPokemonABuscar.ty;
console.log(cantidad);
let posPokemonModal = parseInt(idPokemonABuscar);
console.log('id posicion', posPokemonModal);
// console.log(POKEMON[idPokemonABuscar])
// const arrBuscaPokemon = [];
// arrBuscaPokemon.push(POKEMON.find((POKEMON) => elemento.id === idPokemonABuscar));
// console.log(arrBuscaPokemon)
// const pokemonBuscadoPorId = traerDataPokemonModal(buscarPokemonId((POKEMON), idPokemonABuscar));
// console.log('id de pokemon',pokemonBuscadoPorId)
// const pintarPokemonBuscadoModal = generarTemplatePokemonesModal(pokemonBuscadoPorId);
// pintarPokemonesEnPantallaModal(pintarPokemonBuscadoModal, '#miModal');
});
};

const inputBuscaPokemon = document.getElementById('buscaPokemon');
inputBuscaPokemon.addEventListener('click', () => {
  const nombrePokemonBuscar = document.getElementById('buscar').value;
  const muestraPokemon = traerDataPokemon(buscarPokemon((POKEMON), nombrePokemonBuscar));
  const pintarMuestraPokemon = generarTemplatePokemones(muestraPokemon);
  pintarPokemonesEnPantalla(pintarMuestraPokemon, '#contenedor-pokemons');
});

const desple = document.getElementById('desple');
desple.addEventListener('click', (event) => {
  const tPokemones = event.target.id;
  const arregloFiltrado = traerDataPokemon(filtrarPokemones((POKEMON), tPokemones));
  const pintarArregloFiltrado = generarTemplatePokemones(arregloFiltrado);
  pintarPokemonesEnPantalla(pintarArregloFiltrado, '#contenedor-pokemons');
});

for (let i = 0; i < radioInput.length; i += 1) {
  radioInput[i].addEventListener('change', (event) => {
    const string = event.target.id;
    const arregloOrdenado = traerDataPokemon(ordenarAscOdescData((POKEMON), string));
    const pintarArregloOrdenado = generarTemplatePokemones(arregloOrdenado);
    pintarPokemonesEnPantalla(pintarArregloOrdenado, '#contenedor-pokemons');
  });
}
const btnBuscarTop10 = document.getElementById('botonBuscar');
btnBuscarTop10.addEventListener('click', () => {
  const arregloMuestraTop = traerDataPokemon(mostrarTop(POKEMON));
  const pintarArregloMuestraTop = generarTemplatePokemones(arregloMuestraTop);
  pintarPokemonesEnPantalla(pintarArregloMuestraTop, '#contenedor-pokemons');
});

// const pElement = document.createElement("p");
// const pElement1 = `<p></p>`;
// // document.getElementById("example").appendChild(pElement);
// document.getElementById("example").innerHTML = pElement
