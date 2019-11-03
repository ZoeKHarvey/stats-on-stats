import { playerProjections } from './playerProjections';

describe('playerInfo', () => {
  it('should return the initial state', () => {
    const expected = {};

    const result = playerProjections(undefined, {});
    
    expect(result).toEqual(expected);
  });

})