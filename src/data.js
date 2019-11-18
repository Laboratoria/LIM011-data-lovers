/* eslint-disable max-len */
// Filtrado de pokemon por tipo
export const filtroTipoPokemon = (data, tipo) => {
  // eslint-disable-next-line no-shadow
  const nuevoArreglo = data.filter((item) => (item.type.indexOf(tipo) !== -1));
  return nuevoArreglo;
};

export const filtroAlfabeticoAZ = (data) => {
  const nuevoArregloAlfabetico = data.sort((a, b) => a.name.localeCompare(b.name));
  return nuevoArregloAlfabetico;
};

export const filtroAlfabeticoZA = (data) => {
  const nuevoArregloAlfabetico = data.sort((a, b) => b.name.localeCompare(a.name));
  return nuevoArregloAlfabetico;
};

export const ordenNumerico = (data) => {
  const nuevoArregloNumerico = data.sort((a, b) => a.num.localeCompare(b.num));
  return nuevoArregloNumerico;
};

export const busquedaPokemonNombre = (data, nombre) => data.filter((item) => item.name.toLowerCase().startsWith(nombre));

/*  Search function, only shows 1 pokemon if name written correctly and full
// export const busquedaPokemonNombre = (data, nombre) => {
//   // eslint-disable-next-line no-shadow
//   const pokemonEncontrado = data.filter((data) => (data.name.toLowerCase() === nombre));
//   return pokemonEncontrado;
// }; */
