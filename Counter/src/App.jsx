import { useState } from 'react'

import './App.css'
function App() {
 const [counter,setCounter] = useState(0)

  return (
    <>
      <h1 className='counter-heading'>Counter</h1>
      <div className='counter-wrapper'>
      <div className='count'>{counter}</div>
      <button onClick={()=>{setCounter(counter+1)}}>Increment</button>
      <button onClick={()=>{setCounter(counter-1)}}>Decrement</button>
      </div>
    
    </>
  )
}

export default App
