import {combineReducers} from "redux";

import {CREATE_MODAL_REQUEST_ACTION, CURRENT_ELECTIONS_DONE_ACTION} from "../actions/createElectionActions"

export const modalInfoReducer = (modal = false, action) => {
    if(action.type === CREATE_MODAL_REQUEST_ACTION) {
        modal = action.payload.value;
    }
    return modal
}

export const electionInfoReducer= (elections = [], action) => {
    if(action.type === CURRENT_ELECTIONS_DONE_ACTION) {
        elections = [...action.payload.value]
    }
    return elections
}

export const electionReducer = combineReducers({
    elections: electionInfoReducer,
    modal: modalInfoReducer
})