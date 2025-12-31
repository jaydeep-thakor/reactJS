import React from 'react'

const App = () => {
  
  // const btnClick = () => {
  function btnClick(){
    console.log("Btn clicked")
  }

  function btnClick1(elem){
    console.log("Btn1 clicked", elem)
    console.log("Btn1 clicked TYPE", elem.type)
  }
  
  return (
    
    <>

    {/* <button onClick={(()=>{
      console.log("Btn clicked")
    })}></button> */}

    <button onClick={btnClick}>Button</button>
    {/* <button onClick={btnClick()}>Button</button> if I add brackets function will run automatically without being clicked */}
    
    {/* correct way to call function if you have parameters */}
    <button onClick={(elem)=>{
      btnClick1(elem);
    }}>Button1</button>


    </>

  )
}

export default App