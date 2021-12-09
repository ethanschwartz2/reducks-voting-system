
import { useVoterToolReduxStore } from '../hooks/useVoterToolReduxStore';
import { VoterForm } from '../components/VoterForm';

export const VoterFormContainer = () => {

  const { addVoter, displayForm } = useVoterToolReduxStore();

  return (
      <>
      {(displayForm === 'registerVoter') 
        ? <VoterForm buttonText="Complete Registration" onSubmitVoter={addVoter} />
        : null}
    </>
  );

};
