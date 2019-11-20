/* Se crea una variable PINTADO y nuestro parametro será dataPokemon
para que el recorrido actúe sobre toda la base */
/* eslint max-len: ["error", { "ignoreComments": true }] */

export const filtrarPorTipo = (arr, condicion) => {
  const pkmFiltrados = [];
  arr.forEach((elemento) => {
    elemento.type.forEach((strg) => {
      if (condicion === strg) {
        pkmFiltrados.push(elemento);
      }
    });
  });
  return pkmFiltrados; // retorna array de objetos filtrado
};

export const porDebilidades = (arr, condicion) => {
  const filterWeak = [];
  arr.forEach((elemento) => {
    elemento.weaknesses.forEach((strgDeb) => {
      if (condicion === strgDeb) {
        filterWeak.push(elemento);
      }
    });
  });
  return filterWeak; // retorna array de objetos filtrado
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
  const ordenar = datos.sort((a, b) => { /* sort ordena elementos */
    if (a.name > b.name) {
      return 1;
    }
    return -1;
  });
  return ordenar;
};

export const mostrarTop = (arr) => {
  arr.sort((p1, p2) => ((p1.spawn_chance > p2.spawn_chance) ? 1 : -1));
  const arrTop = arr.slice(0, 10); // slice retorna una copia del array de pokemones del 0 al 10
  return arrTop;
};

export const buscarPokemon = (array, name) => array.filter( // filter crea un nuevo array con todos los elementos que cumplan la condición
  (pintar) => pintar.name.toLowerCase().startsWith(name), // tolowercase devuelve en minusculas pintar.name
); // startsWith indica si name inicia con los caracteres de otro string, regresando true o false según sea el caso
