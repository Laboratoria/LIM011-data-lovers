/* Manejo de data */

// esta es una función de ejemplo

export const example = () => {
return 'example';
};

export const mostrarTodosPersonajes = (dataPotter) => {
  let templatePotter = '';
  dataPotter.map(extrae =>{
    templatePotter += `
          <div>
            <div id= "${extrae.name}" name = "potter">
              <img class="imagen" src= "${extrae.image}"/>
            </div>
            <p>${extrae.name}</p>
            <p>${extrae.house}</p>
          </div>`;
  });
  return templatePotter;
};
