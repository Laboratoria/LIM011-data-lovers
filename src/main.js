/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import POTTER from './data/potter/potter.js' */
 import LoL from './data/lol/lol.js'
 

import { example } from './data.js';

// import lol from './data/lol/lol.js';

console.log(example);

/*
 * console.log(POKEMON);
 * console.log(POTTER);*/

 console.log(LoL)

 const lolData = LoL.data;
//  const $root = document.querySelector('#root');
 
 const playing = (data) => {
    let almacenar = '';
    for (let i = 0; i < data.length; i++) {
           let item = `
           <div class="personajes" name="id" id="${data[i].id}">
           <img class="img" src='${data[i].splash}'/>
           <p class="name">${data[i].name}</p>
         </div>`;
      almacenar += item;
    }
    return almacenar;
  };

  document.querySelector('#root').innerHTML = playing(lolData);
