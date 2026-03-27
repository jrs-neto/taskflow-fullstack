const taskService = require("../services/taskService");

const getTasks = (req, res) => {
  const tasks = taskService.getAllTasks();
  res.json(tasks);
};

const createTask = (req, res) => {
  const { title, status } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = taskService.createTask({ title, status });

  res.status(201).json(newTask);
};

module.exports = {
  getTasks,
  createTask,
};
