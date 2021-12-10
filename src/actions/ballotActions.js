import { one } from '../apis/voters';
import {allElections, oneElection, replaceElection} from '../apis/elections';
import {createCurrentElectionsDoneAction, createCurrentElectionsRequestAction} from "./createElectionActions";

export const CAST_BALLOT_REQUEST_ACTION = 'CAST_BALLOT_REQUEST';
export const CAST_BALLOT_DONE_ACTION = "CAST_BALLOT_DONE";
export const VERIFY_VOTER_ID_REQUEST_ACTION = "VERIFY_VOTER_ID_REQUEST";
export const VERIFY_VOTER_ID_DONE_ACTION = "VERIFY_VOTER_ID_DONE";
export const REFRESH_ELECTION_REQUEST_ACTION = "REFRESH_ELECTION_REQUEST";
export const REFRESH_ELECTION_DONE_ACTION = "REFRESH_ELECTION_DONE";

export const UPDATE_VOTE_FLOW_ACTION = "UPDATE_VOTE_FLOW";

export const RESET_FORM_DATA_ACTION = "RESET_FORM_DATA";

export const createCastBallotRequestAction = () => ({
    type: CAST_BALLOT_REQUEST_ACTION });
export const createCastBallotDoneAction = election => ({
  type: CAST_BALLOT_DONE_ACTION, payload: { election }
});

export const castBallot = ballot => {
    // get the election
    return dispatch => {

        dispatch(createCastBallotRequestAction());
        return oneElection(ballot.electionId).then(election => {
            if (!election.voterIds.includes(ballot.voterId)) {
                election.voterIds.push(ballot.voterId);

                election.questions.map(question => {
                    if (ballot[question.questionId] === true) {
                        return(question.yesCount += 1);
                    }
                    return null;
                });
                replaceElection(election).then(election => {
                    dispatch(createCastBallotDoneAction(election.id));
                });
            }
        });
    };

    // update the election voterIds and counts
};

export const createUpdateVoteFlowAction = (voteFlow) => ( {
    type: UPDATE_VOTE_FLOW_ACTION, payload: { voteFlow }
});

export const createVerifyVoterRequestAction = (voterId) => ({
    type: VERIFY_VOTER_ID_REQUEST_ACTION, payload: { voterId }});
export const createVerifyVoterDoneAction = voterId => ({
  type: VERIFY_VOTER_ID_DONE_ACTION, payload: { voterId }
});

export const verifyVoter = (voterId, voteFlow) => {
    return dispatch => {

        dispatch(createVerifyVoterRequestAction(voterId));

        if (voterId !== 0) {

            return one(voterId).then(voter => {
                if (voter.id !== undefined) {
                    dispatch(createVerifyVoterDoneAction(voter.id));
                    dispatch(createUpdateVoteFlowAction(voteFlow));
                } else {
                    dispatch(createVerifyVoterDoneAction(0));
                }
            });
        }
    };
}

export const createResetFormDataAction = () => ({
    type: RESET_FORM_DATA_ACTION
});

export const resetFormData = () => {
    return dispatch => {
        dispatch(createResetFormDataAction());
    }
}

export const getElections = () => {
    // get the election
    return dispatch => {
        dispatch(createCurrentElectionsRequestAction());
        return allElections().then(value => {
            dispatch(createCurrentElectionsDoneAction(value));
        });
    };
};

export const createRefreshElectionRequestAction = (electionId) => ({
    type: REFRESH_ELECTION_REQUEST_ACTION, payload: { electionId }});
export const createRefreshElectionDoneAction = election => ({
  type: REFRESH_ELECTION_DONE_ACTION, payload: { election }
});

export const refreshElection = (electionId) => {

    return dispatch => {

        dispatch(createRefreshElectionRequestAction(electionId));
        return oneElection(electionId).then(election => {
          dispatch(createRefreshElectionDoneAction(election));
        });
    };
};