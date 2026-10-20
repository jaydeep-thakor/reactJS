import React, { useEffect, useMemo, useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const expensiveTask = (num) => {
    console.log("inside expensive task");
    for (let i = 1; i < 1000000000; i++) { }
    return num * 2;
  }

  const doubleValue = useMemo(() => {
    return expensiveTask(input);
  }, [input])

  return (
    <div>

      <h1>
        count value = {count}
      </h1>
      <button onClick={() => setCount(count + 1)}>increment</button>

      <br />
      <br />

      <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />

      <h1>
        input value = {input}
      </h1>
      <h1>
        double value (memoized) = {doubleValue}
      </h1>

    </div>
  )
}

export default App
