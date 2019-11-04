import {
  fetchTeams,
  fetchRoster,
  fetchPlayer,
  fetchPlayerStats,
  fetchTeamSchedule,
  fetchPlayerProjections,
} from './apiCalls';

describe('getTeams', () => {
  const mockResponse = [{}, {}, {}];
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

describe('fetchRoster', () => {
  let url;
  let id;
  const mockResponse = [{}, {}, {}];
  
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
});

describe('fetchPlayer', () => {
  let url;
  let id;
  const mockResponse = [{}, {}, {}]

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
});

describe('fetchPlayerStats', () => {
  let url;
  let id;
  let year;
  const mockResponse = [{}, {}, {}]

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

});
