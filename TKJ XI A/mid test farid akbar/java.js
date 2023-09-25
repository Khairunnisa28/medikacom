alert ("halo tugas praktek")
document.addEventListener("DOMContentLoaded",function () {
    const tasklist = document.getElementById("new task");
    const newtasinput = document.getElementById("add-task");
    const addEventListener =document.getElementById("add-task")

    addtaskbutton.addEventListener("click",function) {
        const tasktext = newtaskbutton.value.trim();
        if (tasktext !== ""); {
            addtask(tasktext);
            newtasinput.value = "";
        }
    }
});
newtasinput.addEventListener("kenyup", function(event) {
    if (Event.key === "enter") {
        addtaskbutton.click();
    }
});

function addtask(tasktext) {
    const taskitem = document.createElement("li");
    taskitem.textContent.textContent = tasktext;

    const deletebutton = document.createElement("button");
    deletebutton.textContent = "delete";
    deletebutton.classList.add("delete-button");

    deletebutton.addEventListener("click", function() {
        tasklist.removechild(taskitem);
    });

    taskitem.appendChild(deletebutton);

    taskitem.addEventListener("click", function() {
        taskitem.classList.toggle("completed")
    });

    taskitem.appendChild(taskitem);
}