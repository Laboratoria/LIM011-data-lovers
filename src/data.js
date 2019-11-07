//  Lista que muestra los pokemones
export const showPokemon = (data) => {
  let pokemon = '';
  data.map(objeto => {
    pokemon += `
    <div id="${objeto.id}"name="pokemon" class="ficha-pokemon">
    <picture><img src="${objeto.img}"/></picture>
      <p> ${objeto.name} ${objeto.num}</p>
      <p>Tipo: ${objeto.type.join('  /  ')}</p>
      <p>Debilidades: ${objeto.weaknesses.join('  /  ')}</p>
  <details id="details" class="details">
    <summary id="summary" class="summary">SABER MÁS          </summary>
    <span>Peso: ${objeto.weight}<br>
    Tamaño: ${objeto.height}<br>
    Caramelos para Evolucionar: ${objeto.candy_count}<br>
    Huevo: ${objeto.egg}<br></span>
  </details>
  </div>`;
  });
  // console.log(plantillaPokemon);
  return pokemon;
};

/* const valorCaramelo = (data) =>{
  let cuantosCaramelos= `${objeto.candy_count}`;
  let pokemonBuscado =   console.log(cuanosCaramelos);
}; */
  let pokemonList = '';
  data.forEach((objeto) => pokemonList += `
    <div id="${objeto.id}" name="pokemon"><p>
      <p> ${objeto.name} ${objeto.num}</p>

      <img src="${objeto.img}"/></p>
      <p>Tipo: ${objeto.type.join('  /  ')}</p>
      <p>Debilidades: ${objeto.weaknesses.join('  /  ')}</p>
      <p>Peso: ${objeto.weight}</p>
      <p>Tamaño: ${objeto.height}</p>
      <p>Caramelos para Evolucionar: ${objeto.candy_count}</p>
      <p>Huevo: ${objeto.egg}</p>
    </div>`);
  return pokemonList;
};

// Filtrado de pokemon por tipo
export const filtroTipoPokemon = (data, tipo) => {
  // eslint-disable-next-line no-shadow
  const nuevoArreglo = data.filter((data) => (data.type.indexOf(tipo) !== -1));
  return nuevoArreglo;
};

/*  These two work Pokemon Type Filter
//for loop
export const filtroPokemon = (data, tipo) =>{
  const newArray = [];
  for(let i = 0; i < data.length; i++) {
    if(data[i].type.indexOf(tipo) !== -1){
      newArray.push(data[i])
    }
  }
  return newArray;
};

// FUNCIONA filter
  export const filtroTipo = (data, tipo) =>{
const nuevoArreglo =[];
    data.filter(function(data){
      if(data.type.indexOf(tipo) !== -1){
        nuevoArreglo.push(data)
      }
    });
    return nuevoArreglo;
  };
  */
