import React, { useEffect, useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);

  // run on every render
  useEffect(()=>{
    console.log("run on every render")
  });

  // run only on first render
  useEffect(()=>{
    console.log("run only on first render")
  }, []);

      const numUpdated = () => {
      alert("num is updated");
    }

  // run only when num value updates, run only when num runs
  useEffect(()=>{
    console.log("run only when num value updates, run only when num runs");
    
    // another usecase is if you want to run a specific function when num is updated
    numUpdated();

  }, [num])


  return (
    <div>
      
      <button onClick={()=>{
        setNum(num+1);
      }}>Update num = {num}</button>


    </div>
  )
}

export default App