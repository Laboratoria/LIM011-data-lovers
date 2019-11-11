// Ordenado por alfabeto, juntar con el inner.HTML
export const ordenado = (data) => data.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  return -1;
});

// eslint-disable-next-line arrow-body-style
export const filtrado = (data, propiedad, valor) => {
  // esta es una manera de llamar a la propiedad en el objeto.
  return data.filter((a) => (a[propiedad] === valor));
};

// eslint-disable-next-line arrow-body-style
export const buscar = (data, input) => {
  return data.forEach((a) => a.name.length === input);
};
