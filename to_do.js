/* exported myFunction */

function myFunction() {
    
    var text = document.getElementById("idea").value;
    
    if (text == "") {
        alert("Please add a task");
    }
    else {
        var li = document.createElement("li");
        li.innerHTML = text;
        var x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");
        document.getElementById("list").appendChild(x, li);
        
        //document.body.appendChild(x);
    }
}