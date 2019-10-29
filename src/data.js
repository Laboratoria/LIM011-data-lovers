/* Manejo de data */

// esta es una función de ejemplo

export const showPokemon = (data) => {
  let pokemon ='' 
  ;
  data.map(objeto => {
    pokemon += `
    <div id="${objeto.id}" name="pokemon"><p>
    <img src="${objeto.img}"/></p>
    <p>Nombre: ${objeto.name}</p>
    <p>Peso: ${objeto.weight}</p>
    <p>Tipo: ${objeto.type.join('  ')}</p>
    </div>
    `
  });
  //console.log(plantillaPokemon);
  return pokemon;
};

/*const valorCaramelo = (data) =>{
  let cuantosCaramelos= `${objeto.candy_count}`;
  let pokemonBuscado =   console.log(cuanosCaramelos);
};*/