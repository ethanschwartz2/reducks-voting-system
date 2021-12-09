
import { AvailableElections } from "./AvailableElection";
import { VoteIdentificationForm } from "./VoterIdentificationForm";
import { BallotForm } from "./BallotForm";
import { useBallotReduxStore } from "../hooks/useBallotReduxStore";
import { ELECTIONS_FLOW, VOTER_IDEN_FLOW, BALLOT_FLOW } from "../reducers/ballotReducers"

const elections = [
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
];

const questions = [
    {
        "questionId": 1,
        "question": "A cat is better pet then a dog?"
    },
    {
        "questionId": 2,
        "question": "mayo better than miracle whip"
    }
];

export const Vote = (props) => {
    const { voteFlow,
        voterId,
        errorMessage,
        castBallot,
        verifyVoter,
        updateVoteFlow,
    } = useBallotReduxStore();

    return(
      <>
        {errorMessage && <div style={{ color: 'red', fontWeight: 'bold' }}>{errorMessage}</div>}
        { voteFlow === VOTER_IDEN_FLOW
        ? <VoteIdentificationForm buttonText="Submit" next={BALLOT_FLOW}
            onUpdateVoteFlow={updateVoteFlow} onVerifyVoter={verifyVoter} />
        : voteFlow === BALLOT_FLOW
        ?<BallotForm buttonText="Submit" electionId="1" voterId="1" 
            questions={questions} next={ELECTIONS_FLOW}
            onUpdateVoteFlow={updateVoteFlow} onCastBallot={castBallot} />
        : <>
            <h1>Available Elections</h1>
            <AvailableElections elections={elections} next={VOTER_IDEN_FLOW}
                onUpdateVoteFlow={updateVoteFlow} />
        </>}
      </>
    );
}