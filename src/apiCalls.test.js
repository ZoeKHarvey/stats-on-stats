import {
  fetchTeams
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
  })
})