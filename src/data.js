/* Manejo de data */

// esta es una función de ejemplo

// export const mostrarPersonajesPotter = (pintaImagen) => {
//   return 'pintaImagen';
// };

export const mostrarCaracteristicasPotter = (POTTER) => {
  return POTTER;
};
//FILTRO PARA ROLES
export const filtroPorRoles = (rol, POTTER) => POTTER.filter(e => e[rol]);

//FILTRO PARA CASAS

export const filtroPorCasas = (casa, POTTER) => {
  const filtraCasa = POTTER.filter(e => e.house === casa)
  console.log(filtraCasa);
  return filtraCasa;
}

export const filtroPorGenero = (genero, POTTER) => {
  const filtraGenero = POTTER.filter(e => e.gender === genero)
  return filtraGenero;
}

// esta funcion ejecuta para  el boton de desplazamiento de casa 

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


