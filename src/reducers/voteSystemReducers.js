import { combineReducers } from "redux";
import { isLoadingReducer } from "./loadingReducer";
import { ballotReducer } from "./ballotReducers";
import { voterToolReducer } from "./voterToolReducer";

export const voteToolReducer = combineReducers({
    isLoading: isLoadingReducer,
    voter: voterToolReducer,
    ballot: ballotReducer,
})
