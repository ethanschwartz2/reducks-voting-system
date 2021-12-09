import {useState} from "react";

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
    const [expandedRow, setExpandedRow] = useState([]);

    const ExpandCollapseRow = (rowId) => {
        expandedRow.includes(rowId) ?
            setExpandedRow([...expandedRow.filter(rId => rId !== rowId)]) :
            setExpandedRow([...expandedRow, rowId])
    }


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
                    <>
                    <tr id={Election.id}>
                        <td>{Election.id}</td>
                        <td>{Election.name}</td>
                        <td>
                            <button type="button"
                                    onClick={()=>ExpandCollapseRow(Election.id)}>{expandedRow.includes(Election.id) ? "Collapse Results" : "View Results"}</button>
                        </td>
                    </tr>
                    {expandedRow.includes(Election.id) ? <tr id={Election.id+"a"}>
                        <td>
                            <table>
                            <thead>
                            <tr>
                                <th>Question Id </th>
                                <th>Question </th>
                                <th>Results</th>
                            </tr>
                            </thead>
                            <tbody>
                            {Election.questions.map(question => {
                            return (<tr id={question.questionId}>
                                <td>{question.questionId}</td>
                                <td>{question.question}</td>
                                <td>No Results yet</td>
                            </tr>);
                            })
                            }
                            </tbody>
                            </table>
                            </td>
                    </tr> : null}
                    </>
                )
            })}
            </tbody>
        </table>
    )
}