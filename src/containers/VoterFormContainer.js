
import { useVoterToolReduxStore } from '../hooks/useVoterToolReduxStore';
import { VoterForm } from '../components/VoterForm';

export const VoterFormContainer = () => {

  const { addVoter } = useVoterToolReduxStore();

  return (
    <VoterForm buttonText="Complete Registration" onSubmitVoter={addVoter} />
  );

};
