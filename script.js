
// Load tasks from local storage on page load
document.addEventListener("DOMContentLoaded", function () {
  var savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = savedTasks;
    attachTaskEvents();
  }
});

// Save tasks to local storage
function saveTasksToLocalStorage() {
  var taskList = document.getElementById("taskList").innerHTML;
  localStorage.setItem("tasks", taskList);
}

// Attach events to tasks (checkbox and delete button)
function attachTaskEvents() {
  var checkboxes = document.querySelectorAll(".task-item input[type='checkbox']");
  var deleteButtons = document.querySelectorAll(".delete-button");
  
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("click", completeTask);
  });
  
  deleteButtons.forEach(function (button) {
    button.addEventListener("click", deleteTask);
  });
}
/*function to add task in input in form of list */

    function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
      var taskItem = document.createElement("li");
      taskItem.className = "task-item";

      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.onclick = completeTask;

      var taskTitle = document.createElement("span");
      taskTitle.className = "task-title";
      taskTitle.textContent = taskInput.value;

      var deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";
      deleteButton.textContent = "Delete";
      deleteButton.onclick = deleteTask;

      taskItem.appendChild(checkbox);
      taskItem.appendChild(taskTitle);
      taskItem.appendChild(deleteButton);

      taskList.appendChild(taskItem);

      taskInput.value = ""
        
      // After adding a task, save tasks to local storage
      saveTasksToLocalStorage();
    }
  }
  /*input task using enter key*/

    var taskInput = document.getElementById("taskInput");
    taskInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
    addTask();
  }
}
)
    
    /*fuction to add line on text after completing task*/
    function completeTask() {
        var taskTitle = this.nextSibling;
        if (this.checked) {
          taskTitle.style.textDecoration = "line-through";
    } else {
      taskTitle.style.textDecoration = "none";
    }
        // After checking task box a task, save tasks to local storage
  saveTasksToLocalStorage();
  }

    
/*delete task */
  function deleteTask() {
    var taskItem = this.parentNode;
    var taskList = taskItem.parentNode;
    taskList.removeChild(taskItem);
      // After deleting a task, save tasks to local storage
    saveTasksToLocalStorage();
  }