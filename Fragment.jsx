import React from 'react'

function Fragment() {
  return (
    <>
    <div style={{backgroundColor:"white",color:"black",
        padding:"15px",borderRadius:"10px"
    }}>
      <h2>Renukaradhya</h2>
      <p>ISE student</p>
    </div>
    
    <React.Fragment>
    <div style={{backgroundColor:"black",padding:"15px",borderRadius:"10px"}}>
      <h2>Renukaradhya</h2>
      <p>ISE student</p>
      </div>
      </React.Fragment>
    </>
  )
}

export default Fragment; 
