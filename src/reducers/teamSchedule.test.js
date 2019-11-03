import { teamSchedule } from './teamSchedule';

describe('teamSchedule', () => {
  it('should return the initial state', () => {
    const expected = {};

    const result = teamSchedule(undefined, {});
    
    expect(result).toEqual(expected);
  });

  it('should output the correct case of GET_TEAM_SCHEDULE action type', () => {
    const initialState = {};
    const action = {
      type: 'GET_TEAM_SCHEDULE',
      teamSchedule: {name: 'dog', age: 98}
    };

    const result = {name: 'dog', age: 98};

    expect(teamSchedule(initialState, action)).toEqual(result)
  });

  it('should return initial state if action is not GET_TEAM_SCHEDULE', () => {
    const initialState = [];
    const action = {
      type: 'WHAT',
      teamSchedule: [{}, {}]
    };
    expect(teamSchedule(initialState, action)).toEqual(initialState)
  })

})