import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='nav'>
        
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <div>
        <Link to="/product">Products</Link>
       
            
        </div>


        

    </div>
  )
}

export default Header