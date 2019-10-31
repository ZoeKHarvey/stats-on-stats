export const getTeams = (teams) => ({
  type:'GET_TEAMS',
  teams
})

export const getStandings = (standings) => ({
  type: 'GET_STANDINGS',
  standings
})

export const isLoading = (isLoading) => ({
  type: 'IS_LOADING',
  isLoading
})

export const hasError = (errorMsg) => ({
  type: 'HAS_ERROR',
  errorMsg
})
