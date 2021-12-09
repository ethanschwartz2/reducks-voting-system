import { useState } from "react";
import { useVoterToolReduxStore } from "../hooks/useVoterToolReduxStore";
import { VoterTool } from "./VoterTool";

export const Register = props => {

   const {displayVoterForm, displayVoterList} = useVoterToolReduxStore();

  //  const displayVoters = () => {
  // //   setDisplayForm('votersList');
  //     //displayForm = 'votersList';
  //  };
  //  const registerVoter = () => {
  // //   setDisplayForm('registerVoter');
  //   //displayForm = 'registerVoter';
  //  }

  return (
    <>

      <button onClick={displayVoterList}>Display voters</button>

      <button onClick={displayVoterForm}>Register voter</button>
      <VoterTool/>


    </>
  );

};