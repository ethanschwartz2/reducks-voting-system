export const all = async () => {

    const res = await fetch("http://localhost:3060/ballots")
    const ballots = await res.json();
    return ballots;
  };
  
  export const one = async (ballotId) => {
  
    const res = await fetch(
      `http://localhost:3060/ballots/${encodeURIComponent(ballotId)}`)
    const ballot = await res.json();
    return ballot;
  };
  
  export const append = async (ballot) => {
  
    const res = await fetch("http://localhost:3060/ballots", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ballot),
    });
    const newBallot = await res.json();
    return newBallot;
  };
