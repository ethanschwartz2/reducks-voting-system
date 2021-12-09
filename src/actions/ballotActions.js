import { one } from '../apis/voters';

export const CAST_BALLOT_REQUEST_ACTION = 'CAST_BALLOT_REQUEST';
export const CAST_BALLOT_DONE_ACTION = "CAST_BALLOT_DONE";
export const UPDATE_VOTE_FLOW_ACTION = "UPDATE_VOTE_FLOW";
export const VERIFY_VOTER_ID_REQUEST_ACTION = "VERIFY_VOTER_ID_REQUEST";
export const VERIFY_VOTER_ID_DONE_ACTION = "VERIFY_VOTER_ID_DONE";

export const createCastBallotRequestAction = () => ({
    type: CAST_BALLOT_REQUEST_ACTION });
export const createCastBallotDoneAction = election => ({
  type: CAST_BALLOT_DONE_ACTION, payload: { election }
});

export const castBallot = ballot => {
    // get the election
    return dispatch => {

        dispatch(createCastBallotRequestAction());
        return one(ballot.electionId).then(election => {
          dispatch(createCastBallotDoneAction(election.id));
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

        if (voterId != 0) {

            return one(voterId).then(voter => {
                if (voter.id !== undefined) {
                    dispatch(createVerifyVoterDoneAction(voter.id));
                    dispatch(createUpdateVoteFlowAction(voteFlow));
                };
            });
        };
    };
}
