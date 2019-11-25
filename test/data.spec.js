// importamos la función `example`
/* eslint-disable object-curly-newline */

// eslint-disable-next-line import/named
import { filtrarPorTipo, porDebilidades, traerPokemonesPorCantidadDeCaramelos, ascendente, mostrarTop, buscarPokemon } from '../src/data';

const arrayEntrante = [
  { id: 1, num: '001', name: 'Bulbasaur', type: ['Grass', 'Poison'], candy_count: 25, spawn_chance: 0.69, weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 2, num: '002', name: 'Ivysaur', type: ['Grass', 'Poison'], candy_count: 100, spawn_chance: 0.042, weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 3, num: '003', name: 'Venusaur', type: ['Grass', 'Poison'], spawn_chance: 0.017, weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 4, num: '004', name: 'Charmander', type: ['Fire'], candy_count: 25, spawn_chance: 0.253, weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 5, num: '005', name: 'Charmeleon', type: ['Fire'], candy_count: 100, spawn_chance: 0.012, weaknesses: ['Water', 'Ground', 'Rock'] },
];

const arrayTipos = [
  { id: 1, num: '001', name: 'Bulbasaur', type: ['Grass', 'Poison'], candy_count: 25, spawn_chance: 0.69, weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 2, num: '002', name: 'Ivysaur', type: ['Grass', 'Poison'], candy_count: 100, spawn_chance: 0.042, weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 3, num: '003', name: 'Venusaur', type: ['Grass', 'Poison'], spawn_chance: 0.017, weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
];

const arrayDebilidades = [
  { id: 4, num: '004', name: 'Charmander', type: ['Fire'], candy_count: 25, spawn_chance: 0.253, weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 5, num: '005', name: 'Charmeleon', type: ['Fire'], candy_count: 100, spawn_chance: 0.012, weaknesses: ['Water', 'Ground', 'Rock'] },
];

const arrayCandy = [
  { id: 1, num: '001', name: 'Bulbasaur', type: ['Grass', 'Poison'], candy_count: 25, spawn_chance: 0.69, weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 4, num: '004', name: 'Charmander', type: ['Fire'], candy_count: 25, spawn_chance: 0.253, weaknesses: ['Water', 'Ground', 'Rock'] },
];

const arrayAscendente = [
  { id: 1, num: '001', name: 'Bulbasaur', type: ['Grass', 'Poison'], candy_count: 25, spawn_chance: 0.69, weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 4, num: '004', name: 'Charmander', type: ['Fire'], candy_count: 25, spawn_chance: 0.253, weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 5, num: '005', name: 'Charmeleon', type: ['Fire'], candy_count: 100, spawn_chance: 0.012, weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 2, num: '002', name: 'Ivysaur', type: ['Grass', 'Poison'], candy_count: 100, spawn_chance: 0.042, weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 3, num: '003', name: 'Venusaur', type: ['Grass', 'Poison'], spawn_chance: 0.017, weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
];

const arrayAparicion = [
  { id: 1, num: '001', name: 'Bulbasaur', type: ['Grass', 'Poison'], candy_count: 25, spawn_chance: 0.69, weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 4, num: '004', name: 'Charmander', type: ['Fire'], candy_count: 25, spawn_chance: 0.253, weaknesses: ['Water', 'Ground', 'Rock'] },
  { id: 2, num: '002', name: 'Ivysaur', type: ['Grass', 'Poison'], candy_count: 100, spawn_chance: 0.042, weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 3, num: '003', name: 'Venusaur', type: ['Grass', 'Poison'], spawn_chance: 0.017, weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'] },
  { id: 5, num: '005', name: 'Charmeleon', type: ['Fire'], candy_count: 100, spawn_chance: 0.012, weaknesses: ['Water', 'Ground', 'Rock'] },
];


describe('filtrarPorTipo', () => {
  it('debería ser una función', () => {
    expect(typeof filtrarPorTipo).toBe('function');
  });
  describe('filtrarPorTipo', () => {
    it('debería retornar un array con los pokemones de tipo veneno', () => {
      expect(filtrarPorTipo(arrayEntrante, 'Poison', 'type')).toEqual(arrayTipos);
    });
  });
  describe('porDebilidades', () => {
    it('debería ser una función', () => {
      expect(typeof porDebilidades).toBe('function');
    });
    describe('porDebilidades', () => {
      it('debería retornar un array con los pokemones con las debilidades de Tipo', () => {
        expect(porDebilidades(arrayEntrante, 'Water', 'weaknesses')).toEqual(arrayDebilidades);
      });
    });
  });
  describe('traerPokemonesPorCantidadDeCaramelos', () => {
    it('debería ser una función', () => {
      expect(typeof traerPokemonesPorCantidadDeCaramelos).toBe('function');
    });
    describe('traerPokemonesPorCantidadDeCaramelos', () => {
      it('debería retornar un array con los pokemones que necesitan 25 caramelos', () => {
        expect(traerPokemonesPorCantidadDeCaramelos(arrayEntrante, '25', 'candy_count')).toEqual(arrayCandy);
      });
    });
  });
  describe('ascendente', () => {
    it('debería ser una función', () => {
      expect(typeof ascendente).toBe('function');
    });
    describe('ascendente', () => {
      it('debería retornar un array con los pokemones de la A - Z', () => {
        expect(ascendente(arrayEntrante, '0', 'name')).toEqual(arrayAscendente);
      });
    });
  });
  describe('mostrarTop', () => {
    it('debería ser una función', () => {
      expect(typeof mostrarTop).toBe('function');
    });
    describe('mostrarTop', () => {
      it('debería retornar un array con los pokemones con mayor frecuencia de aparición', () => {
        expect(mostrarTop(arrayEntrante, '1', 'spawn_chance')).toEqual(arrayAparicion);
      });
    });
  });
  describe('buscarPokemon', () => {
    it('debería ser una función', () => {
      expect(typeof buscarPokemon).toBe('function');
    });
    describe('buscarPokemon', () => {
      const arrayParaBuscar = [
        { id: 1, num: '001', name: 'Bulbasaur' },
        { id: 2, num: '002', name: 'Ivysaur' },
        { id: 3, num: '003', name: 'Venusaur' },
        { id: 4, num: '004', name: 'Charmander' },
        { id: 5, num: '005', name: 'Charmeleon' },
      ];
      const arrayRetorno = [
        { id: 4, num: '004', name: 'Charmander' },
        { id: 5, num: '005', name: 'Charmeleon' },
      ];
      it('debería retornar un array con los nombres de los pokemones que empiezan con la letra C', () => {
        expect(buscarPokemon(arrayParaBuscar, 'c')).toEqual(arrayRetorno);
      });
    });
  });
});
