export const fetchTeams = async() => {
  const response = await fetch('https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster');
  if (!response.ok) {
    throw new Error('There was an error getting the teams.');
  }
  const data = await response.json();
  return data.teams
}


export const fetchRoster = async(id) => {
  const response = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${id}?expand=team.roster`)
  if (!response.ok) {
    throw new Error('There was an error getting the roster.');
  }
  const data = await response.json();
  return data.teams[0].roster.roster
}

export const fetchPlayer = async(id) => {
  const response = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}`)
  if (!response.ok) {
    throw new Error('There was an error getting this player.');
  }
  const data = await response.json();
  console.log('fetch people', data)
  return data.people[0];
}

export const fetchPlayerStats = async(id, year = 20192020) => {
  const response = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=statsSingleSeason&season=${year}`)
  if (!response.ok) {
    throw new Error('There was an error getting the stats.');
  }
  const data = await response.json();
  return data.stats[0].splits[0].stat
}

export const fetchTeamSchedule = async(id) => {
  const response = await fetch(`https://statsapi.web.nhl.com/api/v1/schedule?teamId=${id}`)
  if (!response.ok) {
    throw new Error('There was an error getting the schedule.');
  }
  const data = await response.json();
  console.log('fetch sched', data)
  return data.dates[0].games[0]
}

export const fetchPlayerProjections = async(id) => {
  const response = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=onPaceRegularSeason&season=20192020`)
  if (!response.ok) {
    throw new Error('There was an error getting these projections.');
  }
  const data = await response.json();
  return data.stats[0].splits[0]
}
