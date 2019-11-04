export const favoritePlayers = (state = [], action) => {
  console.log('action--->', action, 'state--->', state)
  switch(action.type) {
    case 'GET_FAVORITE_PLAYERS':
      return [...state, action.newPlayer];
    default:
      return state;
  }
}