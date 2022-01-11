/* exported myFunction */
/* exported removeAll */
/* exported removeItem */
/* exported display_time */

function myFunction() {
    
    var text = document.getElementById("idea").value; /*Gets value in 'item' field and assigns it to 'text'*/
    
    var amt = document.getElementById("amount").value; /*Gets value in 'amount' field and assigns it to 'amt'*/
    
    if (text == "" && amt == "") {
        alert("Please add an item and its amount");
    }
    else if (text == "") {
        alert("Please add an item");
    }
    else if (amt == "") {
        alert("Please add an amount");
    }
    else if (Number.isNaN(parseInt(amt))) {
        alert("Amount should contain only numbers!");
    }
    else {
        /*Item*/
        var t = document.createElement("label");
        t.innerHTML = text;
        
        /*Amount*/
        var a = document.createElement("li");
        a.innerHTML = 'R' + amt;
        
        /*Break*/
        var b = document.createElement("br");
        
        /*Total*/
        var total = document.createElement("p");
        total.innerHTML = amt;
        
        var cb = document.createElement("input");
        
        document.getElementById("list").appendChild(t);
        document.getElementById("list").appendChild(a);
        document.getElementById("list").appendChild(b);
        
        document.getElementById("total").appendChild(total);
    }
}

function removeAll() {
    
    document.getElementById("list").innerHTML = "";
}