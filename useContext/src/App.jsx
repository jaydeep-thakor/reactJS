import React, { createContext, useState } from 'react'
import ComponentA from './components/componentA';
import { useTheme } from './context/ThemeContext';

const employeeDataContext = createContext();

const App = () => {
  const [employeeData, setEmployeeData] = useState([
    { "name": "jaydeep", "designation": "software developer" },
    { "name": "jd", "designation": "web designer" },
    { "name": "hailee", "designation": "ui,ux" }
  ]);
  const {theme, setTheme} = useTheme();
  return (
    <div className={`layout ${theme === "light" ? "theme-light" : "theme-dark"}`}>
        <employeeDataContext.Provider value={{ employeeData }}>
          <ComponentA />
        </employeeDataContext.Provider>
      <div>

      </div>
    </div>
  )
}

export default App
export { employeeDataContext };