import { combineReducers } from 'redux';
import { teams } from './teams';
import { hasError } from './hasError';
import { isLoading } from './isLoading';

export const rootReducer = combineReducers({
    teams,
    isLoading,
    hasError,
    
})