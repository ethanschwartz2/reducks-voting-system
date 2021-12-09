const defaultSortItems = (unsortedItems, sortCol, sortDir) => {
    const items = [ ...unsortedItems ];
    return items.sort((a, b) => {
      if (a[sortCol] < b[sortCol]) {
        return sortDir === 'asc' ? -1 : 1;
      }
      if (a[sortCol] > b[sortCol]) {
        return sortDir === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };
  
  export const sortedVotersSelector = state => {
    return defaultSortItems(
      state.voters, state.votersSort.col, state.votersSort.dir);
  };