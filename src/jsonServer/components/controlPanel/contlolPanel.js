import styles from "../../styles/controlPanel.module.css";
import { useState, useEffect } from "react";
import { createTask } from "../../api";
import { searchTask } from "../../utils/utils";
/// ======================
import { useDispatch, useSelector } from "react-redux";
import {
  getSearchTasksAction,
  tusksIsLoading,
  searchElTaskAction,
} from "../../redux/actions/actions";

export const ControlPanel = ({ setSortFlag, sortFlag }) => {
  const tasks = useSelector((state) => state.tasksListState.tasks);
  const searchTaskEl = useSelector(
    (state) => state.searchTaskState.searchTaskEl
  );

  const [newTask, setNewTask] = useState("");
  const sortTodoClick = () => setSortFlag(!sortFlag);
  const dispatch = useDispatch();

  const onSearchChange = ({ target }) => {
    let searchTaskEl = target.value;

    dispatch(searchElTaskAction(searchTaskEl));
    dispatch(getSearchTasksAction(searchTask(tasks, searchTaskEl)));
  };

  const onNewTaskChange = ({ target }) => {
    setNewTask(target.value);
  };

  const onTaskAdd = () => {
    const dateID = String(new Date().getTime());
    createTask({ id: dateID, title: newTask });
    setNewTask("");
    dispatch(tusksIsLoading());
  };

  return (
    <div className={styles.controlContainer}>
      <input
        onChange={onSearchChange}
        className={styles.taskSearch}
        placeholder="Поиск"
      ></input>
      <div className={styles.addTask}>
        <input
          value={newTask}
          type="text"
          placeholder="создать новую задачу"
          onChange={onNewTaskChange}
        ></input>
        <button onClick={onTaskAdd}>✚</button>
      </div>
      <button onClick={sortTodoClick} className={styles.sorting}>
        Сортировка
      </button>
    </div>
  );
};
