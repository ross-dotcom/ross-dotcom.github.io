import { useState } from "react";

function TypeText(props) {
  const [name, setName] = useState("");
  
  //const searchButtonPressed = () => {
  //  console.log(name);
  //};
  
  return (
    <div>
      <form>
        <input id="name-field" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </form>
      <p>Count: {name}</p>
    </div>
  )
}

export default TypeText;