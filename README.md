# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Parte adicional-opcional (extensión)](#6-parte-adicional-opcional-extensión)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)

***

## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender, procesar y mostrar estos datos. Una manera
simple de hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir (a la derecha) una interfaz amigable y comprensible
para el usuario.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

\* Puedes ver el detalle de la data en este [link](https://gist.github.com/lalogf/dd4aa3017a9f8aa8f90dfbca382c4dc9#file-student-json)
y la interfaz construida en este [link](https://app.talento.laboratoria.la/profile/HFOoMpOreBU2psCcjjLg5O2EWEv2).

## 2. Resumen del proyecto

En este proyecto **construirás una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúe a lo que tu usuario necesita.

Como entregable final tendrás una página web que permita a los usuarios
**visualizar, filtrar, ordenar, etc.**.

Te proponemos una serie de datos de diferentes _temáticas_ para que los
explores y decidas con cuál te interesa trabajar. Cada _set_ de datos viene con
información básica sobre los datos y su estructura, y una lista de las
necesidades de los usuarios que proviene de una investigación (_research_)
hecha por el equipo de Laboratoria.

Una vez que elijas, diseña tu proyecto intentando ofrecerle la mejor experiencia
posible para ayudarle a satisfacer sus necesidades.

### Estos son datos que te proponemos:

* [Pokémon](src/data/pokemon/pokemon.json):
  En este set encontrarás una lista con los 251 Pokémon de la región de Kanto
  y Johto, junto con sus respectivas estadísticas usadas en el juego
  [Pokémon GO](http://pokemongolive.com).
  * [Investigación con jugadores de Pokémon Go](/src/data/pokemon/README.md)

* [League of Legends - Challenger leaderboard](src/data/lol/lol.json):
  Este set de datos muestra la lista de campeones en una liga del
  juego League of Legends (LoL).
  * [Investigación con jugadores de LoL](/src/data/lol/README.md)

* [Harry Potter](src/data/potter/potter.json):
  Este set de datos muestra la lista de los personajes del mundo de
  [Harry Potter: Wizards Unite](https://www.wizardingworld.com), junto con sus
  respectivas características mencionadas en la serie de novelas de Harry Potter
  escrita por la autora británica J.K.Rowling.
  * [Investigación con jugadores de Harry Potter: Wizards Unite](/src/data/potter/README.md)


## 3. Objetivos de aprendizaje

El objetivo principal de este proyecto es que, entendiendo las necesidades de
tus usuarios, aprendas a diseñar y construir una interfaz web donde se pueda
visualizar y manipular data.

Revisa la lista y reflexiona sobre los objetivos que conseguiste en el
proyecto anterior. Piensa en eso al decidir tu estrategia de trabajo individual
y de equipo.

### UX

- [x] Diseñar la aplicación pensando y entendiendo al usuario.
- [x] Crear prototipos para obtener _feedback_ e iterar.
- [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
- [x] Planear y ejecutar _tests_ de usabilidad.

### HTML y CSS

- [x] Entender y reconocer por qué es importante el HTML semántico.
- [x] Identificar y entender tipos de selectores en CSS.
- [x] Entender como funciona `flexbox` en CSS.
- [x] Construir tu aplicación respetando el diseño planeado (maquetación).

### DOM

- [x] Entender y reconocer los selectores del DOM (querySelector | querySelectorAll).
- [x] Manejar eventos del DOM. (addEventListener)
- [ ] Manipular dinámicamente el DOM. (createElement, appendchild, innerHTML, value)

### Javascript

- [ ] Manipular arrays (`filter` | `map` | `sort` | `reduce`).
- [ ] Manipular objects (key | value).
- [ ] Entender el uso de condicionales (`if-else` | `switch`).
- [x] Entender el uso de bucles (`for` | `forEach`).
- [ ] Entender la diferencia entre expression y statements.
- [x] Utilizar funciones (parámetros | argumentos | valor de retorno).
- [ ] Entender la diferencia entre tipos de datos atómicos y estructurados.
- [x] Utilizar ES Modules (`import` | `export`).

### Pruebas Unitarias (_testing_)
- [ ] Testear funciones (funciones puras).

### Git y GitHub
- [x] Ejecutar comandos de git (`add` | `commit` | `pull` | `status` | `push`).
- [x] Utilizar los repositorios de GitHub (`clone` | `fork` | gh-pages).
- [ ] Colaborar en Github (pull requests).

### Buenas prácticas de desarrollo
- [x] Organizar y dividir el código en módulos (Modularización).
- [x] Utilizar identificadores descriptivos (Nomenclatura | Semántica).
- [x] Utilizar linter para seguir buenas prácticas (ESLINT).

## 4. Consideraciones generales

* Este proyecto se debe resolver en duplas.
* El proyecto será entregado subiendo tu código a GitHub (`commit`/`push`) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).
* Tiempo: toma como referencia 3 semanas.

## 5. Criterios de aceptación mínimos del proyecto

Los criterios que deberás considerar para saber si has completado este proyecto
son:

### Definición del producto

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario.

### Historias de usuario

Historia 1 (VISTA GENERAL) →→→→ "Yo como jugador de Pokémon GO, quiero poder ver a todos los personajes de la región de Kanto al momento de entrar a la web."

- Criterios de aceptación:

. El usuario entra a la app y tiene una vista de todos los personajes.
. El usuario puede ver todas las características generales de cada pokemon al darle click a la imagen.
. El usuario puede regresar a esta vista de todos los personajes a través de un botón en las otras vistas,
. El usuario puede usar la app desde cualquier dispositivo ya que esta es responsive.

- Definición de terminado:

. Crear una pantalla donde el usuario pueda tener una vista de todos los pokemon con su respectivo nombre e ID.
. Al darle click a cada pokemon aparecerá un hover con sus características.
. Se pasó el test unitario.

Historia 2 (TIPOS+DEBILIDADES) → "Yo como jugador de Pokémon GO, me gustaría ver cada pokemon a través de un filtro de tipos y debilidades"

- Criterios de aceptación:

. El usuario usa el filtro de tipos y de debilidades mediante un desplegable que se encuentra en la parte superior de la pagina
. Se efectúa un filtro y solo se muestran los pokemon del tipo seleccionado según su tipo o debilidad.

- Definición de terminado:

. Los botones tipos y debilidades filtran a los pokemon por su tipo y debilidad respectivamente.
. Hay un botón para regresar a la pantalla principal con todos los pokemon.
. se pasó el test unitario.

Historia 3 (ORDEN) →→→→→→→ "Yo como jugador de Pokémon GO, quiero ver todos los pokemon y poder ordenarlos alfabéticamente o por número de caramelos".

- Criterios de aceptación:

. El usuario elige el botón ORDENAR y selecciona "De la A - Z", "De la Z - A", "+ a - menos caramelos" "- a + más caramelos".
. Los pokemon del tipo seleccionado, se muestran en orden alfabético.
. Todos los pokemon se muestran ordenados por la cantidad de caramelos.

- Definición de terminado:

. El botón ORDENAR da las opciones "De la A - Z", "De la Z - A", "+ a - menos caramelos" "- a + más caramelos".
. Los pokemon se muestran según el orden elegido por el usuario.
. Hay un botón para regresar a la pantalla principal con todos los pokemon.
. Se pasó el test unitario.

Historia 4 (TOP 10) →→→→→→→→→ "Yo como jugador de Pokémon GO, quiero ver información de los pokémon que están en los TOP 10 de frecuencia de aparición."

- Criterios de aceptación:

. El usuario elige el botón TOP 10 Aparición para poder ver los 10 pokemon principales de frecuencia de aparición.

- Definición de terminado:

. El botón TOP 10 Aparición muestra lod 10 pokemon principales de frecuencia de aparición.
. Hay un botón para regresar a la pantalla principal con todos los pokemon.
. Se pasó el test unitario.

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

![prototipo-baja-fidelidad-1] (https://imgur.com/2C9zaXK)
![prototipo-baja-fidelidad-2] (https://imgur.com/IfnbvE0)
![prototipo-baja-fidelidad-responsive-1] (https://imgur.com/OyOaOgM)
![prototipo-baja-fidelidad-responsive-2] (https://imgur.com/hXTnlM0)
![prototipo-baja-fidelidad-responsive-3] (https://imgur.com/qDs4U2O)

#### Prototipo de alta fidelidad

![primer-prototipo-alta-fidelidad] (https://imgur.com/2C9zaXK)
![primer-prototipo-alta-fidelidad-responsive] (https://imgur.com/OyOaOgM)
![segundo-prototipo-alta-fidelidad-1] (https://imgur.com/ylupr5m)
![segundo-prototipo-alta-fidelidad-2] (https://imgur.com/JnECytS)
![segundo-prototipo-alta-fidelidad-responsive] (https://imgur.com/YXnDEXX)


#### Testeos de usabilidad

Realizamos tests con diferentes usuarios, tanto jugadores de pokemon, como los que no conocían mucho del tema.
Iteramos nuestro diseños y por ello hicimos varios cambios, sobretodo en la información fundamental que los usuarios querían
y también cambios en el diseño visual.

Nos guiamos de los feedbacks de los usuarios y realizamos cambios en las características destacadas de los pokemon,
y también realizamos cambios en el diseño visual, como el color, tamaños de las imagenes y textos.

### Introspección de mis objetivos de aprendizaje

* Sé lo que es, para qué sirve, su contexto y cómo se espera que funcione.
* Lo hice en este proyecto y lo puedo explicar.
* Lo puedo volver a hacer en otro contexto/proyecto diferente.
* Qué propones para trabajar la siguiente semana.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
No tienes tiempo ilimitado para trabajar, así es que deberás priorizar.

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.
2. Permitir al usuario interactuar para obtener la infomación que necesita. <!--filtrar y ordenar la data.-->
3. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
4. Que la interfaz siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que  tendrás que escribirlas tú para las funciones que tenga tu código. <!--encargadas de  _procesar_, _filtrar_ y _ordenar_ la data, así como _calcular_
estadísticas.-->

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).

## 6. Parte adicional-opcional (extensión)

Si **terminaste** con todo lo anterior y te queda tiempo, intenta explorar y
completar parte o todo de lo siguiente:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.

* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).

* 100% Coverage de pruebas unitarias.

## 7. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#6-hacker-edition) más arriba.

No se debe utilizar la _pseudo-variable_ `this`.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── pokemon
|  ├── README.md
├── potter
|  ├── README.md
├── lol
|  ├── README.md
├── src
|  ├── data (según con qué data trabajes)
|  |  ├── lol
|  |  |  ├── lol.js
|  |  |  └── lol.json
|  |  ├── pokemon
|  |  |  ├── pokemon.js
|  |  |  └── pokemon.json
|  |  ├── potter
|  |  |  ├── potter.js
|  |  |  └── potter.json
|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
├── test
|  ├── data.spec.js
├── README.md
└── package.json

directory: 9 file: 16
```

### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`. Como ya sabes,
acá va la página que se mostrará al usuario. También nos sirve para indicar
qué script se usará y unir todo lo que hemos hecho.

Encontrarás 1 etiqueta inicial, la cual si deseas puedes borrar y empezar de cero:

```
 <div id="root"></div>
```

### `src/main.js`

Acá escribirás todo el código que tenga que ver con la interacción del DOM
(seleccionar, actualizar y manipular elementos del DOM y eventos). Es decir,
en este archivo deberás invocar a tus funciones exportadas en el boilerplate,
según sea necesario para realizar operaciones como creación de nodos,
registro de manejadores de eventos (_event listeners_ o _event handlers_), ....

En este archivo encontrarás una serie de _sentencias_ `import`
_comentadas_. Para _cargar_ las diferentes fuentes de datos tendrás que
_descomentar_ estas _sentencias_. Cada una de estas sentencias importará un
objeto, el cual ya se encuentra exportado en el boilerplate. Este objeto
contiene la data correspondiente a esa fuente de datos.

Por ejemplo, si "descomentamos" la siguiente línea:

```
 /**
 import LoL from './data/lol/lol.js'
 */
```

La línea quedaría así:

```
import LoL from './data/lol/lol.js'
```

Y ahora tendríamos el objeto `LoL` disponible en nuestro archivo (`src/main.js`).

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos.

Te recomendamos que este archivo contenga toda la funcionalidad que corresponda
a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* Y así sucesivamente, según tu proyecto en particular.

Estos nombres de funciones y de parámetros son solamente referenciales, lo que
decidas depende de tu propia implementación.

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán exportadas en el boilerplate, para
después ser usadas desde el archivo `src/main.js`, al cargar la página, y cada vez
que el usuario interactúe (click, filtrado, ordenado, ...).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo importaremos como un objeto al archivo main.js,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#6-hacker-edition)).

### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.

## 8. Pistas, tips y lecturas complementarias

### Primeros pasos

Antes de empezar a escribir código, debes definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas te
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?
* Toda tu investigación previa debe tener como resultado todas las Historias
  de Usuario de tu proyecto.
* No hagas los prototipos de alta fidelidad de todas tus Historias. Comienza
  solamente por los que se necesiten para tu Sprint 1 (semana 1 de trabajo). Más
  pistas en la guía de organización para el proyecto.

Cuando ya estés lista para codear, te sugerimos empezar de esta manera:

1. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1)
   un `remote` hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. Para ver la interfaz de tu programa en el navegador, usa el comando
  `npm start` para arrancar el servidor web y dirígete a
  `http://localhost:5000` en tu navegador.
6. A codear se ha dicho! :rocket:

***

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
