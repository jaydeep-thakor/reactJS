import React, { useEffect } from 'react'
import { useState } from 'react'

const Async_useState = () => {

    const [num, setNum] = useState(10);
    const updateNum = () => {
        console.log(num);
        setNum(20);
        console.log(num);
        
        // if the same things written twice, react will not re render it, it ignore it
        setNum(20);
        setNum(20);
        setNum(20);
        setNum(20); 
        // and if you want to run it forcefully
        setNum(prev => (prev+1));
        setNum(prev => (prev+1));
        setNum(prev => (prev+1));
        
    }
    // in both the log it prints previous value which is 10, because setNum run asynchronously and takes time to update
    // this will work
    //  useEffect(()=>{
    //     console.log("useEffect num", num);
    // },[updateNum])

   

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={() => {
                updateNum();
            }}>update num</button>
        </div>
    )
}

export default Async_useState