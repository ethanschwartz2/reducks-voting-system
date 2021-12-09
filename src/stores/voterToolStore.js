import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { voterToolReducer } from '../reducers/voterToolReducer';

export const voterToolStore = createStore(
  voterToolReducer,
  applyMiddleware(thunk),
);