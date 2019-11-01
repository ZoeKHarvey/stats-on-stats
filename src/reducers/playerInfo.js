export const playerInfo = (state = {}, action) => {
  console.log('action--->', action)
  switch(action.type) {
    case 'GET_PLAYER':
      return action.player;
    default:
      return state;
  }
}