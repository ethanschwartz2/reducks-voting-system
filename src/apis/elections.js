export const all = async () => {

    const res = await fetch("http://localhost:3060/elections")
    const elections = await res.json();
    return elections;
  };
  
  export const one = async (electionId) => {
  
    const res = await fetch(
      `http://localhost:3060/elections/${encodeURIComponent(electionId)}`)
    const election = await res.json();
    return election;
  };
  
  export const append = async (election) => {
  
    const res = await fetch("http://localhost:3060/elections", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(election),
    });
    const newElection = await res.json();
    return newElection;
  };
