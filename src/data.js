// Ordenado por alfabeto, juntar con el inner.HTML

export const ordenado = ((data) => data.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  return -1;
});

// eslint-disable-next-line arrow-body-style
export const filtrado = (data, propiedad, valor) => {
  return data.filter((a) => a[propiedad] === valor);
  // esta es la manera de llamar a la propiedad en el objeto
};

// eslint-disable-next-line arrow-body-style
export const busqueda = (data, name, input) => {
  return data.find((a) => a[name] === input);
};

// export const busqueda = (data, input) => {
//   const mostrar = '';
//   const nombres = data.name.toLowerCase();
//   const espacio = nombres.indexOf(' ');
//   const nombre = nombres.slice(0, espacio);
//   const apellido = nombres.slice(espacio + 1, nombres.length);
//   data.find((a) => {
//     if (a[nombre] === input) {
//       return mostrar;
//     } else (a[apellido] === input) {
//       return mostrar;
//     }
//   });
// };
