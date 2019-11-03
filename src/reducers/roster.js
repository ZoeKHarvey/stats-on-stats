export const roster = (state = [], action) => {
  switch(action.type) {
    case 'GET_ROSTER':
      return action.roster;
    default:
      return state;
  }
}