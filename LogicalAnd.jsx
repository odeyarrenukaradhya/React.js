import React from 'react'
import { createRoot } from 'react-dom/client';

function Car(props) {
  return (
    <div>
      {props.brand && <h1>My car is a {props.brand}!</h1>}
    </div>
  );
}

export default Car