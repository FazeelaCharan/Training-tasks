class TaskManager {
    constructor() {
    
      this.tasks = [];
    }
  
    // Add a new task
    addTask(taskName) {
      this.tasks.push(taskName);
      console.log(`Task "${taskName}" added.`);
    }
  
    // Delete a task by name
    deleteTask(taskName) {
      const index = this.tasks.findIndex((task) => task === taskName);
      if (index !== -1) {
        this.tasks.splice(index, 1); // Remove the task from the array
        console.log(`Task "${taskName}" deleted.`);
      } else {
        console.log(`Task "${taskName}" not found.`);
      }
    }
  
    // Update a task by name
    updateTask(oldTaskName, newTaskName) {
      const index = this.tasks.findIndex((task) => task === oldTaskName);
      if (index !== -1) {
        this.tasks[index] = newTaskName;
        console.log(`Task "${oldTaskName}" updated to "${newTaskName}".`);
      } else {
        console.log(`Task "${oldTaskName}" not found.`);
      }
    }
  
    // Get a task by name
    getTaskByName(taskName) {
      const task = this.tasks.find((task) => task === taskName);
      if (task) {
        console.log(`Task found: "${task}".`);
      } else {
        console.log(`Task "${taskName}" not found.`);
      }
    }
  
    // List all tasks
    listTasks() {
      console.log("Current Tasks:");
      if (this.tasks.length > 0) {
        this.tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
      } else {
        console.log("No tasks available.");
      }
    }
  }
  
  
  const taskManager = new TaskManager();
  
  // Add tasks
  taskManager.addTask("cleaning");
  taskManager.addTask("cooking");
  
  // List tasks
  taskManager.listTasks();
  
  // Get a specific task
  taskManager.getTaskByName("cleaning");
  
  // Update a task
  taskManager.updateTask("cooking", "baking");
  
  // Delete a task
  taskManager.deleteTask("cleaning");
  
  // List tasks again
  taskManager.listTasks();
  