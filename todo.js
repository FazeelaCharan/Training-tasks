console.log("hello world");
console.log("helllo world");
const tasks = ["cleaning", "driving", "gaming", "outing"];
console.log(tasks.indexOf("washing"));
//add new task
const addNewTask = (task) => {
  tasks.push(task);
};
addNewTask("Exercising");
console.log(tasks);
//update task
const updateTask = (oldTask, replacedTask) => {
  let index = tasks.indexOf(oldTask);
  if (index > -1) {
    tasks[index] = replacedTask;
  }
};
updateTask("gaming", "reading");
console.log(tasks);
//delete task
const deleteTask = (task) => {
  let index = tasks.indexOf(task);
  tasks.splice(index, 1);
  //   splice--> from where to delete (index no) and how much data should delete
  //if we give third parameter , it will gonna replace by deleted item ,

  //   tasks.splice(index, 1, "writing");
};
deleteTask("driving");
console.log(tasks);
//getTask by name
const getTaskByName = (taskName) => {
  let name = tasks.find((task) => task == taskName);
  console.log(name);
};
getTaskByName("gardening");
//getAll tasks
const getAllTasks = () => {
  console.log(tasks);
};
getAllTasks();
