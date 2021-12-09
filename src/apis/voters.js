export const all = async () => {

    const res = await fetch("http://localhost:5050/voters")
    const voters = await res.json();
    return voters;
  };
  
export const one = async (voterId) => {
  
    const res = await fetch(
      `http://localhost:5050/voters/${encodeURIComponent(voterId)}`)
    const voter = await res.json();
    return voter;
};
  
export const append = async (voter) => {
  
    const res = await fetch("http://localhost:5050/voters", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(voter),
    });
    const newVoter = await res.json();
    return newVoter;
};
  
export const replace = async (voter) => {
  
    const res = await fetch(
      `http://localhost:5050/voters/${encodeURIComponent(voter.id)}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(voter),
      });
    const newVoter = await res.json();
    return newVoter;
};
  
export const remove = async (voterId) => {

    return fetch(
      `http://localhost:5050/voters/${encodeURIComponent(voterId)}`, {
        method: 'DELETE',
      });
};
