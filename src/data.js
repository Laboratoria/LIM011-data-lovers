
import {
  objecVarita, casa,
} from './data/potter/extras.js';

export const agregarImagenCasa = (obj) => {
  let imagenCasa;
  // eslint-disable-next-line default-case
  switch (obj.house) {
    case 'Gryffindor':
      imagenCasa = casa.Gryffindor;
      break;
    case 'Hufflepuff':
      imagenCasa = casa.Hufflepuff;
      break;
    case 'Ravenclaw':
      imagenCasa = casa.Ravenclaw;
      break;
    case 'Slytherin':
      imagenCasa = casa.Slytherin;
      break;
    case '':
      imagenCasa = casa.noexiste;
      break;
  }
  return imagenCasa;
};
export const agregarRol = (obj) => {
  let rol = '';
  // eslint-disable-next-line no-lone-blocks
  if (obj.hogwartsStudent) {
    rol = 'Student';
  } if (obj.hogwartsStaff) {
    rol = 'Staff';
  }
  if (!obj.hogwartsStaff && !obj.hogwartsStudent) {
    rol = 'no tiene rol';
  }
  return rol;
};

export const agregarVarita = (obj) => {
  let imageNucleo = '';
  // eslint-disable-next-line default-case
  switch (obj.wand.core) {
    case 'dragon heartstring':
      imageNucleo = objecVarita.dragon;
      break;
    case 'unicorn tail-hair':
      imageNucleo = objecVarita.unicorn;
      break;
    case 'phoenix feather':
      imageNucleo = objecVarita.phonix;
      break;
    case '':
      imageNucleo = '';
      break;
  }
  return imageNucleo;
};


// eslint-disable-next-line arrow-body-style
export const agregarNewData = (data) => {
  return data.map((obj) => ({
    imagenCasa: agregarImagenCasa(obj),
    name: obj.name,
    image: obj.image,
    species: obj.species,
    gender: obj.gender,
    house: obj.house,
    dateOfBirth: obj.dateOfBirth,
    actor: obj.actor,
    wood: obj.wand.wood,
    core: obj.wand.core,
    length: obj.wand.length,
    nucleo: agregarVarita(obj),
    rol: agregarRol(obj),
    patronus: obj.patronus,
  }));
};


export const filtrar = (data, prop, condicion) => {
  const filterArray = data.filter((obj) => (obj[prop] === condicion));
  return filterArray;
};

export const filterPatronus = (dataPotter) => {
  const dataPatronus = dataPotter.filter((data) => (data.patronus !== ''));
  return dataPatronus;
};
export const filterVarita = (dataPotter) => {
  // eslint-disable-next-line no-mixed-operators
  const dataVarita = dataPotter.filter((data) => ((data.wood !== '') || (data.core !== '') || (data.length !== '')));
  return dataVarita;
};


// eslint-disable-next-line max-len

export const searchName = (data, name) => {
  const search = data.filter((obj) => (obj.name.toLowerCase().indexOf(name.toLowerCase()) > -1));
  return search;
};
