/* exported myFunction */

function myFunction() {
    
    var text = document.getElementById("idea").value;
    
    if (text == "") {
        alert("Please add a task");
    }
    else {
        var li = document.createElement("li");
        li.innerHTML = text;
        //document.getElementById("list").appendChild(li);
        
        var liCheckBox = document.createElement("input");
        liCheckBox.type = "checkbox";
        
        li.innerHTML += liCheckbox.outerHTML;
        document.getElementById("list").appendChild(li);
    }
}