
import POKEMON from './data/pokemon/pokemon.js';


import {
  traerDataPokemon,
  ordenarAscOdescData,
  filtrarPokemones,
  mostrarTop,
  buscarPokemon,
} from './data.js';
import pokemon from './data/pokemon/pokemon.js';

const radioInput = document.querySelectorAll('input[name=ordena]');


const containerElements= (obj) => {
  const divElement = document.createElement("div");
  const idPok=obj.identificador;
  divElement.innerHTML = `
  <img class="imagenPokemon" src = "${obj.imagen}"/>
  <h1>${obj.identificador}</h1><p>${obj.nombre}</p>
  `;
  
  divElement.addEventListener('click', () => {
    const divElem = document.createElement('div');
    divElem.classList.add('modalDialog');
    
    if(obj.multiplicador === null || obj.caramelos === undefined || obj.pre_evolucion === undefined || (idPok % 3===0) ){
    divElem.innerHTML = `
    <div>
      <a href = "#close" title = "Close" class = "close">X</a>
      <seccion>
      <h2>${obj.nombre.toUpperCase()}</h2>
      <img class="imagenPokemon" src = "${obj.imagen}"/>
      </seccion>
      <seccion>
      <p>Peso: ${obj.peso}  Altura: ${obj.altura} Tipo: ${obj.tipo}</p>
      <p>Caramelos: No tiene asignado caramelos</p>
      <p>Multiplicador: No tiene asignado un multiplicador</p>
      </seccion>
      <seccion>
      <div id="prevolucion">
        <p>No tiene pre-evolucion </p>
        <img class="imagenPokemon" src = "${POKEMON[idPok].img}"/> 
        <img class="imagenPokemon" src = "${POKEMON[idPok + 1].img}"/> 
        <p>Sig. evolucion: ${obj.siguiente_evolucion}</p> 
      </div>
      </seccion>
    </div> 
    `} else { divElem.innerHTML = `
    <div>
      <a href = "#close" title = "Close" class = "close">X</a>
      <seccion>
      <h2>${obj.nombre.toUpperCase()}</h2>
      <img class="imagenPokemon" src = "${obj.imagen}"/>
      </seccion>
      <seccion>
      <p>Peso: ${obj.peso}  Altura: ${obj.altura}</p>
      <p>Tipo: ${obj.tipo}</p>
      <p>Caramelos: ${obj.caramelos}</p>
      <p>Multiplicador: ${obj.multiplicador}</p>
      </seccion>
      <seccion id="evolucionesPokemon">
      <div id="prevolucion">
      <img class="imagenPokemon" src = "${POKEMON[idPok-2].img}"/> 
      <img class="imagenPokemon" src = "${POKEMON[idPok].img}"/>
      
      </div>
      </seccion>
    </div> 
    `
    };
    
    document.getElementById("contenedor-modal").appendChild(divElem);
    divElem.style.display = 'block';
    divElem.querySelector('.close').addEventListener('click', () => {
    divElem.classList.remove("modalDialog");
    document.querySelector('#contenedor-modal').innerHTML='';
    });
    
  //divElement.appendChild(divElem);
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

