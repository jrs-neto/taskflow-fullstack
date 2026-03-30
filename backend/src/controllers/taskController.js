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

const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const updateTask = taskService.updateTask(id, req.body);

  if (!updateTask) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(updateTask);
};

const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = taskService.deleteTask(id);

  if (!deleted) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(204).send();
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
