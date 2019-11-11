/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable arrow-body-style */
/* Manejo de data */

export const filtrartipopokemon = (datapoke, tipo) => {
  // filt es el indice del array datapoke, filt.type.inc... es una condicion
  const nuevoArrayTipo = datapoke.filter((filt) => filt.type.includes(tipo));
  return (nuevoArrayTipo);
};

export const filtrarDebilidadPokemon = (datapoke, debilidad) => {
  const nuevoArrayDebilidad = datapoke.filter((filt) => filt.weaknesses.includes(debilidad));
  return (nuevoArrayDebilidad);
};

export const filtrarKmPokemon = (datapoke, km) => {
  const nuevoArrayKm = datapoke.filter((filt) => filt.egg === km);
  return (nuevoArrayKm);
};

export const ordAscPoke = (datapoke, categoria) => {
  let ordenAscendente = [];
  if (categoria === 'name') {
    ordenAscendente = datapoke.sort((a, b) => (a.name > b.name ? 1 : -1));
  } else if (categoria === 'id') {
    ordenAscendente = datapoke.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  return ordenAscendente;
};

export const ordDescPoke = (datapoke) => {
  const ordenDescendente = datapoke.sort((a, b) => (a.name < b.name ? 1 : -1));
  return ordenDescendente;
};

export const top10 = (datapoke) => {
  const arrayApariciones = datapoke.sort((a, b) => b.avg_spawns - a.avg_spawns);
  const arrayTop10 = arrayApariciones.slice(0, 10);
  return arrayTop10;
};

/* export const portipo = (arr, string) => {
  const newArray = [];
  arr.forEach((obj) => {
    arr[obj].type.forEach((valor) => {
      if (arr[obj].type[valor] === string) {
        newArray.push(arr[obj]);
      }
    });
  });
  return newArray;
}; */
