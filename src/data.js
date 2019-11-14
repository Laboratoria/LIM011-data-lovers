// export const mostrarCaracteristicasPotter = (POTTER) => POTTER;

export const filtroPorRoles = (rol, POTTER) => POTTER.filter((e) => e[rol]);
// FILTRO PARA CASAS


export const filtroPorCasas = (casa, POTTER) => {
  const filtraCasa = POTTER.filter((e) => e.house === casa);
  console.log(casa);

  console.log(filtraCasa);
  return filtraCasa;
};
export const filtroPorGenero = (genero, POTTER) => {
  const filtraGenero = POTTER.filter((e) => e.gender === genero);
  console.log(filtraGenero);
  return filtraGenero;
};
export const buscador = (POTTER, buscado) => {
  POTTER.filter((buscando) => {
    const encuentra = buscando.name.toLowerCase().startsWith(buscado);
    console.log(encuentra);
    return encuentra;
  });
};

// export const buscador = (POTTER, buscado) => {
//   console.log(buscado);
//   return POTTER.filter(obj => obj.name.toLowerCase().startsWith(buscado));

// };

// export const filtrOrden = (POTTER) => {
//   POTTER.sort((a, b) => {
//     if(a.yearOfBirth > b.yearOfBirth) {
//       return 1;
//     }
//     if(a.yearOfBirth < b.yearOfBirth) {
//       return -1;
//     }
//     return 0;
//   })
// }


//  PRUEBAAAAA //
// export const probando = (POTTER) => {
//   const pruebita = POTTER.filter((e) => e.hogwartsStudent === true);
//   console.log(pruebita)
//   return pruebita;
// };

// export const probando2 = (POTTER) => {
//   const pruebita2 = POTTER.filter((e) => e.hogwartsStaff === true);
//   console.log(pruebita2);
//   return pruebita2;
// }
