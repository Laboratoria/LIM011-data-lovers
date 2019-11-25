# Data Lovers
## Objetivos de Aprendizaje

### UX

- [x] Diseñar la aplicación pensando y entendiendo al usuario.
- [x] Crear prototipos para obtener _feedback_ e iterar.
- [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
- [x] Planear y ejecutar _tests_ de usabilidad.

### HTML y CSS

- [ ] Entender y reconocer por qué es importante el HTML semántico.
- [x] Identificar y entender tipos de selectores en CSS.
- [ ] Entender como funciona `flexbox` en CSS.
- [x] Construir tu aplicación respetando el diseño planeado (maquetación).

### DOM

- [x] Entender y reconocer los selectores del DOM (querySelector | querySelectorAll).
- [x] Manejar eventos del DOM. (addEventListener)
- [x] Manipular dinámicamente el DOM. (createElement, appendchild, innerHTML, value)

### Javascript

- [x] Manipular arrays (`filter` | `map` | `sort` | `reduce`).
- [x] Manipular objects (key | value).
- [x] Entender el uso de condicionales (`if-else` | `switch`).
- [x] Entender el uso de bucles (`for` | `forEach`).
- [ ] Entender la diferencia entre expression y statements.
- [x] Utilizar funciones (parámetros | argumentos | valor de retorno).
- [ ] Entender la diferencia entre tipos de datos atómicos y estructurados.
- [x] Utilizar ES Modules (`import` | `export`).

### Pruebas Unitarias (_testing_)
- [x] Testear funciones (funciones puras).

### Git y GitHub
- [x] Ejecutar comandos de git (`add` | `commit` | `pull` | `status` | `push`).
- [x] Utilizar los repositorios de GitHub (`clone` | `fork` | gh-pages).
- [x] Colaborar en Github (pull requests).

### Buenas prácticas de desarrollo
- [x] Organizar y dividir el código en módulos (Modularización).
- [ ] Utilizar identificadores descriptivos (Nomenclatura | Semántica).
- [x] Utilizar linter para seguir buenas prácticas (ESLINT).


### Definición del producto
Página dirigida a jugadores que recien se inician en el juego de pokemon go y que desean coleccionar a todos los pokemon de la region Kanto.
Sexo y edad indistinta.

#### Que problema resuelve
Que el usuario encuentre  información que necesita, como tipos de pokemon (con sus características), cantidad de caramelos que necesitan, sus debilidades, los top 10 de mayor frecuencia de aparición, podrán ordenarlos de  forma alfabética, en un solo lugar, y que la información sea clara y precisa para poder coleccionar los pokemon de la region Kanto en el juego de pokemon go.

#### Proceso de diseño
#### 1. Descubrimiento e investigacion
Identificamos las necesidades de los usuarios, y confirmamos que tuvieramos toda la informacion en la data que se nos entregó, tambien realizamos busquedas en la web para tener una idea de lo que ya existia en otras paginas (analisis de la competencia). 

#### 2. Sintesis y definicion
#### Historias de usuario
![image](https://github.com/MelissaCcoyllo/LIM011-data-lovers/blob/master/src/img/historias%20de%20usuario.jpeg)

De acuerdo a nuestros conocimientos en pokemon go,  nos pusimos a pensar ¿qué información buscaría un  jugador que se está iniciando o tenga menos de un año jugando pokemon go? Nos ponemos en la posición del usuario y empezamos hacer un brainstorming apoyándonos de las historias de usuarios y decidimos mostrar los tipos de pokemon, sus debilidades, cantidad de caramelos que necesitan, un buscador y que se puedan ordenar alfabeticamente.

#### 3. Ideacion
Utilizando la herramienta crazy eights
![image](https://github.com/MelissaCcoyllo/LIM011-data-lovers/blob/pokemon-datalovers/src/img/Crazy-eights.jpg)

#### 4. Prototipado
#### Prototipo de baja fidelidad
Prototipo para Desktop

![image](https://github.com/MelissaCcoyllo/LIM011-data-lovers/blob/pokemon-datalovers/src/img/prototipado1.jpeg)
![image](https://github.com/MelissaCcoyllo/LIM011-data-lovers/blob/pokemon-datalovers/src/img/prototipado2.jpeg)
![image](https://github.com/MelissaCcoyllo/LIM011-data-lovers/blob/pokemon-datalovers/src/img/prototipado3.jpeg)

Prototipo para Celular

![image](https://github.com/NataliTC/LIM011-data-lovers/blob/pokemon-datalovers/src/img/prototipado%20celular.jpg)

#### Prototipo de alta fidelidad
Prototipo para Desktop
https://www.figma.com/proto/KI1RbmIBszM3HQiwv6dolt/Pokemon-DataLovers?node-id=8%3A1&scaling=scale-down

Prototipo para Celular
https://www.figma.com/file/KI1RbmIBszM3HQiwv6dolt/Pokemon-DataLovers?node-id=20%3A2


#### 5. User testing
#### Testeos de usabilidad
Se pidió a 6 usuarias (4 de ellas sabian sobre pokemon) que nos brindaran su opinion acerca de nuestro prototipado.

#### Problemas de usabilidad detectados
1. En la primera vista la observación de las usuarias fue que las dos opciones (Atrápalos ya! y Pokemon Top 10) tengan apariencia de botón, ya que nuestra propuesta solo contenia la palabra subrayada, por lo que no se comprendía que era un botón.
2. Dentro de la opción Pokemon top10, las usuarias comprendían que era un botón relacionado a los 10 mejores pokemones cuando en realidad lo que mostrabamos era los 10 pokemones de mayor frecuencia, por ende cambiamos el nombre del botón a Frecuencia de Aparición.
3. Al dar click en el botón Atrápalos ya!, nosotras proponíamos una segunda vista de la relación de pokemones con sus características y al lado izquierdo de la pantalla mostrábamos dos menús estáticos de tipos y de caramelos, a lo que las usuarias indicaron que sería mejor que esos menús sean desplegables.
4. Las usuarias también nos indicaron que necesitarian una barra para buscar por nombre el pokemon de su preferencia.
5. Que el botón de contactanos que se mostraba en el footer, sea un botón funcional, por ese motivo lo cambiamos a Descarga aquí tu app.

#### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

![image](https://github.com/MelissaCcoyllo/LIM011-data-lovers/blob/pokemon-datalovers/src/img/pagina1celular.jpg)
![image](https://github.com/MelissaCcoyllo/LIM011-data-lovers/blob/pokemon-datalovers/src/img/pagina2celular.jpg)
![image](https://github.com/MelissaCcoyllo/LIM011-data-lovers/blob/pokemon-datalovers/src/img/pagina3celular.jpg)

Responsive para iphone
#### Pruebas unitarias

![image](https://github.com/MelissaCcoyllo/LIM011-data-lovers/blob/pokemon-datalovers/src/img/test.jpg)

### Contenido de referencia

#### Diseño de experiencia de usuario (User Experience Design)

* Investigación con usuarios / entrevistas
* Principios de diseño visual

#### Desarrollo Front-end

* Unidad de testing en curso de JavaScript en LMS.
* Unidad de arreglos en curso de JavaScript en LMS.
* Unidad de objetos en curso de JavaScript en LMS.
* Unidad de funciones en curso de JavaScript en LMS.
* Unidad de DOM en curso de Browser JavaScript en LMS.
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)
* [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
* [expresión vs sentencia](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [datos atomicos vs datos estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)

#### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

#### Organización del Trabajo

* [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s).
  Ojo que Cris no diferencia _Definición de terminado_ de _Criterios de
  Aceptación_ y nosotros sí lo haremos. Más detalles en la guía.
* [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)
* [Guía para Data Lovers](https://docs.google.com/presentation/d/e/2PACX-1vQhx9D36NjpH-Daea-ITPUDUzNL8ZiNAprq_7b5PSUrfutk45tEtaOLz2lmd8f54_5jX1hypDM8f8SM/pub?start=false&loop=false&delayms=60000)

***


