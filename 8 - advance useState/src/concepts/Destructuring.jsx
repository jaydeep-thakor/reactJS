import React from 'react'

const Destructuring = () => {   

    const emp = {
        name: "Jaydeep",
        age: 27,
        location: "gandhinagar"
        // location: undefined
    }

    const {name, age, location= "nyc"} = emp;
    // location = emp.location !== undefined ? emp.location : "nyc";      think like this, it will only update it, if location if not there
    console.log(name, age, location)


  return (
    <div>
        


    </div>
  )
}

export default Destructuring