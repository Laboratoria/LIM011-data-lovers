const bienvenida = document.getElementById('bienvenida');
const pintame = document.getElementById('pintame');
const boton1 = document.getElementById('boton1');


boton1.addEventListener('click', () => {
  bienvenida.classList.add('hide');
  pintame.classList.remove('hide');
});

import POKEMON from './data/pokemon/pokemon.js';

console.log(POKEMON);
/* TRAEMOS TODO LO QUE ESTÁ EN LA DATA CON LA VARIABLE */ /* eslint-disable import/first */
import { pintado } from './data.js';

document.querySelector('#pintame').innerHTML = pintado(POKEMON);


// let misPokemones = '';
// POKEMON.forEach((pintar) => {
//   misPokemones += `
//         <div class = "contenedor">
//         <img src ="${pintar.img}"/>
//         <p><b>${pintar.id} ${pintar.name}</b></p>
//         <p>Altura: ${pintar.height}</p>
//         <p>Peso: ${pintar.weight}</p>
//         <p>Caramelos: ${pintar.candy_count}</p>
//         <p>Tiempo de Aparición: <br>${pintar.spawn_time}</p>
//         <p>Debilidades:<br>${pintar.weaknesses}</p>
//         </div>
//         `;
//   document.querySelector('#pintame').innerHTML = misPokemones;
// });
/*
const steel = document.getElementById('steel'); 
steel.addEventListener('clic', () => {

const filtroSteel = POKEMON.filter(type => {


document.querySelector('#steel').innerHTML = filtroSteel;
}); */
