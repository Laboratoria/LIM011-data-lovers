/* eslint-disable default-case */

// Función de Filtrado.
export const filtrarPokemon = (datapoke, categoria, valor) => {
  let newDataPoke = [];
  newDataPoke = datapoke.filter((filt) => filt[categoria].includes(valor));
  return newDataPoke;
};

export const filtrarEgg = (datapoke, valor) => {
  let newDataPoke = [];
  newDataPoke = datapoke.filter((filt) => filt.egg === valor);
  return newDataPoke;
};

// Función de Ordenado.
export const ordenarPokemon = (datapoke, categoria, manera) => {
  let newDataPoke = [];
  if (manera === 'asc') {
    newDataPoke = datapoke.sort((a, b) => (a[categoria] > b[categoria] ? 1 : -1));
  }
  if (manera === 'desc') {
    newDataPoke = datapoke.sort((a, b) => (a[categoria] < b[categoria] ? 1 : -1));
  }
  return newDataPoke;
};

// Función TOP 10 con mas apariciones.
export const top10 = (datapoke, num) => {
  const arrayApariciones = datapoke.sort((a, b) => b.avg_spawns - a.avg_spawns);
  const arrayTop10 = arrayApariciones.slice(0, num);
  return arrayTop10;
};

// Función Buscar Pokemon.
export const buscarPokemon = (datapoke, name) => {
  const newDataPoke = datapoke.filter((filt) => filt.name.toLowerCase().startsWith(name));
  return newDataPoke;
};
