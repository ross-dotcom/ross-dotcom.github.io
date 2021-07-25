function checkEmpty() {
    if (document.getElementById("input-task").value.trim() == "") {
        alert("Please enter a task");
        return false;
    }
};