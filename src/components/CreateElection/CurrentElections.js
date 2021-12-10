import {useState} from "react";
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
            {props.elections.map(Election => {
                return (
                    <>
                        <tr key={Election.id}>
                            <td>{Election.id}</td>
                            <td>{Election.name}</td>
                            <td>{Election.voterIds? Election.voterIds.length: 0}</td>
                            <td>
                                <button type="button" key={Election.id}
                                        onClick={()=>ExpandCollapseRow(Election.id)}>{expandedRow.includes(Election.id) ? "Collapse Results" : "View Results"}</button>
                            </td>
                        </tr>
                        {expandedRow.includes(Election.id) ?
                            <tr key={Election.id+"a"}>
                                <td key={Election.id+"a"} colSpan={4}>
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
                                                    <td>{Election.voterIds.length > 0 ? `Yes: ${question.yesCount}, No: ${Election.voterIds.length - question.yesCount}` : "N/A"}</td>
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