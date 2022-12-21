/* exported alertOnLoad */
/* exported myFunction */

function alertOnLoad(){
  alert('Please note that this project is in progress and not fully completed.');
}

function myFunction(){
  
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var today = new Date();
    var day = today.getDate();
    var mon = month[today.getMonth()];
    var yr = today.getFullYear();
    var theDate = day+" "+mon+" "+yr;
    var p_date = document.createElement("p");
    p_date.innerHTML = theDate;
    
    document.getElementById("list").appendChild(p_date);
    
    var user = 'user123';
    var h4 = document.createElement("h4");
    h4.innerHTML = user;
    
    document.getElementById("list").appendChild(h4);
    
    var text = document.getElementById("exampleFormControlTextarea1").value;
    var p = document.createElement("p");
    p.innerHTML = text;
    
    document.getElementById("list").appendChild(p);
    
    document.getElementById("exampleFormControlTextarea1").value = ""; //Clear input field on click.
    
    var line = document.createElement("HR");
    document.getElementById("list").appendChild(line);
}