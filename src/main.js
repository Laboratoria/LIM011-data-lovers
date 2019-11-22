/* eslint-disable linebreak-style */
// eslint-disable-next-line import/extensions
import POKEMON from './data/pokemon/pokemon.js';
import {
  idPokemon, orderData, typeFilter, weaknessFilter, topPokemon,
} from './data.js';

const pokeImages = document.getElementById('show-pokemon');
const pokemonContainer = (dataPOKEMON) => {
  let pokeCards = '';
  dataPOKEMON.forEach((show) => {
    pokeCards += ` <div class="cards">
      <div class="cards-data">
        <div class="cards-main">
          <img src="${show.img}" class="img-pokemon" alt="Image-Pokemon">
          <p>${show.name} #${show.num}</p>
        </div>
        <div class="cards-dropdown">
            <p class="boldstyle">Tipo: <em>${show.type}</em></p>
            <p class="boldstyle">Caramelos: <em>${show.candy_count}</em></p>
            <p class="boldstyle">Frecuencia de Aparición: <em>${show.spawn_chance}%</em></p>
            <p class="boldstyle">Debilidad: <em>${show.weaknesses}</em></p>
        </div>
      </div>
    </div>`;
  });
  pokeImages.innerHTML = pokeCards;
};
pokemonContainer(POKEMON);

// BOTÓN PARA MOSTRAR TODOS LOS POKEMON EN ORDEN POR ID
const showAllPokemon = document.querySelector('#show');
showAllPokemon.addEventListener('click', (event) => {
  pokemonContainer(idPokemon(POKEMON, event.target.id));
});

// MOSTRAR ORDEN ALFABÉTICO Y CANTIDAD DE CARAMELOS
const selectOrder = document.querySelector('#poke-order');
selectOrder.addEventListener('change', () => {
  pokemonContainer(orderData(POKEMON, selectOrder.value));
});

// MOSTRAR FILTRO DE TIPOS
const selectType = document.querySelector('#poke-type');
selectType.addEventListener('change', (event) => {
  pokemonContainer(typeFilter(POKEMON, event.target.value));
});

// MOSTRAR FILTRO DE DEBILIDADES
const selectWeakness = document.querySelector('#poke-weakness');
selectWeakness.addEventListener('change', (event) => {
  pokemonContainer(weaknessFilter(POKEMON, event.target.value));
});

// MOSTRAR FILTRO DE TOP 10 DE FRECUENCIA DE APARICIÓN
const showTopPokemon = document.querySelector('#poke-top');
showTopPokemon.addEventListener('click', (event) => {
  pokemonContainer(topPokemon(POKEMON, event.target.id));
});

orderData(POKEMON, selectOrder);
typeFilter(POKEMON, selectType);
weaknessFilter(POKEMON, selectWeakness);
