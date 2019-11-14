// importamos la función `example`
// eslint-disable-next-line no-unused-vars
import {
  filtroPorRoles,
  filtroPorCasas, filtroPorGenero,
} from '../src/data';

const data = [
  {
    name: 'Harry Potter',
    species: 'human',
    gender: 'male',
    house: 'Gryffindor',
    dateOfBirth: '31-07-1980',
    yearOfBirth: 1980,
    ancestry: 'half-blood',
    eyeColour: 'green',
    hairColour: 'black',
    wand: {
      wood: 'holly',
      core: 'phoenix feather',
      length: 11,
    },
    patronus: 'stag',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Daniel Radcliffe',
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/harry.jpg',
  },
  {
    name: 'Hermione Granger',
    gender: 'female',
    house: 'Gryffindor',
    hogwartsStudent: true,
    hogwartsStaff: false,
  },
  {
    name: 'Ron Weasley',
    species: 'human',
    gender: 'male',
    house: 'Gryffindor',
    dateOfBirth: '01-03-1980',
    yearOfBirth: 1980,
    ancestry: 'pure-blood',
    eyeColour: 'blue',
    hairColour: 'red',
    wand: {
      wood: 'willow',
      core: 'unicorn tail-hair',
      length: 14,
    },
    patronus: 'Jack Russell terrier',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Rupert Grint',
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/ron.jpg',
  },
];
const resulM = [{
  name: 'Hermione Granger',
  gender: 'female',
  house: 'Gryffindor',
  hogwartsStudent: true,
  hogwartsStaff: false,
}];

describe('example', () => {
  it('debería ser una función', () => {
    expect(typeof filtroPorRoles).toBe('function');
  });

  describe('example', () => {
    // escribe aquí tu test
    it('Deberia si el resul son todas M', () => {
      expect(filtroPorGenero('female', data)).toEqual(resulM);
    });
  });
});
