import React, { useState } from "react";
import "./App.css";


function App() {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);

  const add = () => {
    return setYes(yes + 1);
  };

  const subtract = () => {
    return setNo(no + 1);
  };
  return (
    <div className="App">
      <section className="body">
      <h1>You killed an enemy. Did the part drop?</h1>
      <div className="buttonContainer">
        <div className="buttonBox">
          <button onClick={add}>Yes</button>
          <h3>Total Yes: {yes}</h3>
        </div>
        <div className="buttonBox">
          <button onClick={subtract}>No</button>
          <h3>Total No: {no}</h3>
        </div>
      </div>
      <h2 className="drop">Current Drop Rate:</h2>
      <h2>{yes > 0 ? (yes / (yes + no)) * 100 : 0}%</h2>
      </section>
    </div>
  );
}

export default App;
