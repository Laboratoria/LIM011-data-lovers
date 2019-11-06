import POKEMON from './data/pokemon/pokemon.js';
import { traerDataPokemon, ordenarAscOdescData, filtrarPokemones, mostrarTop } from './data.js';

const contenedorPokemons = document.querySelector('#contenedor-pokemons');

const radioInput = document.querySelectorAll('input[name=ordena]');

const btnBuscar=document.getElementById('botonBuscar');
//console.log(btnBuscar);
btnBuscar.addEventListener('click', () => {
  
  const arregloMuestraTop=traerDataPokemon(mostrarTop(POKEMON));
  const pintarArregloMuestraTop=generarTemplatePokemones(arregloMuestraTop);
  pintarPokemonesEnPantalla(pintarArregloMuestraTop, contenedorPokemons);
});

const tipoDePokemones=document.getElementById("tipoPokemones");
 tipoDePokemones.addEventListener('change', () => {
   //const arregloFiltradoPokemones=[];
   const tPokemones=tipoDePokemones.value;
   console.log(tPokemones);

   const arregloFiltrado = traerDataPokemon(filtrarPokemones((POKEMON),tPokemones));
    const pintarArregloFiltrado= generarTemplatePokemones(arregloFiltrado);
    pintarPokemonesEnPantalla(pintarArregloFiltrado, contenedorPokemons);   
    
   });

const generarTemplatePokemones = (arr) => {  
  let catalogoImagenes = ''; 
  arr.forEach(obj => {
    catalogoImagenes += `
    <div align="center">
    <img src = "${obj.imagen}"/>
    <p> ${obj.identificador} ${obj.nombre}</p>
    </div>
    `;
  });
  return catalogoImagenes;
};

const pintarPokemonesEnPantalla = (plantilla, nodoDom) => {
    nodoDom.innerHTML = '';
    nodoDom.innerHTML = plantilla;
}
console.log(traerDataPokemon);
const template = generarTemplatePokemones(traerDataPokemon(POKEMON));
pintarPokemonesEnPantalla(template, contenedorPokemons);

 for (let i = 0; i < radioInput.length; i++){
    console.log(radioInput[i])
    radioInput[i].addEventListener('change', (event) => {
        //console.log(event.target.id);
        const string = event.target.id;
        console.log(string);
        const arregloOrdenado = traerDataPokemon(ordenarAscOdescData((POKEMON),string));
        console.log(arregloOrdenado);
        const pintarArregloOrdenado= generarTemplatePokemones(arregloOrdenado);
        pintarPokemonesEnPantalla(pintarArregloOrdenado, contenedorPokemons);   
    });    
};


 
