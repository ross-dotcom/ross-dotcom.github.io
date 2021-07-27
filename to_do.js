/* exported myFunction */

function myFunction() {
    
    var text = document.getElementById("idea").value;
    
    if (text == "") {
        alert("Please add a task");
    }
    else {
        var li = document.createElement("li");
        li.innerHTML = text;
        document.getElementById("list").appendChild(li);
        
        var x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");
        document.body.appendChild(x);
    }
}