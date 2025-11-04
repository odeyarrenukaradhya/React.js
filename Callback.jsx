import React from 'react'
import { useState,useCallback } from 'react';

  function Child({onClick}){
    console.log("child component re-rendered");
    return <button onClick={onClick}>Click Me</button>;}

  function Parent(){
    const[count,setCount]=useState(0);

    const handleClick=useCallback(()=>{
      console.log("Button clicked!");
    },[]); //No dependecy

  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={()=>setCount(count +1)}>Increment Count</button><br></br>
      <Child onClick={handleClick}/>
    </div>
  );
}

export default Parent;
