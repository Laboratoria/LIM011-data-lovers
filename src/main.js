import POKEMON from './data/pokemon/pokemon.js';
import { pintado, porTipo, porDebilidades, traerPokemonesPorCantidadDeCaramelos, ascendente } from './data.js';

/* Para mostrar el menu caramelos */
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

/* para mostrar todos los pokemones */
document.querySelector('#pintame').innerHTML = pintado(POKEMON);

/* para mostrar los pokemones por tipo */
const selecte1 = document.querySelector('#select-type');
selecte1.addEventListener('change', () => {
  const pintame = document.getElementById('pintame');
  pintame.classList.add('hide');
  document.querySelector('#resultado').innerHTML = porTipo(POKEMON, selecte1.value);
});

/* para mostrar los pokemones por debilidades */
const selecte = document.querySelector('#select-weaknesses');
selecte.addEventListener('change', () => {
  const pintame = document.getElementById('pintame');
  pintame.classList.add('hide');
  document.querySelector('#resultado').innerHTML = porDebilidades(POKEMON, selecte.value);
});

/* para mostrar opcion ordenar de la A-Z y Z-A */
const orden = document.querySelector('#ordenar');
orden.addEventListener('change', (event) => {
  const pintame = document.getElementById('pintame');
  pintame.classList.add('hide');
  if (event.target.value === '0') {
    resultado.innerHTML = pintado(ascendente(POKEMON));
  } else {
    resultado.innerHTML = pintado(ascendente(POKEMON).reverse());
  }
});

/* para ocultar y mostrar paginas o vistas */
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
