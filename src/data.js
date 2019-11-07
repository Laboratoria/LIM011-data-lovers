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


// Filtrado de pokemon por tipo
export const filtroTipoPokemon = (data, tipo) => {
  // eslint-disable-next-line no-shadow
  const nuevoArreglo = data.filter((data) => (data.type.indexOf(tipo) !== -1));
  return nuevoArreglo;
};



