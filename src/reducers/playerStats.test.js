import { playerStats } from './playerStats';

describe('playerStats', () => {
  it('should return the initial state', () => {
    const expected = {};

    const result = playerStats(undefined, {});
    
    expect(result).toEqual(expected);
  });

})