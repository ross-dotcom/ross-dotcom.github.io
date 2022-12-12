/* exported submit */

let store_email = '';

function submit(){
  if (document.getElementById("validationDefault01").value != '' &&  document.getElementById("validationDefault02").value != ''){
    store_email = document.getElementById("validationDefault01").value;
    window.location.href = "home.html";
  } else if (document.getElementById("validationDefault01").value == ''){
    alert("Email address is required!");
  } else {
      if (document.getElementById("validationDefault02").value == ''){
        alert("Password is required!");
      }
  }
}