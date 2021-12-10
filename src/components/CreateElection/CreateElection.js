import {CurrentElections} from "./CurrentElections";
import {ElectionModal} from "./ElectionModal";
import './CreateElectionLayout.css'
import {useElectionReduxStore} from "../../hooks/useElectionReduxStore";

export const CreateElection = () => {
    const {elections, addElection, modal, setModalForm, updateFormQuestions, updateFormName, electionModalForm, addQuestion} = useElectionReduxStore();

    return(
        <div className="CreateElection">
            <header>
                <h2>Election Results</h2>
                <button className="CreateElectionButton" type="button" onClick={()=>setModalForm(true)}>Create An Election</button>
            </header>
            <hr/>
                <CurrentElections elections={elections}/>
                {modal ?
                    <ElectionModal
                        formData={electionModalForm}
                        close={()=>setModalForm(false)}
                        saveElection={(electionInfo)=>addElection(electionInfo)}
                        updateFormQuestions={(index,value)=>updateFormQuestions(index,value)}
                        updateFormName={(value)=>updateFormName(value)}
                        addQuestion={addQuestion}
                    /> : null}

    </div>
    );
}