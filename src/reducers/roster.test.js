import { roster } from './roster';

describe('roster', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = roster(undefined, {});
    
    expect(result).toEqual(expected);
  });

})