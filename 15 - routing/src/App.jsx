import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Products from "./pages/Products"

import Men from "./pages/Men"
import Women from "./pages/Women"
import Kids from "./pages/Kids"
import Header from './components/Header'

const App = () => {
  return (
    <div>
     
     <Header/>

      <Routes>

       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/product" element={<Products/>}>
       
        <Route path="men" element={<Men/>}/>
        <Route path="women" element={<Women/>}/>
        <Route path="kids" element={<Kids/>}/>

       </Route>
       
       {/* <Route path="/product/men" element={<Men/>}/>
       <Route path="/product/women" element={<Women/>}/>
       <Route path="/product/kids" element={<Kids/>}/> */}


      </Routes>
      

    </div>
  )
}

export default App