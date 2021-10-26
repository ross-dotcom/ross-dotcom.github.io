/* exported myFunction */
/* exported removeAll */
/* exported removeItem */
/* exported display_time */

function display_time() {

    /*n = new Date();
    y = n.getFullYear;
    m = n.getMonth()+1;
    d = n.getDate();*/
    //document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
    document.getElementById("date").innerHTML = Date();
}

function myFunction() {
    
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