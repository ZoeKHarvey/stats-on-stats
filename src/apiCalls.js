export const fetchTeams = async() => {
  const response = await fetch('https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster');
  const data = await response.json();
  console.log(data)
  return data.teams
}

export const fetchStandings = async() => {
  const response = await fetch ('https://statsapi.web.nhl.com/api/v1/standings?expand=standings.record');
  const data = await response.json();
  return data.records
}

export const fetchRoster = async(id) => {
  const response = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${id}?expand=team.roster`)
  const data = await response.json();
  return data.teams[0].roster.roster
}

export const fetchPlayer = async(id) => {
  const response = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${id} `)
  const data = await response.json();
  return data.people[0]
}

export const fetchPlayerStats = async(id, year = 20192020) => {
  console.log('in the fetchy')
  const response = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=statsSingleSeason&season=${year}`)
  const data = await response.json();
  console.log('data===>', data.stats[0].splits[0].stat)
  return data.stats[0].splits[0].stat
}

