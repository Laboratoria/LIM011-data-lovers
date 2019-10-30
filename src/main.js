import POTTER from './data/potter/potter.js';
import {example} from './data.js';

import {mostrarPersonajes} from './data.js';


const soloG = POTTER.filter(g => (g.house === 'Gryffindor'));
const soloH = POTTER.filter(h => (h.house === 'Hufflepuff'));
const soloR = POTTER.filter(r => (r.house === 'Ravenclaw'));
const soloS = POTTER.filter(s => (s.house === 'Slytherin'));
document.querySelector('#soloG').innerHTML =  mostrarPersonajes(soloG);
document.querySelector('#soloH').innerHTML =  mostrarPersonajes(soloH);
document.querySelector('#soloR').innerHTML =  mostrarPersonajes(soloR);
document.querySelector('#soloS').innerHTML =  mostrarPersonajes(soloS);

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
          divG.innerHTML=`<h1 class="titulos">Gryffindor</h1>`+mostrarPersonajes(soloG);
          break;
        case 'Hufflepuff':
          divH.innerHTML=`<h1 class="titulos">Hufflepuff</h1>`+mostrarPersonajes(soloH);
          break;
        case 'Ravenclaw':
          divR.innerHTML=`<h1 class="titulos">Ravenclaw</h1>`+mostrarPersonajes(soloR);
          break;
        case 'Slytherin':
          divS.innerHTML=`<h1 class="titulos">Slytherin</h1>`+mostrarPersonajes(soloS);
    }
    });
