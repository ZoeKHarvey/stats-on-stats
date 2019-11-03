import { favoritePlayers } from './favoritePlayers';

describe('favoritePlayers', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = favoritePlayers(undefined, {});
    
    expect(result).toEqual(expected);
  });

  it('should output the correct case of FAVORITE_PLAYERS action type', () => {
    const initialState = [];
    const action = {
      type: 'FAVORITE_PLAYERS',
      favoritePlayers: [{name: 'dog', age: 98}]
    };

    const result = [{name: 'dog', age: 98}];

    expect(favoritePlayers(initialState, action)).toEqual(result)
  })

})