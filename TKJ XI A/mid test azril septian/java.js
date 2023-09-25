alert ("hai tugas praktek")
document.addEventListener("DOMContentLoaded", funcsion () {
    cont tasklist = document.getElementById("task-list");
    cont newTaskInput = document.getElementById("new-task");
    cont addTaskButton = document.getElementById("add-task");

    addTaskButton.addEventListener("click", funcsion () {
        cont tasktext = newTaskInput.value.trim();
        if (tasktext !== "") {
          addTask(tasktext);
          newTaskInput.value = "";
       }
    });

    newTaskInput.addEventListener("keyup", funcsion(event){
       if (event.key === "enter") {
          addTaskButton.click(;)
       }
    });
    function addTask(taskText) {
     cont taskitem = document.createElement("li");
     taskitem.textcontent = taskText;

      cont deleteButton = document.createElement(Button)
      deleteButton.textcontent = "delete";
      deleteButton.classList.add("delete-Button");

      deleteButton.addEventListener("click", funcsion(){
        taxkList.removeChild(taskitem);
      });

      taskitem.appendChild(deleteButton);

      taskitem.addEventListener("click", funcsion(){
        taskitem.classList.toggle("completed");
      });

      taskList.appendChild(taskItem);
   }
});