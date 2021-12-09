import { VoterTableContainer } from "../containers/VoterTableContainer";
import { VoterFormContainer } from "../containers/VoterFormContainer";

export const VoterTool = (props) => {

  return (
    <>
      {(props.displayForm === 'votersList') ? <VoterTableContainer />: null}
      {(props.displayForm === 'registerVoter') ? <VoterFormContainer />: null}
    </>
  );

};