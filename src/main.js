
import POKEMON from './data/pokemon/pokemon.js';

// import { datosPokemon } from './data.js';
// import pokemon from './data/pokemon/pokemon.js'

let i = 0;
for (i = 0; i < POKEMON.length; i += 1) {
  const newDiv = document.createElement('div');
  const newDiv2 = document.createElement('div');
  const imagen = document.createElement('img');
  newDiv.setAttribute('id', 'contenedor-pokemon');
  newDiv2.setAttribute('id', 'datos-pokemon');
  imagen.setAttribute('src', POKEMON[i].img);
  const newContent = document.createTextNode(POKEMON[i].num + ' ' + POKEMON[i].name);
  newDiv2.appendChild(newContent); // añade texto al div creado.
  newDiv.appendChild(newDiv2);
  newDiv.appendChild(imagen);
  document.body.appendChild(newDiv);
}

// añade la imagen al div creado
// document.body.appendChild(newDiv); // añade los div y su contenido a la pagina
