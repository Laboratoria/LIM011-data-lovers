
import POKEMON from './data/pokemon/pokemon.js';

// import { mostrarListaPokemon } from './data.js';

const datosPokemon = (datos) => {
  datos.forEach((poke) => {
    // Creando la vista adelante del Pokemon(numero, nombre e imagen)
    const tarjetaGeneralPokemon = document.createElement('div');
    tarjetaGeneralPokemon.setAttribute('id', 'datos-generales-pokemon');
    const divNumeroPokemon = document.createElement('h4');
    const numeroPokemon = document.createTextNode(poke.num);
    divNumeroPokemon.appendChild(numeroPokemon);
    const divNombrePokemon = document.createElement('div');
    divNombrePokemon.setAttribute('id', 'nombrePokemon');
    const nombrePokemon = document.createTextNode(poke.name);
    divNombrePokemon.appendChild(nombrePokemon);
    const imagenPokemon = document.createElement('img');
    imagenPokemon.setAttribute('src', poke.img);
    const contenedorDatosGenerales = document.querySelector('#vista-adelante-pokemon');
    tarjetaGeneralPokemon.appendChild(divNumeroPokemon);
    tarjetaGeneralPokemon.appendChild(divNombrePokemon);
    tarjetaGeneralPokemon.appendChild(imagenPokemon);
    contenedorDatosGenerales.appendChild(tarjetaGeneralPokemon);

    // Creando la vista atras del Pokemon(caracteristicas)
    const tarjetaCaracteristicasPokemon = document.createElement('div');
    tarjetaCaracteristicasPokemon.setAttribute('id', 'contenedorAtras');
    const etiquetaNombrePokemon = document.createElement('h4');
    const nombrePokemonAtras = document.createTextNode(poke.name);
    etiquetaNombrePokemon.appendChild(nombrePokemonAtras);
    tarjetaCaracteristicasPokemon.appendChild(etiquetaNombrePokemon);
    const parrafoCaracteristicasPokemon = document.createElement('p');
    const arrayCaracteristicas = [`Tipo: ${poke.type}`, `Peso: ${poke.weight}`, `Tamaño: ${poke.height}`, `Debilidades: ${poke.weaknesses}`];
    const contenedorCaracteristicasGenerales = document.querySelector('#vista-detras-pokemon');
    for (let a = 0; a < arrayCaracteristicas.length; a += 1) {
      const saltoLinea = document.createElement('br');
      const caracteristica = document.createTextNode(arrayCaracteristicas[a]);
      parrafoCaracteristicasPokemon.appendChild(saltoLinea);
      parrafoCaracteristicasPokemon.appendChild(caracteristica);
    }
    tarjetaCaracteristicasPokemon.appendChild(parrafoCaracteristicasPokemon);
    contenedorCaracteristicasGenerales.appendChild(tarjetaCaracteristicasPokemon);
  });
  return datosPokemon;
};

datosPokemon(POKEMON);
