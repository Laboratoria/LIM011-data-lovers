// // importamos la función `example`
// import { example } from '../src/data';

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

  it('Deberia traer la data de pokemones', () => {
    const input = [{ id: 1, name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png' }, { id: 2, name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png' }, { id: 3, name: 'Venusaur', img: 'http://www.serebii.net/pokemongo/pokemon/003.png' }];
    const output = [{ identificador: 1, nombre: 'Bulbasaur', imagen: 'http://www.serebii.net/pokemongo/pokemon/001.png' }, { identificador: 2, nombre: 'Ivysaur', imagen: 'http://www.serebii.net/pokemongo/pokemon/002.png' }, { identificador: 3, nombre: 'Venusaur', imagen: 'http://www.serebii.net/pokemongo/pokemon/003.png' }];
    expect(traerDataPokemon(input)).toEqual(output);
  });
});
