import { useState } from 'react'
import './App.css'
import Test from "@mocoding/shared";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
      <h1>Vite + React</h1>
      <Test />
      </div>
    </>
  )
}

export default App
