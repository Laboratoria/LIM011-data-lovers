/* eslint-disable linebreak-style */
/* eslint-disable import/named */
/* eslint-disable linebreak-style */
// importamos la función `example`
import {
  idPokemon, orderFilter, typeFilter, weaknessFilter, topPokemon,
} from '../src/data';

describe('idPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof idPokemon).toBe('function');
  });
});

describe('orderFilter', () => {
  it('debería ser una función', () => {
    expect(typeof orderFilter).toBe('function');
  });
});

describe('typeFilter', () => {
  it('debería ser una función', () => {
    expect(typeof typeFilter).toBe('function');
  });
});

describe('weaknessFilter', () => {
  it('debería ser una función', () => {
    expect(typeof weaknessFilter).toBe('function');
  });
});

describe('topPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof topPokemon).toBe('function');
  });
});
