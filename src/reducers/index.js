import { combineReducers } from 'redux';
import { teams } from './teams';
import { errorMsg } from './hasError';
import { isLoading } from './isLoading';

export const rootReducer = combineReducers({
    teams,
    isLoading,
    errorMsg,
    
})