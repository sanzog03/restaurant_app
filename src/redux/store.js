import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export {store};