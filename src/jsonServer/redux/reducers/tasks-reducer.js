export const initialTasksState = {
  tasks: [],
  isLoading: true,
};

export const tasksReducer = (state = initialTasksState, action) => {
  switch (action.type) {
    case "GET_TASKS": {
      return { ...state, tasks: [...action.payload], isLoading: false };
    }

    case "TUSKS_IS_LOADING": {
      return { ...state, isLoading: true };
    }
    default:
      return state;
  }
};
