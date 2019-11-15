// eslint-disable-next-line import/extensions
import POKEMON from './data/pokemon/pokemon.js';

// eslint-disable-next-line import/extensions
import { filtroTipoPokemon, filtroAlfabeticoAZ, filtroAlfabeticoZA, ordenNumerico, busquedaPokemon  } from './data.js';


// selecciona el tipo de pokemon de las opciones
const tipoPokemon = document.getElementById('pokemon-type');
//Boton en nav para filtro tipo muestra todo
const botonMostrarPantallaFiltro= document.getElementById('boton-pantalla-filtrotipo');
//pantalla de filtro tipo con todo, para ocultar y mostrar
const pageFiltro = document.getElementById('selector-filtro-wrap');
//pantalla de caramelos
const pageEvolucionCaramelos=document.getElementById('pantallacaramelos');
//espacio donde muestra la lista de pokemones filtrados
const listaFiltroTipo=document.getElementById('muestralistapokemon');

// const busqueda = document.getElementById('selector-pokemon-name');
const pokemonBuscado = document.getElementById('selector-pokemon-name').value;
// busqueda.addEventListener('keyup', (POKEMON, pokemonBuscado)=>{ let pokemon = POKEMON.
const busqueda =document.getElementById('selector-pokemon-name');
console.log(busquedaPokemon(POKEMON, pokemonBuscado.toLowerCase()));
// busqueda.addEventListener('click', ()=>{
//     document.getElementById('tarjeta-pokemon').innerHTML=showFichaPokemon2(busquedaPokemon(POKEMON, pokemonBuscado));
// });
//evento boton mostrar pantalla filtro
botonMostrarPantallaFiltro.addEventListener('click', ()=>{
    pageFiltro.style.display='block';
    pageEvolucionCaramelos.style.display='none';
    tipoPokemon.value='';
    listaFiltroTipo.innerHTML='';
});
//mostrar lista de pokemones por el tipo
tipoPokemon.addEventListener('click', ()=>{
    listaFiltroTipo.innerHTML=showFichaPokemon(filtroTipoPokemon(POKEMON, tipoPokemon.value));
    if (tipoPokemon.value === 'Todos'){
        listaFiltroTipo.innerHTML=showFichaPokemon(POKEMON);
    };
});
const botonMostrarPantallaCaramelos = document.getElementById('boton-pantalla-caramelos');
botonMostrarPantallaCaramelos.addEventListener('click', ()=>{
    pageFiltro.style.display='none';
    pageEvolucionCaramelos.style.display='block';
});

const botonOrdenAZ = document.getElementById('az');
botonOrdenAZ.addEventListener('click', ()=>{
    listaFiltroTipo.innerHTML=showPicturePokemon(filtroAlfabeticoAZ(filtroTipoPokemon(POKEMON, tipoPokemon.value)));
    if (tipoPokemon.value === 'Todos'){
        listaFiltroTipo.innerHTML=showFichaPokemon(filtroAlfabeticoAZ(POKEMON));
    };
});
const botonOrdenZA = document.getElementById('za');
botonOrdenZA.addEventListener('click', ()=>{
    listaFiltroTipo.innerHTML=showFichaPokemon(filtroAlfabeticoZA(filtroTipoPokemon(POKEMON, tipoPokemon.value)));
    if (tipoPokemon.value === 'Todos'){
        listaFiltroTipo.innerHTML=showFichaPokemon(filtroAlfabeticoZA(POKEMON));
    };
});

const botonOrdenNumerico = document.getElementById('n');
botonOrdenNumerico.addEventListener('click', ()=>{
    listaFiltroTipo.innerHTML=showFichaPokemon(ordenNumerico(filtroTipoPokemon(POKEMON, tipoPokemon.value)));
    if (tipoPokemon.value === 'Todos'){
        listaFiltroTipo.innerHTML=showFichaPokemon(ordenNumerico(POKEMON));
    };
});

//Plantilla Solo imagen y nombre
const showPicturePokemon = (data) => {
    let plantillaPokemon = '';
    data.map(item => {
        plantillaPokemon += `
    <div class ="singlepoke">
        <div id="${item.id}"name="pokemon" class="ficha-pokemon">
            <picture class="fondo-pokemon"><img src="${item.img}"/></picture>
            <p>${item.name} #${item.num}</p>
        </div> 
    </div>`;
    });
return plantillaPokemon;
};
//Plantilla Pokemon con menu saber más
const showFichaPokemon = (data) => {
    let plantillaPokemon = '';
    data.map(item => {
        plantillaPokemon += `
        <div id="${item.id} "name="pokemon" class="ficha-pokemon">
            <picture class="fondo-pokemon"><img src="${item.img}"/></picture>
            <p> ${item.name} ${item.num}</p>
            <p>Tipo: ${item.type.join('  /  ')}</p>
            <p>Debilidades: ${item.weaknesses.join('  /  ')}</p>
            <details id="details" class="details">
            <summary id="summary" class="summary">SABER MÁS</summary>
            <span>Peso: ${item.weight}<br>
            Tamaño: ${item.height}<br>
            Caramelos para Evolucionar: ${item.candy_count}<br>
            Huevo: ${item.egg}<br></span>
            </details>
        </div>`;
    });
    // console.log(plantillaPokemon);
    return plantillaPokemon;
};

// const showFichaPokemon2 = (data) => {
//     let plantillaPokemon = '';
//     data.map(item => {
//         plantillaPokemon = `
//         <div id="${item.id} "name="pokemon" class="ficha-pokemon">
//             <picture class="fondo-pokemon"><img src="${item.img}"/></picture>
//             <p> ${item.name} ${item.num}</p>
//             <p>Tipo: ${item.type.join('  /  ')}</p>
//             <p>Debilidades: ${item.weaknesses.join('  /  ')}</p>
//             <details id="details" class="details">
//             <summary id="summary" class="summary">SABER MÁS</summary>
//             <span>Peso: ${item.weight}<br>
//             Tamaño: ${item.height}<br>
//             Caramelos para Evolucionar: ${item.candy_count}<br>
//             Huevo: ${item.egg}<br></span>
//             </details>
//         </div>`;
//     });
//     // console.log(plantillaPokemon);
//     return plantillaPokemon;
// };
