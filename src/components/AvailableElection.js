
export const AvailableElections = (props) => {

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
                                onClick={ () => {
                                    props.onRefreshElection(election.id);
                                    props.onUpdateVoteFlow(props.next);
                                }}>Vote</button>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}
