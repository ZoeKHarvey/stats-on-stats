export const fetchTeams = async() => {
  const response = await fetch('https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster');
  const data = await response.json();
  return data.teams
}


export const fetchRoster = async(id) => {
  const response = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${id}?expand=team.roster`)
  const data = await response.json();
  return data.teams[0].roster.roster
}

export const fetchPlayer = async(id) => {
  const response = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}`)
  const data = await response.json();
  return data.people[0]
}

export const fetchPlayerStats = async(id, year = 20192020) => {
  const response = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=statsSingleSeason&season=${year}`)
  const data = await response.json();
  return data.stats[0].splits[0].stat
}

export const fetchTeamSchedule = async(id) => {
  console.log('in the fetch', id)
  const response = await fetch(`https://statsapi.web.nhl.com/api/v1/schedule?teamId=${id}`)
  const data = await response.json();
  console.log(data.dates[0].games[0])
  return data.dates[0].games[0]
}

export const fetchPlayerProjections = async(id) => {
  const response = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=onPaceRegularSeason&season=20192020`)
  const data = await response.json();
  console.log(data.stats[0].splits[0].stat)
  return data.stats[0].splits[0]
}
