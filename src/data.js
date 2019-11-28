/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
// FUNCIÓN DE ORDEN POR ID
export const idPokemon = (POKEMON, order) => {
  if (order === 'show') {
    POKEMON.sort((a, b) => a.id - b.id);
  }
  return POKEMON;
};
// FUNCIÓN DE ORDEN ALFABÉTICO + CANTIDAD DE CARAMELOS
export const orderData = (POKEMON, order) => {
  if (order === 'ascendant-az') {
    POKEMON.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
    });
  }
  if (order === 'descendant-za') {
    POKEMON.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
    });
  }
  if (order === 'more-candies') {
    POKEMON.sort((a, b) => b.candy_count - a.candy_count);
  }
  if (order === 'less-candies') {
    POKEMON.sort((a, b) => a.candy_count - b.candy_count);
  }
  return POKEMON;
};
// FUNCION DE FILTRO POR TIPOS
export const typeFilter = (show, pokeType) => {
  const arrFilter = [];
  show.filter((showOne) => {
    if (showOne.type.indexOf(pokeType) !== -1) {
      arrFilter.push(showOne);
    }
  });
  return arrFilter;
};
// FUNCION DE FILTRO POR DEBILIDADES
export const weaknessFilter = (show, pokeWeakness) => {
  const arrFilter = [];
  show.filter((showTwo) => {
    if (showTwo.weaknesses.indexOf(pokeWeakness) !== -1) {
      arrFilter.push(showTwo);
    }
  });
  return arrFilter;
};
// FUNCION DE TOP 10 DE FRECUENCIA DE APARICIÓN
export const topPokemon = (POKEMON, order) => {
  if (order === 'poke-top') {
    POKEMON.sort((a, b) => b.spawn_chance - a.spawn_chance);
  }
  return POKEMON.slice(0, 10);
};
