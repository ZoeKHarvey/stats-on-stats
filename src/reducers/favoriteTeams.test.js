import { favoriteTeams } from './favoriteTeams';

describe('favoritePlayers', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = favoriteTeams(undefined, {});
    
    expect(result).toEqual(expected);
  });

  it('should output the correct case of GET_FAVORITE_TEAMS action type', () => {
    const initialState = [];
    const action = {
      type: 'GET_FAVORITE_TEAMS',
      favoriteTeams: [{name: 'dog', age: 98}]
    };

    const result = [{name: 'dog', age: 98}];

    expect(favoriteTeams(initialState, action)).toEqual(result)
  });

  it('should return initial state if action is not GET_FAVORITE_TEAMS', () => {
    const initialState = [];
    const action = {
      type: 'WHAT',
      favoritePlayers: [{}, {}]
    };
    expect(favoriteTeams(initialState, action)).toEqual(initialState)
  })

})