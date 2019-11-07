import POKEMON from './data/pokemon/pokemon.js';
import { pintado, porTipo, porDebilidades, traerPokemonesPorCantidadDeCaramelos } from './data.js';

const resultado = document.getElementById('resultado');
const pintaCaramelos = (dataPokemon) => {
  let misPokemones = '';
  dataPokemon.forEach((pintar) => {
    misPokemones += `
        <div class = "contenedor">
        <img src ="${pintar.img}"/>
        <p><b>${pintar.num} ${pintar.name}</b></p>
        <p><b>Necesitan ${pintar.candy_count} caramelos</b></p>
        <p>Altura: ${pintar.height}</p>
        <p>Peso: ${pintar.weight}</p>
        <p>Tiempo de Aparición: <br>${pintar.spawn_time}</p>
        <br>
        <br>
        <br>
        <br>
        </div>
        `;
  });
  resultado.innerHTML = misPokemones;
};
const selectCandy = document.getElementById('select-candy');
selectCandy.addEventListener('change', () => {
  const pintame = document.getElementById('pintame');
  pintame.classList.add('hide');
  const selecte = selectCandy.value;
  pintaCaramelos(traerPokemonesPorCantidadDeCaramelos(POKEMON, selecte, 'candy_count'));
});

document.querySelector('#pintame').innerHTML = pintado(POKEMON);

const selecte1 = document.querySelector('#select-type');
selecte1.addEventListener('change', () => {
  const pintame = document.getElementById('pintame');
  pintame.classList.add('hide');
  document.querySelector('#resultado').innerHTML = porTipo(POKEMON, selecte1.value);
});
const selecte = document.querySelector('#select-weaknesses');
selecte.addEventListener('change', () => {
  const pintame = document.getElementById('pintame');
  pintame.classList.add('hide');
  document.querySelector('#resultado').innerHTML = porDebilidades(POKEMON, selecte.value);
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
