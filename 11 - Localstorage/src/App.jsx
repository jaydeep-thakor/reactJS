import React from 'react'

const App = () => {

  // Local Storage
  // Local Storage stores data in the browser permanently (until manually cleared). The data remains available even after the browser or tab is closed.
  // May be deleted if you select “Cookies and other site data”
  // Not deleted if you clear only browsing history
  // Depends on the options you choose while clearing data

  // Session Storage
  // Session Storage stores data only for the current browser session. The data is automatically cleared when the browser tab or window is closed.
  // Always cleared
  // Because it exists only for the current session

  // sessionStorage.clear();
  // localStorage.clear();
  
  // setitem
  localStorage.setItem("username", "jaydeep7")
  localStorage.setItem("location", "gandhinagar")

  // getitem (only write key to the value)
  let user = localStorage.getItem("username")
  console.log(user)

  // remoteitem (only write key to the value)
  localStorage.removeItem("location")

  // to clear all the things
  // localStorage.clear();
  

  return (
    <div>App</div>
  )
}

export default App