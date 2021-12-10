
import { combineReducers } from "redux";

import { UPDATE_VOTE_FLOW_ACTION,
    VERIFY_VOTER_ID_DONE_ACTION,
    VERIFY_VOTER_ID_REQUEST_ACTION,
    REFRESH_ELECTION_DONE_ACTION,
    REFRESH_ELECTIONS_DONE_ACTION, } from "../actions/ballotActions";

export const ELECTIONS_FLOW = "elections";
export const VOTER_IDEN_FLOW = "voterIden";
export const BALLOT_FLOW = "ballot";
export const SUCCESS_FLOW = "success";

const voteFlowReducer = (voteFlow = ELECTIONS_FLOW, action) => {

    if (action.type === UPDATE_VOTE_FLOW_ACTION) {
      return action.payload.voteFlow;
    }

    return voteFlow;
};

const voterIdReducer = (voterId = 0, action) => {
    if (action.type === VERIFY_VOTER_ID_DONE_ACTION) {
        return action.payload.voterId;
    }

    return voterId;
};

const electionReducer = (election = {}, action) => {
    if (action.type === REFRESH_ELECTION_DONE_ACTION) {
        return action.payload.election;
    }

    return election;
};

const electionsREducer = (elections = [], action) => {
    if (action.type === REFRESH_ELECTIONS_DONE_ACTION) {
        return action.payload.elections;
    }

    return elections;
};

const errorMessageReducer = (errorMessage = "", action) => {

    if (action.type === VERIFY_VOTER_ID_REQUEST_ACTION && action.payload.voterId === 0) {
      return "Please enter a valid voter id.";
    };

    if (action.type === VERIFY_VOTER_ID_DONE_ACTION) {
        if (action.payload.voterId === 0) {
            return "Please enter a valid voter id.";
        } else {
            return "";
        };
    };

    return errorMessage;
};

export const ballotReducer = combineReducers({
    voteFlow: voteFlowReducer,
    voterId: voterIdReducer,
    election: electionReducer,
    elections: electionsREducer,
    errorMessage: errorMessageReducer,
})
