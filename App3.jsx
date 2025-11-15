import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./redux/CounterSlice";
import ZustandStore from "./ZustandStore";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        padding: "10px",
        margin: "20px",
        backgroundColor: "white",
        borderRadius: "10px",
        border: "solid black 2px",
        boxShadow: "2px 2px 10px white",
      }}
    >
      <h1 style={{ color: "black", textShadow: "2px 2px 4px" }}>Counter</h1>
      <h2 style={{ color: "black" }}>Count:{count}</h2>
      
      <button
        style={{
          backgroundColor: "green",
          margin: "10px",
          border: "outset 2px",
          borderRadius: "10px",
          boxShadow: "2px 2px 10px green",
        }}
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>

      <button
        style={{
          backgroundColor: "red",
          margin: "10px",
          border: "outset 2px",
          borderRadius: "10px",
          boxShadow: "2px 2px 10px red",
        }}
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>

      <button
        style={{
          backgroundColor: "blue",
          margin: "10px",
          border: "outset 2px",
          borderRadius: "10px",
          boxShadow: "2px 2px 10px blue",
        }}
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
      <ZustandStore/>
    </div>
  );
}

export default App;
