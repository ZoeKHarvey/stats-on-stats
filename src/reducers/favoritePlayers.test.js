import { favoritePlayers } from './favoritePlayers';

describe('favoritePlayers', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = favoritePlayers(undefined, {});
    
    expect(result).toEqual(expected);
  });

  it('should output the correct case of GET_FAVORITE_PLAYERS action type', () => {
    const initialState = [];
    const action = {
      type: 'GET_FAVORITE_PLAYERS',
      newPlayer: {name: 'dog', age: 98}
    };

    const result = [{name: 'dog', age: 98}];

    expect(favoritePlayers(initialState, action)).toEqual(result)
  });

  it('should return initial state if action is not GET_FAVORITE_PLAYERS', () => {
    const initialState = [];
    const action = {
      type: 'WHAT',
      favoritePlayers: [{}, {}]
    };
    expect(favoritePlayers(initialState, action)).toEqual(initialState)
  })


})