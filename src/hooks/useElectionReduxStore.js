import {useMemo, useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import {bindActionCreators} from "redux";
import {addElection, getElections, setModalForm, updateFormQuestions, updateFormName, addQuestion} from "../actions/createElectionActions";

export const useElectionReduxStore = () => {
    const elections = useSelector(state => state.elections.elections);
    const modal = useSelector(state => state.elections.modal);
    const electionModalForm = useSelector(state => state.elections.electionModalForm)
    const dispatch = useDispatch();
    const actions = useMemo(()=>bindActionCreators({
        getElections,
        addElection,
        setModalForm,
        updateFormQuestions,
        updateFormName,
        addQuestion,
    }, dispatch), [dispatch]);

    useEffect(()=> {
        actions.getElections()
    },[actions])

    return {
        elections,
        modal,
        electionModalForm,
        ...actions
    };
};