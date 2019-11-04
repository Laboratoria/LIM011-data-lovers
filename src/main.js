// import POKEMON from './data/pokemon/pokemon.js'
// import LoL from './data/lol/lol.js'
import POTTER from "./data/potter/potter.js";
// console.log(POTTER);

import { mostrarCaracteristicasPotter, probando } from "./data.js";


const miArrImagenes = document.getElementById("arrPotter");
let pintaImagen = "";
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

// let casas = {
//   casa1: 'Gryffindor',
//   cas2: 'Slythering',
//   casa3: 'Hufflepuff',
//   casa4: 'Revenclaw'
// }

// let students = filtrar(POTTER, 'hogwartsStudent');
// let profesores = filtrar(POTTER, 'hogwartsStaff');

// console.log(students);
// console.log(profesores);

let prueba = probando(POTTER);
console.log(prueba);




// const ocupacion = (POTTER => {
//   let mostrando = '';
//   POTTER.forEach(rol  =>{
  
//   })
// })


// const filtraPorOcupacion = POTTER.filter (ocupacion => {
   
// })

 




// for
// const miFunsión = (datitos) => {
//   let = guardameee = '';
//   for()

// }

/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
 */
