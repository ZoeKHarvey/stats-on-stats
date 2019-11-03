import { teams } from './teams';

describe('teams', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = teams(undefined, {});
    
    expect(result).toEqual(expected);
  });

  it('should output the correct case of GET_TEAMS action type', () => {
    const initialState = [];
    const action = {
      type: 'GET_TEAMS',
      teams: [{name: 'dog', age: 98}]
    };

    const result = [{name: 'dog', age: 98}];

    expect(teams(initialState, action)).toEqual(result)
  })

})