// importamos la función `example`
import {
  filtroPorRoles, filtroPorCasas, filtroPorGenero, ordenarAscendente, buscador,
} from '../src/data';

const input = [
  {
    name: 'Harry Potter',
    gender: 'male',
    house: 'Gryffindor',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
  {
    name: 'Luna Lovegood',
    gender: 'female',
    house: 'Ravenclaw',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
  {
    name: 'Severus Snape',
    gender: 'male',
    house: 'Slytherin',
    hogwartsStudent: false,
    hogwartsStaff: true,
  },
  {
    name: 'Cedric Diggory',
    gender: 'male',
    house: 'Hufflepuff',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
  {
    name: 'Hermione Granger',
    gender: 'female',
    house: 'Gryffindor',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
];
const outputStudent = [
  {
    name: 'Harry Potter',
    gender: 'male',
    house: 'Gryffindor',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
  {
    name: 'Luna Lovegood',
    gender: 'female',
    house: 'Ravenclaw',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
  {
    name: 'Cedric Diggory',
    gender: 'male',
    house: 'Hufflepuff',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
  {
    name: 'Hermione Granger',
    gender: 'female',
    house: 'Gryffindor',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
];
const outputStaff = [
  {
    name: 'Severus Snape',
    gender: 'male',
    house: 'Slytherin',
    hogwartsStudent: false,
    hogwartsStaff: true,
  },
];
const outputGryffindor = [
  {
    name: 'Harry Potter',
    gender: 'male',
    house: 'Gryffindor',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
  {
    name: 'Hermione Granger',
    gender: 'female',
    house: 'Gryffindor',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
];
const outputHufflepuff = [
  {
    name: 'Cedric Diggory',
    gender: 'male',
    house: 'Hufflepuff',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
];
const outputRavenclaw = [
  {
    name: 'Luna Lovegood',
    gender: 'female',
    house: 'Ravenclaw',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
];
const outputMale = [
  {
    name: 'Harry Potter',
    gender: 'male',
    house: 'Gryffindor',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
  {
    name: 'Severus Snape',
    gender: 'male',
    house: 'Slytherin',
    hogwartsStudent: false,
    hogwartsStaff: true,
  },
  {
    name: 'Cedric Diggory',
    gender: 'male',
    house: 'Hufflepuff',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
];
const outputFemale = [
  {
    name: 'Luna Lovegood',
    gender: 'female',
    house: 'Ravenclaw',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
  {
    name: 'Hermione Granger',
    gender: 'female',
    house: 'Gryffindor',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
];
const outputAscendente = [
  {
    name: 'Cedric Diggory',
    gender: 'male',
    house: 'Hufflepuff',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
  {
    name: 'Harry Potter',
    gender: 'male',
    house: 'Gryffindor',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
  {
    name: 'Hermione Granger',
    gender: 'female',
    house: 'Gryffindor',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
  {
    name: 'Luna Lovegood',
    gender: 'female',
    house: 'Ravenclaw',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
  {
    name: 'Severus Snape',
    gender: 'male',
    house: 'Slytherin',
    hogwartsStudent: false,
    hogwartsStaff: true,
  },
];
const outputBuscador = [
  {
    name: 'Harry Potter',
    gender: 'male',
    house: 'Gryffindor',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
  {
    name: 'Hermione Granger',
    gender: 'female',
    house: 'Gryffindor',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
];

describe('filtroPorRoles', () => {
  it('debería ser una función', () => {
    expect(typeof filtroPorRoles).toBe('function');
  });
  it('Debería retornar un array de objetos con la propiedad hogwartsStudent = true', () => {
    expect(filtroPorRoles('hogwartsStudent', input)).toEqual(outputStudent);
  });
  it('Debería retornar un array de objetos con la propiedad hogwartsStaff = true', () => {
    expect(filtroPorRoles('hogwartsStaff', input)).toEqual(outputStaff);
  });
});
describe('filtroPorCasas', () => {
  it('filtroPorCasas', () => {
    expect(typeof filtroPorCasas).toBe('function');
  });
  it('Deberia retornar un array de objetos con la propiedad house = Gryffindor', () => {
    expect(filtroPorCasas('Gryffindor', input)).toEqual(outputGryffindor);
  });
  it('Deberia retornar un array de objetos con la propiedad house = Slytherin', () => {
    expect(filtroPorCasas('Slytherin', input)).toEqual(outputStaff);
  });
  it('Deberia retornar un array de objetos con la propiedad house = Hufflepuff', () => {
    expect(filtroPorCasas('Hufflepuff', input)).toEqual(outputHufflepuff);
  });
  it('Deberia retornar un array de objetos con la propiedad house = Ravenclaw', () => {
    expect(filtroPorCasas('Ravenclaw', input)).toEqual(outputRavenclaw);
  });
});
describe('filtroPorGenero', () => {
  it('filtroPorGenero', () => {
    expect(typeof filtroPorGenero).toBe('function');
  });
  it('Deberia retornar un array de objetos con la propiedad gender = male', () => {
    expect(filtroPorGenero('male', input)).toEqual(outputMale);
  });
  it('Deberia retornar un array de objetos con la propiedad gender = female', () => {
    expect(filtroPorGenero('female', input)).toEqual(outputFemale);
  });
});
describe('ordenarAscendente', () => {
  it('ordenarAscendente', () => {
    expect(typeof ordenarAscendente).toBe('function');
  });
  it('Deberia retornar un array de objetos ordenados alfabeticamente de A-Z', () => {
    expect(ordenarAscendente(input)).toEqual(outputAscendente);
  });
  it('Deberia retornar un array de objetos ordenados alfabeticamente de Z-A', () => {
    expect(ordenarAscendente(input)).toEqual(outputAscendente);
  });
});
describe('buscador', () => {
  it('buscador', () => {
    expect(typeof buscador).toBe('function');
  });
  it('Deberia retornar un array de objetos según lo requerido', () => {
    expect(buscador(input, 'h')).toEqual(outputBuscador);
  });
});
