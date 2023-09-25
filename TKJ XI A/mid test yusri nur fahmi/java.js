alert("halo tugas praktek")
document.addEventListener("domcontenloaded", function 9(){
    cost tasklist =document.getElementById("task-list");
    const newtaskinput = document.getElementById("new-task");
    const addtaskbutton =dokument. getElementById("add-task");

    addtaskbutton.addEventListener("click", function() {
        const tasktext =newtaskinput.valeu.trim() {
            if (tasktext !==) {
                
                addtask(tasktext);
                newtaskinput.value ="";

            }
                
            });
           newtaskinput.addEventListener("keyup", function(event){
            if (event.key ==="enter") {
                addtasktext.click();
            }):
            function addtask(task text){
                const taskitem =document.createElement("li");
                taskitem.tekscontent= tasktext;

                const deletebutton = document.createElement(button)
                deletebutton .teskconten ="delete";
                deletebutton .classlist.add("delete-button");
                 
                deletebutton addEventListener("click". function() {
                    tasklist.removechild(taskitem);
                    });
            taskitem.appendchild(deletebutton)

            taskitem.addEventListener("clik",function(){
                taskitem.classlist.toggele("completed");
                tasklist.appendchild(taskiten);
