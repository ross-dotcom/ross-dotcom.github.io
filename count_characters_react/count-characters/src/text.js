import { useState } from "react";

function TypeText(props) {
  const [txt, setText] = useState("");
  
  //const searchButtonPressed = () => {
  //  console.log(name);
  //};
  
  return (
    <div>
      <form>
        <input id="text-field" type="text" value={txt} onChange={(e) => setText(e.target.value)}/>
      </form>
      <p>Count: {txt.length}</p>
    </div>
  )
}

export default TypeText;