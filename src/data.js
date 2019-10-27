/* Manejo de data */
const arraypokemon = POKEMON.pokemon;
const imagenes=document.getElementById('pokemons');
const pintarPokemons = (arraypokemon) => {
  arraypokemon.forEach((pintar) => {  
      imagenes.innerHTML +=  `
      <div align="center">                
          <img src= "${pintar.img}">
          <p>${pintar.id} ${pintar.name}</p>       
      </div>
      `;
              return imagenes;
  });
};
pintarPokemons(arraypokemon);

// esta es una función de ejemplo

/*export const example = () => {
  return 'example';
};*/