import POKEMON from './data/pokemon/pokemon.js';
// console.log(POKEMON);
/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */

// const catalogo=document.getElementById("pokemons");
import { pintaPokemones, ordenaPokemones } from './data.js';
document.querySelector('#pokemons').innerHTML = pintaPokemones(POKEMON);
//Guarda el array ordenado en una variable para luego pasarla a la funcion pintaPokemones y de 
//esta manera poder reutilizar el codigo del pintado de datos
const ordeasc=ordenaPokemones(POKEMON);
//Aqui exactamente es donde paso el array ordenado para que muestre el arreglo ordenado
document.querySelector('#a-z').innerHTML = pintaPokemones(ordeasc);
console.log(ordenaPokemones(POKEMON));
//document.querySelector('#BotonBuscar').innerHTML = ordenaPokemones(POKEMON);

// import { misPokemones } from './data.js';
// document.querySelector('#pokemons').innerHTML = misPokemones(POKEMON);

// import { buscaPokemones } from './data.js';

const botonBusca=document.getElementById('botonBuscar');

// botonBusca.addEventListener('click', () => {
//      const buscarPokemon=document.getElementById('buscar');
//      // document.querySelector("#buscar").value=buscaPokemones(POKEMON,buscarPokemon);
//      const bPokemones=POKEMON.find(function(name) {
//         return name === buscarPokemon;
//         document.getElementById('buscar').value=bPokemones;
//        });
    //console.log(bPokemones);
    //document.getElementById('buscar').value=bPokemones;
//});

/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/
