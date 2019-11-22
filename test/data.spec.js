<<<<<<< HEAD
/* eslint-disable object-curly-newline */
// importamos la función `example`
import POKEMON from '../src/data/pokemon/pokemon.js';
import { idPokemon, orderData, typeFilter, weaknessFilter, topPokemon } from '../src/data.js';

const pokemonArray = [
  { id: 1, name: 'Bulbasaur', type: ['Planta', 'Veneno'], candy_count: 25, spawn_chance: 0.69, weaknesses: ['Fuego', 'Hielo', 'Volador', 'Psiquico'] },
  { id: 2, name: 'Ivysaur', type: ['Planta', 'Veneno'], candy_count: 100, spawn_chance: 0.042, weaknesses: ['Fuego', 'Hielo', 'Volador', 'Psiquico'] },
  { id: 3, name: 'Venusaur', type: ['Planta', 'Veneno'], candy_count: 0, spawn_chance: 0.017, weaknesses: ['Fuego', 'Hielo', 'Volador', 'Psiquico'] },
  { id: 4, name: 'Charmander', type: ['Fuego'], candy_count: 25, spawn_chance: 0.253, weaknesses: ['Agua', 'Tierra', 'Roca'] },
  { id: 5, name: 'Charmeleon', type: ['Fuego'], candy_count: 100, spawn_chance: 0.012, weaknesses: ['Agua', 'Tierra', 'Roca'] },
];

const arrTipos = [
  { id: 1, name: 'Bulbasaur', type: ['Planta', 'Veneno'], candy_count: 25, spawn_chance: 0.69, weaknesses: ['Fuego', 'Hielo', 'Volador', 'Psiquico'] },
  { id: 2, name: 'Ivysaur', type: ['Planta', 'Veneno'], candy_count: 100, spawn_chance: 0.042, weaknesses: ['Fuego', 'Hielo', 'Volador', 'Psiquico'] },
  { id: 3, name: 'Venusaur', type: ['Planta', 'Veneno'], candy_count: 0, spawn_chance: 0.017, weaknesses: ['Fuego', 'Hielo', 'Volador', 'Psiquico'] },
];

const arrDebilidades = [
  { id: 4, name: 'Charmander', type: ['Fuego'], candy_count: 25, spawn_chance: 0.253, weaknesses: ['Agua', 'Tierra', 'Roca'] },
  { id: 5, name: 'Charmeleon', type: ['Fuego'], candy_count: 100, spawn_chance: 0.012, weaknesses: ['Agua', 'Tierra', 'Roca'] },
];

// TEST DE ORDEN POR ID
=======
// importamos la función `example`
import POKEMON from '../src/data/pokemon/pokemon.js';

import {
  idPokemon, orderData, typeFilter, weaknessFilter, topPokemon,
} from '../src/data';

const pokemonArray = [{
  id: 1,
  num: '001',
  name: 'Bulbasaur',
  type: [
    'Planta',
    'Veneno',
  ],
  candy: 'Bulbasaur Candy',
  candy_count: 25,
  spawn_chance: 0.69,
  avg_spawns: 69,
  weaknesses: [
    'Fuego',
    'Hielo',
    'Volador',
    'Psiquico',
  ],
}, {
  id: 2,
  num: '002',
  name: 'Ivysaur',
  img: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
  type: [
    'Planta',
    'Veneno',
  ],
  candy: 'Bulbasaur Candy',
  candy_count: 100,
  spawn_chance: 0.042,
  avg_spawns: 4.2,
  weaknesses: [
    'Fuego',
    'Hielo',
    'Volador',
    'Psiquico',
  ],
}, {
  id: 3,
  num: '003',
  name: 'Venusaur',
  img: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
  type: [
    'Planta',
    'Veneno',
  ],
  height: '2.01 m',
  weight: '100.0 kg',
  candy: 'Bulbasaur Candy',
  candy_count: 0,
  egg: 'Not in Eggs',
  spawn_chance: 0.017,
  avg_spawns: 1.7,
  multipliers: null,
  weaknesses: [
    'Fuego',
    'Hielo',
    'Volador',
    'Psiquico',
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
  img: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
  type: [
    'Fuego',
  ],
  candy: 'Charmander Candy',
  candy_count: 25,
  spawn_chance: 0.253,
  avg_spawns: 25.3,
  weaknesses: [
    'Agua',
    'Tierra',
    'Roca',
  ],
  next_evolution: [{
    num: '005',
    name: 'Charmeleon',
  }, {
    num: '006',
    name: 'Charizard',
  }],
}, {
  id: 5,
  num: '005',
  name: 'Charmeleon',
  img: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
  type: [
    'Fuego',
  ],
  candy: 'Charmander Candy',
  candy_count: 100,
  spawn_chance: 0.012,
  avg_spawns: 1.2,
  weaknesses: [
    'Agua',
    'Tierra',
    'Roca',
  ],
  prev_evolution: [{
    num: '004',
    name: 'Charmander',
  }],
  next_evolution: [{
    num: '006',
    name: 'Charizard',
  }],
}];
const arrTipoPlanta = [{
  id: 1,
  num: '001',
  name: 'Bulbasaur',
  type: [
    'Planta',
    'Veneno',
  ],
  candy: 'Bulbasaur Candy',
  candy_count: 25,
  spawn_chance: 0.69,
  avg_spawns: 69,
  weaknesses: [
    'Fuego',
    'Hielo',
    'Volador',
    'Psiquico',
  ],
}, {
  id: 2,
  num: '002',
  name: 'Ivysaur',
  img: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
  type: [
    'Planta',
    'Veneno',
  ],
  candy: 'Bulbasaur Candy',
  candy_count: 100,
  spawn_chance: 0.042,
  avg_spawns: 4.2,
  weaknesses: [
    'Fuego',
    'Hielo',
    'Volador',
    'Psiquico',
  ],
}, {
  id: 3,
  num: '003',
  name: 'Venusaur',
  img: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
  type: [
    'Planta',
    'Veneno',
  ],
  height: '2.01 m',
  weight: '100.0 kg',
  candy: 'Bulbasaur Candy',
  candy_count: 0,
  egg: 'Not in Eggs',
  spawn_chance: 0.017,
  avg_spawns: 1.7,
  multipliers: null,
  weaknesses: [
    'Fuego',
    'Hielo',
    'Volador',
    'Psiquico',
  ],
  prev_evolution: [{
    num: '001',
    name: 'Bulbasaur',
  }, {
    num: '002',
    name: 'Ivysaur',
  }],
}];

const arrDebilidades = [
  {
    id: 4,
    num: '004',
    name: 'Charmander',
    img: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    type: [
      'Fuego',
    ],
    candy: 'Charmander Candy',
    candy_count: 25,
    spawn_chance: 0.253,
    avg_spawns: 25.3,
    weaknesses: [
      'Agua',
      'Tierra',
      'Roca',
    ],
    next_evolution: [{
      num: '005',
      name: 'Charmeleon',
    }, {
      num: '006',
      name: 'Charizard',
    }],
  }, {
    id: 5,
    num: '005',
    name: 'Charmeleon',
    img: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
    type: [
      'Fuego',
    ],
    candy: 'Charmander Candy',
    candy_count: 100,
    spawn_chance: 0.012,
    avg_spawns: 1.2,
    weaknesses: [
      'Agua',
      'Tierra',
      'Roca',
    ],
    prev_evolution: [{
      num: '004',
      name: 'Charmander',
    }],
    next_evolution: [{
      num: '006',
      name: 'Charizard',
    }],
  }];

>>>>>>> 7131310a055f905c5512590640f0ddd9de317c37
describe('idPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof idPokemon).toBe('function');
  });
