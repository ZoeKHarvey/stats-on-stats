import { combineReducers } from 'redux';
import { teams } from './teams';
import { errorMsg } from './hasError';
import { isLoading } from './isLoading';
import { standings } from './standings';
import { roster } from './roster';
import { player } from './player';

export const rootReducer = combineReducers({
    teams,
    isLoading,
    errorMsg,
    standings,
    roster,
    player
})