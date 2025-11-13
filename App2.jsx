import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Post from "./Post";
import Todo from "./Todo";

const client = new QueryClient();

function App() {
  const[showImages,setShowImages]= useState(true);
  return (
    <QueryClientProvider client={client}>
      <div>
        <button onClick={()=>setShowImages((prev)=>!prev)}>{showImages ? "Hide Images" : "show images"}</button>
        {showImages && <Post />}
        {/* <Todo/> */}
        
      </div>
    </QueryClientProvider>
  );
}

export default App;
