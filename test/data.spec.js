/* eslint-disable object-curly-newline */
/* eslint-disable jest/no-identical-title */
import { filtrarPokemon, ordenarPokemon, top10, filtrarEgg, buscarPokemon, ordenarDescPokemon } from '../src/data.js';

const testPokemon = [
  { id: '002', name: 'Bulbasaur', type: ['Grass', 'Poison'], egg: '2 km', weaknesses: ['Fire', 'Ice'] },
  { id: '008', name: 'Wartortle', type: ['Water'], egg: '10 km', weaknesses: ['Grass'] },
  { id: '006', name: 'Charizard', type: ['Fire', 'Flying'], egg: '5 km', weaknesses: ['Water', 'Electric'] },
];

const tipoPokemon = [{ id: '002', name: 'Bulbasaur', type: ['Grass', 'Poison'], egg: '2 km', weaknesses: ['Fire', 'Ice'] }];
const debilidadPokemon = [{ id: '006', name: 'Charizard', type: ['Fire', 'Flying'], egg: '5 km', weaknesses: ['Water', 'Electric'] }];
const kmPokemon = [{ id: '008', name: 'Wartortle', type: ['Water'], egg: '10 km', weaknesses: ['Grass'] }];

const ascPokemon = [
  { id: '002', name: 'Bulbasaur', type: ['Grass', 'Poison'], egg: '2 km', weaknesses: ['Fire', 'Ice'] },
  { id: '006', name: 'Charizard', type: ['Fire', 'Flying'], egg: '5 km', weaknesses: ['Water', 'Electric'] },
  { id: '008', name: 'Wartortle', type: ['Water'], egg: '10 km', weaknesses: ['Grass'] },
];

const descPokemon = [
  { id: '008', name: 'Wartortle', type: ['Water'], egg: '10 km', weaknesses: ['Grass'] },
  { id: '006', name: 'Charizard', type: ['Fire', 'Flying'], egg: '5 km', weaknesses: ['Water', 'Electric'] },
  { id: '002', name: 'Bulbasaur', type: ['Grass', 'Poison'], egg: '2 km', weaknesses: ['Fire', 'Ice'] },
];

const aparicionPokemon = [
  { name: 'Weedle', spawn_chance: 7.12, avg_spawns: 712, spawn_time: '02:21' },
  { name: 'Bulbasaur', spawn_chance: 0.69, avg_spawns: 69, spawn_time: '20:00' },
  { name: 'Zubat', spawn_chance: 6.52, avg_spawns: 652, spawn_time: '12:28' },
];

const top2 = [
  { name: 'Weedle', spawn_chance: 7.12, avg_spawns: 712, spawn_time: '02:21' },
  { name: 'Zubat', spawn_chance: 6.52, avg_spawns: 652, spawn_time: '12:28' },
];

describe('filtrarPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof filtrarPokemon).toBe('function');
  });

  it('deberia mostrar toda la informacion del pokemon de tipo Hierba', () => {
    expect(filtrarPokemon(testPokemon, 'type', 'Grass')).toEqual(tipoPokemon);
  });

  it('deberia mostrar toda la informacion del pokemon que tiene debilidad agua', () => {
    expect(filtrarPokemon(testPokemon, 'weaknesses', 'Water')).toEqual(debilidadPokemon);
  });
});

describe('filtrarEgg', () => {
  it('debería ser una función', () => {
    expect(typeof filtrarEgg).toBe('function');
  });
  it('deberia mostrar toda la informacion del pokemon cuyo huevo esta a 10 km', () => {
    expect(filtrarEgg(testPokemon, '10 km')).toEqual(kmPokemon);
  });
});

describe('OrdenarPokemon', () => {
  it('deberia ser una funcion', () => {
    expect(typeof ordenarPokemon).toBe('function');
  });

  it('deberia ordenar los pokemon por nombre de la A-Z', () => {
    expect(ordenarPokemon(testPokemon, 'name')).toEqual(ascPokemon);
  });

  it('deberia ordenar los pokemon por id de 001-151', () => {
    expect(ordenarPokemon(testPokemon, 'id')).toEqual(ascPokemon);
  });
});

describe('OrdenarDescPokemon', () => {
  it('deberia ser una funcion', () => {
    expect(typeof ordenarDescPokemon).toBe('function');
  });

  it('deberia ordenar los pokemon por nombre de la Z-A', () => {
    expect(ordenarDescPokemon(testPokemon, 'name')).toEqual(descPokemon);
  });

  it('deberia ordenar los pokemon por id de 151-001', () => {
    expect(ordenarDescPokemon(testPokemon, 'id')).toEqual(descPokemon);
  });
});

describe('Top10', () => {
  it('deberia ser una funcion', () => {
    expect(typeof top10).toBe('function');
  });

  it('deberia mostrar los dos pokemon con mas apariciones', () => {
    expect(top10(aparicionPokemon, 2)).toEqual(top2);
  });
});

describe('BuscarPokemon', () => {
  it('deberia ser una funcion', () => {
    expect(typeof buscarPokemon).toBe('function');
  });

  it('deberia mostrar el pokemon que comience con C', () => {
    expect(buscarPokemon(testPokemon, 'c')).toEqual(debilidadPokemon);
  });
});
