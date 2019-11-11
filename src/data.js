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


// Filtrado de pokemon por tipo
export const filtroTipoPokemon = (data, tipo) => {
  // eslint-disable-next-line no-shadow
  const nuevoArreglo = data.filter((data) => (data.type.indexOf(tipo) !== -1));
  return nuevoArreglo;
};

export const filtroAlfabeticoAZ= (data) =>{
  const nuevoArregloAlfabetico =
  data.sort((a, b) => a.name.localeCompare(b.name)) ;
return nuevoArregloAlfabetico;
};

export const filtroAlfabeticoZA= (data) =>{
  const nuevoArregloAlfabetico =
  data.sort((a, b) => b.name.localeCompare(a.name)) ;
return nuevoArregloAlfabetico;
};

export const ordenNumerico= (data) =>{
  const nuevoArregloNumerico =
  data.sort((a, b) => a.num.localeCompare(b.num)) ;
return nuevoArregloNumerico;
};



//Mostrar que los filtro funcionan
// export const showAlfabeto = (data) => {
//     let pokemon = '';
//     data.map(item => {
//         pokemon += `
//     <div id="${item.id} "name="pokemon" class="ficha-pokemon">
//     <picture class="fondo-pokemon"><img src="${item.img}"/></picture>
//       <p> ${item.name} ${item.num}</p>
//       <p>Tipo: ${item.type.join('  /  ')}</p>
//       <p>Debilidades: ${item.weaknesses.join('  /  ')}</p>
//   <details id="details" class="details">
//     <summary id="summary" class="summary">SABER MÁS</summary>
//     <span>Peso: ${item.weight}<br>
//     Tamaño: ${item.height}<br>
//     Caramelos para Evolucionar: ${item.candy_count}<br>
//     Huevo: ${item.egg}<br></span>
//   </details>
//   </div>`;
//     });
//     // console.log(plantillaPokemon);
//     return pokemon;
//   };




