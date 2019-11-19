/* eslint-disable import/extensions */
/* eslint-disable import/named */
// importamos la función `example`
import { filtroTipoPokemon } from '../src/data.js';

// Array of 0,1,2,3
const data = [{
  id: 3,
  num: '003',
  name: 'Venusaur',
  img: 'http://www.serebii.net/pokemongo/pokemon/003.png',
  type: [
    'Grass',
    'Poison',
  ],
  height: '2.01 m',
  weight: '100.0 kg',
  candy: 'Bulbasaur Candy',
  egg: 'Not in Eggs',
  spawn_chance: 0.017,
  avg_spawns: 1.7,
  spawn_time: '11:30',
  multipliers: null,
  weaknesses: [
    'Fire',
    'Ice',
    'Flying',
    'Psychic',
  ],
  prev_evolution: [{
    num: '001',
    name: 'Bulbasaur',
  }, {
    num: '002',
    name: 'Ivysaur',
  }],
}, {
  id: 4,
  num: '004',
  name: 'Charmander',
  img: 'http://www.serebii.net/pokemongo/pokemon/004.png',
  type: [
    'Fire',
  ],
  height: '0.61 m',
  weight: '8.5 kg',
  candy: 'Charmander Candy',
  candy_count: 25,
  egg: '2 km',
  spawn_chance: 0.253,
  avg_spawns: 25.3,
  spawn_time: '08:45',
  multipliers: [1.65],
  weaknesses: [
    'Water',
    'Ground',
    'Rock',
  ],
  next_evolution: [{
    num: '005',
    name: 'Charmeleon',
  }, {
    num: '006',
    name: 'Charizard',
  }],
}, {
  id: 6,
  num: '006',
  name: 'Charizard',
  img: 'http://www.serebii.net/pokemongo/pokemon/006.png',
  type: [
    'Fire',
    'Flying',
  ],
  height: '1.70 m',
  weight: '90.5 kg',
  candy: 'Charmander Candy',
  egg: 'Not in Eggs',
  spawn_chance: 0.0031,
  avg_spawns: 0.31,
  spawn_time: '13:34',
  multipliers: null,
  weaknesses: [
    'Water',
    'Electric',
    'Rock',
  ],
  prev_evolution: [{
    num: '004',
    name: 'Charmander',
  }, {
    num: '005',
    name: 'Charmeleon',
  }],
}, {
  id: 7,
  num: '007',
  name: 'Squirtle',
  img: 'http://www.serebii.net/pokemongo/pokemon/007.png',
  type: [
    'Water',
  ],
  height: '0.51 m',
  weight: '9.0 kg',
  candy: 'Squirtle Candy',
  candy_count: 25,
  egg: '2 km',
  spawn_chance: 0.58,
  avg_spawns: 58,
  spawn_time: '04:25',
  multipliers: [2.1],
  weaknesses: [
    'Electric',
    'Grass',
  ],
  next_evolution: [{
    num: '008',
    name: 'Wartortle',
  }, {
    num: '009',
    name: 'Blastoise',
  }],
}];

describe('filtroTipoPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof filtroTipoPokemon).toBe('function');
  });

  describe('Debería mostrar una lista de pokemones que tenga el tipo', () => {
    expect(filtroTipoPokemon(data, 'Grass')[0].type).toContain('Grass');
  });
});

// it('Debería monstrar una lista del pokemon que coincida', () => {
//   expect(filterForType(input, 'Grass')[0].type).toEqual(['Grass', 'Poison']);
// });
// });

