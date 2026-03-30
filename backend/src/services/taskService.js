let tasks = [
  {
    id: 1,
    title: "Estudar Node.js",
    status: "pending",
  },
];

const getAllTasks = () => {
  return tasks;
};

const createTask = (taskData) => {
  const newTask = {
    id: tasks.length + 1,
    ...taskData,
  };

  tasks.push(newTask);
  return newTask;
};

const updateTask = (id, updatedData) => {
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return null;
  }

  Object.assign(task, updatedData);
  return task;
};

const deleteTask = (id) => {
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return null;
  }

  const deletedTask = tasks[index];
  tasks.splice(index, 1);

  return deletedTask;
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
