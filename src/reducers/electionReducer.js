import {combineReducers} from "redux";

import {CURRENT_ELECTIONS_DONE_ACTION} from "../actions/createElectionActions"


export const electionInfoReducer= (elections = [], action) => {
    if(action.type === CURRENT_ELECTIONS_DONE_ACTION) {
        elections = [...action.payload.value]
    }
    return elections
}

export const electionReducer = combineReducers({
    elections: electionInfoReducer
})