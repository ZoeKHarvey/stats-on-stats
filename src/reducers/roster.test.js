import { roster } from './roster';

describe('roster', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = roster(undefined, {});
    
    expect(result).toEqual(expected);
  });

  it('should output the correct case of GET_ROSTER action type', () => {
    const initialState = [];
    const action = {
      type: 'GET_ROSTER',
      roster: []
    };

    const result = [];

    expect(roster(initialState, action)).toEqual(result)
  });

  it('should return initial state if action is not GET_ROSTER', () => {
    const initialState = [];
    const action = {
      type: 'WHAT',
      roster: [{}, {}, {}]
    };
    expect(roster(initialState, action)).toEqual(initialState)
  })

})