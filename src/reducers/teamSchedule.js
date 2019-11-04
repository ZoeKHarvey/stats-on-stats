export const teamSchedule = (state = {}, action) => {
  switch(action.type) {
    case 'GET_TEAM_SCHEDULE':
      return action.schedule;
    default:
      return state;
  }
}