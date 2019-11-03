import { errorMsg } from './hasError';

describe('errorMsg', () => {
  it('should return the initial state', () => {
    const expected = '';

    const result = errorMsg(undefined, {});
    
    expect(result).toEqual(expected);
  });

  it('should output the correct case of HAS_ERROR action type', () => {
    const initialState = '';
    const action = {
      type: 'HAS_ERROR',
      errorMsg: 'hi'
    };

    const result = 'hi';

    expect(errorMsg(initialState, action)).toEqual(result)
  })

  it('should return initial state if action is not HAS_ERROR', () => {
    const initialState = [];
    const action = {
      type: 'WHAT',
      favoritePlayers: [{}, {}]
    };
    expect(errorMsg(initialState, action)).toEqual(initialState)
  })

})