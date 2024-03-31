import styles from "../../styles/taskList.module.css";
import { updateTask, deleteTask } from "../../api";
import { tusksIsLoading } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export const TaskEdit = ({ id, setIsEditing, title }) => {
  const [newTitle, setNewTitle] = useState(title);
  const dispatch = useDispatch();

  const onTitleChange = ({ target }) => {
    setNewTitle(target.value);
  };

  const onTaskRemove = () => {
    deleteTask(id);
    setIsEditing(false);
    dispatch(tusksIsLoading());
  };

  const onTaskSave = () => {
    updateTask({ id: id, title: newTitle });
    setIsEditing(false);
    dispatch(tusksIsLoading());
  };

  return (
    <div className={styles.addTask}>
      <input
        onChange={onTitleChange}
        type="text"
        value={newTitle}
        className={styles.addTaskInput}
        placeholder="Изменить"
        id={id}
      ></input>
      <button onClick={onTaskSave} id={id} className={styles.addTaskButton}>
        ✚
      </button>
      <button onClick={onTaskRemove} id={id} className={styles.bottonDelTodo}>
        Удалить
      </button>
    </div>
  );
};
