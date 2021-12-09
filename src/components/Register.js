import { useState } from "react";
import { VoterTool } from "./VoterTool";

export const Register = props => {

  const [displayForm, setDisplayForm] = useState(props.displayForm);

  const displayVoters = () => {
    setDisplayForm('votersList');
  };
  const registerVoter = () => {
    setDisplayForm('registerVoter');
  }

  return (
    <>

      <button onClick={displayVoters}>Display voters</button>

      <button onClick={registerVoter}>Register voter</button>
      <VoterTool displayForm={displayForm}/>


    </>
  );

};