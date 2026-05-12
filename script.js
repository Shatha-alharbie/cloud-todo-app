function addTask() {

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText === "") {
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span onclick="completeTask(this)">
            ${taskText}
        </span>

        <button onclick="deleteTask(this)">
            Delete
        </button>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
}

function completeTask(task) {
    task.classList.toggle("completed");
}