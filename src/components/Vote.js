
import { AvailableElections } from "./AvailableElection";
import { VoteIdentificationForm } from "./VoterIdentificationForm";
import { BallotForm } from "./BallotForm";
import { useBallotReduxStore } from "../hooks/useBallotReduxStore";
import { ELECTIONS_FLOW, VOTER_IDEN_FLOW, BALLOT_FLOW, SUCCESS_FLOW } from "../reducers/ballotReducers"
import {useElectionReduxStore} from "../hooks/useElectionReduxStore";

export const Vote = () => {
    const {
        voteFlow,
        voterId,
        election,
        errorMessage,
        castBallot,
        verifyVoter,
        refreshElection,
        updateVoteFlow,
    } = useBallotReduxStore();

    const {elections} = useElectionReduxStore()

    return(
      <>
        {errorMessage && <div style={{ color: 'red', fontWeight: 'bold' }}>{errorMessage}</div>}
        { voteFlow === VOTER_IDEN_FLOW
        ? <VoteIdentificationForm buttonText="Submit" next={BALLOT_FLOW}
            onUpdateVoteFlow={updateVoteFlow} onVerifyVoter={verifyVoter} election={election}/>
        : voteFlow === BALLOT_FLOW
        ?<BallotForm buttonText="Cast Vote" election={election} voterId={voterId} next={SUCCESS_FLOW}
            onUpdateVoteFlow={updateVoteFlow} onCastBallot={castBallot} />
        : voteFlow === SUCCESS_FLOW
        ? <>
            <h2>Success!</h2>
            <button type="button" onClick={() => updateVoteFlow(ELECTIONS_FLOW)}>Go Home</button>
        </>
        : <>
            <h1>Available Elections</h1>
            <AvailableElections elections={elections} next={VOTER_IDEN_FLOW}
                onUpdateVoteFlow={updateVoteFlow} onRefreshElection={refreshElection}/>
        </>}
      </>
    );
}