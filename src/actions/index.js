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

export const getTeamSchedule = (schedule) => ({
  type: 'GET_TEAM_SCHEDULE',
  schedule
})

export const getPlayerProjections = (player) => ({
  type: 'GET_PLAYER_PROJECTIONS',
  player
})

export const favoriteTeams = (newTeam) => ({
  type: 'GET_FAVORITE_TEAMS',
  newTeam
})

export const isLoading = (isLoading) => ({
  type: 'IS_LOADING',
  isLoading
})

export const hasError = (errorMsg) => ({
  type: 'HAS_ERROR',
  errorMsg
})



