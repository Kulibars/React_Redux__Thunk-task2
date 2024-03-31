export const initialSearchTaskState = {
  searchTaskList: [],
  searchTaskEl: "",
};

export const searchTaskReducer = (state = initialSearchTaskState, action) => {
  switch (action.type) {
    case "GET_SEARCH_TASKS": {
      return {
        ...state,
        searchTaskList: [...action.payload],
      };
    }
    case "GET_SEARCH_TASK_EL": {
      return {
        ...state,
        searchTaskEl: `${action.payload}`,
      };
    }
    default:
      return state;
  }
};
