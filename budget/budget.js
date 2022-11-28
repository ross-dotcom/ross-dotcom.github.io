/* exported submit_total_amount */
/* exported myFunction */
/* exported submit_expense_amount */
/* exported remaining_amount */

var expense_name = "";
var amount = 0;

function submit_total_amount(){
    if (document.getElementById("total_amount").value == ""){
        document.getElementById("insert_total").value = 0;
    }
    else {
        document.getElementById("insert_total").innerHTML = document.getElementById("total_amount").value;
        document.getElementById("total_amount").value = "";
    }
}

function add_row(){
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = expense_name;
    cell2.innerHTML = amount;
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
    
        document.getElementById("xp").value = ""; //Clear input field on click.
        document.getElementById("xa").value = ""; //Clear input field on click.
        
        expense_name = text;
        amount = amt_text;
        
        add_row();
        submit_expense_amount(parseInt(amount));
    }
}

function submit_expense_amount(a){
    document.getElementById("insert_expense").innerHTML = parseInt(document.getElementById("insert_expense").innerHTML) + parseInt(a);
}

/*function remaining_amount(a){
    document.getElementById("insert_expense").innerHTML = parseInt(document.getElementById("insert_expense").innerHTML) + parseInt(a);
}*/
