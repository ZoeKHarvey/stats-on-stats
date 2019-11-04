import { combineReducers } from 'redux';
import { teams } from './teams';
import { errorMsg } from './hasError';
import { isLoading } from './isLoading';
import { standings } from './standings';
import { roster } from './roster';
import { playerInfo } from './playerInfo';
import {playerStats} from './playerStats';
import { teamSchedule } from './teamSchedule';
import { playerProjections } from './playerProjections';
import { favoritePlayers } from './favoritePlayers';

export const rootReducer = combineReducers({
    teams,
    isLoading,
    errorMsg,
    standings,
    roster,
    playerInfo,
    playerStats,
    teamSchedule,
    playerProjections,
    favoritePlayers
})