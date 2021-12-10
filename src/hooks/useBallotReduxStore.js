import { useMemo, useEffect } from 'react';
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

import {
  castBallot,
  verifyVoter,
  refreshElection,
  refreshElections,
  createUpdateVoteFlowAction,
} from "../actions/ballotActions";

export const useBallotReduxStore = () => {
  const voteFlow = useSelector(state => state.ballot.voteFlow);
  const voterId = useSelector(state => state.ballot.voterId);
  const election = useSelector(state => state.ballot.election);
  const elections = useSelector(state => state.ballot.elections);
  const errorMessage = useSelector(state => state.ballot.errorMessage);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    castBallot,
    verifyVoter,
    refreshElection,
    refreshElections,
    updateVoteFlow: createUpdateVoteFlowAction,
  }, dispatch), [dispatch]);

  useEffect(() => {
    actions.refreshElections();
  }, [actions]);

  return {
    voteFlow,
    voterId,
    election,
    elections,
    errorMessage,
    ...actions,
  };

};