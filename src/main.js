
import POKEMON from './data/pokemon/pokemon.js';

import {
  traerDataPokemon,
  ordenarAscOdescData,
  filtrarPokemones,
  mostrarTop,
  buscarPokemon,
  buscadorPrimerasLetrasNombre,
  filtrarPorCandy,
} from './data.js';

const radioInput = document.querySelectorAll('input[name=ordena]');

const containerElements = (obj) => {
  const divElement = document.createElement('div');
  divElement.innerHTML = `
  <img class="imagenPokemon" src = "${obj.imagen}"/>
  <h1>${obj.identificador}</h1><p>${obj.nombre}</p>
  `;
  divElement.addEventListener('click', () => {
    const divElem = document.createElement('div');
    divElem.classList.add('modalDialog');
    divElem.innerHTML = `
    <div>
      <a href = "#close" title = "Close" class = "close">X</a>
      <seccion class="nomImagen">
      <h2>${obj.nombre.toUpperCase()}</h2>
      <img class ="imagenPokemon" src = "${obj.imagen}"/>
      </seccion>
      <seccion class="descripcion">
      <h2 class="centrarTitulo">Descripción</h2>
      <p>Peso: ${obj.peso}  Altura: ${obj.altura} Tipo: ${obj.tipo}</p>
      <p>Caramelos: ${obj.cant_caramelos}</p> 
      <p>Multiplicador: ${obj.multiplicador}</p>
      </seccion>
      <seccion class="evolucion">
      <h2 class="centrarTitulo">Evoluciones</h2>
      <figure id="evoluciones">
      </figure></seccion>
    </div> 
    `;
    document.getElementById("contenedor-modal").appendChild(divElem);
    const arregloCaramelos = filtrarPorCandy((POKEMON), obj.caramelos);
    if(obj.caramelos !== 'None'){
      for (let i = 0; i < arregloCaramelos.length; i += 1) {
        document.getElementById("evoluciones").innerHTML += ` 
        <img class ="imagenPokemon" src ="${arregloCaramelos[i]}"/>
        `;
        document.querySelector("#contenedor-modal").appendChild(divElem);
      }
    };
    divElem.style.display = 'block';
    divElem.querySelector('.close').addEventListener('click', () => {
    divElem.classList.remove("modalDialog");
    document.querySelector('#contenedor-modal').innerHTML = '';
    });
  });
  return divElement;
}
const generarTemplatePokemones = (arr) => {
  arr.forEach((obj) => {
    document.querySelector('#contenedor-pokemons').appendChild(containerElements(obj));
  });
};
generarTemplatePokemones(traerDataPokemon(POKEMON));
const inputBuscaPokemon = document.getElementById('buscaPokemon');
inputBuscaPokemon.addEventListener('click', () => {
  const nombrePokemonBuscar = document.getElementById('buscar').value;
  const muestraPokemon = traerDataPokemon(buscarPokemon((POKEMON), nombrePokemonBuscar));
  document.querySelector('#contenedor-pokemons').innerHTML='';
  generarTemplatePokemones(muestraPokemon);
});
const desple = document.getElementById('desple');
desple.addEventListener('click', (event) => {
  const tPokemones = event.target.id;
  const arregloFiltrado = traerDataPokemon(filtrarPokemones((POKEMON), tPokemones));
  document.querySelector('#contenedor-pokemons').innerHTML = '';
  generarTemplatePokemones(arregloFiltrado);
});
for (let i = 0; i < radioInput.length; i += 1) {
  radioInput[i].addEventListener('change', (event) => {
    const string = event.target.id;
    const arregloOrdenado = traerDataPokemon(ordenarAscOdescData((POKEMON), string));
    document.querySelector('#contenedor-pokemons').innerHTML = '';
    generarTemplatePokemones(arregloOrdenado);
  });
}
const btnBuscarTop10 = document.getElementById('botonBuscar');
btnBuscarTop10.addEventListener('click', () => {
  const arregloMuestraTop = traerDataPokemon(mostrarTop(POKEMON));
  document.querySelector('#contenedor-pokemons').innerHTML = '';
  generarTemplatePokemones(arregloMuestraTop);
});
const buscaNombre=document.getElementById('buscar');
buscaNombre.addEventListener('input',(event) => {
  const pokeBuscado = traerDataPokemon(buscadorPrimerasLetrasNombre((POKEMON), event.target.value));
  document.querySelector('#contenedor-pokemons').innerHTML = '';
  generarTemplatePokemones(pokeBuscado);
})