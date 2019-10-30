/* Manejo de data */

// esta es una función de ejemplo

// export const showCharacters = () => {
//   const numero = ['paola', 'alejandra', 'vanesa', 'carla'];
//   numero.sort();
//   return numero;
// };
export const showCharacters = (characters) => {
  let templatePotter = '';
// eslint-disable-next-line no-plusplus
  for (let i = 0; i < characters.length; i++) {
    templatePotter += `
    <div class=content id="content">
    <div class=styleCharacter>
    <img class=imageCharacter src=${characters[i].image}>
    <div class=name>${characters[i].name}</div>
    </div>
    </div>
    `;
  }
  return templatePotter;
};

export const ascendente = (charactersToOrderAsc) => {
  console.log(charactersToOrderAsc);
};

// const ordenAZ = (data) => {
//   return data.sort((a, b) => {
//     if (a.name > b.name) {
//       return 1
//     } else {
//     return -1
//     }
//   });
// }

// console.log(ordenAZ);
