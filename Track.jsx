import { useRef, useState,  useEffect } from 'react'

function Track() {
    const [inputValue,setInputValue]= useState("");
    const previousInputValue=useRef("");
    useEffect(()=>{
        previousInputValue.current=inputValue;
    },[inputValue]);

  return (
    <>
      <input type='text' value={inputValue} onChange={(e)=> setInputValue(e.target.value)}></input>
      <h2>Current value:{inputValue}</h2>
      <h2>Previous value:{previousInputValue.current}</h2>
    </>
  );
}

export default Track;
