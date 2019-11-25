export const ascendente = (datos) => {
  const ordered = datos.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    // eslint-disable-next-line no-else-return
    } else {
      return -1;
    }
  });
  return ordered;
};

export const genero = (datos, type) => {
  // eslint-disable-next-line arrow-parens
  const filterGender = datos.filter(element => element.gender === type);
  return filterGender;
};

export const filterRole = (datos) => {
  // eslint-disable-next-line arrow-parens
  const role = datos.filter(element => element.hogwartsStudent === true);
  return role;
};

export const filterRoleDos = (datos) => {
  // eslint-disable-next-line arrow-parens
  const roleDos = datos.filter(element => element.hogwartsStaff === true);
  return roleDos;
};

export const houseUno = (datos, houseName) => {
  // eslint-disable-next-line arrow-parens
  const filterHouse = datos.filter(element => element.house === houseName);
  return filterHouse;
};

// eslint-disable-next-line arrow-body-style
export const search = (datos, searching) => {
  return datos.filter((obj) => obj.name.toLowerCase().startsWith(searching));
};
