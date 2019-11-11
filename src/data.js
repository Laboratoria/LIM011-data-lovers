//  Lista que muestra los pokemones
export const showPokemon = (data) => {
  let pokemon = '';
  data.map(item => {
      pokemon += `
  <div id="${item.id} "name="pokemon" class="ficha-pokemon">
  <picture class="fondo-pokemon"><img src="${item.img}"/></picture>
    <p> ${item.name} ${item.num}</p>
    <p>Tipo: ${item.type.join('  /  ')}</p>
    <p>Debilidades: ${item.weaknesses.join('  /  ')}</p>
<details id="details" class="details">
  <summary id="summary" class="summary">SABER MÁS</summary>
  <span>Peso: ${item.weight}<br>
  Tamaño: ${item.height}<br>
  Caramelos para Evolucionar: ${item.candy_count}<br>
  Huevo: ${item.egg}<br></span>
</details>
</div>`;
  });
  // console.log(plantillaPokemon);
  return pokemon;
};

// Filtrado de pokemon por tipo
export const filtroTipoPokemon = (data, tipo) => {
  // eslint-disable-next-line no-shadow
  const nuevoArreglo = data.filter((data) => (data.type.indexOf(tipo) !== -1));
  return nuevoArreglo;
};

//  Lista que muestra los pokemones(nombre y foto)
export const showNamePicturePokemon = (data) => {
  let pokemon = '';
  data.map(item => {
      pokemon += `
  <div class ="singlepoke">
  <div id="${item.id}"name="pokemon" class="ficha-pokemon">
  <picture class="fondo-pokemon"><img src="${item.img}"/></picture>
    <p> ${item.name}</p>
  </div> 
  </div>`;
  });
  // console.log(plantillaPokemon);
  return pokemon;
};

//  Lista que muestra los pokemones(nombre)
export const showNamePokemon = (data) => {
  let pokemon = '';
  data.map(item => {
      pokemon += `
  <div id="${item.id}"name="pokemon" class="ficha-pokemon">
  <p> ${item.name}</p>
  </div>`;
  });
  // console.log(plantillaPokemon);
  return pokemon;
};


// //  Lista que muestra los pokemones
// export const showPokemon = (function(data){
//   let pokemon = ``;
//   data.map(objeto => {
//     pokemon += `
//     <div id="${objeto.id}"name="pokemon" class="ficha-pokemon">
//     <picture><img src="${objeto.img}"/></picture>
//       <p> ${objeto.name} ${objeto.num}</p>
//       <p>Tipo: ${objeto.type.join('  /  ')}</p>
//       <p>Debilidades: ${objeto.weaknesses.join('  /  ')}</p>
//   <details id="details" class="details">
//     <summary id="summary" class="summary">SABER MÁS          </summary>
//     <span>Peso: ${objeto.weight}<br>
//     Tamaño: ${objeto.height}<br>
//     Caramelos para Evolucionar: ${objeto.candy_count}<br>
//     Huevo: ${objeto.egg}<br></span>
//   </details>
//   </div>`;
//   });
//   // console.log(plantillaPokemon);
//   return pokemon;
// });


// // Filtrado de pokemon por tipo
// export const filtroTipoPokemon = (data, tipo) => {
//   // eslint-disable-next-line no-shadow
//   const nuevoArreglo = data.filter((data) => (data.type.indexOf(tipo) !== -1));
//   return nuevoArreglo;
// };




// // Función orden alfabético
// // export const filtroAlfabetico= (data) =>{
// //   let nuevoArregloAlfabetico =[];
// //   switch (sorting) {
// //       case 'AZ': 
// //       return nuevoArregloAlfabetico = data.sort((a, b) => a.name.localeCompare(b.name)) ;
      
// //     break;
// //     case 'ZA':
// //         nuevoArregloAlfabetico = data.sort((a, b) => a.name.localeCompare(b.name)) ;
// //       return nuevoArregloAlfabetico.reverse();
// //     break;
// //     default:
// //       break;
// // }};

// // export const filtroAlfabeticoAZ= (data) =>{
// //   const nuevoArregloAlfabetico =
// //   data.sort((a, b) => a.name.localeCompare(b.name)) ;
  
// // return nuevoArregloAlfabetico;
// // };
