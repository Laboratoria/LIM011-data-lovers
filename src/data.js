/* Manejo de data */
//const catalogoImagenes = POKEMON.pokemon;
let catalogoImagenes = '';
export const pintaPokemones = (data) => {  
  data.forEach(traeme => {
    catalogoImagenes += `
    <div align="center">
    <img src = "${traeme.img}"/>
    <p> ${traeme.id} ${traeme.name}</p>
    </div>
    `;
  });
  return catalogoImagenes;
};

export const pokemonAsc= (data) =>{ 
  data.sort((p1, p2) => (p1.name < p2.name) ? -1 : 1);
  return data;
};

export const pokemonDesc = (data) =>{ 
  data.sort((p1, p2) => (p1.name > p2.name) ? -1 : 1);
  return data;
};


