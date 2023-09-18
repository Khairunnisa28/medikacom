const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <button onclick="deleteTask(this)">Hapus</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}
