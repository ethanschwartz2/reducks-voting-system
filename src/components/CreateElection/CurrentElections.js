import {useState} from "react";
import './CurrentElections.css'
const ElectionInfo = {"elections": [
        {
            "id": 1,
            "name": "election1",
            "voterIds": [
                1,
                2
            ],
            "questions": [
                {
                    "questionId": 1,
                    "question": "A cat is better pet then a dog?",
                    "yesCount": 4
                },
                {
                    "questionId": 2,
                    "question": "mayo is better than miracle whip",
                    "yesCount": 5
                }
            ]
        },
        {
            "id": 2,
            "name": "election2",
            "voterIds": [
                2
            ],
            "questions": [
                {
                    "questionId": 1,
                    "question": "A cat is better pet then a dog?",
                    "yesCount": 4
                },
                {
                    "questionId": 2,
                    "question": "mayo is better than miracle whip",
                    "yesCount": 5
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
        <div className="CurrentElections">
        <table className="OuterTable">
            <thead>
            <tr>
                <th>Election Id </th>
                <th>Election Name </th>
                <th>Num Voters</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {ElectionInfo.elections.map(Election => {
                return (
                    <>
                        <tr key={Election.id}>
                            <td>{Election.id}</td>
                            <td>{Election.name}</td>
                            <td>{Election.voterIds.length}</td>
                            <td>
                                <button type="button"
                                        onClick={()=>ExpandCollapseRow(Election.id)}>{expandedRow.includes(Election.id) ? "Collapse Results" : "View Results"}</button>
                            </td>
                        </tr>
                        {expandedRow.includes(Election.id) ?
                            <tr key={Election.id+"a"}>
                                <td key={Election.id+"a"} colspan={4}>
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
                                            return (
                                                <tr key={Election.id+question.questionId}>
                                                    <td>{question.questionId}</td>
                                                    <td>{question.question}</td>
                                                    <td>Yes: {question.yesCount}, No: {Election.voterIds.length - question.yesCount}</td>
                                                </tr>
                                            );
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
        </div>
    )
}