export const playerProjections = (state = {}, action) => {
  switch(action.type) {
    case 'GET_PLAYER_PROJECTIONS':
      return action.player;
    default:
      return state;
  }
}