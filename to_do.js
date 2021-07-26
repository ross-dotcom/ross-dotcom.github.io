/**function checkEmpty() {
    if (document.getElementById("input-task").value.trim() == "") {
        alert("Please add a task");
    }
    else {
        alert("First if not working!");
    }
}*/

function myFunction() {
    
    var text = document.getElementById("idea").value;
    if (text == "") {
        alert("Please add a task");
    }
    else {
        var li = "<li>" + text + "</li>";
        document.getElementById("list").appendChild(li);
    }
}