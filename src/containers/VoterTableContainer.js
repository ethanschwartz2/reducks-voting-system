
import { useVoterToolReduxStore } from '../hooks/useVoterToolReduxStore';
import { VoterTable } from '../components/VoterTable';

export const VoterTableContainer = () => {

  const {
    voters, editVoterId, displayForm, sortCol, sortDir,
    editVoter, deleteVoter, sortVoters,
    saveVoter, cancelVoter, selectVoter, deleteVoterIds,
    selectVoterIds, deselectVoterIds, deleteManyVoters,
    resetVoterFormData } = useVoterToolReduxStore();

    const deleteSelectedVoters = () => {
      deleteManyVoters(deleteVoterIds);
    }

  return (
    <>
    {(displayForm === 'votersList') 
      ? <VoterTable voters={voters} editVoterId={editVoterId}
                sortCol={sortCol} sortDir={sortDir}
                onEditVoter={editVoter} onDeleteVoter={deleteVoter}
                onSortVoters={sortVoters}
                onSaveVoter={saveVoter} onCancelVoter={cancelVoter} 
                onSelectVoter={selectVoter} onSelectVoterIds={selectVoterIds}
                onDeselectVoterIds={deselectVoterIds} onDeleteManyVoters={deleteSelectedVoters}
                onRegiterHomePage={resetVoterFormData}/>
      : null}
    </>
  );

};
