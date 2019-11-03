import { favoritePlayers } from './favoritePlayers';

describe('favoritePlayers', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = favoritePlayers(undefined, {});
    
    expect(result).toEqual(expected);
  });

})