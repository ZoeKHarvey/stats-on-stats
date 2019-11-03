import { playerInfo } from './playerInfo';

describe('playerInfo', () => {
  it('should return the initial state', () => {
    const expected = {};

    const result = playerInfo(undefined, {});
    
    expect(result).toEqual(expected);
  });

})