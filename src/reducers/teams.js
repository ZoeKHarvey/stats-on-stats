export const teams = (state = [], action) => {
  switch(action.type) {
    case 'GET_TEAMS':
      return action.teams;
    default:
      return state;
  }
}