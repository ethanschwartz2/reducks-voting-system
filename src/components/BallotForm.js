import { useForm } from '../hooks/useForm';

export const BallotForm = props => {

  const [ ballotForm, change, resetBallotForm ] = useForm({
    electionId: props.electionId,
    voterId: props.voterId,
    questions: props.questions,
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
        <>
          <label>
              {question.question}
          </label>
          <input type="checkbox" id={question.questionId} name={question.questionId} onChange={change} />
        </>
      )})}
      <button type="button" onClick={submitBallot}>{props.buttonText}</button>
    </form>
  );

};