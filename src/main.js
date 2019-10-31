import POTTER from './data/potter/potter.js';
import {example} from './data.js';

import {mostrarPersonajes} from './data.js';
import {ordenado} from './data.js';


const soloG = POTTER.filter(g => (g.house === 'Gryffindor'));
const soloH = POTTER.filter(h => (h.house === 'Hufflepuff'));
const soloR = POTTER.filter(r => (r.house === 'Ravenclaw'));
const soloS = POTTER.filter(s => (s.house === 'Slytherin'));

document.querySelector('#todos').innerHTML = mostrarPersonajes(POTTER);

const divG = document.getElementById('soloG');
const divH = document.getElementById('soloH');
const divR = document.getElementById('soloR');
const divS = document.getElementById('soloS');
const divTodos = document.getElementById('todos');


const seleccionar =document.querySelector('.filtrar-casas');
seleccionar.addEventListener('change', (evento) => {
    const opcionSeleccionada = evento.target.value
    
    divTodos.innerHTML ='';
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
    
    // const buscar= document.querySelector('#busqueda').value;
    // console.log(buscar);
   
    // const buscar = document.querySelector('#busqueda');
    // const boton = document.querySelector('#clickbu');

    // const pbusq =()=>{
    //   // console.log(buscar.value);
    //   // const texto = buscar.value.toLowerCase()
    //   // for(let i=0; i<POTTER.length; i+=1){
    //   //   const todosNombres = POTTER[i].name.toLowerCase;
    //   // }
    // }
    // boton.addEventListener('click', pbusq);
    // const todosNombres = POTTER[0].name
    // const minusculas = todosNombres.toLowerCase
    // console.log(typeof(POTTER[0].name))