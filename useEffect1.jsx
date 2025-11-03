import React,{useEffect} from 'react';

function UseEffect() {
    useEffect(()=>{
        console.log("Component rendered or updated!");
    });
  return <h2>Hello React useEffect!</h2>;
 }
 export default UseEffect;

