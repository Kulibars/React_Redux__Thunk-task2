import styles from "../../styles/taskList.module.css";
import { Task } from "../task/task";
import { TaskEdit } from "../taskEdit/taskEdit";
import { useState } from "react";

export const TaskList = ({ id, title }) => {
  const [isEditing, setIsEditing] = useState(false);

  const onTaskEdit = () => {
    setIsEditing(true);
  };

  return (
    <div key={id}>
      {isEditing ? (
        <div key={id} className={styles.task}>
          <TaskEdit
            id={id}
            title={title}
            onTaskEdit={onTaskEdit}
            setIsEditing={setIsEditing}
          />
        </div>
      ) : (
        <div key={id} className={styles.task} onClick={onTaskEdit}>
          <Task id={id} title={title} />
        </div>
      )}
    </div>
  );
};
