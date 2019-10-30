export const teams = (state = [], action) => {
  console.log('in reducer')
  switch(action.type) {
    case 'GET_TEAMS':
      return action.teams;
    default:
      return state;
  }
}