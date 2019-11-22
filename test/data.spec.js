import {
  filterHouse, filterRole, filterGender, search, filterWandCore, changeDataWand, filterPatronus,
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
const inputWands = [{
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
},
{
  name: 'Rubeus Hagrid',
  species: 'half-giant',
  gender: 'male',
  house: 'Gryffindor',
  dateOfBirth: '06-12-1928',
  yearOfBirth: 1928,
  ancestry: 'half-blood',
  eyeColour: 'black',
  hairColour: 'black',
  wand: {
    wood: 'oak',
    core: '',
    length: 16,
  },
  patronus: '',
  hogwartsStudent: false,
  hogwartsStaff: true,
  actor: 'Robbie Coltrane',
  alive: true,
  image: 'http://hp-api.herokuapp.com/images/hagrid.png',
},
{
  name: 'Ginny Weasley',
  species: 'human',
  gender: 'female',
  house: 'Gryffindor',
  dateOfBirth: '11-08-1981',
  yearOfBirth: 1981,
  ancestry: 'pure-blood',
  eyeColour: 'brown',
  hairColour: 'red',
  wand: {
    wood: 'yew',
    core: '',
    length: '',
  },
  patronus: 'horse',
  hogwartsStudent: true,
  hogwartsStaff: false,
  actor: 'Bonnie Wright',
  alive: true,
  image: 'http://hp-api.herokuapp.com/images/ginny.jpg',
},
{
  name: 'Hermione Granger',
  species: 'human',
  gender: 'female',
  house: 'Gryffindor',
  dateOfBirth: '19-09-1979',
  yearOfBirth: 1979,
  ancestry: 'muggleborn',
  eyeColour: 'brown',
  hairColour: 'brown',
  wand: {
    wood: 'vine',
    core: 'dragon heartstring',
    length: '',
  },
  patronus: 'otter',
  hogwartsStudent: true,
  hogwartsStaff: false,
  actor: 'Emma Watson',
  alive: true,
  image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
}];
describe('Test to filterHouse function', () => {
  it('Should be a function', () => {
    expect(typeof filterHouse).toBe('function');
  });
  it('Should filter only characters of Hufflepuff', () => {
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

describe('Test to filterRole function', () => {
  it('Should be a function', () => {
    expect(typeof filterRole).toBe('function');
  });
  it('Should filter only Students ', () => {
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

describe('Test to filterGender function', () => {
  it('Should be a function', () => {
    expect(typeof filterGender).toBe('function');
  });
  it('Should filter only male characters', () => {
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

describe('Test to function search', () => {
  it('Should be a function', () => {
    expect(typeof search).toBe('function');
  });
  it('Should filter only Cedric', () => {
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

describe('Test to filterWandCore function', () => {
  it('Should be a function', () => {
    expect(typeof filterWandCore).toBe('function');
  });
  it('Should filter only characters with unicorn wand', () => {
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

describe('Test to changeDataWand function', () => {
  it('Should be a function', () => {
    expect(typeof changeDataWand).toBe('function');
  });
  it('Should change empty properties', () => {
    expect(changeDataWand(inputWands, 'wand')).toEqual([{
      name: 'Minerva McGonagall',
      image: 'http://hp-api.herokuapp.com/images/mcgonagall.jpg',
      wand: {
        wood: 'no especificado',
        core: 'no especificado',
        length: 'no especificado',
      },
    },
    {
      name: 'Cedric Diggory',
      image: 'http://hp-api.herokuapp.com/images/cedric.png',
      wand: {
        wood: 'ash',
        core: 'unicorn hair',
        length: 12.25,
      },
    },
    {
      name: 'Rubeus Hagrid',
      image: 'http://hp-api.herokuapp.com/images/hagrid.png',
      wand: {
        wood: 'oak',
        core: 'no especificado',
        length: 16,
      },
    },
    {
      name: 'Ginny Weasley',
      image: 'http://hp-api.herokuapp.com/images/ginny.jpg',
      wand: {
        wood: 'yew',
        core: 'no especificado',
        length: 'no especificado',
      },
    },
    {
      name: 'Hermione Granger',
      image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
      wand: {
        wood: 'vine',
        core: 'dragon heartstring',
        length: 'no especificado',
      },
    }]);
  });
});
describe('Test to filterPatronus function', () => {
  it('should be a function', () => {
    expect(typeof filterPatronus).toBe('function');
  });
  it('Should filter only characters with patronus', () => {
    expect(filterPatronus(input)).toEqual([{
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
    }]);
  });
});
