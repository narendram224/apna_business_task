import {createStore, applyMiddleware} from 'redux';
import rootReducers from './rootReducers';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';

const store = createStore(rootReducers,composeWithDevTools(applyMiddleware(logger,thunk)));
export default store;