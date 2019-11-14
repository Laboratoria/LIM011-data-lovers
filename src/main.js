// eslint-disable-next-line import/extensions
import POTTER from './data/potter/potter.js';
import {
  filtroPorRoles,
  filtroPorCasas, filtroPorGenero, buscador,
// eslint-disable-next-line import/extensions
} from './data.js';


const miArrImagenes = document.getElementById('arrPotter');
const cajaRoles = document.querySelector('#roles');
const cajaCasas = document.querySelector('#casas');
const cajaGenero = document.querySelector('#genero');
// const cajaOrden = document.querySelector('#orden');
const btnBienvenida = document.querySelector('#btn-bienvenida');
const portada = document.querySelector('#vista-uno');
const headerView = document.querySelector('#nav');


const pintarEnPantalla = (data, cajaImagenes) => {
  let guardaImagenes = '';
  data.forEach((obj) => {
    guardaImagenes += ` 
    <div class="flip-card">
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
  </div>`;
  });
  // eslint-disable-next-line no-param-reassign
  cajaImagenes.innerHTML = guardaImagenes;
};
pintarEnPantalla(POTTER, miArrImagenes);


cajaRoles.addEventListener('click', (event) => {
  // console.log(event.target.id)
  const rolCapturado = event.target.id;
  // console.log(filtroPorRoles(rolCapturado, POTTER));
  pintarEnPantalla(filtroPorRoles(rolCapturado, POTTER), miArrImagenes);
});

cajaCasas.addEventListener('click', (event) => {
  const casaCapturada = event.target.id;
  pintarEnPantalla(filtroPorCasas(casaCapturada, POTTER), miArrImagenes);
});

cajaGenero.addEventListener('click', (event) => {
  const generoCapturada = event.target.id;
  console.log(event.target.id);

  pintarEnPantalla(filtroPorGenero(generoCapturada, POTTER), miArrImagenes);
});

// cajaOrden.addEventListener('click', (event) => {
//   const ordenCapturado = event.target.id
// })

btnBienvenida.addEventListener('click', () => {
  portada.classList.add('hide');
  headerView.classList.remove('hide');
  miArrImagenes.classList.remove('hide');
});

// BUSCADOR
const porNombre = document.querySelector('#buscarData');
porNombre.addEventListener('input', (event) => {
  const potterBuscado = buscador(POTTER, event.target.value.toLowerCase());
  miArrImagenes.innerHTML = pintarEnPantalla(potterBuscado);
});


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
