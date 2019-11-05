import {
  fetchTeams,
  fetchRoster,
  fetchPlayer,
  fetchPlayerStats,
  fetchTeamSchedule,
  fetchPlayerProjections,
} from './apiCalls';

describe('getTeams', () => {
  const mockResponse = [{
  id: 20,
  name:"Calgary Flames",
  link:"/api/v1/teams/20",
  abbreviation:"CGY",
  teamName:"Flames",
  locationName:"Calgary",
  firstYearOfPlay:"1980",
  shortName:"Calgary",
  officialSiteUrl:"http://www.calgaryflames.com/",
  franchiseId:21,
  active:true }]

  const url = 'https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster'

  it('should call fetch with the correct URL', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({ 
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });

    fetchTeams();
    
    expect(window.fetch).toHaveBeenCalledWith(url)
  });

  it('should return an array of players', () => {
    expect(fetchTeams()).resolves.toEqual(mockResponse)
  });
});

it('should return an error if promise rejects', () => {
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.reject(Error('fetch failed'))
  });

  expect(fetchTeams()).rejects.toEqual(Error('fetch failed'));
});

describe('fetchRoster', () => {
  let url;
  let id;
  const mockResponse = [
    {name: 'name1', jerseyNumber: 2, position: 'C'}, 
    {name: 'name2', jerseyNumber: 3, position: 'D'}, 
    {name: 'name3', jerseyNumber: 4, position: 'D'}];
  
  it('should call fetch with the correct url', () => {
    id = 8476941;
    url = `https://statsapi.web.nhl.com/api/v1/teams/${id}?expand=team.roster`;
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
    fetchRoster(id);
    expect(window.fetch).toHaveBeenCalledWith(url)
  });

  it('it should return an error if promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    });

    expect(fetchRoster()).rejects.toEqual(Error('fetch failed'));
  });
});

describe('fetchPlayer', () => {
  let url;
  let id;
  const mockResponse = [
    {id:8475191,
    fullName:"Reilly Smith",
    active:true,
    captain:false,
    height:"6'1",
    weight:183,
    birthCity:"Mimico",
    birthStateProvince:"ON",
    birthCountry:"CAN",
    currentAge:28,
    rosterStatus:"Y",
    shootsCatches:"L"}
    ]

  it('should call fetchPlayer with the correct url', () => {
    id = 8476941;
    url = `https://statsapi.web.nhl.com/api/v1/people/${id}`;
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
    fetchPlayer(id);
    expect(window.fetch).toHaveBeenCalledWith(url)
  });

  it('it should return an error if promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    });

    expect(fetchPlayer()).rejects.toEqual(Error('fetch failed'));
  });
});

describe('fetchPlayerStats', () => {
  let url;
  let id;
  let year;
  const mockResponse = [
    {assists: 1,
    goals: 2,
    gamesPlayed: 1,
    hits: 3,
    pim: 6,
    totalPoints: 3,
    shootingPercentage: 4}
  ]

  it('should call fetchPlayerStats with the correct url', () => {
    id = 8476941;
    year = 20192020;
    url = `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=statsSingleSeason&season=${year}`;
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok:true,
        json: () => Promise.resolve(mockResponse)
      });
    });
    fetchPlayerStats(id, year);
    expect(window.fetch).toHaveBeenCalledWith(url)
  });

  it('it should return an error if promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    });

    expect(fetchPlayerStats()).rejects.toEqual(Error('fetch failed'));
  });

it('should call fetchTeamSchedule with the correct url', () => {
  id = 8476941;
  url = `https://statsapi.web.nhl.com/api/v1/schedule?teamId=${id}`;
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResponse)
    });
  });
  fetchTeamSchedule(id);
  expect(window.fetch).toHaveBeenCalledWith(url)
});

it('SAD: should return an error if promise rejects', () => {
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.reject(Error('fetch failed'))
  });

  expect(fetchTeamSchedule()).rejects.toEqual(Error('fetch failed'));
});

it('should call fetchPlayerProjections', () => {
  id= 8476951;
  url= `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=onPaceRegularSeason&season=20192020`;
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok:true,
      json: () => Promise.resolve(mockResponse)
    });
  });
  fetchPlayerProjections(id);
  expect(window.fetch).toHaveBeenCalledWith(url)
});
it('it should return an error if promise rejects', () => {
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.reject(Error('fetch failed'))
  });

  expect(fetchPlayerProjections()).rejects.toEqual(Error('fetch failed'));
});

});
