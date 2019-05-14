import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClickCounter1 from "./Components/ClickCounter1";
import HoverCounter1 from "./Components/HoverCounter1";

function App1() {
  return (
    <div className="App">
      <ClickCounter1/>
      <HoverCounter1/>
     
    </div>
  );
}

export default App1;
