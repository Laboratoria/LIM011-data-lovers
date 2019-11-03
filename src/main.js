import POKEMON from './data/pokemon/pokemon.js';
import { pintado, tipoPlanta, tipoAgua, tipoBicho, tipoElectrico, tipoFantasma, tipoFuego } from './data.js';

const todos = document.querySelector('#todos');
todos.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = pintado(POKEMON, todos.value);
});
const Grass = document.querySelector('#Grass');
Grass.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = tipoPlanta(POKEMON, Grass.value);
});
const Water = document.querySelector('#Water');
Water.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = tipoAgua(POKEMON, Water.value);
});
const Bug = document.querySelector('#Bug');
Bug.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = tipoBicho(POKEMON, Bug.value);
});
const Electric = document.querySelector('#Electric');
Electric.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = tipoElectrico(POKEMON, Electric.value);
});
const Ghost = document.querySelector('#Ghost');
Ghost.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = tipoFantasma(POKEMON, Ghost.value);
});
const Fire = document.querySelector('#Fire');
Fire.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = tipoFuego(POKEMON, Fire.value);
});
const bienvenida = document.getElementById('bienvenida');
const boton1 = document.getElementById('boton1');
const pagina2 = document.getElementById('pagina2');
boton1.addEventListener('click', () => {
  bienvenida.classList.add('hide');
  pagina2.classList.remove('hide');
});
const atras = document.getElementById('atras');
atras.addEventListener('click', () => {
  bienvenida.classList.remove('hide');
  pagina2.classList.add('hide');
});

console.log(POKEMON);
/* TRAEMOS TODO LO QUE ESTÁ EN LA DATA CON LA VARIABLE */ /* eslint-disable import/first */


/* document.querySelector('#pintame').innerHTML = pintado(POKEMON); */
