export const player = (state = {}, action) => {
  switch(action.type) {
    case 'GET_PLAYER':
      return action.player;
    case 'GET_PLAYER_STATS':
      return action.player;
    default:
      return state;
  }
}