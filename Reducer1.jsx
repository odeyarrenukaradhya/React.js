import React from 'react'
import {useReducer} from 'react';

function Reducer() {
    function reducer(state,action){
        switch(action.type){
            case "INCREMENT":
                return { count:state.count+1};
            case "DECREMENT":
                return { count:state.count-1};
            case "INCREMENTBY2":
                return { count:state.count+2};
            case "RESET":
                return { count:0};
            default:
                return state;
        }
    }
  const[state,dispatch]=useReducer(reducer,{count:0});

  return (
    <div style={{textAlign:"center",marginTop:"50px"}}>
        <h2>Count:{state.count}</h2>

        <button onClick={()=>dispatch({type:"INCREMENT"})}>➕Increment</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>➖Decrement</button>
        <button onClick={()=>dispatch({type:"INCREMENTBY2"})}>Increment by 2</button>
        <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
      
    </div>
  )
}

export default Reducer
