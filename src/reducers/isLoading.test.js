import { isLoading } from './isLoading';

describe('isLoading', () => {
  it('should return the initial state', () => {
    const expected = false;

    const result = isLoading(undefined, {});
    
    expect(result).toEqual(expected);
  });

  it('should output the correct case of IS_LOADING action type', () => {
    const initialState = false;
    const action = {
      type: 'IS_LOADING',
      isLoading: true
    };

    const result = true;

    expect(isLoading(initialState, action)).toEqual(result)
  });

  it('should return initial state if action is not IS_LOADING', () => {
    const initialState = [];
    const action = {
      type: 'WHAT',
      favoritePlayers: [{}, {}]
    };
    expect(isLoading(initialState, action)).toEqual(initialState)
  })

})