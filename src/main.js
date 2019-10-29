import LoL from './data/lol/lol.js'
 
import { example } from './data.js'

const name = document.getElementById('name')

name.innerHTML = Object.values(LoL.data.Aatrox)

console.assert(LoL)
console.log(example);

console.log(LoL);
 

