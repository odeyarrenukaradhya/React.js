import React, {useEffect,useState} from 'react';

function Cleanup() {
    const[seconds,setSeconds]=useState(0);
    useEffect(()=>{
        const timer=setInterval(()=>{
            setSeconds((s)=>s+1);
        },1000);
        return()=>{
            clearInterval(timer);
            console.log("Timer cleared!");
        };
    },[]);
    return <h2>Time:{seconds}s</h2>;
}
        
export default Cleanup
