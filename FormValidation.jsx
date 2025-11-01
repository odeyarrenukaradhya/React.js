import React, { useState } from 'react'

function FormValidation() {
    const[email,setEmail]=useState("");
    const[number,setNumber]=useState(0);
    const[error,setError]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!email.includes("@")){
            setError("Please enter the valid email");
        }else if(number.length>10  || number.length<10){
            setError("Please enter the valid number");
        }else{
            setError("");
            alert(`Email Submitted:${email}, Number submitted:${number}`);
        }
    };

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <button type="submit">Submit</button>
        {error && <p style={{color:"red"}}>{error}</p>}
    </form>
  );
}

export default FormValidation
