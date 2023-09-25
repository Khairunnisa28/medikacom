document.addEventListener("DOMContentLoaded" , function() {
    const tasklistn = document.getElementById("task list");
    const newtasKinput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add -task")

addTaskButton.addEventListener("click" , function() {
    const taskText = new taskinput.value.trim();
    if (taskText !==  "")  {
        addTask(taskText);
        newtasKinput.value = "";
    }
});

newtasKinput.addEventListener("kenyup" , function(event) {
    if (event.key === "enter") {
    addTaskButton.click();
    }
});
function  addTask(taskText){
    const tasKIrem = document.createElement("li")
    tasKItem.textContet = taskText;

    // tambahkan tombol delete ke setiap tugas
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click", function() {
        tasklist.removeChild(tasKItem)
    });

    tasKItem.appndChild(deleteButton);

    tasKItem.addEventListener("click" , function() {
        tasklist.classList.toggele("completed");
    });

    tasklist.appndChild(tasKItem);
}
  })