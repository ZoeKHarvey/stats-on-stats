export const playerStats = (state = {}, action) => {
  console.log('action--->', action)
  switch(action.type) {
    case 'GET_PLAYER_STATS':
      return action.player;
    default:
      return state;
  }
}