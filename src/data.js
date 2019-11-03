
/* eslint-disable import/prefer-default-export */
/* eslint arrow-body-style: ["error", "always"] */
/* Se crea una variable PINTADO y nuestro parametro será dataPokemon
para que el recorrido actúe sobre toda la base */

export const pintado = (dataPokemon) => {
  let misPokemones = '';
  dataPokemon.forEach((pintar) => {
    misPokemones += `
        <div class = "contenedor">
        <img src ="${pintar.img}"/>
        <p><b>${pintar.id} ${pintar.name}</b></p>
        <p>Altura: ${pintar.height}</p>
        <p>Peso: ${pintar.weight}</p>
        <p>Caramelos: ${pintar.candy_count}</p>
        <p>Tiempo de Aparición: <br>${pintar.spawn_time}</p>
        <p>Debilidades:<br>${pintar.weaknesses}</p>
        </div>
        `;
  });
  return misPokemones;
};

export const tipoPlanta = (arr, string) => {
  let acero = [];
  arr.forEach((obj) => {
    obj.type.forEach((strg) => {
      if (string === strg) {
        acero += `
        <div class = "contenedor">
        <img src ="${obj.img}"/>
        <p><b>${obj.num} ${obj.name}</b></p>
        <p>Tipo: ${obj.type}</p>
        </div>`;
      }
    });
  });
  return acero;
};

export const tipoAgua = (arr, string) => {
  let agua = [];
  arr.forEach((obj) => {
    obj.type.forEach((strg) => {
      if (string === strg) {
        agua += `
        <div class = "contenedor">
        <img src ="${obj.img}"/>
        <p><b>${obj.num} ${obj.name}</b></p>
        <p>Tipo: ${obj.type}</p>
        </div>`;
      }
    });
  });
  return agua;
};
export const tipoBicho = (arr, string) => {
  let bicho = [];
  arr.forEach((obj) => {
    obj.type.forEach((strg) => {
      if (string === strg) {
        bicho += `
        <div class = "contenedor">
        <img src ="${obj.img}"/>
        <p><b>${obj.num} ${obj.name}</b></p>
        <p>Tipo: ${obj.type}</p>
        </div>`;
      }
    });
  });
  return bicho;
};
export const tipoElectrico = (arr, string) => {
  let electrico = [];
  arr.forEach((obj) => {
    obj.type.forEach((strg) => {
      if (string === strg) {
        electrico += `
        <div class = "contenedor">
        <img src ="${obj.img}"/>
        <p><b>${obj.num} ${obj.name}</b></p>
        <p>Tipo: ${obj.type}</p>
        </div>`;
      }
    });
  });
  return electrico;
};
