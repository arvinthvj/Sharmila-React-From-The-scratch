import { useState } from "react";
import Home from "./Home";
import "./styles.css";

export default function App() {
  
  const [name, setName] = useState("");
  const [pass, setPass] =useState("");
  const[isValidated , setIsValidated] = useState(false);

  const handleValidation=()=>{
    if(name == "Sharmila" && pass =="sha"){
      setIsValidated(true);
    }else{
      setIsValidated(false);
    }
  }

  return (
    //JSX == JAVASCRIPT XML
    <div className="App">
      Name <input onChange={function(e){
        debugger
        setName(e.target.value)
      }} type="text"></input>
      {/* {name} */}
      Password <input type="text" onChange={function(e){
        debugger
        setPass(e.target.value)
      }}></input>
      {/* {pass} */}
      <br></br>
      <button onClick={()=>{handleValidation()}}>Enter</button>


      {isValidated ? (<div>Login is successful</div>): (<div>Something is wrong</div>)}


    </div>

  );
}