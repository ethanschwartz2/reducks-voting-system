import {allElections, appendElection} from "../apis/elections";

export const CURRENT_ELECTIONS_REQUEST_ACTION = 'CURRENT_ELECTIONS_REQUEST';
export const CURRENT_ELECTIONS_DONE_ACTION = 'CURRENT_ELECTIONS_DONE';

export const CREATE_ELECTION_REQUEST_ACTION = 'CREATE_ELECTION_REQUEST';
export const CREATE_ELECTION_REQUEST_DONE = 'CREATE_ELECTION_REQUEST';
export const CREATE_MODAL_REQUEST_ACTION = 'CREATE_MODAL_REQUEST';
export const UPDATE_ELECTION_QUESTIONS_REQUEST_ACTION = 'UPDATE_ELECTION_QUESTIONS_REQUEST';
export const UPDATE_ELECTION_NAME_REQUEST_ACTION = 'UPDATE_ELECTION_NAME_REQUEST';
export const ADD_QUESTION_REQUEST_ACTION = 'ADD_QUESTION_REQUEST'
export const createUpdateElectionQuestionRequestAction=(index, value) => ({
    type:UPDATE_ELECTION_QUESTIONS_REQUEST_ACTION, payload: {index, value}
})

export const createUpdateElectionNameRequestAction=(value) => ({
    type:UPDATE_ELECTION_NAME_REQUEST_ACTION, payload: {value}
})

export const createCurrentElectionsRequestAction = () => ({
    type: CURRENT_ELECTIONS_REQUEST_ACTION});
export const createCurrentElectionsDoneAction = (value) => ({
    type: CURRENT_ELECTIONS_DONE_ACTION, payload: { value }});
export const createElectionRequestAction = election => ({
    type: CREATE_ELECTION_REQUEST_ACTION, payload: { election }
});
export const createElectionRequestDONE = () => ({
    type: CREATE_ELECTION_REQUEST_DONE
});
export const createModalRequestAction = value => ({
    type: CREATE_MODAL_REQUEST_ACTION, payload: { value }
});
export const addQuestionRequestAction = ()=> ({
    type: ADD_QUESTION_REQUEST_ACTION
})
export const setModalForm = (value) => {
    return dispatch => {
        dispatch(createModalRequestAction(value));
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

export const addElection = (electionInfo) => {
    const NewElection={
        name: electionInfo.name,
        voterIds: [],
        questions: [...electionInfo.questions.map((questionText,index) => {
            return {
                questionId: index+1,
                question: questionText,
                yesCount: 0,
            }
        })]
    }


    return dispatch => {
        dispatch(createElectionRequestAction(NewElection))
        return appendElection(NewElection).then(()=> dispatch(getElections()))
    }
}

export const updateFormQuestions = (index, value) => {
    return dispatch => {
        dispatch(createUpdateElectionQuestionRequestAction(index,value));
    }
}

export const updateFormName = (value) => {
    return dispatch => {
        dispatch(createUpdateElectionNameRequestAction(value));
    }
}

export const addQuestion = () => {
    return dispatch => {
        dispatch(addQuestionRequestAction())
    }
}