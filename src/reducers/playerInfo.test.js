import { playerInfo } from './playerInfo';

describe('playerInfo', () => {
  it('should return the initial state', () => {
    const expected = {};

    const result = playerInfo(undefined, {});
    
    expect(result).toEqual(expected);
  });

  it('should output the correct case of GET_PLAYER_INFO action type', () => {
    const initialState = [];
    const action = {
      type: 'GET_PLAYER_INFO',
      isLoading: [{name: 'dog', age: 98}]
    };

    const result = [];

    expect(playerInfo(initialState, action)).toEqual(result)
  });

  it('should return initial state if action is not GET_PLAYER_INFO', () => {
    const initialState = [];
    const action = {
      type: 'WHAT',
      favoritePlayers: [{}, {}]
    };
    expect(playerInfo(initialState, action)).toEqual(initialState)
  })

})