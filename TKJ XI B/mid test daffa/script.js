alert("hallo tugas praktek ujian praktek")
document.addEventListener("DOMContentLoaded", function ()
    const tasklist = document.getElementById("task-list");
    const newTaskInput = document.getElementById("new-task")
    const addTask = document.getElementById(add-task);

    addTaskButton.addEventListener("click",function(){
        const taskText = newTaskInput.ariaValueMax.trim();
        if (taskText !=='''){
            addTaskButton(taskText);
            newTaskInput.value = "";
        }
    }; 

newTaskInput.addTaskInput.addEventListener("keyup", function(event) { 
    if (event.key === "enter") {
        addTaskButton.click();
    }
});

function addTask(taskText){
    const taskitem = document.createElement("li");
    taskItem.text = task Text;

    const deleteButton = document.createElement("button");
    deleteButton


}
    
    