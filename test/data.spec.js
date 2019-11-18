/* eslint-disable import/extensions */
/* eslint-disable import/named */
// importamos la función `example`
import { example } from '../src/data.js';

describe('example', () => {
  it('debería ser una función', () => {
    expect(typeof example).toBe('function');
  });

  describe('example', () => {
    // escribe aquí tu test
  });
});
