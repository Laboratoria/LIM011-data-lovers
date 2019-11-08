// eslint-disable-next-line import/extensions
import POKEMON from './data/pokemon/pokemon.js';

// eslint-disable-next-line import/extensions
import { showPokemon, filtroTipoPokemon } from './data.js';

const contenedorPokemon = document.getElementById('muestrapokemon').innerHTML = showPokemon(POKEMON);

console.log(filtroTipoPokemon(POKEMON, 'Electric'));

// CALCULAR DATOS DE EVOLUCION

const btnCalculate = document.getElementById('btn-calculate');
btnCalculate.addEventListener('click', (e) => {  
const validate = (string) => {
string = string.toLowerCase();
let stringValidate = string.charAt(0).toUpperCase() + string.slice(1);
return stringValidate;
};
const namePokemon = validate(document.getElementById('name-pokemon').value);
const candyCount = document.getElementById('candy-count').value;
const resultado = pokemon.computeStats(data, namePokemon, candyCount); // data resultado   
e.preventDefault();
const plantillaResultado = (data) => {
let respuesta;
for (let i = 0; i < data.length; i++) {
if (data[i].pokemonFirstCandy === undefined) {
respuesta = `
<h1>Tu pokemon ya tuvo todas sus evoluciones :</h1>
<p>${data[i].pokemonFirstName}</p>
<img class="img-res" src='${data[i].pokemonFirstImg}'>
<p> Te sobra ${data[i].pokemonFirstCandyInput}</p>`;
} else {
if (data[i].pokemonFirstCandyInput < data[i].pokemonFirstCandy) {
respuesta = `
<h1>Tu pokemon  es :</h1>
<p>${data[i].pokemonFirstName}</p>
<img class="img-res" src='${data[i].pokemonFirstImg}'>
<h1> Tienes  ${data[i].pokemonFirstCandyInput} dulces, te faltan  ${data[i].candyEvolution} para evolucionar a :</h1>                
<p>${data[i].pokemonEvolutionName}</p>
<img class="img-res" src='${data[i].pokemonEvolutionImg}'>`;
} else {
respuesta = `
<h1>Tu pokemon  es :</h1>
<p>${data[i].pokemonFirstName}</p>
<img class="img-res" src='${data[i].pokemonFirstImg}'>
<h1>Este ya debio evolucionar a:</h1>                                    
<p>${data[i].pokemonEvolutionName}</p>
<img class="img-res" src='${data[i].pokemonEvolutionImg}'>
<h1>Tienes ${data[i].pokemonFirstCandyInput} dulces , te sobran  ${data[i].candyEvolution} para la siguiente evolcion</h1>
`;
}
}
}
return respuesta;
};
calculateEvolution.style.display = 'none';
evolutionResult.style.display = 'block';
resultPokemon.innerHTML = plantillaResultado(resultado);

btnNew.addEventListener('click', () => {
limpiar();
calculateEvolution.style.display = 'block';
evolutionResult.style.display = 'none';
});  
});
const limpiar = () => {
document.getElementById('form').reset();
};