import { combineReducers } from "redux";
import { isLoadingReducer } from "./loadingReducer";
import { ballotReducer } from "./ballotReducers";
import { voterToolReducer } from "./voterToolReducer";
import { electionReducer } from "./electionReducer";

export const voteToolReducer = combineReducers({
    isLoading: isLoadingReducer,
    voter: voterToolReducer,
    ballot: ballotReducer,
    elections: electionReducer,
})
