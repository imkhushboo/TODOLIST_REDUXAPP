import { applyMiddleware, createStore, compose } from "redux";
import thunk from 'redux-thunk';
import { reducers } from './reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


