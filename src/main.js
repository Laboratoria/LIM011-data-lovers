import POTTER from './data/potter/potter.js';
import {
  filtroPorRoles,
  filtroPorCasas, filtroPorGenero, ordenarAscendente, buscador,
// eslint-disable-next-line import/extensions
} from './data.js';

const cajaImagenes = document.getElementById('arrPotter');
const cajaRoles = document.querySelector('#roles');
const cajaCasas = document.querySelector('#casas');
const cajaGenero = document.querySelector('#genero');
const btnBienvenida = document.querySelector('#btn-bienvenida');
const portada = document.querySelector('#vista-uno');
const headerView = document.querySelector('#nav');
const ordenando = document.querySelector('#ordenar');
// const cajaAscendente = document.querySelector('#ascendente');
// const cajaDescendente = document.querySelector('#descendente');


const generarTemplateString = (data) => {
  let templateString = '';
  data.forEach((obj) => {
    templateString += `
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
  return templateString;
};

cajaImagenes.innerHTML = generarTemplateString(POTTER);

cajaRoles.addEventListener('click', (event) => {
  const rolCapturado = event.target.id;
  cajaImagenes.innerHTML = generarTemplateString(filtroPorRoles(rolCapturado, POTTER));
});

cajaCasas.addEventListener('click', (event) => {
  const casaCapturada = event.target.id;
  cajaImagenes.innerHTML = generarTemplateString(filtroPorCasas(casaCapturada, POTTER));
});

cajaGenero.addEventListener('click', (event) => {
  const generoCapturada = event.target.id;
  cajaImagenes.innerHTML = generarTemplateString(filtroPorGenero(generoCapturada, POTTER));
});

btnBienvenida.addEventListener('click', () => {
  portada.classList.add('hide');
  headerView.classList.remove('hide');
  cajaImagenes.classList.remove('hide');
});
// BUSCADOR
const porNombre = document.getElementById('buscarData');
porNombre.addEventListener('input', (event) => {
  cajaImagenes.innerHTML = generarTemplateString(buscador(POTTER, event.target.value));
  console.log(event.target.value);
});

ordenando.addEventListener('click', (event) => {
  // event.target.id;
  // console.log(event.target.id);
  // miArrImagenes.innerHTML = generarTemplateString(ordenarAscendente(ordenarCaptura, POER));
  if (event.target.id === 'a') {
    cajaImagenes.innerHTML = generarTemplateString(ordenarAscendente(POTTER));
  } else {
    cajaImagenes.innerHTML = generarTemplateString(ordenarAscendente(POTTER).reverse());
  }
});
