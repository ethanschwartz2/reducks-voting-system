import { useForm } from '../hooks/useForm';
import {Fragment} from "react";

export const BallotForm = props => {

  const [ ballotForm, change, resetBallotForm ] = useForm({
    voterId: props.voterId,
    electionId: props.election.id,
    electionName: props.election.name,
    questions: props.election.questions,
  });

  const submitBallot = () => {
    props.onCastBallot({ ...ballotForm });
    props.onUpdateVoteFlow(props.next);

    resetBallotForm();
  };

  return (
    <form>
      <h2>Election ID: {ballotForm.electionId}</h2>
      <h2>Election Name: {ballotForm.electionName}</h2>
      <h2>Voter ID: {ballotForm.voterId}</h2>
      <h2>Questions:</h2>
      <table>
        <tbody>
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
        </tbody>
      </table>
      <button type="button" onClick={submitBallot}>{props.buttonText}</button>
    </form>
  );

};