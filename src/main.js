/* eslint-disable no-console */
import POKEMON from './data/pokemon/pokemon.js';

import {
  traerDataPokemon,
  ordenarAscOdescData,
  filtrarPokemones,
  mostrarTop,
  buscarPokemon,
} from './data.js';

const radioInput = document.querySelectorAll('input[name=ordena]');

const generarTemplatePokemones = (arr) => {
  let catalogoImagenes = '';
  arr.forEach((obj) => {
    catalogoImagenes += `
    <div align="center">
    <img src = "${obj.imagen}"/>
    <h1>${obj.identificador}</h1><p>${obj.nombre}</p>
    </div>
    `;
  });
  return catalogoImagenes;
};

const template = generarTemplatePokemones(traerDataPokemon(POKEMON));

const pintarPokemonesEnPantalla = (plantilla, id) => {
  document.querySelector(id).innerHTML = '';
  document.querySelector(id).innerHTML = plantilla;
};

pintarPokemonesEnPantalla(template, '#contenedor-pokemons');

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
const modal = document.getElementById('miModal');
modal.addEventListener('click', () => {
  const arreglo = POKEMON[0];
  console.log(arreglo);
});
