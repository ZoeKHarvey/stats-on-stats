import { standings } from './standings';

describe('playerInfo', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = standings(undefined, {});
    
    expect(result).toEqual(expected);
  });




})