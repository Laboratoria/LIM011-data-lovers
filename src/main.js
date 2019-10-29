import POTTER from './data/potter/potter.js';

import {mostrarPersonajes} from './data.js';

const dataPotter = POTTER;
const soloG = dataPotter.filter(g => (g.house === 'Gryffindor'));
const soloH = dataPotter.filter(h => (h.house === 'Hufflepuff'));
const soloR = dataPotter.filter(r => (r.house === 'Ravenclaw'));
const soloS = dataPotter.filter(s => (s.house === 'Slytherin'));
document.querySelector('#soloG').innerHTML = `<h1>Gryffindor</h1>`+ mostrarPersonajes(soloG);
document.querySelector('#soloH').innerHTML = `<h1>Hufflepuff</h1>`+ mostrarPersonajes(soloH);
document.querySelector('#soloR').innerHTML = `<h1>Ravenclaw</h1>`+ mostrarPersonajes(soloR);
document.querySelector('#soloS').innerHTML = `<h1>Slytherin</h1>`+ mostrarPersonajes(soloS);
