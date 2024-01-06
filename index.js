function addTask() {
    var taskList = document.getElementById("taskList");
    var taskInput = document.getElementById("taskInput");
    
    if (taskInput.value !== "") {
        
        var listItem = document.createElement("li");
        listItem.innerHTML = taskInput.value + ' <button class="delete-button" onclick="deleteTask(this)">Delete</button>';
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}

function deleteTask(button) {
    
    var listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
}
