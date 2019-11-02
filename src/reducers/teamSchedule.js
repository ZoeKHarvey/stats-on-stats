export const teamSchedule = (state = {}, action) => {
  console.log('action--->', action)
  switch(action.type) {
    case 'GET_TEAM_SCHEDULE':
      return action.id;
    default:
      return state;
  }
}