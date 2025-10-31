import React from "react";

function FirstComponent(props) {
  return (
    <div>
      <h1>First Component {props.name}</h1>
      <SecondComponent phno="7795561563" />
      <ThirdComponent address="Santheshivara"/>
    </div>
  );
}

function SecondComponent(props) {
  return (
    <div>
      <h3>Second Component {props.phno}</h3>
    </div>
  );
}

function ThirdComponent(props) {
  return (
    <div>
      Third Component {props.address}
    </div>
  );
}

export default FirstComponent;
