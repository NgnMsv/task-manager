const tasks = [];

function addTask(title) {
  tasks.push({ title, completed: false });
}

function removeTask(title) {
  let index = tasks.find((task) => task.title === title);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
}

function toggleTaskStatus(title) {
  let task = tasks.find((task) => task.title === title);
  if (task) {
    task.completed = !task.completed;
  }
}

function listTasks() {
  console.log(tasks);
}

function findTask(title) {
  let task = tasks.find((task) => task.title === title);
  console.log(task);
}

const TaskManager = {
  tasks,
  addTask,
  removeTask,
  toggleTaskStatus,
  listTasks,
  findTask,
};

module.exports = TaskManager;
