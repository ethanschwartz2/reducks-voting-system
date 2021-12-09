
import { useVoterToolReduxStore } from '../hooks/useVoterToolReduxStore';
import { VoterTable } from '../components/VoterTable';

export const VoterTableContainer = () => {

  const {
    voters, editVoterId, sortCol, sortDir,
    editVoter, deleteVoter, sortVoters,
    saveVoter, cancelVoter } = useVoterToolReduxStore();

  return (
    <VoterTable voters={voters} editVoterId={editVoterId}
              sortCol={sortCol} sortDir={sortDir}
              onEditVoter={editVoter} onDeleteVoter={deleteVoter}
              onSortVoters={sortVoters}
              onSaveVoter={saveVoter} onCancelVoter={cancelVoter} />
  );

};
