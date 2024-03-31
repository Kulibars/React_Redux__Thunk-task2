const fetchServer = (method, { id, ...payload } = {}) => {
  let url = "http://localhost:3005/todos";
  let options = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (method !== "GET" && method !== "POST") {
    url += `/${id}`;
  }

  if (method !== "GET" && method !== "DELETE") {
    options.body = JSON.stringify(payload);
  }

  return fetch(url, options).then((jsonData) => jsonData.json());
};

export const createTask = (newTask) => fetchServer("POST", newTask);

export const readTask = () => fetchServer("GET");

export const updateTask = (taskData) => fetchServer("PATCH", taskData);

export const deleteTask = (taskId) => fetchServer("DELETE", { id: taskId });
