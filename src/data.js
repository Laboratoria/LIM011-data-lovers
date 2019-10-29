/* Manejo de data */

export const mostrarListaPokemon = (dataPoke) => {
  const pokedex = dataPoke.map((data) => ({ num: data.num }));
  // eslint-disable-next-line no-console
  return pokedex;
};

// eslint-disable-next-line no-console
