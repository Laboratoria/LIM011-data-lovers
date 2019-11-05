/* eslint-disable implicit-arrow-linebreak */
/* Manejo de data */

// esta es una función de ejemplo
export const ascendente = (datos) => {
// eslint-disable-next-line max-len
// const ordered = datos.sort((first, second) => (first.name > second.name ? 1 : -1)); funcion ternaria
// return ordered;
  const ordered = datos.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    // eslint-disable-next-line no-else-return
    } else {
      return -1;
    }
  });
  return ordered;
};
