/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
// Ordenado por alfabeto, juntar con el inner.HTML

export const ordenado = ((data) => data.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  return -1;
}));

// eslint-disable-next-line arrow-body-style
export const filtrado = (data, propiedad, valor) => {
// esta es una manera de llamar a la propiedad en el objeto.
  return data.filter((a) => (a[propiedad] === valor));
};

// eslint-disable-next-line arrow-body-style
export const filtraDiferente = (data, propiedad, valor) => {
  // esta es una manera de llamar a la propiedad en el objeto.
  return data.filter((a) => (a[propiedad] !== valor));
};

// busqueda
export const busqueda = (data, input) => {
  const nuevoArray = [];
  data.forEach((element) => {
    if (element.name.toLowerCase().startsWith(input.toLowerCase(), 0)) {
      nuevoArray.push(element);
    } else if (element.name.toLowerCase().startsWith(input.toLowerCase(), (element.name.indexOf(' ') + 1))) {
      nuevoArray.push(element);
    }
  });
  return nuevoArray;
};
