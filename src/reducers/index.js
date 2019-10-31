import { combineReducers } from 'redux';
import { teams } from './teams';
import { errorMsg } from './hasError';
import { isLoading } from './isLoading';
import { standings } from './standings';

export const rootReducer = combineReducers({
    teams,
    isLoading,
    errorMsg,
    standings
})