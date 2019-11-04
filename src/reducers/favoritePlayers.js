export const favoritePlayers = (state = [], action) => {
  switch(action.type) {
    case 'GET_FAVORITE_PLAYERS':
      return [...state, action.newPlayer];
    default:
      return state;
  }
}