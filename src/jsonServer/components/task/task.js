export const Task = ({ id, title, onTaskEdit }) => {
  return (
    <>
      <div onClick={onTaskEdit} id={id}>
        {title}
      </div>
    </>
  );
};
