import { useState } from "react";

function TypeText(props) {
  const [txt, setText] = useState("");
  
  const clearTextPressed = () => {
    document.getElementById("text-field").value = null;
  };
  
  return (
    <div>
      <form>
        <input id="text-field" type="text" size="100" height="200px" value={txt} onChange={(e) => setText(e.target.value)}/>
      </form>
      <p>Count: {txt.length}</p>
      <button type="button" onClick={clearTextPressed}>Clear Text</button>
    </div>
  )
}

export default TypeText;