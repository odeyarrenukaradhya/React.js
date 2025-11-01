import {React , useState} from 'react';

function TwowayBinding() {
    const[message,setMessage]=useState("Hello");
  return (
    <div>
        <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}/>
      <p>You typed: {message}</p>
    </div>
  );
}
export default TwowayBinding