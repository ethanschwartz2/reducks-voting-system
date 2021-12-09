import {CurrentElections} from "./CurrentElections";
import {ElectionModal} from "./ElectionModal";
import {useState, useEffect} from "react";
import './CreateElectionLayout.css'

export const CreateElection = () => {
    const [showModal, setShowModal] = useState(false)

    useEffect(()=> {

    },[showModal])

    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }

    const saveElection =()=> {

    }


    return(
        <div className="CreateElection">
            <header>
                <h2>Current Elections</h2>
                <button className="CreateElectionButton" type="button" onClick={openModal}>Create An Election</button>
            </header>
            <hr/>
                <CurrentElections/>
                {showModal ? <ElectionModal close={closeModal} saveElection={saveElection}/> : null}

    </div>
    );
}