import React, { useState } from 'react'

const App = () => {

  {/* In HTML forms, buttons have default submit behavior that causes page refresh.
To prevent this, either:
1. Use button type="button" to make it a regular button
2. Call event.preventDefault() in your submit handler */}

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name = ${name}`)
    console.log(`username = ${userName}`)
    setName("")
    setUserName("")
  }

  const handleName = (e) => {
    setName(e.target.value)
  } 

    const handleUserName = (e) => {
    setUserName(e.target.value)
  } 
  

  return (
    <form onSubmit={(e)=>{
      handleSubmit(e);
    }}>

<input value={name} placeholder="Your name" type="text" onChange={(e)=>{
  handleName(e);
}}/>
<input value={userName} placeholder="Your username" type="text" onChange={(e)=>{
  handleUserName(e);
}}/>

<button>Submit</button>

    </form>
  )
}

export default App