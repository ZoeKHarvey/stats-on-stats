import { errorMsg } from './hasError';

describe('errorMsg', () => {
  it('should return the initial state', () => {
    const expected = '';

    const result = errorMsg(undefined, {});
    
    expect(result).toEqual(expected);
  });

})