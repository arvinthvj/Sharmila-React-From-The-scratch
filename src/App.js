import { useState } from "react";
import Home from "./Home";
import "./styles.css";

export default function App() {
  
  const [data, setData] = useState([]);
  const getData = async function(){
        let receivedData = await fetch("https://rczversion2.herokuapp.com/api/shopData");
        let fullData = await receivedData.json();
        setData(fullData);
  }
  return (
    <div>
      <button onClick={()=> {getData()}}>Get the data</button>

      {data.map(e=>(
        <p> {e.category}</p>
      ))}
    </div>
  )
}