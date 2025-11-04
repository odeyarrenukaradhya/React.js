import { useState, createContext, useContext } from "react";
const UserContext=createContext();


//prop drilling is avoided by using context API
//why it is called API ?  because, it has 2 parts producer & consumer which acts like client and server side 
//-----------------Component1---------------
function Component1(){
    const[user]=useState('Linus');
    return(
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2/>
        </UserContext.Provider>
    );
}

//----------------Component2---------------
function Component2(){
    return(
        <>
            <h1>Component 2</h1>
            <Component3/>
        </>
    );
}

//----------------Component3---------------
function Component3(){
    const user=useContext(UserContext);
    return(
        <>
            <h1>Component 3</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}

export default Component1;