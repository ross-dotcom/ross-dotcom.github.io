/* exported myFunction */
/* exported removeAll */
/* exported removeItem */
/* exported display_time */

function display_time() {

    n = new Date();
    y = n.getFullYear();
    m = n.getMonth()+1;
    d = n.getDate();
    document.getElementById("date").innerHTML = d + "/" + m + "/" + y;
    //document.getElementById("date").innerHTML = Date();
}

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
        
        document.getElementById("list").appendChild(li);
    }
}

function removeAll() {
    
    document.getElementById("list").innerHTML = "";
}

function enterToAdd () {
    var input = document.getElementById("idea");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("add").click();
        }
    });
}