import { combineReducers } from "redux";
import { isLoadingReducer } from "./loadingReducer";

export const voteToolReducer = combineReducers({
    isLoading: isLoadingReducer,
})
  