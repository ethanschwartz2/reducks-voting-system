import { useForm } from '../hooks/useForm';

export const VoteIdentificationForm = props => {

  const [ voteIdentificationForm, change, resetVoteIdentificationForm ] = useForm({
    voterId: 0,
  });

  const submitVoterIdentification = () => {
    //props.onSubmit({ ...voteIdentificationForm });
    props.onVerifyVoter(voteIdentificationForm.voterId, props.next);

    resetVoteIdentificationForm();
  };

  return (
    <form>
      <label>
        Please enter your voter ID:
        <input type="number" key={voteIdentificationForm.voterId} name="voterId"
          value={voteIdentificationForm.voterId} onChange={change} />
      </label>
      <button type="button" onClick={submitVoterIdentification}>{props.buttonText}</button>
    </form>
  );

};