const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

function addTask() {
  const task = inputBox.value.trim();

  if (!task) {
    alert("You must write down a task!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <label>
      <input type="checkbox" class="task-checkbox">
      <span class="task-text">${task}</span>
    </label>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;

  listContainer.appendChild(li);
  inputBox.value = "";
  updateCounters();
}

listContainer.addEventListener("click", function (e) {
  const li = e.target.closest("li");
  if (!li) return;

  if (e.target.classList.contains("edit-btn")) {
    const taskSpan = li.querySelector(".task-text");
    const checkbox = li.querySelector(".task-checkbox");

    const updatedText = prompt("Edit task:", taskSpan.textContent);
    if (updatedText !== null && updatedText.trim() !== "") {
      taskSpan.textContent = updatedText.trim();
      li.classList.remove("completed");
      checkbox.checked = false;
      updateCounters();
    }
  }

  if (e.target.classList.contains("delete-btn")) {
    li.remove();
    updateCounters();
  }
});

listContainer.addEventListener("change", function (e) {
  if (e.target.classList.contains("task-checkbox")) {
    const li = e.target.closest("li");
    li.classList.toggle("completed", e.target.checked);
    updateCounters();
  }
});

function updateCounters() {
  const completedTasks = listContainer.querySelectorAll("li.completed").length;
  const totalTasks = listContainer.querySelectorAll("li").length;
  const uncompletedTasks = totalTasks - completedTasks;

  completedCounter.textContent = completedTasks;
  uncompletedCounter.textContent = uncompletedTasks;
}

















