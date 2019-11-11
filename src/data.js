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
  const bNombre = data.filter((obj) => obj.name.toLowerCase().startsWith(input, 0));
  const bApellido = data.filter((obj) => obj.name.toLowerCase().startsWith(input, (obj.name.indexOf(' ') + 1)));
  let buscar = '';
  if (bApellido === bNombre) {
    buscar = bNombre;
  } else {
    buscar = bNombre.concat(bApellido);
  }
  console.log(buscar);
  return buscar;
};
