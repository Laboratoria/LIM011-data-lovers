// import pokemon from "./data/pokemon/pokemon"

/* Manejo de data */

// esta es una función de ejemplo

/* export const datosPokemon = (datos) => {
  datos.map((listado) => {
    const newDiv = document.createElement('div');
    const newDiv2 = document.createElement('div');
    const imagen = document.createElement('img');
    imagen.setAttribute('src', listado.img);
    const newContent = document.createTextNode(listado.num + ' ' + listado.name);
    newDiv2.appendChild(newContent); // añade texto al div creado.
    newDiv.appendChild(newDiv2);
    newDiv.appendChild(imagen);// añade la imagen al div creado
    document.body.appendChild(newDiv);// añade los div y su contenido a la pagina
  });
  return datosPokemon;
}; */

export const mostrarListaPokemon = (dataPoke) => {
  const pokedex = dataPoke.map((data) => ({ num: data.num, img: data.img, name: data.name }));
  // eslint-disable-next-line no-console
  console.log(pokedex);
};

// eslint-disable-next-line no-console
console.log(pokedex);
