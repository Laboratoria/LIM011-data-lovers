
  // import POKEMON from './data/pokemon/pokemon.js'
  // import LoL from './data/lol/lol.js'
  import POTTER from './data/potter/potter.js'
  console.log(POTTER);

import { mostrarPersonajesPotter } from './data.js';
import { mostrarCaracteristicasPotter } from './data.js';

const miArrImagenes = document.getElementById('arrPotter');
  let pintaImagen = '';
  POTTER.forEach(pintar => {
    pintaImagen += `
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="container">
          <img class="mi-imagen" src="${pintar.image}"/>
          <button id="btn-caracteristicas" class="name">${pintar.name}</button>
        </div>
        <div class="anverso">
          <div class="box">
            
            <p><strong>Especie:</strong> ${pintar.species}</p>
            <p><strong>Género:</strong> ${pintar.gender}</p>
            <p><strong>Ansestro:</strong> ${pintar.ancestry}</p>
            <p><strong>Varita:</strong> <img src="../src/image/wand.png" alt=""><br>
            <strong>Madera:</strong> ${pintar.wand.wood}<br>
            <strong>Núcleo:</strong> ${pintar.wand.core}<br>
            <strong>Longitud:</strong>${pintar.wand.length}</p>
            <p><strong>Patronus:</strong> ${pintar.patronus}</p>
            <p><strong>Actor:</strong> ${pintar.actor}</p>
            <p><strong>Vivo</strong>: ${pintar.alive}</p>
          </div>
        </div>
      </div>
    </div>
    `;
 miArrImagenes.innerHTML = pintaImagen;
  });

// const pintarCaracteristicas = document.getElementById('atras-contenedor');
//  let mostrarCaracteristicas = '';
//   POTTER.forEach(caracteristicas => {
//   mostrarCaracteristicas += `
//    <div class="container-caracteristicas">
//    <img class="mi-imagen" src = "${caracteristicas.image}" />
//    </div>
//    <p>Especie: ${caracteristicas.species}</p>
//    <p>Género: ${caracteristicas.gender}</p>
//    <p>Ansestro: ${caracteristicas.ancestry}</p>
//    <p>Varita: ${caracteristicas.wand.wood}, ${caracteristicas.wand.core}, ${caracteristicas.wand.length}</p>
//    <p>Patronus: ${caracteristicas.patronus}</p>
//    <p>Actor: ${caracteristicas.actor}</p>
//    <p>Vivo: ${caracteristicas.alive}</p>
//   `;
//   pintarCaracteristicas.innerHTML = mostrarCaracteristicas;
//   })






/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/
