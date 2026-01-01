import React from 'react'
import { useState } from 'react';

const UpdateObjectAdvance = () => {

    const [myDetails, setMyDetails] = useState([{
  name: "Jaydeep",
  role: "Front-End Developer",
  location: "Gandhinagar",
  skills: ["HTML", "CSS", "JavaScript", "React"]
},
  {
    name: "Jaydeep",
    role: "UI Designer", 
    location: "Ahmedabad",
    skills: ["Figma", "UI/UX", "Wireframing", "Prototyping"]
  }
]);

const updateObj = () => {
  const updatedDetails = myDetails.map((x) => {
    if (x.role === "UI Designer") {
      return {
        ...x,
        role: "Software Developer",
        location: "NYC"
      };
    }

    return {
      ...x,
      location: "NYC"
    };
  });

  setMyDetails(updatedDetails);
};

// const updateObj = () => {
//   setMyDetails((prev) =>
//     prev.map((x, index) =>
//       index === 1
//         ? { ...x, role: "Software Developer", location: "NYC" }
//         : x
//     )
//   );
// };




  return (
    <>
    
{myDetails.map((x, key)=>{
    return (
        <div key={key}>
    <h1>{x.name}</h1>
    <h1>{x.role}</h1>
    <h1>{x.location}</h1>
    </div>
    )
})}

<button onClick={()=>{
    updateObj()
}}>update obj</button>

    </>
  )
}

export default UpdateObjectAdvance