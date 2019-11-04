export const standings = (state = [], action) => {
  switch(action.type) {
    case 'GET_STANDINGS':
      return action.standings;
    default:
      return state;
  }
}