/* exported myFunction */

/*function myFunction() {
    
    var text = document.getElementById("idea").value;
    
    if (text == "") {
        alert("Please add a task");
    }
    else {
        var li = document.createElement("li");
        li.innerHTML = text;
        document.getElementById("list").appendChild(li);
    }
}*/

function myFunction() {
    
    var newLi = document.createElement('li');
    
    var checkBox = cb = document.createElement("input");
    cb.type = "checkbox";
    cb.id = "c1";
    cb.value = name;
    cb.checked = false;
    
    newLi.appendChild(cb);
    
    var text = document.createTextNode(name);
    
    newLi.appendChild(text);
    
    var ul = document.getElementById("idea");
    ul.appendChild(newLi);
}