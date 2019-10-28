import POTTER from './data/potter/potter.js'
import { example } from './data.js';

const baseDatosPotter = POTTER 

const personaje = baseDatosPotter[1]
const ver = personaje.name 
console.log(example);
console.log(POTTER);
console.log(baseDatosPotter.slice(0,1));
const fullNames = baseDatosPotter.map(personaje => `${personaje.name}, ${personaje.gender}`)

console.log(fullNames);

