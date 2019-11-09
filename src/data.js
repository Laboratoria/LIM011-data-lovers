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
        <p><b> ${pintar.name}</b></p>
        <p>Altura: ${pintar.height}</p>
        <p>Peso: ${pintar.weight}</p>
        <p>Caramelos: ${pintar.candy_count}</p>
        <p>Tiempo de Aparición: <br>${pintar.spawn_chance}</p>
        <p>Debilidades:<br>${pintar.weaknesses}</p>
        </div>
        `;
  });
  return misPokemones;
};

export const muestraPokemon = (dataPokemon) => {
  let misPokemones = '';
  dataPokemon.forEach((pintar) => {
    misPokemones += `
        <div class = "contenedor2">
        <img src ="${pintar.img}"/>
        <p><b> ${pintar.name}</b></p>
        <p>Frecuencia de Aparición: <br>${pintar.spawn_chance}</p>
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
        <p>Altura: ${obj.height}</p>
        <p>Peso: ${obj.weight}</p>
        <p>Huevos: ${obj.egg}</p>
        <br>
        <br>
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

export const traerPokemonesPorCantidadDeCaramelos = (arr, candies) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].candy_count === parseFloat(candies)) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

export const ascendente = (datos) => {
  const ordenar = datos.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    return -1;
  });
  return ordenar;
};

export const mostrarTop = (arr) => {
  arr.sort((p1, p2) => (p1.spawn_chance > p2.spawn_chance) ? -1 : 1);
  const arrTop = arr.slice(0, 10);
  return arrTop;
};
