import {
  ascendente, genero, filterRole, filterRoleDos, houseUno,
} from '../src/data.js';

describe('ascendente', () => {
  it('debería ser una función', () => {
    expect(typeof ascendente).toBe('function');
  });

  it('esta es una función que ordena a los personajes de forma ascendente', () => {
    const input = [
      { name: 'Ron Weasley' },
      { name: 'Draco Malfoy' },
      { name: 'Minerva McGonagall' },
    ];
    const outputAsc = [
      { name: 'Draco Malfoy' },
      { name: 'Minerva McGonagall' },
      { name: 'Ron Weasley' },
    ];
    expect(ascendente(input, 'A-Z')).toEqual(outputAsc);
  });
});

describe('genero', () => {
  it('debería ser una función', () => {
    expect(typeof genero).toBe('function');
  });

  it('esta es una función que ordena a los personajes por genero', () => {
    const input = [
      {
        name: 'Harry Potter',
        gender: 'male',
      },
      {
        name: 'Ron Weasley',
        gender: 'male',
      },
      {
        name: 'Hermione Granger',
        gender: 'female',
      },
      {
        name: 'Minerva McGonagall',
        gender: 'female',
      },
    ];
    const outputFem = [
      {
        name: 'Hermione Granger',
        gender: 'female',
      },
      {
        name: 'Minerva McGonagall',
        gender: 'female',
      },
    ];
    const outputMale = [
      {
        name: 'Harry Potter',
        gender: 'male',
      },
      {
        name: 'Ron Weasley',
        gender: 'male',
      },
    ];

    expect(genero(input, 'Femenino')).toEqual(outputFem);
    expect(genero(input, '')).toEqual(outputMale);
  });
});

describe('filterRole', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filterRole).toBe('function');
  });

  it('es una funcion que filtra estudiantes', () => {
    const input = [
      {
        name: 'Harry Potter',
        hogwartsStudent: true,
      },
      {
        name: 'Hermione Granger',
        hogwartsStudent: true,
      },
      {
        name: 'Minerva McGonagall',
        hogwartsStudent: false,
      },
    ];
    const output = [
      {
        name: 'Ron Weasley',
        hogwartsStudent: true,
      },
      {
        name: 'Draco Malfoy',
        hogwartsStudent: true,
      },
    ];
    expect(filterRole(input)).toEqual(output);
  });
});

describe('filterRoleDos', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filterRoleDos).toBe('function');
  });

  it('es una funcion que filtra staff', () => {
    const input = [
      {
        name: 'Harry Potter',
        hogwartsStudent: true,
        hogwartsStaff: false,
      },
      {
        name: 'Minerva McGonagall',
        hogwartsStaff: true,
      },
      {
        name: 'Severus Snape',
        hogwartsStaff: true,
      },
    ];
    const output = [
      {
        name: 'Minerva McGonagall',
        hogwartsStaff: true,
      },
      {
        name: 'Severus Snape',
        hogwartsStaff: true,
      },
    ];
    expect(filterRoleDos(input)).toEqual(output);
  });
});

describe('houseUno', () => {
  it('debería ser una función', () => {
    expect(typeof houseUno).toBe('function');
  });

  it('es una función que ordena a los personajes por la casa a la que pertenece', () => {
    const input = [
      {
        name: 'Harry Potter',
        house: 'Gryffindor',
      },
      {
        name: 'Draco Malfoy',
        house: 'Slytherin',
      },
      {
        name: 'Hermione Granger',
        gender: 'female',
      },
      {
        name: 'Cedric Diggory',
        house: 'Hufflepuff',
      },
      {
        name: 'Cho Chang',
        house: 'Ravenclaw',
      },
    ];
    const outputGryf = [
      {
        name: 'Harry Potter',
        house: 'Gryffindor',
      },
    ];
    const outputSlyt = [
      {
        name: 'Draco Malfoy',
        house: 'Slytherin',
      },
    ];
    const outputHuff = [
      {
        name: 'Cedric Diggory',
        house: 'Hufflepuff',
      },
    ];
    const outputRave = [
      {
        name: 'Cho Chang',
        house: 'Ravenclaw',
      },
    ];
    expect(houseUno(input, 'Gryffindor')).toEqual(outputGryf);
    expect(houseUno(input, 'Slytherin')).toEqual(outputSlyt);
    expect(houseUno(input, 'Hufflepuff')).toEqual(outputHuff);
    expect(houseUno(input, '')).toEqual(outputRave);
  });
});
