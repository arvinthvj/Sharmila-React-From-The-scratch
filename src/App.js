import { useState } from "react";
import Home from "./Home";
import "./styles.css";

export default function App() {
  
  const [tempValue, setTempValue] = useState("sharm");

  return (
    //JSX == JAVASCRIPT XML
    <div className="App">
      <h1>{tempValue}</h1>
      <button onClick={function(){
        setTempValue("changed")
      }} > Click to change the state</button>
      <h2>Start editing to see some magic happen!</h2>
      <Home/>
    </div>

  );
}
