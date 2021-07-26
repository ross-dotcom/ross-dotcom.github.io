function checkEmpty() {
    if (document.getElementById("input-task").value.trim() == "") {
        alert("Please add a task");
        return false;
    }
}

document.getElementById("btn-check").innerHTML = checkEmpty();