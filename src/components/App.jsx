import React, { useState } from "react";

function App() {
  const [mouseOver, setMouseOver] = useState(false);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [fullName, setFullName] = useState("");

  function mouseLeaveSubmit() {
    setMouseOver(false);
  }

  function mouseOverSubmit() {
    setMouseOver(true);
  }

  function handleClick() {
    setFullName(fName + " " + lName);
    console.log(fullName);
  }

  function handleChangeFName(event) {
    setFName(event.target.value);
  }

  function handleChangeLName(event) {
    setLName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {fullName}</h1>
      <input
        onChange={handleChangeFName}
        type="text"
        placeholder="What's your first name?"
        value={fName}
      />
      <input
        onChange={handleChangeLName}
        type="text"
        placeholder="What's your last name?"
        value={lName}
      />
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
