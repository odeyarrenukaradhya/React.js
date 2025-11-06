import React from "react";

function Table() {
  const tablestyle = {
    padding: "10px",
    margin: "10px",
    backgroundColor: "lightblue",
  };

  const headingstyle = {
    border: "3px solid white",
    padding: "10px",
    color: "black",
  };

  return (
    <div>
      <tr style={tablestyle}>
        <td style={headingstyle}>Hai</td>
        <td style={headingstyle}>How are you?</td>
      </tr>
      <tr style={tablestyle}>
        <td style={headingstyle}>Hello</td>
        <td style={headingstyle}>I am fine</td>
      </tr>
    </div>
  );
}

export default Table;
