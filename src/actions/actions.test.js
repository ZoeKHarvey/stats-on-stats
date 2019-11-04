import * as actions from './index';

describe('actions', () => {
  it('should have a type of GET_TEAMS', () => {
    const teams = [{}, {}];
    const expectedAction = {
      type: 'GET_TEAMS',
      teams
      
    };
    const result = actions.getTeams(teams);
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of GET_ROSTER', () => {
    const roster = [{}, {}];
    const expectedAction = {
      type: 'GET_ROSTER',
      roster
      
    };
    const result = actions.getRoster(roster);
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of GET_PLAYER', () => {
    const player = [{}, {}];
    const expectedAction = {
      type: 'GET_PLAYER',
      player
      
    };
    const result = actions.getPlayer(player);
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of GET_TEAM_SCHEDULE', () => {
    const schedule = [{}, {}];
    const expectedAction = {
      type: 'GET_TEAM_SCHEDULE',
      schedule
      
    };
    const result = actions.getTeamSchedule(schedule);
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of GET_PLAYER_PROJECTIONS', () => {
    const player = [{}, {}];
    const expectedAction = {
      type: 'GET_PLAYER_PROJECTIONS',
      player
      
    };
    const result = actions.getPlayerProjections(player);
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of FAVORITE_PLAYER', () => {
    const newPlayer = [{}, {}, {}];
    const expectedAction = {
      type: 'GET_FAVORITE_PLAYERS',
      newPlayer
    };
    const result = actions.favoritePlayer(newPlayer);
    expect(result).toEqual(expectedAction)
    });

    it('should have a type of IS_LOADING', () => {
      const isLoading = true;
      const expectedAction = {
        type: 'IS_LOADING',
        isLoading
        
      };
      const result = actions.isLoading(isLoading);
      expect(result).toEqual(expectedAction)
    });

    it('should have a type of HAS_ERROR', () => {
      const errorMsg = 'error';
      const expectedAction = {
        type: 'HAS_ERROR',
        errorMsg
        
      };
      const result = actions.hasError(errorMsg);
      expect(result).toEqual(expectedAction)
    });