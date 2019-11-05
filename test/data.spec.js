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

// importamos la función `example`
import { ordenado } from "../src/data";

describe('ordenado', () => {

  it('debería ser una función', () => {
    expect(typeof ordenado).toBe('function');
  });

  describe('ordenado', () => {
    it('debería ordenar los personajes de la A-Z', () => {
      expect(ordenado(POTTER[0])).toBe('Argus Filch');
    });
  });
})
