// import POKEMON from './data/pokemon/pokemon.js'
// import LoL from './data/lol/lol.js'
import POTTER from "./data/potter/potter.js";
// console.log(POTTER);

import { mostrarCaracteristicasPotter, filtroPorRoles, filtroPorCasas, filtroPorGenero } from "./data.js";


const miArrImagenes = document.getElementById("arrPotter");
const cajaRoles = document.querySelector('#roles');
const cajaCasas = document.querySelector('#casas');
const cajaGenero = document.querySelector('#genero');


const pintarEnPantalla = (POTTER, cajaImagenes) => {
  let string = "";
  POTTER.forEach((obj)=> {
    string += ` <div class="flip-card">
    <div class="flip-card-inner">
      <div class="container">
        <img class="mi-imagen" src="${obj.image}"/>
        <button id="btn-caracteristicas" class="name">${obj.name}</button>
      </div>
      <div class="anverso">
        <div class="box">
          <p><strong>Especie:</strong> ${obj.species}</p>
          <p><strong>Género:</strong> ${obj.gender}</p>
          <p><strong>Casa:</strong> ${obj.house}</p>
          <p><strong>Ansestro:</strong> ${obj.ancestry}</p>
          <p><strong>Varita:</strong> <img src="../src/image/wand.png" alt=""><br>
          <strong>Madera:</strong> ${obj.wand.wood}<br>
          <strong>Núcleo:</strong> ${obj.wand.core}<br>
          <strong>Longitud:</strong>${obj.wand.length}</p>
          <p><strong>Patronus:</strong> ${obj.patronus}</p>
          <p><strong>Actor:</strong> ${obj.actor}</p>
          <p><strong>Vivo</strong>: ${obj.alive}</p>
        </div>
      </div>
    </div>
  </div>`
  });
  cajaImagenes.innerHTML = string;
}
pintarEnPantalla(POTTER, miArrImagenes);


cajaRoles.addEventListener('click', (event) => {
  // console.log(event.target.id)
  const rolCapturado =  event.target.id;
  // console.log(filtroPorRoles(rolCapturado, POTTER));
  pintarEnPantalla(filtroPorRoles(rolCapturado, POTTER), miArrImagenes);
})

cajaCasas.addEventListener('click', (event) => {
  const casaCapturada = event.target.id;
  pintarEnPantalla(filtroPorCasas(casaCapturada, POTTER), miArrImagenes);
})

cajaGenero.addEventListener('click', (event) => {
  const generoCapturada = event.target.id;
  pintarEnPantalla(filtroPorGenero(generoCapturada, POTTER), miArrImagenes);
})


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
