import { readTask } from "../../api";

export const getTasksAction = () => (dispatch) =>
  readTask().then((loadedTask) =>
    dispatch({
      type: "GET_TASKS",
      payload: loadedTask,
    })
  );

export const tusksIsLoading = () => ({
  type: "TUSKS_IS_LOADING",
  payload: true,
});

export const searchElTaskAction = (El) => ({
  type: "GET_SEARCH_TASK_EL",
  payload: El,
});

export const getSearchTasksAction = (searchTasks) => ({
  type: "GET_SEARCH_TASKS",
  payload: searchTasks,
});

export const getSortTasks = (sortTasks) => ({
  type: "GET_SORT_TASKS",
  payload: sortTasks,
});
