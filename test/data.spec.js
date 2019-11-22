/* eslint-disable object-curly-newline */
// importamos la función `example`
import POKEMON from '../src/data/pokemon/pokemon.js';
import { idPokemon, orderData, typeFilter, weaknessFilter, topPokemon } from '../src/data.js';

const pokemonArray = [
  { id: 1, name: 'Bulbasaur', type: ['Planta', 'Veneno'], candy_count: 25, spawn_chance: 0.69, weaknesses: ['Fuego', 'Hielo', 'Volador', 'Psiquico'] },
  { id: 2, name: 'Ivysaur', type: ['Planta', 'Veneno'], candy_count: 100, spawn_chance: 0.042, weaknesses: ['Fuego', 'Hielo', 'Volador', 'Psiquico'] },
  { id: 3, name: 'Venusaur', type: ['Planta', 'Veneno'], candy_count: 0, spawn_chance: 0.017, weaknesses: ['Fuego', 'Hielo', 'Volador', 'Psiquico'] },
  { id: 4, name: 'Charmander', type: ['Fuego'], candy_count: 25, spawn_chance: 0.253, weaknesses: ['Agua', 'Tierra', 'Roca'] },
  { id: 5, name: 'Charmeleon', type: ['Fuego'], candy_count: 100, spawn_chance: 0.012, weaknesses: ['Agua', 'Tierra', 'Roca'] },
];

const arrTipos = [
  { id: 1, name: 'Bulbasaur', type: ['Planta', 'Veneno'], candy_count: 25, spawn_chance: 0.69, weaknesses: ['Fuego', 'Hielo', 'Volador', 'Psiquico'] },
  { id: 2, name: 'Ivysaur', type: ['Planta', 'Veneno'], candy_count: 100, spawn_chance: 0.042, weaknesses: ['Fuego', 'Hielo', 'Volador', 'Psiquico'] },
  { id: 3, name: 'Venusaur', type: ['Planta', 'Veneno'], candy_count: 0, spawn_chance: 0.017, weaknesses: ['Fuego', 'Hielo', 'Volador', 'Psiquico'] },
];

const arrDebilidades = [
  { id: 4, name: 'Charmander', type: ['Fuego'], candy_count: 25, spawn_chance: 0.253, weaknesses: ['Agua', 'Tierra', 'Roca'] },
  { id: 5, name: 'Charmeleon', type: ['Fuego'], candy_count: 100, spawn_chance: 0.012, weaknesses: ['Agua', 'Tierra', 'Roca'] },
];

// TEST DE ORDEN POR ID
describe('idPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof idPokemon).toBe('function');
  });
  it('debería retornar 1 como el ID que corresponde a Bulbasaur', () => {
    expect(idPokemon(POKEMON, 'show')[0].id).toBe(1);
  });
});

// TEST DE ORDEN ALFABÉTICO + CANTIDAD DE CARAMELOS
describe('orderData', () => {
  it('debería ser una función', () => {
    expect(typeof orderData).toBe('function');
  });
  it('debería retornar Abra como el primero en la lista en A-Z', () => {
    expect(orderData(POKEMON, 'ascendant-az')[0].name).toBe('Abra');
  });
  it('debería retornar Zubat como el último en la lista en Z-A', () => {
    expect(orderData(POKEMON, 'descendant-za')[0].name).toBe('Zubat');
  });
  it('debería retornar 400 caramelos en el orden de + a -caramelos', () => {
    expect(orderData(POKEMON, 'more-candies')[0].candy_count).toBe(400);
  });
  it('debería retornar 0 caramelos en el orden de - a +caramelos', () => {
    expect(orderData(POKEMON, 'less-candies')[0].candy_count).toBe(0);
  });
});

// TEST FILTRO POR TIPOS
describe('typeFilter', () => {
  it('debería ser una función', () => {
    expect(typeof typeFilter).toBe('function');
  });
  it('debería retornar un array de pokemon por tipo', () => {
    expect(typeFilter(pokemonArray, 'Planta')).toEqual(arrTipos);
  });
});

// TEST FILTRO POR DEBILIDADES
describe('weaknessFilter', () => {
  it('debería ser una función', () => {
    expect(typeof weaknessFilter).toBe('function');
  });
  it('debería retornar un array de pokemon por debilidad', () => {
    expect(weaknessFilter(pokemonArray, 'Roca')).toEqual(arrDebilidades);
  });
});

// TEST DE TOP 10 DE FRECUENCIA DE APARICIÓN
describe('topPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof topPokemon).toBe('function');
  });
  it('debería retornar 15.98 como la mayor frecuencia de aparición', () => {
    expect(topPokemon(POKEMON, 'poke-top')[0].spawn_chance).toBe(15.98);
  });
});
