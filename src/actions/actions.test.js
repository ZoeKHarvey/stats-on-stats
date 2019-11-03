import * as actions from './index';

describe('actions', () => {
  it('should have a type of FAVORITE_PLAYER', () => {
    const newPlayer = [{}, {}, {}];
    const expectedAction = {
      type: 'GET_FAVORITE_PLAYERS',
      newPlayer
    };
    const result = actions.favoritePlayer(newPlayer);
    expect(result).toEqual(expectedAction)
    })
})