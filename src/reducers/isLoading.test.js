import { isLoading } from './isLoading';

describe('isLoading', () => {
  it('should return the initial state', () => {
    const expected = false;

    const result = isLoading(undefined, {});
    
    expect(result).toEqual(expected);
  });

})