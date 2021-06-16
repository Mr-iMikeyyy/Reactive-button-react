import React, { useState } from "react";

function App() {
  const [mouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");

  function mouseLeaveSubmit() {
    console.log("out");
    setMouseOver(false);
  }

  function mouseOverSubmit() {
    console.log("over");
    setMouseOver(true);
  }

  function handleClick() {
    setName(document.getElementById("formInput").value);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input id="formInput" type="text" placeholder="What's your name?" />
      <button
        onMouseOver={mouseOverSubmit}
        onMouseOut={mouseLeaveSubmit}
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
