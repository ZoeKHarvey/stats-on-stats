import { combineReducers } from 'redux';
import { teams } from './teams';
import { errorMsg } from './hasError';
import { isLoading } from './isLoading';
import { standings } from './standings';
import { roster } from './roster';
import { playerInfo } from './playerInfo';
import {playerStats} from './playerStats';

export const rootReducer = combineReducers({
    teams,
    isLoading,
    errorMsg,
    standings,
    roster,
    playerInfo,
    playerStats
})