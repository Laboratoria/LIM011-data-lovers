/* eslint-disable no-nested-ternary */
// Función de Filtrado.
export const filtrarPokemon = (datapoke, catr, valor) => (
  datapoke.filter((filt) => filt[catr].includes(valor))
);

export const filtrarEgg = (datapoke, valor) => (
  datapoke.filter((filt) => filt.egg === valor)
);
// Función de Ordenado.
export const ordenarPokemon = (datapoke, catr) => (
  datapoke.sort((a, b) => (a[catr] > b[catr] ? 1 : -1))
);


export const ordenarDescPokemon = (datapoke, catr) => (
  datapoke.sort((a, b) => (a[catr] < b[catr] ? 1 : -1))
);
// Función TOP 10 con mas apariciones.
export const top10 = (datapoke, num) => (
  datapoke.sort((a, b) => b.avg_spawns - a.avg_spawns).slice(0, num)
);

// Función Buscar Pokemon.
export const buscarPokemon = (datapoke, name) => (
  datapoke.filter((filt) => filt.name.toLowerCase().startsWith(name))
);
