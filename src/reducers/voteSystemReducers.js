import { combineReducers } from "redux";
import { ballotReducer } from "./ballotReducers";
import { voterToolReducer } from "./voterToolReducer";
import { electionReducer } from "./electionReducer";

const isLoadingReducer = (isLoading = false, action) => {

    if (action.type.includes("REQUEST")) {
      return true;
    }
  
    if (action.type.includes("DONE")) {
      return false;
    }
  
    return isLoading;
};

export const voteToolReducer = combineReducers({
    isLoading: isLoadingReducer,
    voter: voterToolReducer,
    ballot: ballotReducer,
    elections: electionReducer,
})
