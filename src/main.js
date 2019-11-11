// eslint-disable-next-line import/extensions
import POKEMON from './data/pokemon/pokemon.js';

// eslint-disable-next-line import/extensions
import { showPokemon, showNamePicturePokemon, showNamePokemon, filtroTipoPokemon, filtroAlfabeticoAZ, filtroAlfabeticoZA, ordenNumerico  } from './data.js';

const contenedorPokemon = document.getElementById('muestrapokemon').innerHTML = showPokemon(POKEMON);

console.log(filtroTipoPokemon(POKEMON, 'Electric'));
console.log(filtroAlfabeticoZA(POKEMON));

console.log(ordenNumerico(filtroTipoPokemon(POKEMON, 'Electric')));

// mostrar filtro ordenados AZ-ZA en consola con error pero funciona el filtro
//console.log(showAlfabeto(filtroAlfabeticoZA(filtroTipoPokemon(POKEMON, 'Water'))));
//console.log(showNamePicturePokemon(POKEMON));
// Botones funcionalidad de pantallas

const botonDescubrir = document.getElementById('btn-calculate');
const botonLimpiarCaramelos = document.getElementById('btn-limpiar-caramelos');
const pantallaCaramelos = document.getElementById('pantallacaramelos');
const botonMostrarCaramelos = document.getElementById('boton-pantalla-caramelos');
const pantallaFiltroPokemon = document.getElementById('selector-filtro-wrap');
const mostrarPantallaFiltro = document.getElementById('boton-pantalla-filtrotipo');

botonDescubrir.addEventListener('click', () => {
    document.getElementById('caramelo-muestra-pokemon').innerHTML = showNamePicturePokemon(POKEMON);
    pantallaCaramelos.style.display = 'block';
});

botonLimpiarCaramelos.addEventListener('click', () => {
    document.getElementById('caramelo-muestra-pokemon').innerHTML = '';
    pantallaCaramelos.style.display = 'none';
});


botonMostrarCaramelos.addEventListener('click', () => {
    pantallaCaramelos.style.display = 'block';
    pantallaFiltroPokemon.style.display = 'none';
});


mostrarPantallaFiltro.addEventListener('click', () => {
    pantallaFiltroPokemon.style.display = 'block';
    pantallaCaramelos.style.display = 'none';
});

