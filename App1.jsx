import React from 'react'
import { useEffect, useState } from "react";

function App() {
  const[images,setImages]=useState([]);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState(null);

   useEffect(()=>{
    const loadImages=async()=>{
      console.log("🔍fetching images from api");
      try{
        const res=await fetch("https://picsum.photos/v2/list?page=2&limit=20");
        console.log("API response status:",res.status);

        if(!res.ok) throw new Error(`Network response was not ok: ${res.status}`);

        const data=await res.json();

        console.log("fetched data:",data);

        setImages(data);
      }catch(err)
      {
        console.log("❌error fetching images:",err);
        setError(err);
      }finally{
        console.log("✅Fetch operation is completed");
        setLoading(false);
      }
    };
    loadImages();
  },[]);

  if(loading)return<p>Loading photos......</p>
  if(error) return<p>Failed to load photos😞</p>
  return (
    <div>
      <h1>Photo Gallery</h1>
      <div>
        {images.map((img)=>(
          <div key={img.id}>
            <img src={img.download_url}
          alt={img.author}/>
          <p>{img.author}</p>
      </div>
        ))}
        </div>
    </div>
     // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts/")
  //     .then((response) => response.json())
  //     .then((data) => console.log("Fetched data:", data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);
  )
}

export default App
