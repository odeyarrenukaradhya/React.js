import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hello from './helloWorld'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div><h1>HELLO WORLD</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi beatae corporis omnis <strike>perferendis repudiandae reiciendis</strike>  nostrum accusamus ea sunt error?</p>
    <Hello/> {/* function from helloWorld.jsx page */}
    </div>
    
  )
}
export default App
