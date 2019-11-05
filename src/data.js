// Ordenado por alfabeto, juntar con el inner.HTML
export const ordenado = ((data) => data.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  return -1;
}));

export const filtrado = (data, opcionSeleccionada) => {
  return data.filter((g) => (g.house === opcionSeleccionada));
};


// export const mostrarPersonajes = (data) => {
//   data.forEach(extraer => (extraer.name, extraer.img))
//   return data.name, data.house, data.image 
// }
// export const mostrar = (data) => {
//   data.forEach(element => {
//   console.log(element.name, element.image);
//   // return element.name, element.image
//  });
// }

export const mostrarPersonajes = (dataPorCasa) => {
  let templatePotter = '';
  dataPorCasa.forEach((extrae) => {
    templatePotter += `<div id="imagenes" class="casas-card">
              <img class="imagen" src= "${extrae.image}"/>
              <p>${extrae.name}</p>
            </div>`;
  });
  return templatePotter;
};
