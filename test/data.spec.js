// importamos la función `example`
import { filtroPorRoles } from '../src/data';

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
