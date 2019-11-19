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
import {
  traerDataPokemon,
  filtrarPokemones,
  mostrarTop,
  buscarPokemon,
} from '../src/data';

const input = [
  {
    id: 1,
    name: 'Bulbasaur',
    img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
    type: ['Grass', 'Poison'],
    spawn_chance: 0.69,

  },
  {
    id: 2,
    name: 'Ivysaur',
    img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
    type: ['Grass', 'Poison'],
    spawn_chance: 0.042,
  },
  {
    id: 3,
    name: 'Venusaur',
    img: 'http://www.serebii.net/pokemongo/pokemon/003.png',
    type: ['Grass', 'Poison'],
    spawn_chance: 0.017,
  },
  {
    id: 4,
    name: 'Charmander',
    img: 'http://www.serebii.net/pokemongo/pokemon/004.png',
    type: ['Fire'],
    spawn_chance: 0.253,
  },
];

describe('traerDataPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof traerDataPokemon).toBe('function');
  });
  it('Deberia traer la data de pokemones', () => {
    const output = [{ identificador: 1, nombre: 'Bulbasaur', imagen: 'http://www.serebii.net/pokemongo/pokemon/001.png' }, { identificador: 2, nombre: 'Ivysaur', imagen: 'http://www.serebii.net/pokemongo/pokemon/002.png' }, { identificador: 3, nombre: 'Venusaur', imagen: 'http://www.serebii.net/pokemongo/pokemon/003.png' }, { identificador: 4, nombre: 'Charmander', imagen: 'http://www.serebii.net/pokemongo/pokemon/004.png' }];
    expect(traerDataPokemon(input)).toEqual(output);
  });
});
describe('filtrarPokemones', () => {
  it('Deberia filtrar pokemones', () => {
    const salida = [
      {
        id: 4,
        name: 'Charmander',
        img: 'http://www.serebii.net/pokemongo/pokemon/004.png',
        type: ['Fire'],
        spawn_chance: 0.253,
      },
    ];
    const type = 'Fire';
    expect(filtrarPokemones(input, type)).toEqual(salida);
  });
});
describe('buscarPokemon', () => {
  it('Deberia buscar pokemones', () => {
    const buscar = [
      {
        id: 1,
        name: 'Bulbasaur',
        img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
        type: ['Grass', 'Poison'],
        spawn_chance: 0.69,
      },
    ];
    expect(buscarPokemon(input, 'Bulbasaur')).toEqual(buscar);
  });
});
describe('mostrarTop', () => {
  it('Deberia mostrar TOP pokemones', () => {
    const inicio = [
      {
        id: 1,
        num: '001',
        name: 'Bulbasaur',
        img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
        type: [
          'Grass',
          'Poison',
        ],
        height: '0.71 m',
        weight: '6.9 kg',
        candy: 'Bulbasaur Candy',
        candy_count: 25,
        egg: '2 km',
        spawn_chance: 0.69,
        avg_spawns: 69,
        spawn_time: '20:00',
        multipliers: [1.58],
        weaknesses: [
          'Fire',
          'Ice',
          'Flying',
          'Psychic',
        ],
        next_evolution: [{
          num: '002',
          name: 'Ivysaur',
        }, {
          num: '003',
          name: 'Venusaur',
        }],
      }, {
        id: 2,
        num: '002',
        name: 'Ivysaur',
        img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
        type: [
          'Grass',
          'Poison',
        ],
        height: '0.99 m',
        weight: '13.0 kg',
        candy: 'Bulbasaur Candy',
        candy_count: 100,
        egg: 'Not in Eggs',
        spawn_chance: 0.042,
        avg_spawns: 4.2,
        spawn_time: '07:00',
        multipliers: [
          1.2,
          1.6,
        ],
        weaknesses: [
          'Fire',
          'Ice',
          'Flying',
          'Psychic',
        ],
        prev_evolution: [{
          num: '001',
          name: 'Bulbasaur',
        }],
        next_evolution: [{
          num: '003',
          name: 'Venusaur',
        }],
      }, {
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
        id: 5,
        num: '005',
        name: 'Charmeleon',
        img: 'http://www.serebii.net/pokemongo/pokemon/005.png',
        type: [
          'Fire',
        ],
        height: '1.09 m',
        weight: '19.0 kg',
        candy: 'Charmander Candy',
        candy_count: 100,
        egg: 'Not in Eggs',
        spawn_chance: 0.012,
        avg_spawns: 1.2,
        spawn_time: '19:00',
        multipliers: [1.79],
        weaknesses: [
          'Water',
          'Ground',
          'Rock',
        ],
        prev_evolution: [{
          num: '004',
          name: 'Charmander',
        }],
        next_evolution: [{
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
      }, {
        id: 8,
        num: '008',
        name: 'Wartortle',
        img: 'http://www.serebii.net/pokemongo/pokemon/008.png',
        type: [
          'Water',
        ],
        height: '0.99 m',
        weight: '22.5 kg',
        candy: 'Squirtle Candy',
        candy_count: 100,
        egg: 'Not in Eggs',
        spawn_chance: 0.034,
        avg_spawns: 3.4,
        spawn_time: '07:02',
        multipliers: [1.4],
        weaknesses: [
          'Electric',
          'Grass',
        ],
        prev_evolution: [{
          num: '007',
          name: 'Squirtle',
        }],
        next_evolution: [{
          num: '009',
          name: 'Blastoise',
        }],
      }, {
        id: 9,
        num: '009',
        name: 'Blastoise',
        img: 'http://www.serebii.net/pokemongo/pokemon/009.png',
        type: [
          'Water',
        ],
        height: '1.60 m',
        weight: '85.5 kg',
        candy: 'Squirtle Candy',
        egg: 'Not in Eggs',
        spawn_chance: 0.0067,
        avg_spawns: 0.67,
        spawn_time: '00:06',
        multipliers: null,
        weaknesses: [
          'Electric',
          'Grass',
        ],
        prev_evolution: [{
          num: '007',
          name: 'Squirtle',
        }, {
          num: '008',
          name: 'Wartortle',
        }],
      }, {
        id: 10,
        num: '010',
        name: 'Caterpie',
        img: 'http://www.serebii.net/pokemongo/pokemon/010.png',
        type: [
          'Bug',
        ],
        height: '0.30 m',
        weight: '2.9 kg',
        candy: 'Caterpie Candy',
        candy_count: 12,
        egg: '2 km',
        spawn_chance: 3.032,
        avg_spawns: 303.2,
        spawn_time: '16:35',
        multipliers: [1.05],
        weaknesses: [
          'Fire',
          'Flying',
          'Rock',
        ],
        next_evolution: [{
          num: '011',
          name: 'Metapod',
        }, {
          num: '012',
          name: 'Butterfree',
        }],
      }, {
        id: 11,
        num: '011',
        name: 'Metapod',
        img: 'http://www.serebii.net/pokemongo/pokemon/011.png',
        type: [
          'Bug',
        ],
        height: '0.71 m',
        weight: '9.9 kg',
        candy: 'Caterpie Candy',
        candy_count: 50,
        egg: 'Not in Eggs',
        spawn_chance: 0.187,
        avg_spawns: 18.7,
        spawn_time: '02:11',
        multipliers: [
          3.55,
          3.79,
        ],
        weaknesses: [
          'Fire',
          'Flying',
          'Rock',
        ],
        prev_evolution: [{
          num: '010',
          name: 'Caterpie',
        }],
        next_evolution: [{
          num: '012',
          name: 'Butterfree',
        }],
      },
    ];
    const final = [
      {
        id: 1,
        num: '001',
        name: 'Bulbasaur',
        img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
        type: [
          'Grass',
          'Poison',
        ],
        height: '0.71 m',
        weight: '6.9 kg',
        candy: 'Bulbasaur Candy',
        candy_count: 25,
        egg: '2 km',
        spawn_chance: 0.69,
        avg_spawns: 69,
        spawn_time: '20:00',
        multipliers: [1.58],
        weaknesses: [
          'Fire',
          'Ice',
          'Flying',
          'Psychic',
        ],
        next_evolution: [{
          num: '002',
          name: 'Ivysaur',
        }, {
          num: '003',
          name: 'Venusaur',
        }],
      }, {
        id: 2,
        num: '002',
        name: 'Ivysaur',
        img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
        type: [
          'Grass',
          'Poison',
        ],
        height: '0.99 m',
        weight: '13.0 kg',
        candy: 'Bulbasaur Candy',
        candy_count: 100,
        egg: 'Not in Eggs',
        spawn_chance: 0.042,
        avg_spawns: 4.2,
        spawn_time: '07:00',
        multipliers: [
          1.2,
          1.6,
        ],
        weaknesses: [
          'Fire',
          'Ice',
          'Flying',
          'Psychic',
        ],
        prev_evolution: [{
          num: '001',
          name: 'Bulbasaur',
        }],
        next_evolution: [{
          num: '003',
          name: 'Venusaur',
        }],
      }, {
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
        id: 5,
        num: '005',
        name: 'Charmeleon',
        img: 'http://www.serebii.net/pokemongo/pokemon/005.png',
        type: [
          'Fire',
        ],
        height: '1.09 m',
        weight: '19.0 kg',
        candy: 'Charmander Candy',
        candy_count: 100,
        egg: 'Not in Eggs',
        spawn_chance: 0.012,
        avg_spawns: 1.2,
        spawn_time: '19:00',
        multipliers: [1.79],
        weaknesses: [
          'Water',
          'Ground',
          'Rock',
        ],
        prev_evolution: [{
          num: '004',
          name: 'Charmander',
        }],
        next_evolution: [{
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
      }, {
        id: 8,
        num: '008',
        name: 'Wartortle',
        img: 'http://www.serebii.net/pokemongo/pokemon/008.png',
        type: [
          'Water',
        ],
        height: '0.99 m',
        weight: '22.5 kg',
        candy: 'Squirtle Candy',
        candy_count: 100,
        egg: 'Not in Eggs',
        spawn_chance: 0.034,
        avg_spawns: 3.4,
        spawn_time: '07:02',
        multipliers: [1.4],
        weaknesses: [
          'Electric',
          'Grass',
        ],
        prev_evolution: [{
          num: '007',
          name: 'Squirtle',
        }],
        next_evolution: [{
          num: '009',
          name: 'Blastoise',
        }],
      }, {
        id: 9,
        num: '009',
        name: 'Blastoise',
        img: 'http://www.serebii.net/pokemongo/pokemon/009.png',
        type: [
          'Water',
        ],
        height: '1.60 m',
        weight: '85.5 kg',
        candy: 'Squirtle Candy',
        egg: 'Not in Eggs',
        spawn_chance: 0.0067,
        avg_spawns: 0.67,
        spawn_time: '00:06',
        multipliers: null,
        weaknesses: [
          'Electric',
          'Grass',
        ],
        prev_evolution: [{
          num: '007',
          name: 'Squirtle',
        }, {
          num: '008',
          name: 'Wartortle',
        }],
      }, {
        id: 10,
        num: '010',
        name: 'Caterpie',
        img: 'http://www.serebii.net/pokemongo/pokemon/010.png',
        type: [
          'Bug',
        ],
        height: '0.30 m',
        weight: '2.9 kg',
        candy: 'Caterpie Candy',
        candy_count: 12,
        egg: '2 km',
        spawn_chance: 3.032,
        avg_spawns: 303.2,
        spawn_time: '16:35',
        multipliers: [1.05],
        weaknesses: [
          'Fire',
          'Flying',
          'Rock',
        ],
        next_evolution: [{
          num: '011',
          name: 'Metapod',
        }, {
          num: '012',
          name: 'Butterfree',
        }],
      }, {
        id: 11,
        num: '011',
        name: 'Metapod',
        img: 'http://www.serebii.net/pokemongo/pokemon/011.png',
        type: [
          'Bug',
        ],
        height: '0.71 m',
        weight: '9.9 kg',
        candy: 'Caterpie Candy',
        candy_count: 50,
        egg: 'Not in Eggs',
        spawn_chance: 0.187,
        avg_spawns: 18.7,
        spawn_time: '02:11',
        multipliers: [
          3.55,
          3.79,
        ],
        weaknesses: [
          'Fire',
          'Flying',
          'Rock',
        ],
        prev_evolution: [{
          num: '010',
          name: 'Caterpie',
        }],
        next_evolution: [{
          num: '012',
          name: 'Butterfree',
        }],
      },
    ];
    expect(mostrarTop(inicio)).toEqual(final);
  });
});
