import POTTER from './data/potter/potter.js';
export const example = () =>{
  return 'example';
};

// Ordenado por alfabeto, juntar con el inner.HTML
export let ordenado = POTTER.sort((a,b) => {
  if (a.name > b.name) {
    return 1;
  }
    return -1;
});

export const mostrarPersonajes = (dataPorCasa) => {
  let templatePotter = '';
  dataPorCasa.map(extrae => {
    templatePotter +=`<div id="imagenes" class="casas-card">
              <img class="imagen" src= "${extrae.image}"/>
              <p>${extrae.name}</p>
            </div>`;
  });
  return templatePotter;
};

