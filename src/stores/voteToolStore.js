import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { voteToolReducer } from '../reducers/voteSystemReducers';

export const voteToolStore = createStore(
    voteToolReducer,
    composeWithDevTools(applyMiddleware(thunk)),
);
