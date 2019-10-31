export const fetchTeams = async() => {
  console.log('in fetch')
  const response = await fetch('https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster');
  const data = await response.json();
  console.log(data)
  return data.teams
}


