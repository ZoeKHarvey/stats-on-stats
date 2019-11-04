export const playerProjections = (state = {}, action) => {
  console.log('action--->', action, state, 'state')
  switch(action.type) {
    case 'GET_PLAYER_PROJECTIONS':
      return action.player;
    default:
      return state;
  }
}