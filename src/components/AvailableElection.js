
export const AvailableElections = (props) => {

    const onVote = () => {
        props.onUpdateVoteFlow(props.next);
    };
    
    return(
        <table>
            <thead>
            <tr>
                <th>Election Id </th>
                <th>Election Name </th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {props.elections.map(election => {
                return (
                    <tr key={election.id}>
                        <td>{election.id}</td>
                        <td>{election.name}</td>
                        <td>
                            <button type="button"
                                onClick={onVote}>Vote</button>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}
