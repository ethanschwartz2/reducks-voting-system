import './ModalLayout.css'
import { useState } from 'react';

export const ElectionModal = (props)=> {
    const BlankElectionForm={
        // id:0,
        name: "",
        voterIds: [],
        questions: [{
            questionId: 1,
            question: "",
            yesCount: 0,
        }],
    }

    const [electionForm, setElectionForm] = useState({...BlankElectionForm})

    const resetForm = () => setElectionForm({...BlankElectionForm});

    const updateElectionName = e => {
        setElectionForm({
            ...electionForm,
            name: e.target.value,
        });
    };

    const onClose =() => {
        resetForm();
        props.close();
    }

    const updateElectionQuestion = (e, question) => {
        let electionQuestions = [...electionForm.questions];
        electionQuestions = [...electionQuestions.filter((existingQuestion) => existingQuestion.questionId !== question.questionId)];
        electionQuestions = [...electionQuestions, {
            questionId: question.questionId,
            question: e.target.value,
            yesCount: 0,
        }];

        setElectionForm({
            ...electionForm,
            questions: electionQuestions,
            });
    }

    const addQuestion = ()=> {
        let newQuestion = {
            questionId: Math.max(...electionForm.questions.map(question=>question.questionId),0)+1,
            question: "",
            yesCount: 0,
        }
        setElectionForm({
            ...electionForm,
            questions: [...electionForm.questions, newQuestion]
        });
    }

    const saveElection = () => {
        props.saveElection(electionForm)
        props.close();
    }
    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={onClose}>&times;</span>
                    <h2>Create An Election</h2>
                </div>
                <div className="modal-body">
                    <form>
                        <label>
                            Election Name:
                            <input type="text" name="name" value={electionForm.name} onChange={updateElectionName} />
                        </label>
                        {electionForm.questions.map(question => {
                            return(
                                <label key={question.questionId}>
                                    Question {question.questionId}:
                                    <input type="text" name="question" value={question.question} onChange={(e)=>{updateElectionQuestion(e, question)}} />
                                </label>)
                        })}
                        <button type="button" onClick={addQuestion}>Add Question</button>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={saveElection}>Create Election</button>
                    <button type="button" onClick={props.close}>Cancel</button>
                </div>
            </div>
        </div>
    )
}