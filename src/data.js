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

// busqueda
export const busqueda = (data, input) => {
  const arrayData = [];
  data.forEach((element) => {
    if (element.name.toLowerCase().startsWith(input, 0)) {
      arrayData.push(element);
    } else if (element.name.toLowerCase().startsWith(input, (element.name.indexOf(' ') + 1))) {
      arrayData.push(element);
    }
  });
  console.log(arrayData);
  return arrayData;
};
