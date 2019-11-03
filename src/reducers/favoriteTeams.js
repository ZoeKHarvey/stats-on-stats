export const favoriteTeams = (state = [], action) => {
  console.log('action--->', action)
  switch(action.type) {
    case 'GET_FAVORITE_TEAMS':
      return action.favoriteTeams.push(favoriteTeams);
    default:
      return state;
  }
}