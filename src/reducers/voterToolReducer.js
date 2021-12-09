import { combineReducers } from "redux";

import {
  REFRESH_VOTERS_DONE_ACTION, EDIT_VOTER_ACTION, CANCEL_VOTER_ACTION, SORT_VOTERS_ACTION,
} from "../actions/voterToolActions";

// const voterList = [
//   { id: 1, make: 'Ford', model: 'Fusion', year: 2018, color: 'blue', price: 45000 },
//   { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 120000 },
// ];

export const votersReducer = (voters = [], action) => {

  if (action.type === REFRESH_VOTERS_DONE_ACTION) {
    return action.payload.voters;
  }

  return voters;
};

export const editCarIdReducer = (editCarId = -1, action) => {

  if (action.type === EDIT_VOTER_ACTION) {
    return action.payload.voterId;
  }

  if ([
    REFRESH_VOTERS_DONE_ACTION, CANCEL_VOTER_ACTION, SORT_VOTERS_ACTION
  ].includes(action.type)) {
    return -1;
  }
  
  return editCarId;
};

export const votersSortReducer = (
  votersSort = { col: 'id', dir: 'asc' }, action) => {

  if (action.type === SORT_VOTERS_ACTION) {

    if (votersSort.col === action.payload.col) {
      if (votersSort.dir === 'asc') {
        return { ...votersSort, dir: 'desc'};
      } else {
        return { ...votersSort, dir: 'asc'};
      }      
    } else {
      return { ...votersSort, col: action.payload.col, dir: 'asc'};
    }

  }

  return votersSort;
}

const isLoadingReducer = (isLoading = false, action) => {

  if (action.type.includes("REQUEST")) {
    return true;
  }

  if (action.type.includes("DONE")) {
    return false;
  }

  return isLoading;
};

export const voterToolReducer = combineReducers({
  voters: votersReducer,
  editCarId: editCarIdReducer,
  votersSort: votersSortReducer,
  isLoading: isLoadingReducer,
})