import { useEffect, useState } from "react";
import { TaskList } from "./components/taskList/taskList.js";
import { ControlPanel } from "./components/controlPanel/contlolPanel.js";
import { searchTask, sortTask } from "./utils/utils.js";
import { useDispatch, useSelector } from "react-redux";
import {
  getTasksAction,
  getSearchTasksAction,
  getSortTasks,
} from "./redux/actions/actions.js";
import styles from "./styles/taskList.module.css";

export const Main = () => {
  const [sortFlag, setSortFlag] = useState(false);

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasksListState.tasks);
  const isLoading = useSelector((state) => state.tasksListState.isLoading);
  const searchTaskEl = useSelector(
    (state) => state.searchTaskState.searchTaskEl
  );
  const searchTaskList = useSelector(
    (state) => state.searchTaskState.searchTaskList
  );
  const sortTaskList = useSelector((state) => state.sortTaskState);

  useEffect(() => {
    dispatch(getTasksAction(dispatch));
  }, [isLoading]);

  useEffect(() => {
    if (searchTaskEl === "") {
      dispatch(getSearchTasksAction(tasks));
    } else {
      dispatch(getSearchTasksAction(searchTask(tasks, searchTaskEl)));
    }
  }, [searchTaskEl, tasks]);

  useEffect(() => {
    dispatch(getSortTasks(sortTask(searchTaskList)));
  }, [searchTaskList]);

  return (
    <>
      <div className="main">
        {sortFlag ? (
          <div className={styles.taskList}>
            {sortTaskList.map(({ id, title }) => (
              <TaskList key={id} id={id} title={title} />
            ))}
          </div>
        ) : (
          <div className={styles.taskList}>
            {searchTaskList.map(({ id, title }) => (
              <TaskList key={id} id={id} title={title} />
            ))}
          </div>
        )}

        <ControlPanel sortFlag={sortFlag} setSortFlag={setSortFlag} />
      </div>
    </>
  );
};
