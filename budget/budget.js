/* submit_total_amount */

function submit_total_amount(){
    document.getElementById("insert_total").innerHTML = document.getElementById("total_amount").value;
    document.getElementById("total_amount").value = "";
}

function myFunction(){
    
    var text = document.getElementById("xp").value;
    
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
        
        var xb = document.createElement("BUTTON");
        var x = document.createTextNode("x");
        xb.appendChild(x);
        
        li.appendChild(xb);
        
        document.getElementById("list").appendChild(li);
        document.getElementById("xp").value = ""; //Clear input field on click.
        
        xb.addEventListener("click", function(){
            li.remove();
        });
        
    }
}


function removeAll(){
    
    document.getElementById("list").innerHTML = "";
}

/*function enterToAdd(){
    var input = document.getElementById("xp");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("add").click();
        }
    });
}*/