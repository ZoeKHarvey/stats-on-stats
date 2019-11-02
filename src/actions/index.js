export const getTeams = (teams) => ({
  type:'GET_TEAMS',
  teams
})

export const getStandings = (standings) => ({
  type: 'GET_STANDINGS',
  standings
})

export const getRoster = (roster) => ({
  type: 'GET_ROSTER',
  roster
})

export const getPlayer = (player) => ({
  type: 'GET_PLAYER',
  player
})

export const getPlayerStats = (player) => ({
  type: 'GET_PLAYER_STATS',
  player
})

export const getTeamSchedule = (id) => ({
  type: 'GET_TEAM_SCHEDULE',
  id
})

export const getPlayerProjections = (id) => ({
  type: 'GET_PLAYER_PROJECTIONS',
  id
})

export const isLoading = (isLoading) => ({
  type: 'IS_LOADING',
  isLoading
})

export const hasError = (errorMsg) => ({
  type: 'HAS_ERROR',
  errorMsg
})



