// importamos la función `example`
/* eslint-disable object-curly-newline */

import { filtrarPorTipo } from '../src/data';

const arrayEntrante = [
  { id: 1, num: '001', name: 'Bulbasaur', type: ['Grass', 'Poison'], candy_count: 25, spawn_chance: 0.69, weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 2, num: '002', name: 'Ivysaur', type: ['Grass', 'Poison'], candy_count: 100, spawn_chance: 0.042, weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 3, num: '003', name: 'Venusaur', type: ['Grass', 'Poison'], spawn_chance: 0.017, weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 4, num: '004', name: 'Charmander', type: ['Fire'], candy_count: 25, spawn_chance: 0.253, weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 5, num: '005', name: 'Charmeleon', type: ['Fire'], candy_count: 100, spawn_chance: 0.012, weaknesses: ['Water', 'Ground', 'Rock'] },
];

const arraySaliente = [
  { id: 1, num: '001', name: 'Bulbasaur', type: ['Grass', 'Poison'], candy_count: 25, spawn_chance: 0.69, weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 2, num: '002', name: 'Ivysaur', type: ['Grass', 'Poison'], candy_count: 100, spawn_chance: 0.042, weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 3, num: '003', name: 'Venusaur', type: ['Grass', 'Poison'], spawn_chance: 0.017, weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
];

describe('filtrarPorTipo', () => {
  it('debería ser una función', () => {
    expect(typeof filtrarPorTipo).toBe('function');
  });
  describe('filtrarPorTipo', () => {
    it('debería retornar un array con los pokemones de tipo veneno', () => {
      expect(filtrarPorTipo(arrayEntrante, 'Poison', 'type')).toEqual(arraySaliente);
    });
  });
});
