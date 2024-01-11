import { combineReducers } from 'redux';
import { reducer } from './addItemReducer';


export const reducers = combineReducers(
    {
        addItem: reducer,
    }
)