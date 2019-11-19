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
export function search(dataPotter, searcher) {
  const text = searcher.toLowerCase();
  const finded = dataPotter.filter((dataSearch) => (
    dataSearch.name.toLowerCase()).indexOf(text) !== -1);
  return finded;
}
