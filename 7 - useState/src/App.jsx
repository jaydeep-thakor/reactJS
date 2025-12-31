import React, { useState } from 'react'

const App = () => {
  
  const [num, setNum] = useState(0)
  
  const increaseNum = () => {
    setNum(num+1);
  }

  const decreaseNum = () => {
    setNum(num-1);
  }

  const increaseBy5 = () => {
    setNum(num+5);
  }
   const decreaseBy5 = () => {
    setNum(num-5);
  }

  return (
    <div>

    <h1>{num}</h1>

<div>
    <button onClick={increaseNum}>increaseNum</button>
    <button onClick={decreaseNum}>decreaseNum</button>
</div>

<div>
    <button onClick={increaseBy5}>increaseBy5</button>
    <button onClick={decreaseBy5}>decreaseBy5</button>
</div>
    </div>
  )
}

export default App