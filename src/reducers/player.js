export const player = (state = {}, action) => {
  console.log('in player reducer')
  switch(action.type) {
    case 'GET_PLAYER':
      return action.player;
    default:
      return state;
  }
}