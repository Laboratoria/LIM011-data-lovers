/* eslint-disable max-len */
export const filtroTipoPokemon = (data, tipo) => data.filter((item) => (item.type.indexOf(tipo) !== -1));
export const busquedaPokemonNombre = (data, nombre) => data.filter((item) => item.name.toLowerCase().startsWith(nombre));
export const filtroAlfabeticoAZ = (data) => data.sort((a, b) => a.name.localeCompare(b.name));
export const filtroAlfabeticoZA = (data) => data.sort((a, b) => b.name.localeCompare(a.name));
export const ordenNumerico = (data) => data.sort((a, b) => a.num.localeCompare(b.num));

// export const filtroAlfabeticoAZ = (data) => {
//   const nuevoArregloAlfabetico = data.sort((a, b) => a.name.localeCompare(b.name));
//   return nuevoArregloAlfabetico;
// };
// export const filtroAlfabeticoZA = (data) => {
//   const nuevoArregloAlfabetico = data.sort((a, b) => b.name.localeCompare(a.name));
//   return nuevoArregloAlfabetico;
// };
// export const ordenNumerico = (data) => {
//   const nuevoArregloNumerico = data.sort((a, b) => a.num.localeCompare(b.num));
//   return nuevoArregloNumerico;
// };
// export const busquedaPokemonNombre = (data, nombre) => {
// // eslint-disable-next-line no-shadow
//   const pokemonEncontrado = data.filter((data) => (data.name.toLowerCase() === nombre));
//   return pokemonEncontrado;
// };
