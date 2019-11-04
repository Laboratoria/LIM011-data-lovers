import POKEMON from './data/pokemon/pokemon.js';
import { pintado, porTipo, porDebilidades } from './data.js';

const todos = document.querySelector('#todos');
todos.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = pintado(POKEMON, todos.value);
});
const Grass = document.querySelector('#Grass');
Grass.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = porTipo(POKEMON, Grass.value);
});
const Water = document.querySelector('#Water');
Water.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = porTipo(POKEMON, Water.value);
});
const Bug = document.querySelector('#Bug');
Bug.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = porTipo(POKEMON, Bug.value);
});
const Electric = document.querySelector('#Electric');
Electric.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = porTipo(POKEMON, Electric.value);
});
const Ghost = document.querySelector('#Ghost');
Ghost.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = porTipo(POKEMON, Ghost.value);
});
const Fire = document.querySelector('#Fire');
Fire.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = porTipo(POKEMON, Fire.value);
});
const Poison = document.querySelector('#Poison');
Poison.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = porTipo(POKEMON, Poison.value);
});
const Flying = document.querySelector('#Flying');
Flying.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = porTipo(POKEMON, Flying.value);
});
const Normal = document.querySelector('#Normal');
Normal.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = porTipo(POKEMON, Normal.value);
});
const Ground = document.querySelector('#Ground');
Ground.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = porTipo(POKEMON, Ground.value);
});
const Fighting = document.querySelector('#Fighting');
Fighting.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = porTipo(POKEMON, Fighting.value);
});
const Psychic = document.querySelector('#Psychic');
Psychic.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = porTipo(POKEMON, Psychic.value);
});
const Rock = document.querySelector('#Rock');
Rock.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = porTipo(POKEMON, Rock.value);
});
const Ice = document.querySelector('#Ice');
Ice.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = porTipo(POKEMON, Ice.value);
});
const Iced = document.querySelector('#Iced');
Iced.addEventListener('click', () => {
  document.querySelector('#resultado').innerHTML = porDebilidades(POKEMON, Ice.value);
});
const Waterd = document.querySelector('.Waterd');
Waterd.addEventListener('change', () => {
  document.querySelector('#resultado').innerHTML = porDebilidades(POKEMON, Water.value);
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
