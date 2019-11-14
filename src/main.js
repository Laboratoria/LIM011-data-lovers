/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable no-console */

// Importar datos de pokemon.js
import POKEMON from './data/pokemon/pokemon.js';

// Importar datos de data.js
import {
  filtrarPokemon, ordenarPokemon, top10, filtrarEgg, buscarPokemon, ordenarDescPokemon,
} from './data.js';

// Agregar elementos a la clase hide para que esten ocultos
document.querySelector('#filtros-pokemon').classList.add('hide');

// Mostrar todos los pokemon
const datosPokemon = (datos) => {
  datos.forEach((poke) => {
    // Creando la vista adelante del Pokemon(numero, nombre e imagen)
    const caja = document.createElement('div');
    caja.setAttribute('id', 'caja');
    const tarjetaPrincipalPokemon = document.createElement('div');
    tarjetaPrincipalPokemon.setAttribute('id', 'tarjeta-principal-pokemon');
    const tarjetaDatosPokemon = document.createElement('div');
    tarjetaDatosPokemon.setAttribute('id', 'tarjeta-datos-pokemon');
    const divNumeroPokemon = document.createElement('h4');
    const numeroPokemon = document.createTextNode(poke.num);
    divNumeroPokemon.appendChild(numeroPokemon);
    const divNombrePokemon = document.createElement('div');
    divNombrePokemon.setAttribute('id', 'nombre-Pokemon');
    const nombrePokemon = document.createTextNode(poke.name);
    divNombrePokemon.appendChild(nombrePokemon);
    const imagenPokemon = document.createElement('img');
    imagenPokemon.setAttribute('src', poke.img);
    tarjetaDatosPokemon.appendChild(imagenPokemon);
    tarjetaDatosPokemon.appendChild(divNombrePokemon);
    tarjetaDatosPokemon.appendChild(divNumeroPokemon);

    // Creando la vista atras del Pokemon(caracteristicas)
    const tarjetaCaracteristicasPokemon = document.createElement('div');
    tarjetaCaracteristicasPokemon.setAttribute('id', 'tarjeta-caracteristicas-pokemon');
    const etiquetaNombrePokemon = document.createElement('h2');
    const nombrePokemonAtras = document.createTextNode(poke.name);
    etiquetaNombrePokemon.appendChild(nombrePokemonAtras);
    tarjetaCaracteristicasPokemon.appendChild(etiquetaNombrePokemon);
    const parrafoCaracteristicasPokemon = document.createElement('p');
    const arrayCaracteristicas = [`Tipo: ${poke.type}`, `Debilidades: ${poke.weaknesses}`, `Peso: ${poke.weight}`, `Tamaño: ${poke.height}`, `Km: ${poke.egg}`];
    for (let a = 0; a < arrayCaracteristicas.length; a += 1) {
      const saltoLinea = document.createElement('br');
      const caracteristica = document.createTextNode(arrayCaracteristicas[a]);
      parrafoCaracteristicasPokemon.appendChild(saltoLinea);
      parrafoCaracteristicasPokemon.appendChild(caracteristica);
    }
    tarjetaCaracteristicasPokemon.appendChild(parrafoCaracteristicasPokemon);

    // Creando div contenedores
    tarjetaPrincipalPokemon.appendChild(tarjetaDatosPokemon);
    tarjetaPrincipalPokemon.appendChild(tarjetaCaracteristicasPokemon);
    caja.appendChild(tarjetaPrincipalPokemon);
    const contenedorPokemon = document.querySelector('#contenedor-pokemon');
    contenedorPokemon.appendChild(caja);
  });
  return datosPokemon;
};

datosPokemon(POKEMON);

// Crear la barra de navegación
document.querySelector('#resumen').addEventListener('click', () => {
  document.querySelector('#barra-navegar').classList.toggle('active');
});

// POKEBOLA sección donde se muestra los 151 pokemon
document.querySelector('#menu-pokebola').addEventListener('click', () => {
  document.querySelector('#contenedor-pokemon').innerHTML = '';
  document.querySelector('#filtros-pokemon').classList.add('hide');
  document.querySelector('#ordenar-pokemon').classList.remove('hide');
  document.querySelector('#filtrar-tipo-pokemon').selectedIndex = 0;
  document.querySelector('#filtrar-debilidad-pokemon').selectedIndex = 0;
  document.querySelector('#filtrar-km-pokemon').selectedIndex = 0;
  datosPokemon(POKEMON);
});

// ORDENAR sección donde estan las opciones de orden.
document.querySelector('#AZ').addEventListener('click', () => {
  document.querySelector('#contenedor-pokemon').innerHTML = '';
  datosPokemon(ordenarPokemon(POKEMON, 'name', 'asc'));
});

