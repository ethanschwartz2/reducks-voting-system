import { all, append } from '../apis/ballots';

export const REFRESH_BALLOTS_REQUEST_ACTION = 'REFRESH_BALLOTS_REQUEST';
export const REFRESH_BALLOTS_DONE_ACTION = 'REFRESH_BALLOTS_DONE';
export const CAST_BALLOT_REQUEST_ACTION = 'CAST_BALLOT_REQUEST';
export const CAST_BALLOT_DONE_ACTION = 'CAST_BALLOT_DONE';

export const createRefreshBallotsRequestAction = () => ({ type: REFRESH_BALLOTS_REQUEST_ACTION });
export const createRefreshBallotsDoneAction = cars => ({
  type: REFRESH_BALLOTS_DONE_ACTION, payload: { cars }
});

export const refreshBallots = () => {

  // this function is the function action object
  // when the middleware invokes this function is passes in the store's
  // dispatch method
  return dispatch => {

    dispatch(createRefreshBallotsRequestAction());
    return all().then(ballots => {
      dispatch(createRefreshBallotsDoneAction(ballots));
    });
  };
};

export const createCastBallotRequestAction = () => ({ type: CAST_BALLOT_REQUEST_ACTION });
export const createCastBallotDoneAction = ballot => ({
  type: CAST_VOTE_DONE_ACTION, payload: { ballot }
});

export const castBallot = ballot => {
    return dispatch => {
      dispatch(createCastVoteRequestAction(ballot));
      append(ballot);
    };
};
