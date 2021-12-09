
import { useVoterToolReduxStore } from "../hooks/useVoterToolReduxStore";
import { VoterTool } from "./VoterTool";

export const Register = () => {

   const {displayVoterForm, displayVoterList} = useVoterToolReduxStore();

  return (
    <>

      <button onClick={displayVoterList}>Display voters</button>

      <button onClick={displayVoterForm}>Register voter</button>
      <VoterTool/>


    </>
  );

};