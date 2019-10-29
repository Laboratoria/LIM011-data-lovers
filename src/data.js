export const example = () =>{
  return 'example';
};
export const mostrarPersonajes = (dataPorCasa) => {
  let templatePotter = '';
  dataPorCasa.map(extrae => {
    templatePotter += `
            <div id="imagenes">
              <img class="imagen" src= "${extrae.image}"/>
              <p>${extrae.name}</p>
            </div>`;
  });
  return templatePotter;
};
