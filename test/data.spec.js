/* eslint-disable max-len */
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
import { ordenado } from '../src/data';

describe('ordenado', () => {
  it('debería ser una función', () => {
    expect(typeof ordenado).toBe('function');
  });

  it('debería ordenar los personajes alfabeticamente a los personajes', () => {
    const input = [{ name: 'Harry Potter' }, { name: 'Draco Malfoy' }, { name: 'Hermonie Granger' }];
    const output = [{ name: 'Draco Malfoy' }, { name: 'Harry Potter' }, { name: 'Hermonie Granger' }];
    expect(ordenado(input)).toEqual(output);
  });
});


// describe('cipher', () => {
//   it('debería ser un object', () => {
//     expect(typeof cipher).toBe('object');
//   });
//   describe('cipher.encode', () => {
//     it('debería ser una función', () => {
//       expect(typeof cipher.encode).toBe('function');
//     });
// eslint-disable-next-line max-len
//     it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
//       expect(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33)).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
//     });
//     it('debería retornar "H IJKLMNOPQRSTUVWXYZABCDEFG" para "A BCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
//       expect(cipher.encode('A BCDEFGHIJKLMNOPQRSTUVWXYZ', 33)).toBe('H IJKLMNOPQRSTUVWXYZABCDEFG');
//     });
//     it('debería retornar "HiJKLMnOPQRSTUVWXYZABCDEFg" para "AbCDEFgHIJKLMNOPQRSTUVWXYz" con offset 33', () => {
//       expect(cipher.encode('AbCDEFgHIJKLMNOPQRSTUVWXYz', 33)).toBe('HiJKLMnOPQRSTUVWXYZABCDEFg');
//     });
//     it('debería retornar "HiJK; .LMnOPQRSTUVWXYZABCDEFg" para "AbCD; .EFgHIJKLMNOPQRSTUVWXYz" con offset 33', () => {
//       expect(cipher.encode('AbCD; .EFgHIJKLMNOPQRSTUVWXYz', 33)).toBe('HiJK; .LMnOPQRSTUVWXYZABCDEFg');
//     });
