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
  const dataWandDragon = dataPotter.filter((data) => ((data.wand.core).indexOf(core) !== -1));
  return dataWandDragon;
}
export function filterPatronus(dataPotter) {
  const dataPatronus = dataPotter.filter((data) => (data.patronus !== ''));
  return dataPatronus;
}
export const changeDataWand = (data, propiedad) => {
  const wandsData = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i][propiedad].wood === '' && data[i].wand.core === '' && data[i].wand.length === '') {
      wandsData.push({
        name: data[i].name,
        image: data[i].image,
        wand: {
          wood: 'no especificado',
          core: 'no especificado',
          length: 'no especificado',
        },
      });
    } else if (data[i].wand.core === '' && data[i].wand.length === '') {
      wandsData.push({
        name: data[i].name,
        image: data[i].image,
        wand: {
          wood: data[i].wand.wood,
          core: 'no especificado',
          length: 'no especificado',
        },
      });
    } else if (data[i].wand.length === '') {
      wandsData.push({
        name: data[i].name,
        image: data[i].image,
        wand: {
          wood: data[i].wand.wood,
          core: data[i].wand.core,
          length: 'no especificado',
        },
      });
    } else if (data[i].wand.core === '') {
      wandsData.push({
        name: data[i].name,
        image: data[i].image,
        wand: {
          wood: data[i].wand.wood,
          core: 'no especificado',
          length: data[i].wand.length,
        },
      });
    } else {
      wandsData.push({
        name: data[i].name,
        image: data[i].image,
        wand: {
          wood: data[i].wand.wood,
          core: data[i].wand.core,
          length: data[i].wand.length,
        },
      });
    }
  }
  return wandsData;
};
