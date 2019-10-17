# Data Lovers

## Índice

- [Índice](#índice)
- [Preámbulo](#preámbulo)
- [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
- [Consideraciones generales](#consideraciones-generales)
- [Requerimientos del proyecto](#requerimientos-del-proyecto)
- [Contenido de referencia](#contenido-de-referencia)

***

## Preámbulo

Según un estudio de IBM, el 90% de la data que existe hoy ha sido creada durante 
los últimos dos años. Cada día generamos 2.5 trillones de bytes de datos, una 
cifra sin precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas 
grandes cantidades de datos se conviertan en **información** fácil de leer para 
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de 
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte 
izquierda se puede construir una interfaz amigable y entendible por el usuario 
al lado derecho.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

\* Puedes ver el detalle de la data en este [link](https://gist.github.com/lalogf/dd4aa3017a9f8aa8f90dfbca382c4dc9#file-student-json)
y la interfaz construida en este [link](https://app.talento.laboratoria.la/profile/HFOoMpOreBU2psCcjjLg5O2EWEv2).

## Objetivos de aprendizaje

El objetivo principal de este proyecto es que aprendas a diseñar y construir 
una interfaz web donde se pueda visualizar y manipular data, entendiendo lo que 
el usuario necesita a través de las historias de usuario.

Dicho en palabras sencillas, aprenderás a:

- Trabajar con **historias de usuario**, y crear en equipo las **definiciones 
de terminado (_definition of done_)** y los **criterios de aceptación** en el 
proceso de organización y planificación del trabajo.
- Crear productos que sigan los **principios básicos de diseño visual** y las 
**heurísticas de usabilidad**.
- Iterar el diseño del producto, basándote en los resultados de los **tests de 
usabilidad**.
- Manipular **_arreglos_ (_arrays_) y _objetos_ (_objects_)**.
- **Manipular el DOM** (agregar elementos dinámicamente basados en la data).
- **Manejar eventos del DOM** para permitir interacción con el usuario 
(filtrado, ordenado, ...).
- Entender los beneficios y complejidades de **trabajar en equipo** en un 
ambiente de alta incertidumbre.

## Consideraciones generales

- Este proyecto se debe resolver en duplas.
- Una integrante deberá _forkear_ y _clonar_ este repositorio; luego, su 
compañera, deberá _forkear_ y _clonar_ a la anterior.
- Para poder interactuar con la página, al iniciar sesión deberán utilizar 
como usuario y contraseña LABORATORIA.
- Antes de comenzar, conversen sobre cómo les fue a cada una en el proyecto 
anterior para que puedan entender mejor cómo organizarse. No caigan en el error 
de separar las tareas en función a lo que ya sabes hacer o con lo que te 
sientas más cómoda. Recuerden que acá están para aprender, no para "entregar" 
proyectos solamente.
- El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).
- Desarrollar una historia de usuario hasta completarla, es decir, que se cumplen 
**todos** sus _criterios de aceptación_ + **todas** su _definición de terminado_.
- El tiempo sugerido para presentar este proyecto es de aproximadamente 3 
semanas (3 sprints):

  | Tiempos           | Fechas         |
  | :---------------: | :------------: |
  | **1er Sprint**    | 24/06 al 28/07 |
  | **2do Sprint**    | 28/07 al 05/07 |
  | **3er Sprint**    | 05/06 al 12/07 |

  Recuerda que en cada sprint deberás realizar las siguientes actividades:

  - Definir colaborativamente las _definiciones de terminado_ y _criterios 
  de aceptación_ por cada historia de usuario a desarrollar en cada sprint.
  - _Sprint planning_.
  - _Trabajo (dailys)_.
  - _Demo_.
  - _Retrospectiva_.
 

## Requerimientos del proyecto

Esta vez te proponemos una serie de datos de diferentes _temáticas_ para que 
exploren y decidan en equipo con cual trabajar. Por cada una encontrarás las 
historias de usuario a implementar:

**League of Legends (LOL)**

El set de datos de [League of Legends - Challenger leaderboard](src/data/lol/) 
muestra la lista de jugadores en una liga del 
juego [League of Legends](https://play.lan.leagueoflegends.com/es_MX) (LoL), 
puedes revisar la documentación de su API en este [link](https://developer.riotgames.com/api-methods/).
Si _como equipo_ deciden trabajar con esta data deberán implemantar las siguientes historias de usuario:

- Como usuaria quiero poder loguearme para acceder al sitio web.
- Como usuaria quiero poder ver a todos los campeones al ingresar a la página 
para saber que personajes existen.
- Como usuaria quiero poder elegir un campeón para ver sus características más 
relevantes.
- Como usuaria quiero poder ordenar por orden alfabético (A-Z y Z-A) y por daño 
de ataque (_attackdamage_) de manera ascendente (menor a mayor) o descendente 
(mayor a menor) a los campeones para poder ubicarlos fácilmente y saber cuál es 
el más poderoso.
- Como usuaria quiero poder filtrar a los campeones por tipo (_tags_) para saber 
quiénes y cuántos son de cada tipo.
- Como usuaria quiero poder ver los campeones, cantidad y promedio de daño por 
cada tipo de campeón.

**Pokémon**

En este set encontrarás una lista con los 151 [Pokémon](src/data/pokemon/) de la 
región de Kanto, junto con sus respectivas estadísticas usadas en el 
juego [Pokémon GO](https://www.pokemongolive.com). Si _como equipo_ deciden 
trabajar con esta data deberán implementar las siguientes historias de usuario:

- Como usuaria quiero poder loguearme para acceder al sitio web.
- Como usuaria quiero poder ver a todos los pokemones al ingresar a la página 
para saber cuántos tengo y cuántos me faltan atrapar.
- Como usuaria quiero poder elegir un pokemon para ver sus características más 
relevantes.
- Como usuaria quiero poder ordenar por orden alfabético (A-Z y Z-A) y frecuencia 
de aparición (_spawn_) de manera ascendente (menor a mayor) o descendente (mayor 
a menor) a los pokemones para poder ubicarlos fácilmente y saber cuáles son los 
más difíciles de atrapar.
- Como usuaria quiero poder filtrar a los pokemones por tipo y debilidades para 
saber quiénes y cuántos son de cada tipo y tienen esa debilidad.
- Como usuaria quiero poder obtener el porcentaje de los pokemones que aparecen 
en los diferentes tipos de huevo para saber qué huevos eclosionar.

### Planificación (Agile-Scrum)

En este proyecto te hemos dado las historias de usuario. Éstas representan los 
requerimientos y funcionalidades que desea el usuario final. Para su proceso de 
planificación, deberán definir colaborativamente los _criterios de aceptación_ 
y _definiciones de terminado_ específicos que permitan considerar a la _historia 
de usuario_ desarrollada como válida y aceptada por el usuario final.

Para realizar el seguimiento del desarrollo de las historias de usuario 
utilizarás [issues](https://help.github.com/en/articles/about-issues) y 
[project](https://help.github.com/en/articles/about-project-boards) en 
Github. No dudes en solicitar ayuda a tus coaches.

### UX (Diseño de experiencia de usuario)

Antes de iniciar a codear, debes entender el problema que quieres solucionar 
y cómo tu aplicación lo soluciona para ello:

- Primero trabaja tu prototipo de baja fidelidad con papel y lápiz (blanco y 
negro) para la vista mobile y desktop.
- Luego valida esta solución con una compañera (pedir feedback).
- Toma lo aprendido al momento de validar tu primer prototipo y desarrolla un 
nuevo prototipo de alta fidelidad usando [Figma](https://www.figma.com/) para 
la vista mobile y desktop.
- Recuerda utilizar la identidad gráfica (colores, tipografía, etc) 
correspondiente a la data que elijas.
- Deberás exportar tu diseño a [Zeplin](https://zeplin.io/) y utilizar las 
especificaciones de estilo que te dé Zeplin al momento de implementar tus 
diseños en código.
- En este proyecto te damos el prototipo final del 
[login en figma](https://www.figma.com/file/awZfJWfpAioeanwhlcrsjSjc/Data-lovers?node-id=1%3A2) 
el cual debe ser replicado en exactitud (_pixel perfect_).
- Elaborar el readme del proyecto.

`README.md`:
Debe contener lo siguiente:

- Un título con el nombre de tu proyecto.
- Un resumen de 1 o 2 líneas de qué se trata tu proyecto e indicar el usuario 
y la contraseña para utilizar el Demo.
- La imagen final de tu proyecto.
- Investigación UX:
  - Explicar quiénes son los usuarios y los objetivos en relación con el 
  producto.
  - Explicar cómo el producto soluciona los problemas/necesidades de dichos 
  usuarios.
  - Luego colocarás la foto de tu primer prototipo de baja fidelidad (mobile 
  y desktop) en papel.
  - Agregar un resumen del feedback recibido indicando las mejoras a realizar.
  - Imagen y link del prototipo de alta fidelidad final (mobile y desktop) en 
  Figma.

### Front-end

#### Visualmente (HTML5 y CSS3)

Deberás maquetar de forma exacta el prototipo final que hiciste en Figma 
utilizando HTML5 y CSS3.

A continuación describimos los archivos que utilizarás:

**`src/index.html`**:

En este archivo va el contenido que se mostrará al usuario (esqueleto HTML). 
Encontrarás 3 etiquetas iniciales:

- `<header>`: encabezado de tu proyecto.
- `<main>`: contenido principal de tu proyecto.
- `<footer>`: pie de página de tu proyecto.

También encontrarás una serie de _etiquetas_ (_tags_) `<script>` _comentadas_.
Para _cargar_ las diferentes fuentes de datos tendrás que _descomentar_ estas
_etiquetas_. Cada uno estos scripts asignará una variable global con la data 
correspondiente 
al set de datos selecionado.

Por ejemplo, si "descomentamos" la siguiente línea:

```html
<!-- <script src="./data/worldbank/worldbank.js"></script> -->
```

La línea quedaría así:

```html
<script src="./data/worldbank/worldbank.js"></script>
```

Y ahora tendríamos la variable global `WORLDBANK` disponible en nuestros otros
scripts (como `src/data.js` o `src/main.js`) prueba que funciona en cada 
archivo con :

```js
console.log(WORLDBANK);
```

**`src/style.css`**:

Este archivo debe contener las reglas de estilo. Queremos que escribas tus 
propias reglas, por eso NO está permitido el uso de frameworks de CSS3 (Bootstrap, 
materialize, etc).

#### Funcionalmente (JavaScript ES6 - pruebas unitarias)

- La lógica del proyecto debe estar implementada completamente en JavaScript (ES6).
- En este proyecto NO está permitido usar librerías o frameworks, sólo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).
- No se debe utilizar la _pseudo-variable_ `this`.

Vamos a tener 2 archivos JavaScript separando responsabilidades, a continuación 
indicamos qué harás en cada archivo:

 **`src/main.js`**

En este archivo escribirás todo tu código que tenga que ver con mostrar los 
datos en la pantalla. Con esto nos referimos básicamente a la interacción 
con el DOM. Operaciones como creación de nodos, registro de manejadores de 
eventos (_event listeners_ o _event handlers_), ....

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para el equipo.

**`src/data.js`**

En este archivo escribirás todo el código que contenga las funcionalidades
descritas en las historias de usuario. Estas funciones, que representan lo
que el usuario necesita, deben ser [funciones puras](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d) 
e independientes del DOM.

**`src/data`**

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente de datos, y dentro de cada carpeta dos archivos: 
uno con la extensión `.js` y otro `.json`. Ambos archivos contienen la misma 
data.

- Inicialmente solo usarás el archivo con extensión `.js`.
- Cuando tu proyecto ya esté completado, en lugar de consumir la data desde 
un archivo con extensión`.js` lo harás desde el archivo con extensión`.json` 
utilizando [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API).

**`test/cipher.spec.js`**:

En este archivo tendrás que completar las pruebas unitarias de las funciones
implementadas en `data.js` utilizando **Jest**.
Recuerda que deberás configurar tu ambiente de trabajo para trabajar con esta 
herramienta.
Tus pruebas unitarias deben dar un 70% en _coverage_ (cobertura), _statements_
(sentencias), _functions_ (funciones) y _lines_ (líneas); y un mínimo del 50% 
de _branches_ (ramas).

## Contenido de referencia

### Diseño de experiencia de usuario (User Experience Design)

- Unidad de fundamentos de diseño visual de Visual Desing en LMS.
- [Heurística de usabilidad](https://lms.laboratoria.la/cohorts/lim-2019-05-bc-core-lim010/courses/product-design/03-usability-and-accessibility/00-usability)

### Desarrollo Front-end

- Unidad de testing en curso de JavaScript en LMS.
- Unidad de arreglos en curso de JavaScript en LMS.
- Unidad de objetos en curso de JavaScript en LMS.
- Unidad de funciones en curso de JavaScript en LMS.
- Unidad de DOM en curso de Browser JavaScript en LMS.
- [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
- [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
- [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
- [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
- [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
- [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
- [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
- [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
- [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [json.org](https://json.org/json-es.html)

### Herramientas

- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [GitHub Pages](https://pages.github.com/)
- [Node.js](https://nodejs.org/)
- [Jest](https://jestjs.io/)

### Organización del Trabajo:
* [Guía para Data Lovers](https://docs.google.com/presentation/d/e/2PACX-1vQhx9D36NjpH-Daea-ITPUDUzNL8ZiNAprq_7b5PSUrfutk45tEtaOLz2lmd8f54_5jX1hypDM8f8SM/pub?start=false&loop=false&delayms=60000)
- [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s)
- [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)
- [Definiciones de terminado](https://www.scrum.org/resources/blog/definicion-de-terminado-done)
- [Criterios de aceptación](https://pabloquilca.com/criterios-de-aceptacion/)
- [Github plannig](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
