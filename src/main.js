import POTTER from './data/potter/potter.js';
import {example} from './data.js';

import {mostrarPersonajes} from './data.js';


const soloG = POTTER.filter(g => (g.house === 'Gryffindor'));
const soloH = POTTER.filter(h => (h.house === 'Hufflepuff'));
const soloR = POTTER.filter(r => (r.house === 'Ravenclaw'));
const soloS = POTTER.filter(s => (s.house === 'Slytherin'));
document.querySelector('#soloG').innerHTML = `<h1>Gryffindor</h1>`+ mostrarPersonajes(soloG);
document.querySelector('#soloH').innerHTML = `<h1>Hufflepuff</h1>`+ mostrarPersonajes(soloH);
document.querySelector('#soloR').innerHTML = `<h1>Ravenclaw</h1>`+ mostrarPersonajes(soloR);
document.querySelector('#soloS').innerHTML = `<h1>Slytherin</h1>`+ mostrarPersonajes(soloS);

const divG = document.getElementById('soloG');
const divH = document.getElementById('soloH');
const divR = document.getElementById('soloR');
const divS = document.getElementById('soloS');


const seleccionar =document.querySelector('.filtrar-casas');
seleccionar.addEventListener('change', (evento) => {
    const opcionSeleccionada = evento.target.value
    divG.innerHTML='';
    divH.innerHTML='';
    divR.innerHTML='';
    divS.innerHTML='';
    switch(opcionSeleccionada){
        case 'Gryffindor':
          divG.innerHTML=mostrarPersonajes(soloG);
          break;
        case 'Hufflepuff':
          divH.innerHTML=mostrarPersonajes(soloH);
          break;
        case 'Ravenclaw':
          divR.innerHTML=mostrarPersonajes(soloR);
          break;
        case 'Slytherin':
          divS.innerHTML=mostrarPersonajes(soloS);
    }
    });
