const inputText = document.getElementById("inputText");
const addButton = document.getElementById("addButton");
const task__list = document.getElementById("task__list");

// Function to load tasks from LocalStorage and display them
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const listItem = createTaskElement(task.content, task.isDone);
    task__list.appendChild(listItem);
  });
}

// Function to create a task element (used when loading tasks and adding new ones)
function createTaskElement(taskContent, isDone = false) {
  const listItem = document.createElement("li");
  listItem.classList.add("highlight");

  // Wrap task content in a span element
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskContent;

  // Apply strikethrough and reduced opacity if the task is done
  if (isDone) {
    taskSpan.style.textDecoration = "line-through";
    taskSpan.style.opacity = "0.5";
  }

  // Add the task content and buttons
  listItem.innerHTML = `
      <div class="btns"> 
        <button class="doneBtn">${isDone ? "undo" : "done"}</button> 
        <button class="deleteBtn">delete</button> 
      </div>`;

  // Insert the taskSpan before the buttons
  listItem.insertBefore(taskSpan, listItem.querySelector(".btns"));

  const doneBtn = listItem.querySelector(".doneBtn");
  doneBtn.addEventListener("click", () => {
    // Toggle styling for the taskSpan (not the entire list item)
    if (taskSpan.style.textDecoration === "line-through") {
      doneBtn.innerHTML = "done";
      taskSpan.style.textDecoration = "";
      taskSpan.style.opacity = "1";
    } else {
      doneBtn.innerHTML = "undo"; // Change button to 'undo'
      taskSpan.style.textDecoration = "line-through"; // Apply strikethrough
      taskSpan.style.opacity = "0.5"; // Reduce opacity
    }
    updateLocalStorage(); // Update LocalStorage after toggling
  });

  const deleteBtn = listItem.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", () => {
    // Add the 'slide-out' class to trigger the animation
    listItem.classList.add("slide-out");

    // Wait for the animation to finish before removing the item
    listItem.addEventListener("animationend", () => {
      task__list.removeChild(listItem);
      updateLocalStorage(); // Update LocalStorage after deletion
    });
  });

  return listItem;
}

// Function to update the task list in LocalStorage
function updateLocalStorage() {
  const tasks = [];
  const listItems = task__list.querySelectorAll("li");
  listItems.forEach((item) => {
    // const taskContent = item.textContent.trim();
    const taskContent = item.childNodes[0].textContent.trim();
    const isDone = item.style.textDecoration === "line-through"; // Check if done
    tasks.push({ content: taskContent, isDone });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Save to LocalStorage
}

// Load existing tasks when the page loads
loadTasks();

addButton.addEventListener("click", () => {
  if (inputText.value.trim()) {
    const taskContent = inputText.value.trim();
    const newTask = createTaskElement(taskContent); // Create new task element
    task__list.appendChild(newTask);

    // Clear input field
    inputText.value = "";

    // Update LocalStorage with the new task
    updateLocalStorage();
  }
});
