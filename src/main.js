/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */
import POTTER from './data/potter/potter.js'
console.log(POTTER);

 
import { showCharacters } from './data.js';
const contentCharacter = document.getElementById('contentCharacter');
let templatePotter = '';
for(let i=0; i<POTTER.length;i++){
    templatePotter += `
    <div class=column>
    <img class=imageCharacter src=${POTTER[i].image}>
    <div>${POTTER[i].name}</div>
    </div>
    `
    contentCharacter.innerHTML = templatePotter;
}



console.log(showCharacters);

/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/  
