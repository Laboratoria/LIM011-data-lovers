/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable import/named */
// importamos la función `example`
import {
  filtroTipoPokemon, filtroAlfabeticoAZ, filtroAlfabeticoZA, ordenNumerico, busquedaPokemonNombre,
} from '../src/data';

const data = [{
  id: 8,
  num: '008',
  name: 'wartortle',
  img: 'http://www.serebii.net/pokemongo/pokemon/008.png',
  type: ['Water'],
  height: '0.99 m',
  weight: '22.5 kg',
  candy: 'Squirtle Candy',
  candy_count: 100,
  egg: 'Not in Eggs',
  spawn_chance: 0.034,
  avg_spawns: 3.4,
  spawn_time: '07:02',
  multipliers: [1.4],
  weaknesses: ['Electric', 'Grass'],
  prev_evolution: [{ num: '007', name: 'Squirtle' }],
  next_evolution: [{ num: '009', name: 'Blastoise' }],
}, {
  id: 9,
  num: '009',
  name: 'Blastoise',
  img: 'http://www.serebii.net/pokemongo/pokemon/009.png',
  type: ['Water'],
  height: '1.60 m',
  weight: '85.5 kg',
  candy: 'Squirtle Candy',
  egg: 'Not in Eggs',
  spawn_chance: 0.0067,
  avg_spawns: 0.67,
  spawn_time: '00:06',
  multipliers: null,
  weaknesses: ['Electric', 'Grass'],
  prev_evolution: [{ num: '007', name: 'Squirtle' }, { num: '008', name: 'Wartortle' }],
}, {
  id: 10,
  num: '010',
  name: 'Caterpie',
  img: 'http://www.serebii.net/pokemongo/pokemon/010.png',
  type: ['Bug'],
  height: '0.30 m',
  weight: '2.9 kg',
  candy: 'Caterpie Candy',
  candy_count: 12,
  egg: '2 km',
  spawn_chance: 3.032,
  avg_spawns: 303.2,
  spawn_time: '16:35',
  multipliers: [1.05],
  weaknesses: ['Fire', 'Flying', 'Rock'],
  next_evolution: [{ num: '011', name: 'Metapod' }, { num: '012', name: 'Butterfree' }],
}, {
  id: 11,
  num: '011',
  name: 'Metapod',
  img: 'http://www.serebii.net/pokemongo/pokemon/011.png',
  type: ['Bug'],
  height: '0.71 m',
  weight: '9.9 kg',
  candy: 'Caterpie Candy',
  candy_count: 50,
  egg: 'Not in Eggs',
  spawn_chance: 0.187,
  avg_spawns: 18.7,
  spawn_time: '02:11',
  multipliers: [3.55, 3.79],
  weaknesses: ['Fire', 'Flying', 'Rock'],
  prev_evolution: [{ num: '010', name: 'Caterpie' }],
  next_evolution: [{ num: '012', name: 'Butterfree' }],
}, {
  id: 12,
  num: '012',
  name: 'Butterfree',
  img: 'http://www.serebii.net/pokemongo/pokemon/012.png',
  type: ['Bug', 'Flying'],
  height: '1.09 m',
  weight: '32.0 kg',
  candy: 'Caterpie Candy',
  egg: 'Not in Eggs',
  spawn_chance: 0.022,
  avg_spawns: 2.2,
  spawn_time: '05:23',
  multipliers: null,
  weaknesses: ['Fire', 'Electric', 'Ice', 'Flying', 'Rock'],
  prev_evolution: [{
    num: '010',
    name: 'Caterpie',
  },
  {
    num: '011',
    name: 'Metapod',
  }],
},
];

describe('filtroTipoPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof filtroTipoPokemon).toBe('function');
  });

  it('Deberia retornar lista de Pokemones que contengan el mismo tipo', () => {
    expect(filtroTipoPokemon(data, 'Water')[0].type).toEqual(['Water']);
  });
});
// Prueba Filtros Az y ZA
const names = [{ name: 'Wartortle' }, { name: 'Blastoise' }, { name: 'Caterpie' }, { name: 'Metapod' }, { name: 'Butterfree' }];
const namesAZ = [{ name: 'Blastoise' }, { name: 'Butterfree' }, { name: 'Caterpie' }, { name: 'Metapod' }, { name: 'Wartortle' }];
const namesZA = [{ name: 'Wartortle' }, { name: 'Metapod' }, { name: 'Caterpie' }, { name: 'Butterfree' }, { name: 'Blastoise' }];
describe('filtroAlfabeticoAZ', () => {
  it('debería ser una función', () => {
    expect(typeof filtroAlfabeticoAZ).toBe('function');
  });
  it('Deberia retornar lista de Pokemones ordenados por nombre de A-Z', () => {
    expect(filtroAlfabeticoAZ(names)).toEqual(namesAZ);
  });
});

describe('filtroAlfabeticoZA', () => {
  it('debería ser una función', () => {
    expect(typeof filtroAlfabeticoZA).toBe('function');
  });
  it('Deberia retornar lista de Pokemones ordenados por nombre de Z-A', () => {
    expect(filtroAlfabeticoZA(names)).toEqual(namesZA);
  });
});
// Prueba Filtro orden por num
const num = [{ name: 'Blastoise', num: '011' }, { name: 'Wartortle', num: '012' }, { name: 'Caterpie', num: '009' }, { name: 'Metapod', num: '008' }, { name: 'Butterfree', num: '010' }];
const numOrdered = [{ name: 'Metapod', num: '008' }, { name: 'Caterpie', num: '009' }, { name: 'Butterfree', num: '010' }, { name: 'Blastoise', num: '011' }, { name: 'Wartortle', num: '012' }];

describe('ordenNumerico', () => {
  it('debería ser una función', () => {
    expect(typeof ordenNumerico).toBe('function');
  });
  it('Deberia retornar lista de Pokemones ordenados por num de mayor a menor', () => {
    expect(ordenNumerico(num)).toEqual(numOrdered);
  });
});
// // Prueba busqueda Pokemon Por nombre
describe('busquedaPokemonNombre', () => {
  it('debería ser una función', () => {
    expect(typeof busquedaPokemonNombre).toBe('function');
  });
  it('Deberia retornar el nombre del pokemon buscado', () => {
    expect(busquedaPokemonNombre(data, 'wartortle')[0].name).toBe('wartortle');
  });
});

// data
// describe('busquedaPokemonNombre', () => {
//   it('debería ser una función', () => {
//     expect(typeof busquedaPokemonNombre).toBe('function');
//   });
//   it('Deberia retornar el nombre del pokemon buscado', () => {
//     expect(busquedaPokemonNombre(data, 'wartortle')[0].name).toBe('wartortle');
//   });
// });
