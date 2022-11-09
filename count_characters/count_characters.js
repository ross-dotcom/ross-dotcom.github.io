/* exported count_chars */
/* exported clear */

function count_chars(){
    let text = document.getElementById("text_box").value;
    document.getElementById("update_result").innerHTML = text.length;
}

function reset_result(){
    document.getElementById("update_result").innerHTML = "0";
}

function clear_text(){
    document.getElementById("text_box").value = null;
}

function clear_all(){
    document.getElementById("update_result").innerHTML = "0";
    document.getElementById("text_box").value = null;
}