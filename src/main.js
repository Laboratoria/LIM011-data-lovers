import POTTER from './data/potter/potter.js';

import {mostrarPersonajes} from './data.js';

const dataPotter = POTTER;
const soloG = dataPotter.filter(g => (g.house === 'Gryffindor'));
const soloH = dataPotter.filter(h => (h.house === 'Hufflepuff'));
const soloR = dataPotter.filter(r => (r.house === 'Ravenclaw'));
const soloS = dataPotter.filter(s => (s.house === 'Slytherin'));
document.querySelector('#soloG').innerHTML = mostrarPersonajes(soloG);
document.querySelector('#soloH').innerHTML = mostrarPersonajes(soloH);
document.querySelector('#soloR').innerHTML = mostrarPersonajes(soloR);
document.querySelector('#soloS').innerHTML = mostrarPersonajes(soloS);
