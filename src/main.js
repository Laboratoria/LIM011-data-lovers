
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

// const modal = (obj) => {
// const divElement = document.createElement('div');
// divElement.classList.add('modalDialog');
// divElement.innerHTML =  `
// <div class="modal-contenido">
// <a href="#close" title="Close" class="close">X</a>
// <h2>${obj.name}</h2>
// <p>${obj.weight}</p>
// <div id="prevolucion"></div>
// </div> 
// `;
// return divElement;
// }

const containerElements= (obj) => {
  const divElement = document.createElement("div");
  divElement.innerHTML = `
  <img class="imagenPokemon" src = "${obj.imagen}"/>
  <h1>${obj.identificador}</h1><p>${obj.nombre}</p>
  `;
  divElement.addEventListener('click', () => {
    const divElem = document.createElement('div');
    divElem.classList.add('modalDialog');
    if(obj.multiplicador===null || obj.caramelos === undefined){
    divElem.innerHTML = `
    <div>
      <a href = "#close" title = "Close" class = "close">X</a>
      <h2>${obj.nombre.toUpperCase()}</h2>
      <img class="imagenPokemon" src = "${obj.imagen}"/>
      <p>Peso: ${obj.peso}  Altura: ${obj.altura} Tipo: ${obj.tipo}</p>
      <p>Caramelos: No tiene asignada esta propiedad</p>
      <p>Multiplicador: No tiene asignado un multiplicador</p>
      <div id="prevolucion">
        <p>Sig. evolucion: ${obj.siguiente_evolucion}</p>
      </div>
    </div> 
    `} else { divElem.innerHTML = `
    <div>
      <a href = "#close" title = "Close" class = "close">X</a>
      <h2>${obj.nombre.toUpperCase()}</h2>
      <img class="imagenPokemon" src = "${obj.imagen}"/>
      <p>Peso: ${obj.peso}  Altura: ${obj.altura}</p>
      <p>Tipo: ${obj.tipo}</p>
      <p>Caramelos: ${obj.caramelos}</p>
      <p>Multiplicador: ${obj.multiplicador}</p>
      <div id="prevolucion">
      <p>Sig. evolucion: ${obj.siguiente_evolucion}</p></div>
    </div> 
    `

    };
   
    divElem.style.display = 'block';
    divElem.querySelector('.close').addEventListener('click', () => {
    divElem.style.display = 'none';
    });
    divElement.appendChild(divElem);
  });

  return divElement;
}

const generarTemplatePokemones = (arr) => {
  arr.forEach((obj) => {
    document.querySelector('#contenedor-pokemons').appendChild(containerElements(obj));
  });
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

generarTemplatePokemones(traerDataPokemon(POKEMON));
// const template = generarTemplatePokemones(traerDataPokemon(POKEMON))
// const templateModal = generarTemplatePokemonesModal(traerDataPokemonModal(POKEMON));

// const pintarPokemonesEnPantalla = (plantilla, id) => {
// document.querySelector(id).innerHTML = '';
// document.querySelector(id).innerHTML = plantilla;
// };

// pintarPokemonesEnPantalla(template, '#contenedor-pokemons');

/*const clasePokemonModal = document.querySelectorAll('.pokemonModal');
console.log(clasePokemonModal)
for (let i = 0; i < clasePokemonModal.length; i += 1) {
clasePokemonModal[i].addEventListener('click', (event) => {
let idPokemonABuscar = clasePokemonModal[i].children[1].firstChild;
console.log('id capturado', idPokemonABuscar);
let cantidad=idPokemonABuscar.ty;
console.log(cantidad);
let posPokemonModal = parseInt(idPokemonABuscar);
console.log('id posicion', posPokemonModal);*/
// console.log(POKEMON[idPokemonABuscar])
// const arrBuscaPokemon = [];
// arrBuscaPokemon.push(POKEMON.find((POKEMON) => elemento.id === idPokemonABuscar));
// console.log(arrBuscaPokemon)
// const pokemonBuscadoPorId = traerDataPokemonModal(buscarPokemonId((POKEMON), idPokemonABuscar));
// console.log('id de pokemon',pokemonBuscadoPorId)
// const pintarPokemonBuscadoModal = generarTemplatePokemonesModal(pokemonBuscadoPorId);
// pintarPokemonesEnPantallaModal(pintarPokemonBuscadoModal, '#miModal');


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
  document.querySelector('#contenedor-pokemons').innerHTML='';
  generarTemplatePokemones(arregloFiltrado);
});

for (let i = 0; i < radioInput.length; i += 1) {
radioInput[i].addEventListener('change', (event) => {
    const string = event.target.id;
    const arregloOrdenado = traerDataPokemon(ordenarAscOdescData((POKEMON), string));
    document.querySelector('#contenedor-pokemons').innerHTML='';
    generarTemplatePokemones(arregloOrdenado);
  });
}
const btnBuscarTop10 = document.getElementById('botonBuscar');
btnBuscarTop10.addEventListener('click', () => {
  const arregloMuestraTop = traerDataPokemon(mostrarTop(POKEMON));
  document.querySelector('#contenedor-pokemons').innerHTML='';
  generarTemplatePokemones(arregloMuestraTop);
});

