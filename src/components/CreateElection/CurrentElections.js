const ElectionInfo = {"elections": [
        {
            "id": 1,
            "name": "election1",
            "questions": [
                {
                    "questionId": 1,
                    "question": "A cat is better pet then a dog?"
                },
                {
                    "questionId": 2,
                    "question": "mayo better than miracle whip"
                }
            ]
        },
        {
            "id": 2,
            "name": "election2",
            "questions": [
                {
                    "questionId": 1,
                    "question": "A cat is better pet then a dog?"
                },
                {
                    "questionId": 2,
                    "question": "mayo better than miracle whip"
                }
            ]
        }
    ],
}

export const CurrentElections = () => {
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
            {ElectionInfo.elections.map(Election => {
                return (
                    <tr>
                        <td>{Election.id}</td>
                        <td>{Election.name}</td>
                        <td>
                            <button type="button"
                                    onClick={null}>View Results</button>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}