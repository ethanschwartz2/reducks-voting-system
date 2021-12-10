import { useMemo } from 'react';
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

import {
  castBallot,
  verifyVoter,
  refreshElection,
  createUpdateVoteFlowAction,
} from "../actions/ballotActions";

export const useBallotReduxStore = () => {
  const voteFlow = useSelector(state => state.ballot.voteFlow);
  const voterId = useSelector(state => state.ballot.voterId);
  const election = useSelector(state => state.ballot.election);
  const errorMessage = useSelector(state => state.ballot.errorMessage);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    castBallot,
    verifyVoter,
    refreshElection,
    updateVoteFlow: createUpdateVoteFlowAction,
  }, dispatch), [dispatch]);

  return {
    voteFlow,
    voterId,
    election,
    errorMessage,
    ...actions,
  };

};