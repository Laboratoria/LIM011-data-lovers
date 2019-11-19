import {
  filterHouse, filterRole, filterGender, search, filterWandCore,
} from '../src/data';

const input = [{
  name: 'Minerva McGonagall',
  species: 'human',
  gender: 'female',
  house: 'Gryffindor',
  dateOfBirth: '04-10-1925',
  yearOfBirth: 1925,
  ancestry: '',
  eyeColour: '',
  hairColour: 'black',
  wand: {
    wood: '',
    core: '',
    length: '',
  },
  patronus: 'tabby cat',
  hogwartsStudent: false,
  hogwartsStaff: true,
  actor: 'Dame Maggie Smith',
  alive: true,
  image: 'http://hp-api.herokuapp.com/images/mcgonagall.jpg',
},
{
  name: 'Cedric Diggory',
  species: 'human',
  gender: 'male',
  house: 'Hufflepuff',
  dateOfBirth: '',
  yearOfBirth: 1977,
  ancestry: '',
  eyeColour: 'grey',
  hairColour: 'brown',
  wand: {
    wood: 'ash',
    core: 'unicorn hair',
    length: 12.25,
  },
  patronus: '',
  hogwartsStudent: true,
  hogwartsStaff: false,
  actor: 'Robert Pattinson',
  alive: false,
  image: 'http://hp-api.herokuapp.com/images/cedric.png',
}];
describe('testear la función filterHouse', () => {
  it('debería ser una función', () => {
    expect(typeof filterHouse).toBe('function');
  });
  it('debería filtrar Hufflepuff', () => {
    expect(filterHouse(input, 'Hufflepuff')).toStrictEqual([{
      name: 'Cedric Diggory',
      species: 'human',
      gender: 'male',
      house: 'Hufflepuff',
      dateOfBirth: '',
      yearOfBirth: 1977,
      ancestry: '',
      eyeColour: 'grey',
      hairColour: 'brown',
      wand: {
        wood: 'ash',
        core: 'unicorn hair',
        length: 12.25,
      },
      patronus: '',
      hogwartsStudent: true,
      hogwartsStaff: false,
      actor: 'Robert Pattinson',
      alive: false,
      image: 'http://hp-api.herokuapp.com/images/cedric.png',
    }]);
  });
});

describe('testear la función filterRole', () => {
  it('debería ser una función', () => {
    expect(typeof filterRole).toBe('function');
  });
  it('debería filtrar Estudiante', () => {
    expect(filterRole(input, 'true')).toStrictEqual([{
      name: 'Cedric Diggory',
      species: 'human',
      gender: 'male',
      house: 'Hufflepuff',
      dateOfBirth: '',
      yearOfBirth: 1977,
      ancestry: '',
      eyeColour: 'grey',
      hairColour: 'brown',
      wand: {
        wood: 'ash',
        core: 'unicorn hair',
        length: 12.25,
      },
      patronus: '',
      hogwartsStudent: true,
      hogwartsStaff: false,
      actor: 'Robert Pattinson',
      alive: false,
      image: 'http://hp-api.herokuapp.com/images/cedric.png',
    }]);
  });
});

describe('testear la función filterGender', () => {
  it('debería ser una función', () => {
    expect(typeof filterGender).toBe('function');
  });
  it('debería filtrar Male', () => {
    expect(filterGender(input, 'male')).toStrictEqual([{
      name: 'Cedric Diggory',
      species: 'human',
      gender: 'male',
      house: 'Hufflepuff',
      dateOfBirth: '',
      yearOfBirth: 1977,
      ancestry: '',
      eyeColour: 'grey',
      hairColour: 'brown',
      wand: {
        wood: 'ash',
        core: 'unicorn hair',
        length: 12.25,
      },
      patronus: '',
      hogwartsStudent: true,
      hogwartsStaff: false,
      actor: 'Robert Pattinson',
      alive: false,
      image: 'http://hp-api.herokuapp.com/images/cedric.png',
    }]);
  });
});

describe('testear la función search', () => {
  it('debería ser una función', () => {
    expect(typeof search).toBe('function');
  });
  it('debería filtrar Cedric', () => {
    expect(search(input, 'Cedric')).toEqual([{
      name: 'Cedric Diggory',
      species: 'human',
      gender: 'male',
      house: 'Hufflepuff',
      dateOfBirth: '',
      yearOfBirth: 1977,
      ancestry: '',
      eyeColour: 'grey',
      hairColour: 'brown',
      wand: {
        wood: 'ash',
        core: 'unicorn hair',
        length: 12.25,
      },
      patronus: '',
      hogwartsStudent: true,
      hogwartsStaff: false,
      actor: 'Robert Pattinson',
      alive: false,
      image: 'http://hp-api.herokuapp.com/images/cedric.png',
    }]);
  });
});

describe('testear la función filterWandCore', () => {
  it('debería ser una función', () => {
    expect(typeof filterWandCore).toBe('function');
  });
  it('debería filtrar Cedric', () => {
    expect(filterWandCore(input, 'unicorn')).toEqual([{
      name: 'Cedric Diggory',
      species: 'human',
      gender: 'male',
      house: 'Hufflepuff',
      dateOfBirth: '',
      yearOfBirth: 1977,
      ancestry: '',
      eyeColour: 'grey',
      hairColour: 'brown',
      wand: {
        wood: 'ash',
        core: 'unicorn hair',
        length: 12.25,
      },
      patronus: '',
      hogwartsStudent: true,
      hogwartsStaff: false,
      actor: 'Robert Pattinson',
      alive: false,
      image: 'http://hp-api.herokuapp.com/images/cedric.png',
    }]);
  });
});
