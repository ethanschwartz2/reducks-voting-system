import './ModalLayout.css'

export const ElectionModal = (props)=> {
    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={props.close}>&times;</span>
                    <h2>Create An Election</h2>
                </div>
                <div className="modal-body">
                    <form>
                        <label>
                            Election Name:
                            <input type="text" name="name" value={props.formData.name} onChange={(e)=>props.updateFormName(e.target.value)} />
                        </label>
                        {props.formData.questions.map((question, questionIndex) => {
                            return(
                                <label key={questionIndex}>
                                    Question {questionIndex+1}:
                                    <input type="text" name="question" value={question} onChange={(e)=>props.updateFormQuestions(questionIndex,e.target.value)} />
                                </label>)
                        })}
                        <button type="button" onClick={()=>props.addQuestion()}>Add Question</button>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={()=>props.saveElection(props.formData)}>Create Election</button>
                    <button type="button" onClick={props.close}>Cancel</button>
                </div>
            </div>
        </div>
    )
}