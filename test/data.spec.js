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
// eslint-disable-next-line object-curly-newline
import { ordenado, filtrado, busqueda, filtraDiferente } from '../src/data';

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
  // para filtro según casas
  it('debería filtrar la data por el nombre de la casa Ravenclaw', () => {
    const dataFC = [{ name: 'Luna Lovegood', house: 'Ravenclaw' }, { name: 'Cho Chang', house: 'Ravenclaw' }, { name: 'Hermonie Granger', house: 'Gryffindor' }];
    const esperoFC = [{ name: 'Luna Lovegood', house: 'Ravenclaw' }, { name: 'Cho Chang', house: 'Ravenclaw' }];
    expect(filtrado(dataFC, ['house'], 'Ravenclaw')).toEqual(esperoFC);
  });
  // para filtro según personajes
  it('debería filtrar la data por el género de los personajes', () => {
    const dataFP = [{ name: 'Harry Potter', gender: 'male' }, { name: 'Cho Chang', gender: 'female' }, { name: 'Hermonie Granger', gender: 'female' }];
    const esperoFP = [{ name: 'Cho Chang', gender: 'female' }, { name: 'Hermonie Granger', gender: 'female' }];
    expect(filtrado(dataFP, ['gender'], 'female')).toEqual(esperoFP);
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

describe('filtraDiferente', () => {
  it('debería ser una función', () => {
    expect(typeof filtraDiferente).toBe('function');
  });

  it('debería retornar solo personajes que tienen casa', () => {
    const dataFD = [{ name: 'Vincent Crabbe', house: 'Slytherin' }, { name: 'Argus Filch', house: '' }];
    const esperoFD = [{ name: 'Argus Filch', house: '' }];
    expect(filtraDiferente(dataFD, 'house', 'Slytherin')).toEqual(esperoFD);
  });
});
