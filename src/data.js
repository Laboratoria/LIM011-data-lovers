export const pintarPersonajes = (datos) => {
  let pintaImagen = '';
  datos.forEach(pintar => {
    console.log(pintar)
    pintaImagen += `
    <div class = "container">
    <img class="mi-imagen" src = "${pintar.image}"/>
    <p> ${pintar.name} </p>
    </div>
     `;
  });
  return pintaImagen;
};


//   arrPotter.forEach((pintar) => { 
//     imagenes.innerHTML += `
//     <div class = "pintando">
//     <img src = "${pintar.image}">
//     <p>${pintar.name} ${pintar.wand.wood.core} ${pintar.patronus}</p>
//     </div>
//     `;
//     return imagenes;
//   });

// pintarPersonajes(arrPotter);

// /* Manejo de data */

// esta es una función de ejemplo

// export const example = () => {
//   return 'example';
// };
