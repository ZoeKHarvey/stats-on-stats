import { playerStats } from './playerStats';

describe('playerStats', () => {
  it('should return the initial state', () => {
    const expected = {};

    const result = playerStats(undefined, {});
    
    expect(result).toEqual(expected);
  });

  it('should output the correct case of GET_PLAYER_STATS action type', () => {
    const initialState = {};
    const action = {
      type: 'GET_PLAYER_STATS',
      player: {1: 1}
    };

    const result = {1: 1};

    expect(playerStats(initialState, action)).toEqual(result)
  });

  it('should return initial state if action is not GET_PLAYER_STATS', () => {
    const initialState = {};
    const action = {
      type: 'WHAT',
      playerStats: {wrong:'wrong'} 
    };
    expect(playerStats(initialState, action)).toEqual(initialState)
  })

})