import { ordenado } from '../src/data.js';
// import POTTER from '../src/data/potter/potter';
describe('ordenado', () => {
  it('debería ser una función', () => {
    expect(typeof ordenado).toBe('function');
  });
    it('debería ordenar la base de datos', () => {
      const data = [{ name: }];
      const esperado = [{ name: 'a', house: 'b' }, { name: 'e', house: 'c' }, { name: 'f', house: 'b' }];
      expect(ordenado(data)).toEqual(esperado);
    });
  });
});
