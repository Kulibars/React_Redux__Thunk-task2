export const searchTask = (task, searchTaskEl) => {
  let searchTask = task.filter(({ title }) => {
    return title.toLowerCase().indexOf(searchTaskEl.toLowerCase()) !== -1;
  });
  return searchTask;
};

export const sortTask = (searchTaskList) => {
  return [...searchTaskList].sort((a, b) =>
    a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
  );
};
