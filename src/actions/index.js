export const getTeams = (teams) => ({
  type:'GET_TEAMS',
  teams
})

export const isLoading = (isLoading) => ({
  type: 'IS_LOADING',
  isLoading
})