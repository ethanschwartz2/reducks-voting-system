import {useMemo, useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import {bindActionCreators} from "redux";
import {addElection, getElections} from "../actions/createElectionActions";

export const useElectionReduxStore = () => {
    console.log(useSelector(state => state))
    const elections = useSelector(state => state.elections.elections);
    const dispatch = useDispatch();
    const actions = useMemo(()=>bindActionCreators({
        getElections,
        addElection
    }, dispatch), [dispatch]);

    useEffect(()=> {
        actions.getElections()
    },[actions])

    return {
        elections,
        ...actions
    };
};