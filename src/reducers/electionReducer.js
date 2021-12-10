import {combineReducers} from "redux";

import {
    CREATE_ELECTION_REQUEST_DONE,
    CREATE_MODAL_REQUEST_ACTION,
    CURRENT_ELECTIONS_DONE_ACTION,
    UPDATE_ELECTION_QUESTIONS_REQUEST_ACTION,
    UPDATE_ELECTION_NAME_REQUEST_ACTION,
    ADD_QUESTION_REQUEST_ACTION,
} from "../actions/createElectionActions"

export const modalInfoReducer = (modal = false, action) => {
    if(action.type === CREATE_ELECTION_REQUEST_DONE) {
        modal = false;
    }

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

export const electionModalFormReducer = (electionModalForm = { name: "", questions: [""],}, action) => {
    if(action.type === CREATE_ELECTION_REQUEST_DONE) {
        return({ name: "", questions: [""],});
    }

    if(action.type === CREATE_MODAL_REQUEST_ACTION) {
        if(action.payload.value === false) {
            return({ name: "", questions: [""],});
        }
    }

    if(action.type === UPDATE_ELECTION_QUESTIONS_REQUEST_ACTION) {
        let electionQuestions = electionModalForm.questions;
        electionQuestions[action.payload.index] = action.payload.value;
        return({
            ...electionModalForm,
            questions: electionQuestions,
        });
    }
    if(action.type === UPDATE_ELECTION_NAME_REQUEST_ACTION) {
        return({
            ...electionModalForm,
            name: action.payload.value,
        })
    }
    if(action.type ===ADD_QUESTION_REQUEST_ACTION) {
        return({
            ...electionModalForm,
            questions: [...electionModalForm.questions, ""]
        })
    }
    return electionModalForm
}

export const electionReducer = combineReducers({
    elections: electionInfoReducer,
    modal: modalInfoReducer,
    electionModalForm: electionModalFormReducer,
})