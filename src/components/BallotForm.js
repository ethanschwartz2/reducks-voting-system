import { useForm } from '../hooks/useForm';
import {Fragment} from "react";

export const BallotForm = props => {

  const [ ballotForm, change, resetBallotForm ] = useForm({
    electionId: props.election.id,
    voterId: props.voterId,
    questions: props.election.questions,
  });

  const submitBallot = () => {
    props.onCastBallot({ ...ballotForm });
    props.onUpdateVoteFlow(props.next);

    resetBallotForm();
  };

  return (
    <form>
      <label>
        Election ID: {ballotForm.electionId}
      </label>
      <label>
        Voter ID: {ballotForm.voterId}
      </label>
      <label>
        Questions:
      </label>
      {ballotForm.questions.map( (question) => {
        return (
        <Fragment key={question.questionId}>
          <label>
              {question.question}
          </label>
          <input type="checkbox" key={question.questionId} id={question.questionId}
            name={question.questionId} onChange={change} />
        </Fragment>
      )})}
      <button type="button" onClick={submitBallot}>{props.buttonText}</button>
    </form>
  );

};