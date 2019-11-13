import POKEMON from './data/pokemon/pokemon.js';

import {
  traerDataPokemon,
  ordenarAscOdescData,
  filtrarPokemones,
  mostrarTop,
  buscarPokemon,
} from './data.js';

const contenedorPokemons = document.querySelector('#contenedor-pokemons');

const radioInput = document.querySelectorAll('input[name=ordena]');

const generarTemplatePokemones = (arr) => {
  let catalogoImagenes = '';
  arr.forEach((obj) => {
    catalogoImagenes += `
    <div align="center">
    <img src = "${obj.imagen}"/>
    <h1> ${obj.identificador}</h1><p>  ${obj.nombre}</p>
    </div>
    `;
  });
  return catalogoImagenes;
};

const template = generarTemplatePokemones(traerDataPokemon(POKEMON));

const pintarPokemonesEnPantalla = (plantilla, nodoDom) => {
  nodoDom.innerHTML = '';
  nodoDom.innerHTML = plantilla;
};

pintarPokemonesEnPantalla(template, contenedorPokemons);

const inputBuscaPokemon = document.getElementById('buscaPokemon');
inputBuscaPokemon.addEventListener('click', () => {
  const nombrePokemonBuscar = document.getElementById('buscar').value;
  const muestraPokemon = traerDataPokemon(buscarPokemon((POKEMON), nombrePokemonBuscar));
  const pintarMuestraPokemon = generarTemplatePokemones(muestraPokemon);
  pintarPokemonesEnPantalla(pintarMuestraPokemon, contenedorPokemons);
});

// const filtrarTipoDePokemones = document.getElementById('tipoPokemones');
// filtrarTipoDePokemones.addEventListener('change', () => {
//   const tPokemones = filtrarTipoDePokemones.value;
//   const arregloFiltrado = traerDataPokemon(filtrarPokemones((POKEMON), tPokemones));
//   const pintarArregloFiltrado = generarTemplatePokemones(arregloFiltrado);
//   pintarPokemonesEnPantalla(pintarArregloFiltrado, contenedorPokemons);
// });
const desple = document.getElementById('desple');
desple.addEventListener('click', (event) => {
  const tPokemones = event.target.id;
  const arregloFiltrado = traerDataPokemon(filtrarPokemones((POKEMON), tPokemones));
  const pintarArregloFiltrado = generarTemplatePokemones(arregloFiltrado);
  pintarPokemonesEnPantalla(pintarArregloFiltrado, contenedorPokemons);
  console.log(pintarPokemonesEnPantalla);
})

for (let i = 0; i < radioInput.length; i += 1) {
  radioInput[i].addEventListener('change', (event) => {
    const string = event.target.id;
    const arregloOrdenado = traerDataPokemon(ordenarAscOdescData((POKEMON), string));
    const pintarArregloOrdenado = generarTemplatePokemones(arregloOrdenado);
    pintarPokemonesEnPantalla(pintarArregloOrdenado, contenedorPokemons);
  });
}
const btnBuscarTop10 = document.getElementById('botonBuscar');
btnBuscarTop10.addEventListener('click', () => {
  const arregloMuestraTop = traerDataPokemon(mostrarTop(POKEMON));
  const pintarArregloMuestraTop = generarTemplatePokemones(arregloMuestraTop);
  pintarPokemonesEnPantalla(pintarArregloMuestraTop, contenedorPokemons);
});

