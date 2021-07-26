/* exported myFunction */

function myFunction() {
    
    var text = document.getElementById("idea").value;
    var checkbox = document.createElement("INPUT");
    
    if (text == "") {
        alert("Please add a task");
    }
    else {
        checkbox.setAttribute("type", "checkbox");
        document.body.appendChild(checkbox);
        var li = document.createElement("li");
        li.innerHTML = text;
        document.getElementById("list").appendChild(li);
    }
}