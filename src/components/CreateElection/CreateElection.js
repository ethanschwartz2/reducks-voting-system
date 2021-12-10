import {CurrentElections} from "./CurrentElections";
import {ElectionModal} from "./ElectionModal";
import {useState} from "react";
import './CreateElectionLayout.css'
import {useElectionReduxStore} from "../../hooks/useElectionReduxStore";

export const CreateElection = () => {
    const [showModal, setShowModal] = useState(false)

    const {elections, addElection} = useElectionReduxStore()

    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }

    const saveElection =(electionInfo)=> {
        addElection(electionInfo)
    }

    return(
        <div className="CreateElection">
            <header>
                <h2>Election Results</h2>
                <button className="CreateElectionButton" type="button" onClick={openModal}>Create An Election</button>
            </header>
            <hr/>
                <CurrentElections elections={elections}/>
                {showModal ? <ElectionModal close={closeModal} saveElection={saveElection}/> : null}

    </div>
    );
}