import { one } from '../apis/voters';
import { oneElection, replaceElection, allElections } from '../apis/elections';

export const CAST_BALLOT_REQUEST_ACTION = 'CAST_BALLOT_REQUEST';
export const CAST_BALLOT_DONE_ACTION = "CAST_BALLOT_DONE";
export const VERIFY_VOTER_ID_REQUEST_ACTION = "VERIFY_VOTER_ID_REQUEST";
export const VERIFY_VOTER_ID_DONE_ACTION = "VERIFY_VOTER_ID_DONE";
export const REFRESH_ELECTION_REQUEST_ACTION = "REFRESH_ELECTION_REQUEST";
export const REFRESH_ELECTION_DONE_ACTION = "REFRESH_ELECTION_DONE";
export const REFRESH_ELECTIONS_REQUEST_ACTION = "REFRESH_ELECTIONS_REQUEST";
export const REFRESH_ELECTIONS_DONE_ACTION = "REFRESH_ELECTIONS_DONE";

export const UPDATE_VOTE_FLOW_ACTION = "UPDATE_VOTE_FLOW";

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
                        question.yesCount += 1;
                    }
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
                };
            });
        };
    };
}

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

export const createRefreshElectionsRequestAction = () => ({ type: REFRESH_ELECTIONS_REQUEST_ACTION });
export const createRefreshElectionsDoneAction = elections => ({
  type: REFRESH_ELECTIONS_DONE_ACTION, payload: { elections }
});

export const refreshElections = () => {

  // this function is the function action object
  // when the middleware invokes this function is passes in the store's
  // dispatch method
  return dispatch => {

    dispatch(createRefreshElectionsRequestAction());
    return allElections().then(elections => {
      dispatch(createRefreshElectionsDoneAction(elections));
    });
  };
};