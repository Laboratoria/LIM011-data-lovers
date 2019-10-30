import POTTER from './data/potter/potter.js';

let templateG = '';
let templateH = '';
let templateR = '';
let templateS = '';

const divG = document.getElementById('soloG');
const divH = document.getElementById('soloH');
const divR = document.getElementById('soloR');
const divS = document.getElementById('soloS');

for(let i=0; i<POTTER.length; i+=1){
    let estoEsHtml = `<div class="imagen-casas">
    <img class="imagen" src= "${POTTER[i].image}"/>
    <p class="nombres-casas">${POTTER[i].name}</p>
    </div>`
    
    switch(POTTER[i].house){
        case 'Gryffindor':
            templateG +=estoEsHtml;
            divG.innerHTML =`<h1>Gryffindor</h1>`+ templateG;
            break;
        case 'Hufflepuff':
            templateH +=estoEsHtml;
            divH.innerHTML = `<h1>Hufflepuff</h1>`+templateH;
            break;
        case 'Ravenclaw':
            templateR +=estoEsHtml; 
            divR.innerHTML = `<h1>Ravenclaw</h1>`+templateR;
            break;
        case 'Slytherin':
            templateS +=estoEsHtml; 
            divS.innerHTML =`<h1>Slytherin</h1>`+templateS;
    }
    };

    const seleccionar =document.querySelector('.filtrar-casas');
    seleccionar.addEventListener('change', (evento) => {
        const opcionSeleccionada = evento.target.value
        divG.innerHTML='';
        divH.innerHTML='';
        divR.innerHTML='';
        divS.innerHTML='';
        switch(opcionSeleccionada){
            case 'Gryffindor':
              divG.innerHTML=templateG;
              break;
            case 'Hufflepuff':
              divH.innerHTML=templateH;
              break;
            case 'Ravenclaw':
              divR.innerHTML=templateR;
              break;
            case 'Slytherin':
              divS.innerHTML= templateS;
        }
        });

    
