import "./App.css";
import { useState } from "react";
import Table from "./Table";
import Modal from "./Modal";
import ProfileCard from "./ProfileCrad";
import Task from "./Task";
import Fragment from "./Fragment";
import Modal1 from "./Modal1";


function App() {
  const[open,setOpen]=useState(false);
  return (
    
    <div>
      <Fragment/><br></br> 
      
      <button onClick={()=> setOpen(true)}  style={{backgroundColor:"yellowgreen",border:"outset 2px",}}>Open Model</button>{open &&(
        <Modal1>
          <div style={{color:"red",}}>
      <h2>Hello this is a notification🎉</h2>
      <div>
     <button onClick={()=> setOpen(false)}  
     style={{backgroundColor:"orange",border:"outset 2px"}}>
      Close Model</button>
    </div>
    </div>
  </Modal1>)}
      
    </div>

  );
}

export default App;
