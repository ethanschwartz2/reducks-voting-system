
import { combineReducers } from "redux";

import { UPDATE_VOTE_FLOW_ACTION,
    VERIFY_VOTER_ID_DONE_ACTION,
    VERIFY_VOTER_ID_REQUEST_ACTION, } from "../actions/ballotActions";

export const ELECTIONS_FLOW = "elections";
export const VOTER_IDEN_FLOW = "voterIden";
export const BALLOT_FLOW = "ballot";

export const voteFlowReducer = (voteFlow = ELECTIONS_FLOW, action) => {

    if (action.type === UPDATE_VOTE_FLOW_ACTION) {
      return action.payload.voteFlow;
    }

    return voteFlow;
};

export const voterIdReducer = (voterId = 0, action) => {
    if (action.type === VERIFY_VOTER_ID_DONE_ACTION) {
        return action.payload.voterId;
    }

    return voterId;
};

const errorMessageReducer = (errorMessage = "", action) => {

    if (action.type === VERIFY_VOTER_ID_REQUEST_ACTION && action.payload.voterId === 0) {
      return "Please enter a voter id.";
    }

    return errorMessage;
};

export const ballotReducer = combineReducers({
    voteFlow: voteFlowReducer,
    voterId: voterIdReducer,
    errorMessage: errorMessageReducer,
})
