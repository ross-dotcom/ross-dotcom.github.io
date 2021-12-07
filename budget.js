/* exported myFunction */
/* exported removeAll */
/* exported removeItem */
/* exported display_time */

function myFunction() {
    
    var text = document.getElementById("idea").value;
    
    var amt = document.getElementById("amount").value;
    
    if (text == "") {
        alert("Please add a task");
    }
    else {
        var li = document.createElement("li");
        li.innerHTML = text;
        
        var cb = document.createElement("input");
        
        document.getElementById("list").appendChild(li);
    }
}

function removeAll() {
    
    document.getElementById("list").innerHTML = "";
}