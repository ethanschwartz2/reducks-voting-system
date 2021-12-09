export const isLoadingReducer = (isLoading = false, action) => {

    if (action.type.includes("REQUEST")) {
      return true;
    }
  
    if (action.type.includes("DONE")) {
      return false;
    }
  
    return isLoading;
};