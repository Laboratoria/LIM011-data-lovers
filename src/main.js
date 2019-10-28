import POKEMON from './data/pokemon/pokemon.js';
import { mostrarPokemon } from './data.js';

const pintandoPokemon = document.getElementById('pintame');
  let misPokemones = '';
    POKEMON.forEach(pintar =>{
        misPokemones += `
        <div class = "contenedor">
        <img src ="${pintar.img}"/>
        <p>${pintar.id}</p>
        <p>${pintar.name}</p>
        </div>
        `;
  pintandoPokemon.innerHTML = misPokemones;
})

console.log(POKEMON);
