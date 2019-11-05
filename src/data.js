// Ordenado por alfabeto, juntar con el inner.HTML
export const ordenado = (data) => {
  return data.sort((a,b) => {
    if (a.name > b.name) {
      return 1;
    }
      return -1;
  });
} 

export const filtrado =(data, opcionSeleccionada) =>{
  switch(opcionSeleccionada){
  case 'G':
      return data.filter(g => (g.house === 'Gryffindor'));
  case 'H':
      return data.filter(h => (h.house === 'Hufflepuff'));
  case 'R':
      return data.filter(r => (r.house === 'Ravenclaw'));
  case 'S':
      return data.filter(s => (s.house === 'Slytherin'));
  }
}


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
  dataPorCasa.map(extrae => {
    templatePotter +=`<div id="imagenes" class="casas-card">
              <img class="imagen" src= "${extrae.image}"/>
              <p>${extrae.name}</p>
            </div>`;
  });
  return templatePotter;
};

