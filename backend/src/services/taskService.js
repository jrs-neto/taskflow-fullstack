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

module.exports = {
  getAllTasks,
  createTask,
};
