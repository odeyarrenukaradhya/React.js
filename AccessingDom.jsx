import {useRef} from 'react';
//useRef makes application slow because it directly access BrowserDOM instead of virtualDOM

function AccessingDom() {
    const inputElement=useRef();
    const focusInput=()=>{
        inputElement.current.focus();
    };
  return (
    <>
    <input type="text" ref={inputElement}/>
    <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default AccessingDom
