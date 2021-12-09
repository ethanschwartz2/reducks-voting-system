import { VoterViewRow } from './VoterViewRow';
//import { VoterEditRow } from './VoterEditRow';

const cols = [
  [ 'Id', 'id' ],
  [ 'FirstName', 'firstName' ],
  [ 'LastName', 'lastName' ],
  [ 'Address', 'address' ],
  [ 'CountyOrCity', 'countyOrCity' ],
  [ 'BirthDate', 'birthdate' ],
  [ 'Email', 'email' ],
  [ 'Phone', 'phone' ],
];

export const VoterTable = props => {

  const sortDirectionIndicator = (sortCol) => {
    if (sortCol === props.sortCol) {
      return props.sortDir === 'asc' ? ' v' : ' ^';
    }
    return '';
  };


  return (
    <table>
      <thead>
        <tr>
          {cols.map(([ header, field ]) => <th key={field}>
            <button type="button" onClick={() => props.onSortVoters(field)}>
              {header}{sortDirectionIndicator(field)}
            </button>
          </th>)}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.voters.map(voter =>
          props.editVoterId === voter.id
            // ? <VoterEditRow key={voter.id} voter={voter}
            //     onSaveVoter={props.onSaveVoter} onCancelVoter={props.onCancelVoter} />
            ? <VoterViewRow key={voter.id} voter={voter}
            onEditVoter={props.onEditVoter} onDeleteVoter={props.onDeleteVoter} />
            : <VoterViewRow key={voter.id} voter={voter}
                onEditVoter={props.onEditVoter} onDeleteVoter={props.onDeleteVoter} />)}
      </tbody>
    </table>

  );

};