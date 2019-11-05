// importamos la función `example`
// import { example } from "../src/data";

// describe('example', () => {

//   it('debería ser una función', () => {
//     expect(typeof example).toBe('function');
//   });

//   describe('example', () => {
//     // escribe aquí tu test
//   });
// });

import { traerDataPokemon } from '../src/data';


describe('traerDataPokemon', () => {

  it('debería ser una función', () => {
    expect(typeof traerDataPokemon).toBe('function');
  });

  describe('traerDataPokemon', () => {
    // escribe aquí tu test
    it('Deberia ser una funcion', () => {
      expect (typeof traerDataPokemon).toBe('function');
    });
    it ('deberia retornar "newArray" para "arr"', () => {
      expect(traerDataPokemon('arr')).toBe('newArray');
    });
  });
});
