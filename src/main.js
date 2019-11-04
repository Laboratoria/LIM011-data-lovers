import POTTER from './data/potter/potter.js';

import {mostrarPersonajes} from './data.js';
const soloG = POTTER.filter(g => (g.house === 'Gryffindor'));
const soloH = POTTER.filter(h => (h.house === 'Hufflepuff'));
const soloR = POTTER.filter(r => (r.house === 'Ravenclaw'));
const soloS = POTTER.filter(s => (s.house === 'Slytherin'));

const divTodos = document.getElementById('todos');
const divG = document.getElementById('soloG');
const divH = document.getElementById('soloH');
const divR = document.getElementById('soloR');
const divS = document.getElementById('soloS');



document.querySelector('#todos').innerHTML = mostrarPersonajes(POTTER);

const valorDeBusqueda = document.querySelector('#valorDeBusqueda');



const seleccionar =document.querySelector('.filtrar-casas');
seleccionar.addEventListener('change', (evento) => {
  // borra el input de busqueda al cambiar de option en el select 
  document.getElementById("valorDeBusqueda").value ="";
    
    const opcionSeleccionada = evento.target.value
    
    divTodos.innerHTML ='';
    divG.innerHTML='';
    divH.innerHTML='';
    divR.innerHTML='';
    divS.innerHTML='';
    
    switch(opcionSeleccionada){
        case 'Todos':
          divTodos.innerHTML=mostrarPersonajes(POTTER);

          break;
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


    let dataSeleccionada=''
    let divSeleccionado= '';

    const filtradoSeleccionado = ()=>{
    const valorDeFiltrado = document.querySelector('.filtrar-casas').value;
    divTodos.innerHTML ='';
    divG.innerHTML='';
    divH.innerHTML='';
    divR.innerHTML='';
    divS.innerHTML='';
      switch(valorDeFiltrado){
        case 'Todos':
          dataSeleccionada =POTTER;
          divSeleccionado = divTodos;
          console.log("todos");
          break;
          case 'Gryffindor':
              dataSeleccionada =soloG;
              divSeleccionado = divG;
              console.log("g");
             break;
          case 'Hufflepuff':
              dataSeleccionada =soloH;
              divSeleccionado = divH;
              console.log("h");
             break;
          case 'Ravenclaw':
              dataSeleccionada =soloR;
              divSeleccionado = divR;
              console.log("r");
             break;
          case 'Slytherin':
              dataSeleccionada =soloS;
              divSeleccionado = divS;
              console.log("s");            
      }
    }
    seleccionar.addEventListener('input',filtradoSeleccionado);
    filtradoSeleccionado();

    
export const busqueda =()=>{     
  const divFiltrado = divSeleccionado;
  
  divFiltrado.innerHTML='';
  const textoBuscado = valorDeBusqueda.value.toLowerCase()
  for(let i=0; i<dataSeleccionada.length; i+=1){
    const dataSoloNombres = dataSeleccionada[i].name.toLowerCase();
    const longitudBusqueda = textoBuscado.length;
    const caracterEspacio = dataSoloNombres.indexOf(" ");
    const primerNombre = dataSoloNombres.slice(0,caracterEspacio);
    const segundoNombre = dataSoloNombres.slice(caracterEspacio+1,dataSoloNombres.length);
      if(primerNombre.slice(0,longitudBusqueda)===textoBuscado){
        divFiltrado.innerHTML += `<div id="imagenes" class="casas-card">
          <img class="imagen" src= "${dataSeleccionada[i].image}"/>
          <p>${dataSeleccionada[i].name}</p>
          </div>`
      }
      else if(segundoNombre.slice(0,longitudBusqueda)===textoBuscado){
        divFiltrado.innerHTML += `<div id="imagenes" class="casas-card">
          <img class="imagen" src= "${dataSeleccionada[i].image}"/>
          <p>${dataSeleccionada[i].name}</p>
          </div>`
      }
    }
  if(divFiltrado.innerHTML ===''){
    divFiltrado.innerHTML +=`<p>No se encontró ningún personaje</p>`
  }

}
valorDeBusqueda.addEventListener('keyup',busqueda);
busqueda();
