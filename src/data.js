/* Manejo de data */

export const traerDataPokemon = (arr) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++){
    newArray.push({identificador: arr[i].id, nombre : arr[i].name, imagen: arr[i].img})
  }
  return newArray;
}


export const ordenarAscOdescData = (arr, string) =>{
  if(string === 'orAsc'){
    arr.sort((p1, p2) => (p1.name < p2.name) ? -1 : 1);
    return arr;
  } else {
    arr.sort((p1, p2) => (p1.name > p2.name) ? -1 : 1);
    return arr;
  }
};

