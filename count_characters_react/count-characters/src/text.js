import { useState } from "react";

function TypeText(props) {
  const [txt, setText] = useState("");
  
  const clearTextPressed = () => {
    document.getElementById("text-field").value = null;
  };
  
  const resetResultPressed = () => {
    document.getElementById("count").innerHTML = 0;
  };
  
  const clearAllPressed = () => {
    document.getElementById("text-field").value = null;
    document.getElementById("count").innerHTML = 0;
  };
  
  return (
    <div>
      <form>
        <input id="text-field" type="text" placeholder="Type text here..." value={txt} onChange={(e) => setText(e.target.value)}/>
      </form>
      <h4>Count: <p id="count">{txt.length}</p></h4>
      <button type="button" onClick={clearTextPressed}>Clear Text</button>
      <button type="button" onClick={resetResultPressed}>Reset Result</button>
      <button type="button" onClick={clearAllPressed}>Clear All</button>
    </div>
  )
}

export default TypeText;