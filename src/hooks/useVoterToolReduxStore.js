import { useEffect, useMemo } from 'react';
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import {
  addVoter, saveVoter, deleteVoter, refreshVoters,
  createEditVoterAction, createCancelVoterAction, createSortVotersAction,
} from "../actions/voterToolActions";

import { sortedVotersSelector } from "../selectors/voterToolSelectors";

export const useVoterToolReduxStore = () => {

  const voters = useSelector(sortedVotersSelector);
  const editVoterId = useSelector(state => state.voter.editVoterId);
  const { col: sortCol, dir: sortDir } = useSelector(
    state => state.voter.votersSort);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    refreshVoters,
    addVoter,
    saveVoter,
    deleteVoter,
    editVoter: createEditVoterAction,
    cancelVoter: createCancelVoterAction,
    sortVoters: createSortVotersAction,
  }, dispatch), [dispatch]);

  useEffect(() => {
    actions.refreshVoters();
  }, [actions]);  

  return {
    voters,
    editVoterId,
    sortCol,
    sortDir,
    ...actions,
  };


};