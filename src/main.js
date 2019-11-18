// eslint-disable-next-line import/extensions
import POKEMON from './data/pokemon/pokemon.js';

// eslint-disable-next-line import/extensions
import { filtroTipoPokemon, filtroAlfabeticoAZ, filtroAlfabeticoZA, ordenNumerico, busquedaPokemonNombre  } from './data.js';
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
//Plantilla con saber más
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

// selecciona el tipo de pokemon de las opciones
const seleccionTipoPokemon = document.getElementById('pokemon-type');
//Boton en nav para filtro tipo muestra todo
const botonMostrarPantallaFiltro= document.getElementById('boton-pantalla-filtrotipo');
//boton caramelos
const botonMostrarPantallaCaramelos = document.getElementById('boton-pantalla-caramelos');
//pantalla de filtro tipo con todo, para ocultar y mostrar
const pageFiltro = document.getElementById('selector-filtro-wrap');
//pantalla de caramelos
const pageEvolucionCaramelos=document.getElementById('pantalla-caramelos');
//espacio donde muestra la lista de pokemones filtrados
const listaFiltroTipo=document.getElementById('muestra-lista-pokemon');
//busqueda por nombre de pokemon
const inputBusqueda = document.getElementById('busqueda-nombre-pokemon');

const fichaPokemonBuscado=document.getElementById('tarjeta-pokemon-buscado');

inputBusqueda.addEventListener('input', ()=>{
    fichaPokemonBuscado.innerHTML=(showFichaPokemon(busquedaPokemonNombre(POKEMON, inputBusqueda.value.toLowerCase())))
    pageFiltro.style.display='block';
});

seleccionTipoPokemon.addEventListener('click', ()=>{
    if (seleccionTipoPokemon.value === 'Todos'){
        return listaFiltroTipo.innerHTML=showFichaPokemon(POKEMON);
    } else {
    return listaFiltroTipo.innerHTML = showFichaPokemon(filtroTipoPokemon(POKEMON, seleccionTipoPokemon.value));
    }
});
botonMostrarPantallaCaramelos.addEventListener('click', ()=>{
    pageFiltro.style.display='none';
    pageEvolucionCaramelos.style.display='block';
    seleccionTipoPokemon.value = '';
    
});
botonMostrarPantallaFiltro.addEventListener('click', ()=>{
    pageFiltro.style.display='block';
    pageEvolucionCaramelos.style.display='none';
    seleccionTipoPokemon.value='';
    listaFiltroTipo.innerHTML='';
});

const botonOrdenAZ = document.getElementById('az');
botonOrdenAZ.addEventListener('click', ()=>{
    if (seleccionTipoPokemon.value === 'Todos'){
        return listaFiltroTipo.innerHTML=showFichaPokemon(filtroAlfabeticoAZ(POKEMON));
    } else {
        return listaFiltroTipo.innerHTML = showFichaPokemon(filtroAlfabeticoAZ(filtroTipoPokemon(POKEMON, seleccionTipoPokemon.value)));
    }
});
const botonOrdenZA = document.getElementById('za');
botonOrdenZA.addEventListener('click', ()=>{
    if (seleccionTipoPokemon.value === 'Todos'){
        return listaFiltroTipo.innerHTML=showFichaPokemon(filtroAlfabeticoZA(POKEMON));
    } else {
        return listaFiltroTipo.innerHTML = showFichaPokemon(filtroAlfabeticoZA(filtroTipoPokemon(POKEMON, seleccionTipoPokemon.value)));
    }
});

const botonOrdenNumerico = document.getElementById('n');
botonOrdenNumerico.addEventListener('click', ()=>{
    if (seleccionTipoPokemon.value === 'Todos'){
        return listaFiltroTipo.innerHTML=showFichaPokemon(ordenNumerico(POKEMON));
    } else {
        return listaFiltroTipo.innerHTML = showFichaPokemon(ordenNumerico(filtroTipoPokemon(POKEMON, seleccionTipoPokemon.value)));
    }
}); 


