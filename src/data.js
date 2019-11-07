/* Manejo de data */

export const filtrartipopokemon = (datapoke, tipo) => {
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
