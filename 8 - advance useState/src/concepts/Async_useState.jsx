import React from 'react'
import { useState } from 'react'

const Async_useState = () => {

    const [num, setNum] = useState(10)
    const btnClick = () => {
        // both the time it prints previous value (10) is it is a async and takes to time to update
        console.log(num)
        setNum(20)
        console.log(num)
    }

  return (
    <div>

    <h1>{num}</h1>
    <button onClick={()=>{
btnClick();
    }}>Click</button>

    </div>
  )
}

export default Async_useState