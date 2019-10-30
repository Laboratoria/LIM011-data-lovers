
import POKEMON from './data/pokemon/pokemon.js';
const pokemons=document.getElementById('pokemons');

import { pintaPokemones, pokemonAsc, pokemonDesc } from './data.js';
document.querySelector('#pokemons').innerHTML = pintaPokemones(POKEMON);

const abc=document.getElementById('abc');
const cba=document.getElementById('cba');

const ascendente=document.getElementById("orAsc");
ascendente.addEventListener ('click', () => {
    let asc= document.querySelector('input[name="ordena"]:checked');
    const ordeAsc=pokemonAsc(POKEMON);
    //pokemons.classList.add('hide');
    //Aqui exactamente es donde paso el array ordenado para que muestre el arreglo ordenado
    document.querySelector('#abc').innerHTML = pintaPokemones(ordeAsc);
    console.log(pokemonAsc(POKEMON)); 
});
const descendente=document.getElementById("orDesc");
descendente.addEventListener ('click', () => {
    let asc= document.querySelector('input[name="ordena"]:checked');
    const ordeDesc=pokemonDesc(POKEMON)
    document.querySelector('#cba').innerHTML = pintaPokemones(ordeDesc);
    console.log(pokemonDesc(POKEMON));
});
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
