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
import { ordenado, filtrado, busqueda } from '../src/data';

describe('ordenado', () => {
  it('debería ser una función', () => {
    expect(typeof ordenado).toBe('function');
  });

  it('debería ordenar los personajes alfabeticamente a los personajes', () => {
    const dataO = [{ name: 'Harry Potter' }, { name: 'Draco Malfoy' }, { name: 'Hermonie Granger' }];
    const esperoO = [{ name: 'Draco Malfoy' }, { name: 'Harry Potter' }, { name: 'Hermonie Granger' }];
    expect(ordenado(dataO)).toEqual(esperoO);
  });
});

describe('filtrado', () => {
  it('debería ser una función', () => {
    expect(typeof filtrado).toBe('function');
  });

  it('debería filtrar la data por el nombre de la casa Ravenclaw', () => {
    const dataF = [{ name: 'Luna Lovegood', house: 'Ravenclaw' }, { name: 'Cho Chang', house: 'Ravenclaw' }, { name: 'Hermonie Granger', house: 'Gryffindor' }];
    const esperoF = [{ name: 'Luna Lovegood', house: 'Ravenclaw' }, { name: 'Cho Chang', house: 'Ravenclaw' }];
    expect(filtrado(dataF, ['house'], 'Ravenclaw')).toEqual(esperoF);
  });
});

describe('busqueda', () => {
  it('debería ser una función', () => {
    expect(typeof busqueda).toBe('function');
  });

  it('debería retornar los elementos que coincidan tanto en nombre o apellido con el input en mayuscula', () => {
    const dataBM = [{ name: 'Vincent Crabbe', house: 'Slytherin' }, { name: 'Cho Chang', house: 'Ravenclaw' }, { name: 'Hermonie Granger', house: 'Gryffindor' }];
    const esperoBM = [{ name: 'Vincent Crabbe', house: 'Slytherin' }, { name: 'Cho Chang', house: 'Ravenclaw' }];
    expect(busqueda(dataBM, 'C')).toEqual(esperoBM);
  });

  it('debería retornar los elementos que coincidan tanto en nombre o apellido con el input en minuscula', () => {
    const dataBm = [{ name: 'Vincent Crabbe', house: 'Slytherin' }, { name: 'Cho Chang', house: 'Ravenclaw' }, { name: 'Hermonie Granger', house: 'Gryffindor' }];
    const esperoBm = [{ name: 'Vincent Crabbe', house: 'Slytherin' }, { name: 'Cho Chang', house: 'Ravenclaw' }];
    expect(busqueda(dataBm, 'c')).toEqual(esperoBm);
  });
});
