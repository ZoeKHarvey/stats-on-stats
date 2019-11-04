export const standings = (state = [], action) => {
  console.log('in reducer')
  switch(action.type) {
    case 'GET_STANDINGS':
      return action.standings;
    default:
      return state;
  }
}