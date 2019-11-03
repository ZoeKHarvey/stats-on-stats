export const teamSchedule = (state = {}, action) => {
  console.log('IN REDUCER')
  console.log('state', state, 'action', action)
  switch(action.type) {
    case 'GET_TEAM_SCHEDULE':
      return action.schedule;
    default:
      return state;
  }
}