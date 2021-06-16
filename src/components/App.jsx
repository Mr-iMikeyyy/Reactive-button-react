import React, { useState } from "react";

function App() {
  const [mouseOver, setMouseOver] = useState(false);

  function mouseLeaveSubmit() {
    console.log("out");
    setMouseOver(false);
  }

  function mouseOverSubmit() {
    console.log("over");
    setMouseOver(true);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={mouseOverSubmit}
        onMouseOut={mouseLeaveSubmit}
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