document.querySelector('#ZA').addEventListener('click', () => {
  document.querySelector('#contenedor-pokemon').innerHTML = '';
  datosPokemon(ordenarDescPokemon(POKEMON, 'name'));
});

document.querySelector('#asc').addEventListener('click', () => {
  document.querySelector('#contenedor-pokemon').innerHTML = '';
  datosPokemon(ordenarPokemon(POKEMON, 'id'));
});

document.querySelector('#desc').addEventListener('click', () => {
  document.querySelector('#contenedor-pokemon').innerHTML = '';
  datosPokemon(ordenarDescPokemon(POKEMON, 'id'));
});

// FILTRO seccion donde estan los filtros.
document.querySelector('#menu-filtro').addEventListener('click', () => {
  document.querySelector('#contenedor-pokemon').innerHTML = '';
  document.querySelector('#filtros-pokemon').classList.remove('hide');
  document.querySelector('#ordenar-pokemon').classList.add('hide');
  datosPokemon(POKEMON);
});

document.querySelector('#filtrar-tipo-pokemon').addEventListener('change', () => {
  document.querySelector('#contenedor-pokemon').innerHTML = '';
  const seleccioneTipoPokemon = document.querySelector('#filtrar-tipo-pokemon').value;
  datosPokemon(filtrarPokemon(POKEMON, 'type', seleccioneTipoPokemon));
});

document.querySelector('#filtrar-debilidad-pokemon').addEventListener('change', () => {
  document.querySelector('#contenedor-pokemon').innerHTML = '';
  const seleccioneDebilidadPokemon = document.querySelector('#filtrar-debilidad-pokemon').value;
  datosPokemon(filtrarPokemon(POKEMON, 'weaknesses', seleccioneDebilidadPokemon));
});

document.querySelector('#filtrar-km-pokemon').addEventListener('change', () => {
  document.querySelector('#contenedor-pokemon').innerHTML = '';
  const seleccioneKmPokemon = document.querySelector('#filtrar-km-pokemon').value;
  datosPokemon(filtrarEgg(POKEMON, seleccioneKmPokemon));
});

// TOP 10 seccion donde se muestra los pokemon con mayor aparicion
document.querySelector('#menu-top10').addEventListener('click', () => {
  document.querySelector('#contenedor-pokemon').innerHTML = '';
  document.querySelector('#filtros-pokemon').classList.add('hide');
  document.querySelector('#ordenar-pokemon').classList.add('hide');
  const mostrarTop10 = (datos) => {
    let indice = 0;
    datos.forEach((poke) => {
      indice += 1;
      const tarjetaTop10 = document.createElement('div');
      tarjetaTop10.setAttribute('id', 'tarjeta-top10');
      const divTopNombre = document.createElement('h3');
      divTopNombre.setAttribute('id', 'top-nombre');
      const nombrePokemon = document.createTextNode(`${poke.name} / ${indice}°`);
      divTopNombre.appendChild(nombrePokemon);
      const imagenPokemon = document.createElement('img');
      imagenPokemon.setAttribute('src', poke.img);
      const parrafoCaracteristicasPokemon = document.createElement('div');
      parrafoCaracteristicasPokemon.appendChild(divTopNombre);
      const caracteristicasTop = [`Oportunidad de Aparicion: ${poke.spawn_chance}`, `Promedio de aparicion: ${poke.avg_spawns}`, `Hora de Aparicion: ${poke.spawn_time}`];
      for (let a = 0; a < caracteristicasTop.length; a += 1) {
        const saltoLinea = document.createElement('br');
        const caracteristica = document.createTextNode(caracteristicasTop[a]);
        parrafoCaracteristicasPokemon.appendChild(saltoLinea);
        parrafoCaracteristicasPokemon.appendChild(caracteristica);
      }
      tarjetaTop10.appendChild(imagenPokemon);
      tarjetaTop10.appendChild(parrafoCaracteristicasPokemon);
      const contenedorPokemon = document.querySelector('#contenedor-pokemon');
      contenedorPokemon.appendChild(tarjetaTop10);
      datosPokemon(filtrarPokemon(POKEMON, 'candy', poke.candy));
    });
  };
  return mostrarTop10(top10(POKEMON, 10));
});

// BUSCADOR.
document.querySelector('#buscar-pokemon').addEventListener('input', () => {
  document.querySelector('#contenedor-pokemon').innerHTML = '';
  datosPokemon(buscarPokemon(POKEMON, document.querySelector('#buscar-pokemon').value));
});
