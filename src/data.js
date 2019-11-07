/* Manejo de data */

// esta es una función de ejemplo

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
