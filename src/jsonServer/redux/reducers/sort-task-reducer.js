export const initialSortState = [];

export const sortTaskReducer = (state = initialSortState, action) => {
  switch (action.type) {
    case "GET_SORT_TASKS": {
      return [...action.payload];
    }

    default:
      return state;
  }
};
