# Data Lovers

## Índice

* [1. Definición del producto](#1-definición-del-producto)
* [2. Historias de usuario](#2-historias-de-usuario)
* [3. Diseño de la Interfaz de Usuario](#3-diseño-de-la-interfaz-de-usuario)
* [4. Testeos de usabilidad](#4-testeos-de-usabilidad)
* [5. Objetivos de aprendizaje](#5-objetivos-de-aprendizaje)

***

## 1. Definición del producto

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario.

## 2. Historias de usuario

### Historia 1 (VISTA GENERAL) 

"Yo como jugador de Pokémon GO, quiero poder ver a todos los personajes de la región de Kanto al momento de entrar a la web."

#### Criterios de aceptación:

- El usuario entra a la app y tiene una vista de todos los personajes.
- El usuario puede ver todas las características generales de cada pokemon al darle click a la imagen.
- El usuario puede regresar a esta vista de todos los personajes a través de un botón en las otras vistas,
- El usuario puede usar la app desde cualquier dispositivo ya que esta es responsive.

#### Definición de terminado:

- Crear una pantalla donde el usuario pueda tener una vista de todos los pokemon con su respectivo nombre e ID.
- Al darle click a cada pokemon aparecerá un hover con sus características.
- Se pasó el test unitario.

### Historia 2 (TIPOS+DEBILIDADES) 

"Yo como jugador de Pokémon GO, me gustaría ver cada pokemon a través de un filtro de tipos y debilidades"

#### Criterios de aceptación:

- El usuario usa el filtro de tipos y de debilidades mediante un desplegable que se encuentra en la parte superior de la pagina
- Se efectúa un filtro y solo se muestran los pokemon del tipo seleccionado según su tipo o debilidad.

#### Definición de terminado:

- Los botones tipos y debilidades filtran a los pokemon por su tipo y debilidad respectivamente.
- Hay un botón para regresar a la pantalla principal con todos los pokemon.
- Se pasó el test unitario.

### Historia 3 (ORDEN) 

"Yo como jugador de Pokémon GO, quiero ver todos los pokemon y poder ordenarlos alfabéticamente o por número de caramelos".

#### Criterios de aceptación:

- El usuario elige el botón ORDENAR y selecciona "De la A - Z", "De la Z - A", "+ a - menos caramelos" "- a + más caramelos".
- Los pokemon del tipo seleccionado, se muestran en orden alfabético.
- Todos los pokemon se muestran ordenados por la cantidad de caramelos.

#### Definición de terminado:

- El botón ORDENAR da las opciones "De la A - Z", "De la Z - A", "+ a - menos caramelos" "- a + más caramelos".
- Los pokemon se muestran según el orden elegido por el usuario.
- Hay un botón para regresar a la pantalla principal con todos los pokemon.
- Se pasó el test unitario.

### Historia 4 (TOP 10)

"Yo como jugador de Pokémon GO, quiero ver información de los pokémon que están en los TOP 10 de frecuencia de aparición."

#### Criterios de aceptación:

- El usuario elige el botón TOP 10 Aparición para poder ver los 10 pokemon principales de frecuencia de aparición.

#### Definición de terminado:

- El botón TOP 10 Aparición muestra lod 10 pokemon principales de frecuencia de aparición.
- Hay un botón para regresar a la pantalla principal con todos los pokemon.
- Se pasó el test unitario.

## 3. Diseño de la Interfaz de Usuario

### Prototipo de baja fidelidad

<p align="center"><img src="https://i.imgur.com/hXTnlM0.jpg" width="700" height="420"></p>
<p align="center">Prototipo responsive de baja fidelidad #1<p align="center">

<p align="center"><img src="https://i.imgur.com/qDs4U2O.jpg" width="700" height="613"></p>
<p align="center">Prototipo responsive de baja fidelidad #2<p align="center">

<p align="center"><img src="https://i.imgur.com/IfnbvE0.jpg" width="420" height="680"></p>
<p align="center">Prototipo de baja fidelidad de las características del pokemon<p align="center">

### Prototipo de alta fidelidad

<p align="center"><img src="https://i.imgur.com/2C9zaXK.jpg" width="700" height="420"></p>
<p align="center">Prototipo de alta fidelidad<p align="center">

<p align="center"><img src="https://i.imgur.com/OyOaOgM.jpg" width="588" height="560"></p>
<p align="center">Primer prototipo responsive de alta fidelidad<p align="center">

<p align="center"><img src="https://i.imgur.com/ylupr5m.jpg" width="700" height="420"></p>
<p align="center">Segundo prototipo de alta fidelidad #1<p align="center">

<p align="center"><img src="https://i.imgur.com/JnECytS.jpg" width="700" height="420"></p>
<p align="center">Segundo prototipo de alta fidelidad #2<p align="center">

<p align="center"><img src="https://i.imgur.com/HWroNKm.jpg" width="588" height="560"></p>
<p align="center">Segundo prototipo responsive de alta fidelidad<p align="center">


## 4. Testeos de usabilidad

Realizamos tests con diferentes usuarios, tanto jugadores de pokemon, como los que no conocían mucho del tema.
Iteramos nuestro diseños y por ello hicimos varios cambios, sobretodo en la información fundamental que los usuarios querían
y también cambios en el diseño visual.

Nos guiamos de los feedbacks de los usuarios y realizamos cambios en las características destacadas de los pokemon,
y también realizamos cambios en el diseño visual, como el color, tamaños de las imagenes y textos.

## 5. Objetivos de aprendizaje

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
- [x] Utilizar identificadores descriptivos (Nomenclatura | Semántica).
- [x] Utilizar linter para seguir buenas prácticas (ESLINT).

### Introspección de mis objetivos de aprendizaje

* Sé lo que es, para qué sirve, su contexto y cómo se espera que funcione.
* Lo hice en este proyecto y lo puedo explicar.
* Lo puedo volver a hacer en otro contexto/proyecto diferente.
* Qué propones para trabajar la siguiente semana.

***
