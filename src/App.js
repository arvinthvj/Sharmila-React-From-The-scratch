import { useState } from "react";
import Home from "./Home";
import "./styles.css";
let data  = [
  {
      name : "Sharmila",
      experience : 5,
      technologyKnown : ["node", "javascript", "html", "css"],
      place : "chennai",
      company : 'TCS'
  },
  {
      name : "Nithesh",
      experience : 4,
      technologyKnown : ["javascript", "bootstrap"],
      place : "tanjore",
      company : 'TCS'
  },
  {
      name : "Arvinth",
      experience : 3,
      technologyKnown : ["javascript","node", "firebase"],
      place : "vilupuram",
      company : 'MP'
  },
  {
      name : "Sivakumar",
      experience : 0.2,
      technologyKnown : ["javascript"],
      place : "chennai",
      company : 'HCL'
  },
  {
      name : "Saravana Kumar",
      experience : 10,
      technologyKnown : ["node", "firebase", "javascript", "bootstrap", "oAuth", "jQuery", "React", "Angular"],
      place : "chennai",
      company : 'Mind Tree'
  }
];
export default function App() {
  

  const [inputs , setInputs] = useState({});
  const [dataCopy, setDataCopy] =useState(data);





function handleDelete(){
console.log(inputs);
setDataCopy(()=>{
  return data.filter(e=> !Object.keys(inputs).includes(e.name));
})
}


  return (
    
<div>
    {dataCopy.map(e=>(
      <>
      <input key={e.name} type="checkbox" onChange={()=>{setInputs(previousState =>{ return {...previousState, [e.name] : "checked"} })}}></input>
      {e.name}
      <br></br>
      </>
    ))}


    <button onClick={()=>{handleDelete()}}>Delete</button>
</div>
  );
}
