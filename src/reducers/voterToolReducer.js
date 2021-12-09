import { combineReducers } from "redux";

import {
  REFRESH_VOTERS_DONE_ACTION, EDIT_VOTER_ACTION, CANCEL_VOTER_ACTION, 
  SORT_VOTERS_ACTION, DISPLAY_VOTER_ADD_FORM_ACTION, DISPLAY_VOTER_LIST_ACTION,
  ADD_VOTER_REQUEST_ACTION,
  DELETE_VOTER_REQUEST_ACTION
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

export const editVoterIdReducer = (editVoterId = -1, action) => {

  if (action.type === EDIT_VOTER_ACTION) {
    return action.payload.voterId;
  }

  if ([
    REFRESH_VOTERS_DONE_ACTION, CANCEL_VOTER_ACTION, SORT_VOTERS_ACTION
  ].includes(action.type)) {
    return -1;
  }
  
  return editVoterId;
};

export const displayFormReducer = (displayForm = '', action) => {
  console.log(action.type);
  switch(action.type) {
    case CANCEL_VOTER_ACTION:
      return "registerVoter";
    case SORT_VOTERS_ACTION:
      return "votersList";
    case DISPLAY_VOTER_ADD_FORM_ACTION:
      return "registerVoter";
    case DISPLAY_VOTER_LIST_ACTION:
      return "votersList"
    case ADD_VOTER_REQUEST_ACTION:
        return "";
    case DELETE_VOTER_REQUEST_ACTION:
        return "votersList"
    default: 
      return "";
  }
;}

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
  editVoterId: editVoterIdReducer,
  votersSort: votersSortReducer,
  isLoading: isLoadingReducer,
  displayForm: displayFormReducer,
})