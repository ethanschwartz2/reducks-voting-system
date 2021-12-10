
export const VoterViewRow = (props) => {

    const removeVoter = () => {
        props.onDeleteVoter(props.voter.id);
    }

    const selectVoter = event =>{
        if(event.target.checked) {
            props.onSelectVoterIds(event.target.id);
        } else {
            props.onDeselectVoterIds(event.target.id);
        }
    }

    return(
        <tr><td><input type="checkbox" id={props.voter.id} name={props.voter.id} onChange={selectVoter} style={{marginBottom: '0px'}}/></td>
            <td>{props.voter.id}</td>
            <td>{props.voter.firstName}</td>
            <td>{props.voter.lastName}</td>
            <td>{props.voter.address}</td>
            <td>{props.voter.countyOrCity}</td>
            <td>{props.voter.birthdate}</td>
            <td>{props.voter.email}</td>
            <td>{props.voter.phone}</td>
            <td><button type="button" onClick={() => props.onEditVoter(props.voter.id)}>Edit</button>
            <button type="button" onClick={removeVoter}>Delete</button></td>
        </tr>
    );
};