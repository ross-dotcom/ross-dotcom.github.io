/* exported myFunction */
/* exported removeAll */
/* exported removeItem */
/* exported display_the_time */
/* exported enterToAdd */
/* exported quote_of_the_day */
/* exported daily_quotes */

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var today = new Date();
var day = weekday[today.getDay()];
var date = day + ', ' + today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();


function display_the_time(){
    document.getElementById("date").innerHTML = date;
}


function myFunction(){
    
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
        
        var xb = document.createElement("BUTTON");
        var x = document.createTextNode("x");
        xb.appendChild(x);
        
        li.appendChild(xb);
        
        document.getElementById("list").appendChild(li);
        document.getElementById("idea").value = ""; //Clear input field on click.
        
        xb.addEventListener("click", function(){
            li.remove();
        });
        
    }
}


function removeAll(){
    
    document.getElementById("list").innerHTML = "";
}

function enterToAdd(){
    var input = document.getElementById("idea");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("add").click();
        }
    });
}

var daily_quotes = ["\"Discipline will take you to places where motivation can't.\"", "\"Remember your goal and why you started.\"", "\"Make big plans, enjoy the little things.\"", "\"We don't grow when we stay inside our comfort zone.\"", "\"Consistency is key!\"", "\"There is a past version of you that is so proud of how far you've come.\"", "\"Don't give up, show up everyday!\""];

function quote_of_the_day(){
    document.getElementById("quote").innerHTML = daily_quotes[today.getDay()];
}
