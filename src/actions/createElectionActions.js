import {allElections, appendElection} from "../apis/elections";

export const CURRENT_ELECTIONS_REQUEST_ACTION = 'CURRENT_ELECTIONS_REQUEST';
export const CURRENT_ELECTIONS_DONE_ACTION = 'CURRENT_ELECTIONS_DONE';

export const CREATE_ELECTION_REQUEST_ACTION = 'CREATE_ELECTION_REQUEST';

export const createCurrentElectionsRequestAction = () => ({
    type: CURRENT_ELECTIONS_REQUEST_ACTION});
export const createCurrentElectionsDoneAction = (value) => ({
    type: CURRENT_ELECTIONS_DONE_ACTION, payload: { value }});

export const createElectionRequestAction = election => ({
    type: CREATE_ELECTION_REQUEST_ACTION, payload: { election }
});

export const getElections = () => {
    // get the election
    return dispatch => {
        dispatch(createCurrentElectionsRequestAction());
        return allElections().then(value => {
            dispatch(createCurrentElectionsDoneAction(value));
        });
    };
};

export const addElection = election => {
    return dispatch => {
        dispatch(createElectionRequestAction(election))
        appendElection(election).then(()=> dispatch(getElections()))
    }
}

