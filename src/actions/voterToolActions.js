import { all, append, replace, remove } from '../apis/voters';

export const REFRESH_VOTERS_REQUEST_ACTION = 'REFRESH_VOTERS_REQUEST';
export const REFRESH_VOTERS_DONE_ACTION = 'REFRESH_VOTERS_DONE';

export const ADD_VOTER_REQUEST_ACTION = 'ADD_VOTER_REQUEST';
export const ADD_VOTER_DONE_ACTION = 'ADD_VOTER_DONE';

export const SAVE_VOTER_REQUEST_ACTION = 'SAVE_VOTER_REQUEST';
export const SAVE_VOTER_DONE_ACTION = 'SAVE_VOTER_DONE';

export const DELETE_VOTER_REQUEST_ACTION = 'DELETE_VOTER_REQUEST';
export const DELETE_VOTER_DONE_ACTION = 'DELETE_VOTER_DONE';

export const EDIT_VOTER_ACTION = 'EDIT_VOTER';
export const CANCEL_VOTER_ACTION = 'CANCEL_VOTER';
export const SORT_VOTERS_ACTION = 'SORT_VOTERS';

export const DISPLAY_VOTER_ADD_FORM_ACTION = 'DISPLAY_VOTER_FORM'
export const DISPLAY_VOTER_LIST_ACTION = 'DISPLAY_VOTER_LIST'

export const SELECT_VOTER_IDS_ACTION = 'SELECT_VOTER_IDS'
export const DESELECT_VOTER_IDS_ACTION = 'DESELECT_VOTER_IDS'

export const DELETE_MANY_VOTERS_REQUEST_ACTION = 'DELETE_MANY_VOTERS_REQUEST';

export const RESET_FORM_ACTION = "RESET_FORM";
export const createRefreshVotersRequestAction = () => ({ type: REFRESH_VOTERS_REQUEST_ACTION });
export const createRefreshVotersDoneAction = voters => ({
  type: REFRESH_VOTERS_DONE_ACTION, payload: { voters }
});


export const refreshVoters = () => {

  return dispatch => {

    dispatch(createRefreshVotersRequestAction());
    return all().then(voters => {
      dispatch(createRefreshVotersDoneAction(voters));
    });
  };
};


export const createAddVoterRequestAction = voter =>
  ({ type: ADD_VOTER_REQUEST_ACTION, payload: { voter } });

export const createAddVoterDoneAction = voter =>
  ({ type: ADD_VOTER_DONE_ACTION, payload: { voter } });


export const addVoter = voter => {
  return dispatch => {
    dispatch(createAddVoterRequestAction(voter));
    append(voter).then(() => dispatch(refreshVoters()));
  };
};

export const createSaveVoterRequestAction = voter =>
  ({ type: SAVE_VOTER_REQUEST_ACTION, payload: { voter } });

export const createSaveVoterDoneAction = voter =>
  ({ type: SAVE_VOTER_DONE_ACTION, payload: { voter } });


export const saveVoter = voter => {
  return dispatch => {
    dispatch(createSaveVoterRequestAction(voter));
    replace(voter).then(() => dispatch(refreshVoters()));
  };
};


export const createDeleteVoterRequestAction = voterId =>
  ({ type: DELETE_VOTER_REQUEST_ACTION, payload: { voterId } });

export const createDeleteVoterDoneAction = voterId =>
  ({ type: DELETE_VOTER_DONE_ACTION, payload: { voterId } });

export const deleteVoter = voterId => {
  return dispatch => {
    dispatch(createDeleteVoterRequestAction(voterId));
    remove(voterId).then(() => dispatch(refreshVoters()));
  };
};

export const createDeleteManyVotersRequestAction = voterId =>
  ({ type: DELETE_MANY_VOTERS_REQUEST_ACTION, payload: { voterId } });

export const deleteManyVoters = voterIds => {
  return dispatch => {
    dispatch(createDeleteManyVotersRequestAction(voterIds));
    Promise.all(
      voterIds.map(voterId => {
        return remove(voterId);
    })).then(() => dispatch(refreshVoters()));
  };
};
export const createResetFormAction = () => (
    {type: RESET_FORM_ACTION}
)

export const resetFormData = () => {
  return dispatch => {
    dispatch(createResetFormAction());
  }
}


export const createEditVoterAction = voterId =>
  ({ type: EDIT_VOTER_ACTION, payload: { voterId } });
export const createCancelVoterAction = () =>
  ({ type: CANCEL_VOTER_ACTION });
export const createSortVotersAction = col =>
  ({ type: SORT_VOTERS_ACTION, payload: { col } });
export const createDisplayVoterFormAction = () =>
   ({type: DISPLAY_VOTER_ADD_FORM_ACTION})
export const createDisplayVoterListAction = () =>
   ({type: DISPLAY_VOTER_LIST_ACTION})
export const createSelectVoterIdsAction = (voterId) =>
   ({type: SELECT_VOTER_IDS_ACTION, payload: { voterId } })
export const createDeSelectVoterIdsAction = (voterId) =>
   ({type: DESELECT_VOTER_IDS_ACTION, payload: { voterId } })