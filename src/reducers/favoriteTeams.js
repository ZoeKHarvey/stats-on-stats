export const favoriteTeams = (state = [], action) => {
  console.log('action--->', action, 'state--->', state)
  switch(action.type) {
    case 'GET_FAVORITE_TEAMS':
      return [...state, action.newTeam];
    default:
      return state;
  }
}
