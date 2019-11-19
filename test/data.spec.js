// // importamos la función `example`
// import { example } from '../src/data';

// describe('example', () => {
//   it('debería ser una función', () => {
//     expect(typeof example).toBe('function');
//   });
//   describe('example', () => {
//     // escribe aquí tu test
//   });
// });
import
{
  traerDataPokemon,
  ordenarAscOdescData,
} from '../src/data';

const input = [
  {
    id: 1,
    name: 'Bulbasaur',
    img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
  },
  {
    id: 2,
    name: 'Ivysaur',
    img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
  },
  {
    id: 3,
    name: 'Venusaur',
    img: 'http://www.serebii.net/pokemongo/pokemon/003.png',
  }];


describe('traerDataPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof traerDataPokemon).toBe('function');
  });

  it('Deberia traer la data de pokemones', () => {
    const output = [{ identificador: 1, nombre: 'Bulbasaur', imagen: 'http://www.serebii.net/pokemongo/pokemon/001.png' }, { identificador: 2, nombre: 'Ivysaur', imagen: 'http://www.serebii.net/pokemongo/pokemon/002.png' }, { identificador: 3, nombre: 'Venusaur', imagen: 'http://www.serebii.net/pokemongo/pokemon/003.png' }];
    expect(traerDataPokemon(input)).toEqual(output);
  });
});

describe('ordenarAscOdescData', () => {
  it('debería ser una función', () => {
    expect(typeof ordenarAscOdescData).toBe('function');
  });

  it('Deberia ordenar ascendente y descendente la data de pokemones', () => {
    let salida;
    let string;
    if (string === 'orAsc') {
      salida = [{ id: 1, name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png' }, { id: 2, name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png' }, { id: 3, name: 'Venusaur', img: 'http://www.serebii.net/pokemongo/pokemon/003.png' }];
    }
    salida = [{ id: 3, name: 'Venusaur', img: 'http://www.serebii.net/pokemongo/pokemon/003.png' }, { id: 2, name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png' }, { id: 1, name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png' }];
    expect(ordenarAscOdescData(input)).toEqual(salida);
  });
});

describe('mostrarTop', () => {
  it('debería ser una función', () => {
    expect(typeof mostrarTop).toBe('function');
  });

  it('Deberia mostrar los top 10 de pokemones mas rankeados', () => {
      const input = [
        {
          id: 1,
          name: 'Bulbasaur',
          img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
          spawn_chance: 0.69,
        },
        {
          id: 2,
          name: 'Ivysaur',
          img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
          spawn_chance: 0.042,
        },
        {
          id: 3,
          name: 'Venusaur',
          img: 'http://www.serebii.net/pokemongo/pokemon/003.png',
          spawn_chance: 0.017,
        },
        {
          id: 4,
          name: 'Charmander',
          img: 'http://www.serebii.net/pokemongo/pokemon/004.png',
          spawn_chance: 0.253,
        },
        {
          id: 5,
          name: 'Charmeleon',
          img: 'http://www.serebii.net/pokemongo/pokemon/005.png',
          spawn_chance: 0.012,
        },
        {
          id: 6,
          name: 'Charizard',
          img: 'http://www.serebii.net/pokemongo/pokemon/006.png',
          spawn_chance: 0.0031,
        },
        {
          id: 7,
          name: 'Squirtle',
          img: 'http://www.serebii.net/pokemongo/pokemon/007.png',
          spawn_chance: 0.58,
        },
        {
          id: 8,
          name: 'Wartortle',
          img: 'http://www.serebii.net/pokemongo/pokemon/008.png',
          spawn_chance: 0.034,
        },
        {
          id: 9,
          name: 'Blastoise',
          img: 'http://www.serebii.net/pokemongo/pokemon/009.png',
          spawn_chance: 0.0067,
        },
        {
          id: 10,
          name: 'Caterpie',
          img: 'http://www.serebii.net/pokemongo/pokemon/010.png',
          spawn_chance: 3.032,
        },
        {
          id: 11,
          name: 'Metapod',
          img: 'http://www.serebii.net/pokemongo/pokemon/011.png',
          spawn_chance: 0.187,
        },
        {
          id: 12,
          name: 'Butterfree',
          img: 'http://www.serebii.net/pokemongo/pokemon/012.png',
          spawn_chance: 0.022,
        }];
      
      const salida = [
        { 
          id: 10,
          name: 'Caterpie',
          img: 'http://www.serebii.net/pokemongo/pokemon/010.png',
        },
        { 
          id: 1,
          name: 'Bulbasaur',
          img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
        },
        { 
          id: 7,
          name: 'Squirtle',
          img: 'http://www.serebii.net/pokemongo/pokemon/007.png'
        },
        {
          id: 4,
          name: 'Charmander',
          img: 'http://www.serebii.net/pokemongo/pokemon/004.png',
        },
        {
          id: 11,
          name: 'Metapod',
          img: 'http://www.serebii.net/pokemongo/pokemon/011.png',
        },
        {
          id: 2,
          name: 'Ivysaur',
          img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
        },
        {
          id: 8,
          name: 'Wartortle',
          img: 'http://www.serebii.net/pokemongo/pokemon/008.png',
        },
        {
          id: 12,
          name: 'Butterfree',
          img: 'http://www.serebii.net/pokemongo/pokemon/012.png',
        },
        {
          id: 3,
          name: 'Venusaur',
          img: 'http://www.serebii.net/pokemongo/pokemon/003.png',
        },
        {
          id: 5,
          name: 'Charmeleon',
          img: 'http://www.serebii.net/pokemongo/pokemon/005.png',
        }
      ];
    expect(ordenarAscOdescData(input)).toEqual(salida);
  });
});
