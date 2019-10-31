export const fetchTeams = async() => {
  const response = await fetch('https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster');
  const data = await response.json();
  console.log(data)
  return data.teams
}

export const fetchSchedules = async() => {
  console.log('in schedule fetch')
  const response = await fetch ('https://statsapi.web.nhl.com/api/v1/standings');
  const data = await response.json();
  console.log(data)
  return data.teams
}

