/* Manejo de data */

// esta es una función de ejemplo

// export const mostrarPersonajesPotter = (pintaImagen) => {
//   return 'pintaImagen';
// };

export const mostrarCaracteristicasPotter = (POTTER) => POTTER;
// FILTRO PARA ROLES
export const filtroPorRoles = (rol, POTTER) => POTTER.filter((e) => e[rol]);

// FILTRO PARA CASAS

export const filtroPorCasas = (casa, POTTER) => {
  const filtraCasa = POTTER.filter((e) => e.house === casa);
  console.log(filtraCasa);
  return filtraCasa;
};

export const filtroPorGenero = (genero, POTTER) => {
  const filtraGenero = POTTER.filter((e) => e.gender === genero);
  return filtraGenero;
};

// // eslint-disable-next-line consistent-return
// export const ordenarHarry = (array, string1) => {
//   const arrayPotter = [...array];
//   const nuevoArray = arrayPotter.map((e) => e.name)
//    .sort().map((string2) => arrayPotter.find((e) => e.name === string2));
//     console.log(nuevoArray);
//   if (string1 === 'A-Z') {
//     // console.log(nuevoArray);
//     return nuevoArray;
//   } if (string1 === 'Z-A') {
//     return nuevoArray.reverse();


//   }
// };

export const ordenarAscendente = (POTTER) => POTTER.sort((a, b) => {
   if (a.name > b.name) {
    return 1;
  } 
    return -1;

  });

// export const ordenarDescendente = (POTTER) => {
//   const ordenarD = POTTER.reverse ((a, b) => {
//     if (a.name > b.name) {
//      console.log(ordenarDescendente)
//    return 1;
//     }

//    return -1;
//     });

//  //   si a es igual a b
//     return ordenarD;
//  };

//  export const ordenarPorNombre = (POTTER,do) => {
//   POTTER.sort((a, b) => {
//   if (a.name > b.name){
//     console.log((buscando));
//     return 1;

//   }
//   if (a.name< b.name) {
//     return -1;

//   }
//   return 0;
// })
//
