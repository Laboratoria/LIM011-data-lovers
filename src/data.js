import { wandsCore, patronus, descriptionPatronus } from './data/potter/potter-extra.js';

// function to filter for house
export function filterHouse(dataPotter, houseSelected) {
  const dataFilterHouse = dataPotter.filter((data) => (data.house === houseSelected));
  return dataFilterHouse;
}
// function to filter for Role
export function filterRole(dataPotter, roleSelected) {
  const dataFilterRole = dataPotter.filter((data) => (
    data.hogwartsStudent.toString() === roleSelected));
  return dataFilterRole;
}
// function to filter for Gender
export function filterGender(dataPotter, genderSelected) {
  const dataFilterGender = dataPotter.filter((data) => (data.gender === genderSelected));
  return dataFilterGender;
}
// function to search characters
export function search(dataPotter, searcher) {
  const text = searcher.toLowerCase();
  const finded = dataPotter.filter((dataSearch) => (
    dataSearch.name.toLowerCase()).indexOf(text) !== -1);
  return finded;
}
// function to filter wands for core
export function filterWandCore(dataPotter, core) {
  const dataWandDragon = dataPotter.filter((data) => ((data.core).indexOf(core) !== -1));
  return dataWandDragon;
}
export function filterPatronus(dataPotter) {
  const dataPatronus = dataPotter.filter((data) => (data.patronus !== '' && data.name !== 'Sirius Black'));
  return dataPatronus;
}
// export const changeDataWand = (data, propiedad) => {
//   const wandsData = [];
//   for (let i = 0; i < data.length; i += 1) {
//     if (data[i][propiedad].wood === '' && data[i].wand.core === ''
// && data[i].wand.length === '') {
//       wandsData.push({
//         name: data[i].name,
//         image: data[i].image,
//         wand: {
//           wood: 'no especificado',
//           core: 'no especificado',
//           length: 'no especificado',
//         },
//       });
//     } else if (data[i].wand.core === '' && data[i].wand.length === '') {
//       wandsData.push({
//         name: data[i].name,
//         image: data[i].image,
//         wand: {
//           wood: data[i].wand.wood,
//           core: 'no especificado',
//           length: 'no especificado',
//         },
//       });
//     } else if (data[i].wand.length === '') {
//       wandsData.push({
//         name: data[i].name,
//         image: data[i].image,
//         wand: {
//           wood: data[i].wand.wood,
//           core: data[i].wand.core,
//           length: 'no especificado',
//         },
//       });
//     } else if (data[i].wand.core === '') {
//       wandsData.push({
//         name: data[i].name,
//         image: data[i].image,
//         wand: {
//           wood: data[i].wand.wood,
//           core: 'no especificado',
//           length: data[i].wand.length,
//         },
//       });
//     } else {
//       wandsData.push({
//         name: data[i].name,
//         image: data[i].image,
//         wand: {
//           wood: data[i].wand.wood,
//           core: data[i].wand.core,
//           length: data[i].wand.length,
//         },
//       });
//     }
//   }
//   return wandsData;
// };

const addImageWand = (object) => {
  let imgCore;
  switch (object.wand.core) {
    case 'unicorn tail-hair':
      imgCore = wandsCore.unicorn;
      break;
    case 'unicorn hair':
      imgCore = wandsCore.unicorn;
      break;
    case 'dragon heartstring':
      imgCore = wandsCore.dragon;
      break;
    case 'phoenix feather':
      imgCore = wandsCore.phoenix;
      break;
    default:
      imgCore = wandsCore.empty;
  }
  return imgCore;
};

const addImagePatronus = (object) => {
  let imgPatronus;
  switch (object.patronus) {
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
    default:
      imgPatronus = patronus.empty;
  }
  return imgPatronus;
};
const addDescriptionPatronus = (object) => {
  let imgPatronus;
  switch (object.patronus) {
    case 'stag':
      imgPatronus = descriptionPatronus.harry;
      break;
    case 'otter':
      imgPatronus = descriptionPatronus.hermione;
      break;
    case 'Jack Russell terrier':
      imgPatronus = descriptionPatronus.ron;
      break;
    case 'tabby cat':
      imgPatronus = descriptionPatronus.minerva;
      break;
    case 'swan':
      imgPatronus = descriptionPatronus.cho;
      break;
    case 'doe':
      imgPatronus = descriptionPatronus.severus;
      break;
    case 'hare':
      imgPatronus = descriptionPatronus.luna;
      break;
    case 'horse':
      imgPatronus = descriptionPatronus.ginny;
      break;
    case 'wolf':
      imgPatronus = descriptionPatronus.remus;
      break;
    case 'weasel':
      imgPatronus = descriptionPatronus.arthur;
      break;
    case 'lynx':
      imgPatronus = descriptionPatronus.kingsley;
      break;
    case 'persian cat':
      imgPatronus = descriptionPatronus.dolores;
      break;
    default:
      imgPatronus = descriptionPatronus.empty;
  }
  return imgPatronus;
};
const changeWandWood = (object) => {
  let newDataWand;
  if (object.wand.wood === '') {
    newDataWand = 'no especificado';
  } else {
    newDataWand = object.wand.wood;
  }
  return newDataWand;
};
const changeWandCore = (object) => {
  let newDataWand;
  if (object.wand.core === '') {
    newDataWand = 'no especificado';
  } else {
    newDataWand = object.wand.core;
  }
  return newDataWand;
};
const changeWandLength = (object) => {
  let newDataWand;
  if (object.wand.length === '') {
    newDataWand = 'no especificado';
  } else {
    newDataWand = object.wand.length;
  }
  return newDataWand;
};
export function newDataPotter(data) {
  const newData = data.map((object) => ({
    name: object.name,
    image: object.image,
    patronus: object.patronus,
    wood: changeWandWood(object),
    core: changeWandCore(object),
    length: changeWandLength(object),
    imgCore: addImageWand(object),
    imgPatronus: addImagePatronus(object),
    descriptionPatronus: addDescriptionPatronus(object),
  }));
  return newData;
}
