function checkEmpty() {
    if (document.getElementById("input-task").value.trim() == "") {
        alert("Please add a task");
        return false;
    }
    else {
        document.getElementById("tasks").innerHTML = value;
    }
};