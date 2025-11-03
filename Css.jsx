import React from 'react'

const style={
    background:"lightblue",
    padding:"10px",
    borderRadius:"5px",
};

// //Static inline css
//  function Greeting() {
//    return
//     <h2 style={style}>Hello Inline Styling!</h2>
// }

//Dynamic Inline css
function Temperature({value}){
    return(
      <div>
          <p style={{color: value > 30 ? "red":"blue"}}>Temperature:{value}Celcius</p>
          <h2 style={style}>Hello Inline Styling!</h2>
      </div>
    );
}

export default Temperature;
