import React from 'react';
import useCounter from './useCounter';

function CounterApp() {
    const{count,increment,decrement,reset}=useCounter(5);//starts from 5

  return (
    <div style={{textAlign:"center",marginTop:"5opx"}}>
      <h2>Count:{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterApp;
