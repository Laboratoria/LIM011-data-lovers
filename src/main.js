import POKEMON from './data/pokemon/pokemon.js';
import { pintado, porTipo, porDebilidades, needCandy } from './data.js';

document.querySelector('#pintame').innerHTML = pintado(POKEMON);

const selecte1 = document.querySelector('#select-type');
selecte1.addEventListener('change', () => {
  const pintame = document.getElementById('pintame');
  pintame.classList.add('hide');
  document.querySelector('#resultado').innerHTML = porTipo(POKEMON, selecte1.value);
});
const all = document.querySelector('#all');
all.addEventListener('change', () => {
  document.querySelector('#resultado').innerHTML = pintado(POKEMON);
});
const selecte = document.querySelector('#select-weaknesses');
selecte.addEventListener('change', () => {
  const pintame = document.getElementById('pintame');
  pintame.classList.add('hide');
  document.querySelector('#resultado').innerHTML = porDebilidades(POKEMON, selecte.value);
});
const selecte2 = document.querySelector('#select-candy');
selecte2.addEventListener('change', () => {
  const pintame = document.getElementById('pintame');
  pintame.classList.add('hide');
  document.querySelector('#resultado').innerHTML = needCandy(POKEMON, selecte2.value);
});
const bienvenida = document.getElementById('bienvenida');
const boton1 = document.getElementById('boton1');
const pagina2 = document.getElementById('pagina2');
const pintame = document.getElementById('pintame');
boton1.addEventListener('click', () => {
  bienvenida.classList.add('hide');
  pagina2.classList.remove('hide');
  pintame.classList.remove('hide');
});
const atras = document.getElementById('atras');
atras.addEventListener('click', () => {
  bienvenida.classList.remove('hide');
  pagina2.classList.add('hide');
});

console.log(POKEMON);
/* TRAEMOS TODO LO QUE ESTÁ EN LA DATA CON LA VARIABLE */ /* eslint-disable import/first */


/* document.querySelector('#pintame').innerHTML = pintado(POKEMON); */
