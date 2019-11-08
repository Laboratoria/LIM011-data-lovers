// eslint-disable-next-line import/extensions
import POKEMON from './data/pokemon/pokemon.js';

// eslint-disable-next-line import/extensions
import { showPokemon, showNamePicturePokemon, showNamePokemon, filtroTipoPokemon } from './data.js';

const contenedorPokemon = document.getElementById('muestrapokemon').innerHTML = showPokemon(POKEMON);

console.log(filtroTipoPokemon(POKEMON, 'Electric'));

//console.log(showNamePicturePokemon(POKEMON));
// Botones funcionalidad de pantallas

const botonDescubrir = document.getElementById('btn-calculate');
const botonLimpiarCaramelos = document.getElementById('btn-limpiar-caramelos');

botonDescubrir.addEventListener('click', () => {
    document.getElementById('caramelo-muestra-pokemon').innerHTML = showNamePicturePokemon(POKEMON);
    pantallaPokemonCaramelo.style.display = 'block';
});

botonLimpiarCaramelos.addEventListener('click', () => {
    document.getElementById('caramelo-muestra-pokemon').innerHTML = '';
    pantallaPokemonCaramelo.style.display = 'none';
});

const pantallaCaramelos = document.getElementById('pantallacaramelos');
const botonMostrarCaramelos = document.getElementById('boton-pantalla-caramelos');
botonMostrarCaramelos.addEventListener('click', () => {
    pantallaCaramelos.style.display = 'block';
    pantallaFiltroPokemon.style.display = 'none';
});

const pantallaFiltroPokemon = document.getElementById('selector-filtro-wrap');
const mostrarPantallaFiltro = document.getElementById('boton-pantalla-filtrotipo');

mostrarPantallaFiltro.addEventListener('click', () => {
    pantallaFiltroPokemon.style.display = 'block';
    pantallaCaramelos.style.display = 'none';
});
