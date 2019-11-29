
// Función de Filtrado.
export const filtData = (datapoke, catr, valor) => (
  datapoke.filter((filt) => filt[catr].includes(valor))
);

export const filtEgg = (datapoke, valor) => (
  datapoke.filter((filt) => filt.egg === valor)
);

// Función de Ordenado.
export const sortData = (datapoke, catr) => (
  datapoke.sort((a, b) => (a[catr] > b[catr] ? 1 : -1))
);

export const sortDataDesc = (datapoke, catr) => (
  datapoke.sort((a, b) => (a[catr] < b[catr] ? 1 : -1))
);
// Función TOP 10 con mas apariciones.
export const topDesc = (datapoke, num) => (
  datapoke.sort((a, b) => b.avg_spawns - a.avg_spawns).slice(0, num)
);
// Función TOP 10 con menos apariciones.
export const top = (datapoke, num) => (
  datapoke.sort((a, b) => a.avg_spawns - b.avg_spawns).slice(0, num)
);

// Función Buscar Pokemon.
export const searchData = (datapoke, name) => (
  datapoke.filter((filt) => filt.name.toLowerCase().startsWith(name))
);

// Funcion evolucion
