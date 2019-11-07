import { filtrartipopokemon, filtrarDebilidadPokemon, filtrarKmPokemon } from '../src/data.js';

const testPokemon = [
  {
    name: 'Bulbasaur', type: ['Grass', 'Poison'], egg: '2 km', weaknesses: ['Fire', 'Ice'],
  },
  {
    name: 'Charizard', type: ['Fire', 'Flying'], egg: '5 km', weaknesses: ['Water', 'Electric'],
  },
  {
    name: 'Wartortle', type: ['Water'], egg: '10 km', weaknesses: ['Grass'],
  },
];

const tipoPokemon = [
  {
    name: 'Bulbasaur', type: ['Grass', 'Poison'], egg: '2 km', weaknesses: ['Fire', 'Ice'],
  },
];

const debilidadPokemon = [
  {
    name: 'Charizard', type: ['Fire', 'Flying'], egg: '5 km', weaknesses: ['Water', 'Electric'],
  },
];

const kmPokemon = [
  {
    name: 'Wartortle', type: ['Water'], egg: '10 km', weaknesses: ['Grass'],
  },
];

describe('filtrartipopokemon', () => {
  it('debería ser una función', () => {
    expect(typeof filtrartipopokemon).toBe('function');
  });

  it('deberia mostrar toda la informacion del pokemon de tipo Hierba', () => {
    expect(filtrartipopokemon(testPokemon, 'Grass')).toEqual(tipoPokemon);
  });
});

describe('filtrarDebilidadPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof filtrarDebilidadPokemon).toBe('function');
  });

  it('deberia mostrar toda la informacion del pokemon que tiene debilidad agua', () => {
    expect(filtrarDebilidadPokemon(testPokemon, 'Water')).toEqual(debilidadPokemon);
  });
});

describe('filtrarKmPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof filtrarKmPokemon).toBe('function');
  });

  it('deberia mostrar toda la informacion del pokemon que tiene debilidad agua', () => {
    expect(filtrarKmPokemon(testPokemon, '10 km')).toEqual(kmPokemon);
  });
});
