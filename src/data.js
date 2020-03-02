
import {
  objecVarita, casa, patronus, descripcionPatronus,
} from './data/potter/extras.js';


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
// agregando

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

// agregar patronus y varita
const agregarImagenPatronus = (obj) => {
  let imgPatronus;
  // eslint-disable-next-line default-case
  switch (obj.patronus) {
    case 'stag':
      imgPatronus = patronus.harry;
      break;
    case 'otter':
      imgPatronus = patronus.hermione;
      break;
    case 'Jack Russell terrier':
      imgPatronus = patronus.ron;
      break;
    case 'tabby cat':
      imgPatronus = patronus.minerva;
      break;
    case 'swan':
      imgPatronus = patronus.cho;
      break;
    case 'doe':
      imgPatronus = patronus.severus;
      break;
    case 'hare':
      imgPatronus = patronus.luna;
      break;
    case 'horse':
      imgPatronus = patronus.ginny;
      break;
    case 'wolf':
      imgPatronus = patronus.remus;
      break;
    case 'weasel':
      imgPatronus = patronus.arthur;
      break;
    case 'remus':
      imgPatronus = patronus.sirius;
      break;
    case 'lynx':
      imgPatronus = patronus.kingsley;
      break;
    case 'persian cat':
      imgPatronus = patronus.dolores;
      break;
  }
  return imgPatronus;
};
const agregarDescripcionPatronus = (obj) => {
  let imgPatronus;
  // eslint-disable-next-line default-case
  switch (obj.patronus) {
    case 'stag':
      imgPatronus = descripcionPatronus.harry;
      break;
    case 'otter':
      imgPatronus = descripcionPatronus.hermione;
      break;
    case 'Jack Russell terrier':
      imgPatronus = descripcionPatronus.ron;
      break;
    case 'tabby cat':
      imgPatronus = descripcionPatronus.minerva;
      break;
    case 'swan':
      imgPatronus = descripcionPatronus.cho;
      break;
    case 'doe':
      imgPatronus = descripcionPatronus.severus;
      break;
    case 'hare':
      imgPatronus = descripcionPatronus.luna;
      break;
    case 'horse':
      imgPatronus = descripcionPatronus.ginny;
      break;
    case 'wolf':
      imgPatronus = descripcionPatronus.remus;
      break;
    case 'weasel':
      imgPatronus = descripcionPatronus.arthur;
      break;
    case 'lynx':
      imgPatronus = descripcionPatronus.kingsley;
      break;
    case 'persian cat':
      imgPatronus = descripcionPatronus.dolores;
      break;
  }
  return imgPatronus;
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
    imagepatronus: agregarImagenPatronus(obj),
    description: agregarDescripcionPatronus(obj),
  }));
};
