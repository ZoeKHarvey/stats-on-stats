export const roster = (state = [], action) => {
  console.log('in reducer')
  switch(action.type) {
    case 'GET_ROSTER':
      return action.roster;
    default:
      return state;
  }
}