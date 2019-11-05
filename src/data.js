
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

export const porTipo = (arr, string) => {
  let tipo = [];
  arr.forEach((obj) => {
    obj.type.forEach((strg) => {
      if (string === strg) {
        tipo += `
        <div class = "contenedor">
        <img src ="${obj.img}"/>
        <p><b>${obj.num} ${obj.name}</b></p>
        <p>Tipo: ${obj.type}</p>
        </div>`;
      }
    });
  });
  return tipo;
};

export const porDebilidades = (arr, stringDeb) => {
  let filterWeak = [];
  arr.forEach((objWeak) => {
    objWeak.weaknesses.forEach((strgDeb) => {
      if (stringDeb === strgDeb) {
        filterWeak += `
        <div class = "contenedor">
        <img src ="${objWeak.img}"/>
        <p><b>${objWeak.num} ${objWeak.name}</b></p>
        <p>Debilidades:<br>${objWeak.weaknesses}</p>
        </div>`;
      }
    });
  });
  return filterWeak;
};
export const needCandy = (arr, string) => {
  let candyCount = [];
  arr.forEach((obj) => {
    obj.candy_count.forEach((num) => {
      if (string === num) {
        candyCount += `
        <div class = "contenedor">
        <img src ="${obj.img}"/>
        <p><b>${obj.num} ${obj.name}</b></p>
        <p>Necesitan ${obj.candy_count} caramelos</p>
        </div>`;
      }
    });
  });
  return candyCount;
};
