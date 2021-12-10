import {Fragment, useState} from "react";
import './CurrentElections.css'

export const CurrentElections = (props) => {
    const [expandedRow, setExpandedRow] = useState([]);

    const ExpandCollapseRow = (rowId) => {
        expandedRow.includes(rowId) ?
            setExpandedRow([...expandedRow.filter(rId => rId !== rowId)]) :
            setExpandedRow([...expandedRow, rowId])
    }

    if(props.elections.length === 0) {
        return(
            <div>No Election Info Found.</div>
        )
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
            {props.elections.map(election => {
                return (
                    <Fragment key={election.id+"header"}>
                        <tr>
                            <td>{election.id}</td>
                            <td>{election.name}</td>
                            <td>{election.voterIds? election.voterIds.length: 0}</td>
                            <td>
                                <button type="button"
                                        onClick={()=>ExpandCollapseRow(election.id)}>{expandedRow.includes(election.id) ? "Collapse Results" : "View Results"}</button>
                            </td>
                        </tr>
                        {expandedRow.includes(election.id) ?
                            <tr key={election.id+"expanded"}>
                                <td colSpan={4}>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Question Id </th>
                                            <th>Question </th>
                                            <th>Results</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {election.questions.map(question => {
                                            return (
                                                <tr key={`ElectionId${election.id} QuestionId${question.questionId}`}>
                                                    <td>{question.questionId}</td>
                                                    <td>{question.question}</td>
                                                    <td>{election.voterIds.length > 0 ? `Yes: ${question.yesCount}, No: ${election.voterIds.length - question.yesCount}` : "N/A"}</td>
                                                </tr>
                                            );
                                        })
                                        }
                                        </tbody>
                                    </table>
                                </td>
                            </tr> : null}
                    </Fragment>
                )
            })}
            </tbody>
        </table>
        </div>
    )
}