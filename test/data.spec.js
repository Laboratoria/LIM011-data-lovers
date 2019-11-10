import { ordenado, filtrado } from '../src/data.js';

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

describe('filtrado', () => {
  it('debería ser una función', () => {
    expect(typeof filtrado).toBe('function');
  });

  it('debería filtrar la data por el nombre de la casa Ravenclaw', () => {
    const data = [{ name: 'Luna Lovegood', house: 'Ravenclaw' }, { name: 'Cho Chang', house: 'Ravenclaw' }, { name: 'Hermonie Granger', house: 'Gryffindor' }];
    const espero = [{ name: 'Luna Lovegood', house: 'Ravenclaw' }, { name: 'Cho Chang', house: 'Ravenclaw' }];
    expect(filtrado(data, ['house'], 'Ravenclaw')).toEqual(espero);
  });
});