<<<<<<< HEAD
  it('debería retornar 1 como el ID que corresponde a Bulbasaur', () => {
=======
  it('debería retornar 1 como el ID que corresponder Bulbasaur', () => {
>>>>>>> 7131310a055f905c5512590640f0ddd9de317c37
    expect(idPokemon(POKEMON, 'show')[0].id).toBe(1);
  });
});

<<<<<<< HEAD
// TEST DE ORDEN ALFABÉTICO + CANTIDAD DE CARAMELOS
=======
>>>>>>> 7131310a055f905c5512590640f0ddd9de317c37
describe('orderData', () => {
  it('debería ser una función', () => {
    expect(typeof orderData).toBe('function');
  });
  it('debería retornar Abra como el primero en la lista en A-Z', () => {
    expect(orderData(POKEMON, 'ascendant-az')[0].name).toBe('Abra');
  });
  it('debería retornar Zubat como el último en la lista en Z-A', () => {
    expect(orderData(POKEMON, 'descendant-za')[0].name).toBe('Zubat');
  });
  it('debería retornar 400 caramelos en el orden de + a -caramelos', () => {
    expect(orderData(POKEMON, 'more-candies')[0].candy_count).toBe(400);
  });
  it('debería retornar 0 caramelos en el orden de - a +caramelos', () => {
    expect(orderData(POKEMON, 'less-candies')[0].candy_count).toBe(0);
  });
});

<<<<<<< HEAD
// TEST FILTRO POR TIPOS
=======
>>>>>>> 7131310a055f905c5512590640f0ddd9de317c37
describe('typeFilter', () => {
  it('debería ser una función', () => {
    expect(typeof typeFilter).toBe('function');
  });
  it('debería retornar un array de pokemon por tipo', () => {
<<<<<<< HEAD
    expect(typeFilter(pokemonArray, 'Planta')).toEqual(arrTipos);
  });
});

// TEST FILTRO POR DEBILIDADES
=======
    expect(typeFilter(pokemonArray, 'Planta')).toEqual(arrTipoPlanta);
  });
});

>>>>>>> 7131310a055f905c5512590640f0ddd9de317c37
describe('weaknessFilter', () => {
  it('debería ser una función', () => {
    expect(typeof weaknessFilter).toBe('function');
  });
  it('debería retornar un array de pokemon por debilidad', () => {
    expect(weaknessFilter(pokemonArray, 'Roca')).toEqual(arrDebilidades);
  });
});

<<<<<<< HEAD
// TEST DE TOP 10 DE FRECUENCIA DE APARICIÓN
=======
>>>>>>> 7131310a055f905c5512590640f0ddd9de317c37
describe('topPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof topPokemon).toBe('function');
  });
  it('debería retornar 15.98 como la mayor frecuencia de aparición', () => {
    expect(topPokemon(POKEMON, 'poke-top')[0].spawn_chance).toBe(15.98);
  });
});
