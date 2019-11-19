import POTTER from './data/potter/potter.js';

import {
  ascendente, genero, filterRole, filterRoleDos, houseUno, search,
} from './data.js';

const contentCharacter = document.querySelector('#contentCharacter');
const filterMenu = document.getElementById('filterMenu');
const imageIcon = document.getElementById('imageIcon');
const selectAlfab = document.getElementById('selectAlfab');
const gender = document.getElementById('gender');
const role = document.getElementById('role');
const house = document.getElementById('house');

const showCharacters = (dataPotter) => {
  dataPotter.forEach((dato) => {
    /*  TARJETA INICIO */
    // Creando la vista de las tarjetas( nombre e imagen)
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    content.setAttribute('class', 'content');

    // PARA EL NOMBRE
    // Crea el div de nombre, le asigna id name,
    // jala el dato por name ingresa a nombrePersonaje en el div
    const divNombrePersonaje = document.createElement('p');
    divNombrePersonaje.setAttribute('class', 'name');
    divNombrePersonaje.innerHTML = dato.name;

    // PARA LA IMAGEN
    const imagenPersonaje = document.createElement('img');
    imagenPersonaje.setAttribute('src', dato.image);
    imagenPersonaje.setAttribute('class', 'imagePersonaje');

    /*  TARJETA MODAL */
    content.addEventListener('click', () => {
      const divModal = document.createElement('div');
      divModal.setAttribute('id', 'modal');
      divModal.setAttribute('class', 'modal');

      const divFlex = document.createElement('div');
      divFlex.setAttribute('id', 'flex');
      divFlex.setAttribute('class', 'flex');
      const divContenidoModal = document.createElement('div');
      divContenidoModal.setAttribute('class', 'contenidoModal');
      const divTitulo = document.createElement('div');
      divTitulo.classList.add('modalHeader', 'flex');

      // escritura titulo
      const tituloCaracteristicas = document.createElement('h2');
      tituloCaracteristicas.setAttribute('id', 'caracteristicasH2');
      // const contenidoTitulo = document.createTextNode('HOLA titulo caracteristicas');
      const contenidoTitulo = document.createTextNode(dato.name);
      tituloCaracteristicas.appendChild(contenidoTitulo);

      // EQUIS
      const spanClose = document.createElement('span');
      spanClose.setAttribute('id', 'close');
      spanClose.setAttribute('class', 'close');
      spanClose.innerHTML = 'X';


      // div MODALBODY
      const divModalBody = document.createElement('div');
      divModalBody.setAttribute('class', 'modalBody');

      //  escritura P
      const parrafoCaracteristicas = document.createElement('p');
      parrafoCaracteristicas.setAttribute('id', 'caracteristicasP');
      // const contenidoCaracteristicas = document.createTextNode('HOLA parrafo caracteristicas');
      // parrafoCaracteristicas.appendChild(contenidoCaracteristicas);

      // llenando las caracterisiticas
      const arrayCaracteristicas = [`Nombre: ${dato.name}`, `Especie: ${dato.species}`, `Genero: ${dato.gender}`, `Casa: ${dato.house}`, `Fecha de nacimiento: ${dato.dateOfBirth}`, `Ascendencia: ${dato.ancestry}`, `Color de ojos: ${dato.eyeColour}`, `Color de cabello: ${dato.hairColour}`, `Patronus: ${dato.patronus}`, `Actor: ${dato.actor}`];
      for (let a = 0; a < arrayCaracteristicas.length; a += 1) {
        const saltoLinea = document.createElement('br');
        const caracteristica = document.createTextNode(arrayCaracteristicas[a]);
        parrafoCaracteristicas.appendChild(saltoLinea);
        parrafoCaracteristicas.appendChild(caracteristica);
      }

      // div MODALFOOTER
      // const divModalFooter = document.createElement('div');
      // divModalFooter.setAttribute('class', 'modalFooter');

      spanClose.addEventListener('click', () => {
        document.body.removeChild(divModal);
      });

      window.addEventListener('click', (event) => {
        if (event.target === divFlex) {
          divModal.style.display = 'none';
        }
      });

      // anidando divs
      divModalBody.appendChild(parrafoCaracteristicas);
      divTitulo.appendChild(tituloCaracteristicas);
      divTitulo.appendChild(spanClose);
      divContenidoModal.appendChild(divTitulo);
      divContenidoModal.appendChild(divModalBody);
      divFlex.appendChild(divContenidoModal);
      divModal.appendChild(divFlex);
      content.appendChild(divModal);
      document.body.appendChild(divModal);
    });

    /*  TARJETA MOSTRAR */
    // LLAMAR VARIABLES AL CONTENT
    content.appendChild(imagenPersonaje);
    content.appendChild(divNombrePersonaje);

    // MOSTRAR EN EL CONTENT HTML
    contentCharacter.appendChild(content);
  });
  return contentCharacter;
};
showCharacters(POTTER);

// Barra Lateral
let open = 0;
imageIcon.addEventListener('click', () => {
  if (open === 0) {
    filterMenu.classList.remove('hide');
    filterMenu.classList.add('show');
    open = 1;
  } else {
    filterMenu.classList.remove('show');
    open = 0;
  }
});
// Fin de Barra Lateral

// OrdenarAZ
selectAlfab.addEventListener('change', (event) => {
  if (event.target.value === '0') {
    // contentCharacter.innerHTML = showCharacters(ascendente(POTTER));
    document.querySelector('#contentCharacter').innerHTML = '';
    showCharacters(ascendente(POTTER));
  } else {
    // contentCharacter.innerHTML = showCharacters(ascendente(POTTER).reverse());
    document.querySelector('#contentCharacter').innerHTML = '';
    showCharacters(ascendente(POTTER).reverse());
  }
});
// Filtrado por genero
/* gender.addEventListener('change', () => {
  const filterGender = genero(POTTER, gender.value);
  contentCharacter.innerHTML = showCharacters(filterGender);
}); */
gender.addEventListener('change', () => {
  document.querySelector('#contentCharacter').innerHTML = '';
  showCharacters(genero(POTTER, gender.value));
});
// Filtrado estudiante profesor
role.addEventListener('change', (event) => {
  // const student = filterRole(POTTER);
  //  const staff = filterRoleDos(POTTER);
  if (event.target.value === 'hogwartsStudent') {
    // contentCharacter.innerHTML = showCharacters(student);
    document.querySelector('#contentCharacter').innerHTML = '';
    showCharacters(filterRole(POTTER));
  } else {
    // contentCharacter.innerHTML = showCharacters(staff);
    document.querySelector('#contentCharacter').innerHTML = '';
    showCharacters(filterRoleDos(POTTER));
  }
});
// Filtrado por casas
/* house.addEventListener('change', () => {
  const chooseHouse = houseUno(POTTER, house.value);
  contentCharacter.innerHTML = showCharacters(chooseHouse);
});
 */
house.addEventListener('change', () => {
  document.querySelector('#contentCharacter').innerHTML = '';
  showCharacters(houseUno(POTTER, house.value));
});
<<<<<<< HEAD

// eslint-disable-next-line vars-on-top
const str = 'casa world, welcome to the universe.';
const n = str.startsWith('casa'); 
console.log(n);
=======
>>>>>>> 9cfd0e82ee20bc9c22412eed4e673750e10d5c04
