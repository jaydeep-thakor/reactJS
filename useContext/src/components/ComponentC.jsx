import React from 'react'
import ComponentD from './componentD'
import { useTheme } from '../context/ThemeContext'

const ComponentC = () => {

  const {theme, setTheme} = useTheme();

  console.log(theme);

  return (
    <div>
        <ComponentD/>
        <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
    </div>
  )
}

export default ComponentC