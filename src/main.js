import POKEMON from './data/pokemon/pokemon.js';

console.log(POKEMON);

let misPokemones = '';
POKEMON.forEach((pintar) => {
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
  document.querySelector('#pintame').innerHTML = misPokemones;
});
/*
const steel = document.getElementById('steel'); 
steel.addEventListener('clic', () => {

const filtroSteel = POKEMON.filter(type => {


document.querySelector('#steel').innerHTML = filtroSteel;
}); */