/* exported submit_total_amount */
/* exported myFunction */

var expense_name = "";
var amount = 0;

function submit_total_amount(){
    if (document.getElementById("total_amount").value == ""){
        alert("Please enter a total amount");
    }
    else {
        document.getElementById("insert_total").innerHTML = document.getElementById("total_amount").value;
        document.getElementById("total_amount").value = "";
    }
}

function myFunction(){
    
    var text = document.getElementById("xp").value;
    
    var amt_text = document.getElementById("xa").value;
    
    if (text == "") {
        alert("Please enter an expense");
    }
    else if (amt_text == ""){
        alert("Please enter an expense amount");
    }
    else {
        var li = document.createElement("li");
        li.innerHTML = text;
        
        var a = document.createElement("p");
        a.innerHTML = amt_text;
        /*li.appendChild(a);*/
        
        /*var xb = document.createElement("BUTTON");
        var x = document.createTextNode("x");
        xb.appendChild(x);
        
        li.appendChild(xb);*/
        
        //document.getElementById("list").appendChild(li);
        document.getElementById("xp").value = ""; //Clear input field on click.
        document.getElementById("xa").value = ""; //Clear input field on click.
        
        /*xb.addEventListener("click", function(){
            li.remove();
        });*/
        
        expense_name = text;
        amount = amt_text;
        
        add_row();
    }
}


function removeAll(){
    
    document.getElementById("list").innerHTML = "";
}

function add_row(){
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = expense_name;
    cell2.innerHTML = amount;
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