/* Manejo de data */
/* esta es una función de ejemplo */
/* eslint-disable import/prefer-default-export */
/* eslint arrow-body-style: ["error", "always"] */

/* export const mostrarPokemon = () => {
    return 'mostrarPokemon';
}; */

/* Se crea una variable PINTADO y nuestro parametro será dataPokemon
para que el recorrido actúe sobre toda la base */

export const pintado = (dataPokemon) => {
  let misPokemones = '';
  dataPokemon.forEach((pintar) => {
    misPokemones += `
        <div class = "contenedor">
        <img src ="${pintar.img}"/>
        <p><b>${pintar.id} ${pintar.name}</b></p>
        <p>Altura: ${pintar.height}</p>
        <p>Peso: ${pintar.weight}</p>
        <p>Caramelos: ${pintar.candy_count}</p>
        <p>Tiempo de Aparición: <br>${pintar.spawn_time}</p>
        <p>Debilidades:<br>${pintar.weaknesses}</p>
        </div>
        `;
  });
  return misPokemones;
};
