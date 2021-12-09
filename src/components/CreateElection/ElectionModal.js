import '../../ModalLayout.css'
import { useState } from 'react';

export const ElectionModal = (props)=> {
    const [electionForm, setElectionForm] = useState({
        electionName: "",
        questions: [{
            questionId: 1,
            question: "",
            yesCount: 0,
        }],
    })

    const resetForm = () => setElectionForm({
        electionName: "",
        questions: [{
            questionId: 1,
            question: "",
            yesCount: 0,
        }],
    });

    const updateElectionName = e => {
        setElectionForm({
            ...electionForm,
            electionName: e.target.value,
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
                            <input type="text" name="electionName" value={electionForm.name} onChange={updateElectionName} />
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
                    <button type="button" onClick={props.saveElection}>Create Election</button>
                    <button type="button" onClick={props.close}>Cancel</button>
                </div>
            </div>
        </div>
    )
}