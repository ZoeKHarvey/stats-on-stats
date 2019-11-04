import { playerProjections } from './playerProjections';

describe('playerInfo', () => {
  it('should return the initial state', () => {
    const expected = {};

    const result = playerProjections(undefined, {});
    
    expect(result).toEqual(expected);
  });

  it('should output the correct case of GET_PLAYER_PROJECTIONS action type', () => {
    const initialState = {};
    const action = {
      type: 'GET_PLAYER_PROJECTIONS',
      player: {name: 'dog', age: 98}
    };

    const result = {name: 'dog', age: 98};

    expect(playerProjections(initialState, action)).toEqual(result)
  });

  it('should return initial state if action is not GET_PLAYER_PROJECTIONS', () => {
    const initialState = [];
    const action = {
      type: 'WHAT',
      favoritePlayers: [{}, {}]
    };
    expect(playerProjections(initialState, action)).toEqual(initialState)
  })

})