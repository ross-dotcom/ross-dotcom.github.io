/* exported myFunction */
/* exported removeAll */
/* exported removeItem */

function myFunction() {
    
    var text = document.getElementById("idea").value;
    
    if (text == "") {
        alert("Please add a task");
    }
    else {
        var li = document.createElement("li");
        li.innerHTML = text;
        
        var cb = document.createElement("input");
        cb.type = "checkbox";
        cb.value = text;
        cb.checked = false;
        li.appendChild(cb);
        
        /*var rm = document.createElement("input");
        rm.type = "button";
        rm.value = "Remove";
        li.appendChild(rm);*/
        
        document.getElementById("list").appendChild(li);
    }
}

function removeAll() {
    
    document.getElementById("list").innerHTML = "";
}