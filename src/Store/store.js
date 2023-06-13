import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import allReducers  from './Reducers/reducer'

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const rootReducer = combineReducers({
    analytics: allReducers
});


export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)

));