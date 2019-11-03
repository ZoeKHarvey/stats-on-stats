import { favoriteTeams } from './favoriteTeams';

describe('favoritePlayers', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = favoriteTeams(undefined, {});
    
    expect(result).toEqual(expected);
  });

})