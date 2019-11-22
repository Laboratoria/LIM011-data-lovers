/* eslint-disable max-len */
/* eslint-disable no-console */

// Importar datos de pokemon.js
import POKEMON from './data/pokemon/pokemon.js';

// IMPORTAR DATOS DEL DATA.JS
import {
  filtrarPokemon, ordenarPokemon, top10, filtrarEgg, buscarPokemon, ordenarDescPokemon,
} from './data.js';

// OCULTAR ELEMENTOS
document.querySelector('#filtros-pokemon').classList.add('hide');

// MOSTRAR LOS 151 POKEMON
const datosPokemon = (datos) => {
  datos.forEach((poke) => {
    // CREANDO DATOS PRINCIPALES DEL POKEMON
    const tarjetaPokemon = document.createElement('div');
    tarjetaPokemon.setAttribute('id', 'tarjeta-poke');
    const numPoke = document.createElement('h4');
    numPoke.innerHTML = poke.num;
    const namePoke = document.createElement('div');
    namePoke.setAttribute('id', 'nombre-Pokemon');
    namePoke.innerHTML = poke.name;
    const imagenPokemon = document.createElement('img');
    imagenPokemon.setAttribute('src', poke.img);
    tarjetaPokemon.appendChild(imagenPokemon);
    tarjetaPokemon.appendChild(namePoke);
    tarjetaPokemon.appendChild(numPoke);
    const contenedorPokemon = document.querySelector('#contenedor-pokemon');
    contenedorPokemon.appendChild(tarjetaPokemon);

    // EVENTO CLICK PARA CADA POKEMON
    tarjetaPokemon.addEventListener('click', () => {
      const modalPoke = document.createElement('div');
      modalPoke.classList.add('modal');
      const flexPoke = document.createElement('div');
      flexPoke.classList.add('flex');
      const tarjetaModal = document.createElement('div');
      tarjetaModal.setAttribute('id', 'tarjeta-modal');

      // CREANDO LAS CARACTERISTICAS DEL POKEMON
      const imgPoke = document.createElement('img');
      imgPoke.setAttribute('src', poke.img);
      imgPoke.classList.add('img-poke');
      const namePokeModal = document.createElement('h2');
      namePokeModal.innerHTML = poke.name;
      const allPoke = document.createElement('div');
      allPoke.appendChild(namePokeModal);
      allPoke.classList.add('all-poke');
      const arrayCaracteristicas = [`Tipo: ${poke.type}`, `Debilidades: ${poke.weaknesses}`, `Peso: ${poke.weight}`, `Tamaño: ${poke.height}`, `Km: ${poke.egg}`];
      for (let a = 0; a < arrayCaracteristicas.length; a += 1) {
        const saltoLinea = document.createElement('br');
        const caracteristica = document.createTextNode(arrayCaracteristicas[a]);
        allPoke.appendChild(saltoLinea);
        allPoke.appendChild(caracteristica);
      }

      // CREANDO LAS EVOLUCIONES DE CADA POKEMON
      const btnEvoluciones = document.createElement('button');
      btnEvoluciones.classList.add('btn-evoluciones');
      btnEvoluciones.innerHTML = 'VER EVOLUCIONES';
      const EvolucionTotal = document.createElement('div');
      EvolucionTotal.classList.add('evolucion-total');
      btnEvoluciones.addEventListener('click', () => {
        const evolucion = filtrarPokemon(POKEMON, 'candy', poke.candy);
        if (poke.candy === 'None') {
          const divEvolucion = document.createElement('div');
          divEvolucion.classList.add('div-evolucion');
          divEvolucion.innerHTML = 'No tiene evoluciones';
          tarjetaModal.appendChild(divEvolucion);
          btnEvoluciones.classList.add('hide');
        } else {
          for (let i = 0; i < evolucion.length; i += 1) {
            const divEvolucion = document.createElement('div');
            divEvolucion.classList.add('div-evolucion');
            const imgEvolucion = document.createElement('img');
            imgEvolucion.setAttribute('src', evolucion[i].img);
            imgEvolucion.classList.add('img-evolucion');
            const nameEvolucion = document.createElement('div');
            nameEvolucion.innerHTML = evolucion[i].name;
            const caramelos = document.createElement('div');
            caramelos.classList.add('caramelos');
            caramelos.innerHTML = evolucion[i].candy_count;
            tarjetaModal.appendChild(EvolucionTotal);
            divEvolucion.appendChild(imgEvolucion);
            divEvolucion.appendChild(nameEvolucion);
            EvolucionTotal.appendChild(divEvolucion);
            EvolucionTotal.appendChild(caramelos);
            if (i === evolucion.length - 1) {
              EvolucionTotal.removeChild(caramelos);
            }
            btnEvoluciones.classList.add('hide');
          }
        }
      });

      // SALIR DEL MODAL
      window.addEventListener('click', (close) => {
        if (close.target === flexPoke) {
          document.body.removeChild(modalPoke);
        }
      });

      // ASIGNANDO NODOS
      tarjetaModal.appendChild(imgPoke);
      tarjetaModal.appendChild(allPoke);
      tarjetaModal.appendChild(btnEvoluciones);
      modalPoke.appendChild(flexPoke);
      flexPoke.appendChild(tarjetaModal);
      document.body.appendChild(modalPoke);
    });
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
  document.querySelector('#mensaje').innerHTML = '';
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
  document.querySelector('#mensaje').innerHTML = `Los pokemon tipo ${seleccioneTipoPokemon} son:`;
});

document.querySelector('#filtrar-debilidad-pokemon').addEventListener('change', () => {
  document.querySelector('#contenedor-pokemon').innerHTML = '';
  const seleccioneDebilidadPokemon = document.querySelector('#filtrar-debilidad-pokemon').value;
  datosPokemon(filtrarPokemon(POKEMON, 'weaknesses', seleccioneDebilidadPokemon));
  document.querySelector('#mensaje').innerHTML = `Los pokemon con debilidad ${seleccioneDebilidadPokemon} son:`;
});

document.querySelector('#filtrar-km-pokemon').addEventListener('change', () => {
  document.querySelector('#contenedor-pokemon').innerHTML = '';
  const seleccioneKmPokemon = document.querySelector('#filtrar-km-pokemon').value;
  datosPokemon(filtrarEgg(POKEMON, seleccioneKmPokemon));
  document.querySelector('#mensaje').innerHTML = `Los pokemon con distancia huevo de ${seleccioneKmPokemon} son:`;
});

// TOP 10 seccion donde se muestra los pokemon con mayor aparicion
document.querySelector('#menu-top10').addEventListener('click', () => {
  document.querySelector('#contenedor-pokemon').innerHTML = '';
  document.querySelector('#mensaje').innerHTML = '';
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
      const allPoke = document.createElement('div');
      allPoke.appendChild(divTopNombre);
      const caracteristicasTop = [`Oportunidad de Aparicion: ${poke.spawn_chance}`, `Promedio de aparicion: ${poke.avg_spawns}`, `Hora de Aparicion: ${poke.spawn_time}`];
      for (let a = 0; a < caracteristicasTop.length; a += 1) {
        const saltoLinea = document.createElement('br');
        const caracteristica = document.createTextNode(caracteristicasTop[a]);
        allPoke.appendChild(saltoLinea);
        allPoke.appendChild(caracteristica);
      }
      tarjetaTop10.appendChild(imagenPokemon);
      tarjetaTop10.appendChild(allPoke);
      const contenedorPokemon = document.querySelector('#contenedor-pokemon');
      contenedorPokemon.appendChild(tarjetaTop10);
    });
  };
  return mostrarTop10(top10(POKEMON, 10));
});

// BUSCADOR se busca el pokemon por el nombre.
document.querySelector('#buscar-pokemon').addEventListener('input', () => {
  document.querySelector('#contenedor-pokemon').innerHTML = '';
  datosPokemon(buscarPokemon(POKEMON, document.querySelector('#buscar-pokemon').value));
});
