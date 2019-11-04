export const playerInfo = (state = {}, action) => {
  switch(action.type) {
    case 'GET_PLAYER':
      return action.player;
    default:
      return state;
  }
}