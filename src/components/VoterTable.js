import { VoterViewRow } from './VoterViewRow';
import { VoterEditRow } from './VoterEditRow';

export const VoterTable = props => {

  const sortDirectionIndicator = (sortCol) => {
    if (sortCol === props.sortCol) {
      return props.sortDir === 'asc' ? ' v' : ' ^';
    }
    return '';
  };


  return (
    <form>
    <table>
      <thead>
        <tr><th></th>
          <th><button type="button" onClick={() => props.onSortVoters('id')}>
              ID{sortDirectionIndicator('id')}
            </button></th>
            <th><button type="button" onClick={() => props.onSortVoters('firstName')}>
              First Name{sortDirectionIndicator('firstName')}
            </button></th>
            <th><button type="button" onClick={() => props.onSortVoters('lastName')}>
              Last Name{sortDirectionIndicator('lastName')}
            </button></th>
            <th><button type="button" onClick={() => props.onSortVoters('address')}>
              Address{sortDirectionIndicator('address')}
            </button></th>
            <th><button type="button" onClick={() => props.onSortVoters('countyOrCity')}>
              County/City{sortDirectionIndicator('countyOrCity')}
            </button></th>
            <th><button type="button" onClick={() => props.onSortVoters('birthdate')}>
              Birthdate{sortDirectionIndicator('birthdate')}
            </button></th>
            <th><button type="button" onClick={() => props.onSortVoters('email')}>
              Email{sortDirectionIndicator('email')}
            </button></th>
            <th><button type="button" onClick={() => props.onSortVoters('phone')}>
              Phone{sortDirectionIndicator('phone')}
            </button></th>
        </tr>
      </thead>
      <tbody>
        {props.voters.map(voter =>
          props.editVoterId === voter.id
            ? <VoterEditRow key={voter.id} voter={voter}
                onSaveVoter={props.onSaveVoter} onCancelVoter={props.onCancelVoter} />
            : <VoterViewRow key={voter.id} voter={voter}
                onEditVoter={props.onEditVoter} onDeleteVoter={props.onDeleteVoter} 
                onSelectVoterIds={props.onSelectVoterIds}
                onDeselectVoterIds={props.onDeselectVoterIds}/>)}
                <tr></tr>
                <tr><td><button type="button" onClick={props.onDeleteManyVoters}>Delete Voters</button></td></tr>
      </tbody>
    </table>
    </form>
  );

};

