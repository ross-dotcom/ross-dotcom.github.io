/* exported alertOnLoad */
/* exported myFunction */

function alertOnLoad(){
  alert('Please note that this project is in progress and not fully completed.');
}

function myFunction(){
    
    var user = 'user123';
    
    var h = document.createElement("h4");
    h.innerHTML = user;
    
    var text = document.getElementById("exampleFormControlTextarea1").value;
    
    var li = document.createElement("p");
    li.innerHTML = text;
    
    li.appendChild(h);
    
    document.getElementById("list").appendChild(li);
    document.getElementById("exampleFormControlTextarea1").value = ""; //Clear input field on click.
    
    var line = document.createElement("HR");
    
    document.getElementById("list").appendChild(line);
}