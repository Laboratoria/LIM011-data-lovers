// importamos la función `example`
import { example } from '../src/data';

describe('example', () => {
  it('debería ser una función', () => {
    expect(typeof example).toBe('function');
  });

  describe('example', () => {
    // escribe aquí tu test
  });
});
