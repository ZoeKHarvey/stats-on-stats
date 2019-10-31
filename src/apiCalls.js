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

export const fetchSingleTeam = async(id) => {
  const response = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${id}?expand=team.roster`)
  const data = await response.json();
  console.log(data)
  return data
}

