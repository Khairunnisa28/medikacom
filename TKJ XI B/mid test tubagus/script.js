document.addEventListener("DOMContentLoaded"  , function (){
    const tasklist = document.getElementById("task-list");
    const newTaskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task");

    addTaskButton.addEventListener("click",  function(){ 
        const TaskText = newTaskInput.value = "";
        if (TaskText |= "") {
           addTask(TaskText);
           newTaskInput.value = "";
        }
    })
        
})

      newTaskInput.addEventListener ("kayup") , function (event) {}
          if (event.key === "enter") {
            
          }
{}

function addTask(TaskText) 
const taskitem = document.createElement("li");
taskitem.textContent = TaskText;

// tambahkan tombol delete ke setiap tugas
const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
deleteButton.classList.add("delete-button");

deleteButton.addEventListener("click", function() {
    tasklist.removeCHILD(taskitem);
});