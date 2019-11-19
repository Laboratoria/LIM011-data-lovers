export const filtroPorRoles = (rol, POTTER) => POTTER.filter((e) => e[rol]);
// FILTRO PARA ROLES
export const filtroPorCasas = (casa, POTTER) => {
  const filtraCasa = POTTER.filter((e) => e.house === casa);
  console.log(filtraCasa);
  return filtraCasa;
};

export const filtroPorGenero = (genero, POTTER) => {
  const filtraGenero = POTTER.filter((e) => e.gender === genero);
  return filtraGenero;
};
export const ordenarAscendente = (POTTER) => POTTER.sort((a, b) => {
   if (a.name > b.name) {
    return 1;
  } 
    return -1;
});

export const buscador = (data, buscame) => {
  console.log(buscame);
  return data.filter((obj) => obj.name.toLowerCase().startsWith(buscame));
};
