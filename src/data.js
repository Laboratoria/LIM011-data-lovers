export const filtroPorRoles = (rol, POTTER) => POTTER.filter((e) => e[rol]);
// FILTRO PARA CASAS

export const filtroPorCasas = (casa, POTTER) => {
  const filtraCasa = POTTER.filter((e) => e.house === casa);
  return filtraCasa;
};
export const filtroPorGenero = (genero, POTTER) => {
  const filtraGenero = POTTER.filter((e) => e.gender === genero);
  return filtraGenero;
};

export const buscador = (data, buscame) => {
  console.log(buscame);
  return data.filter((obj) => obj.name.toLowerCase().startsWith(buscame));
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
