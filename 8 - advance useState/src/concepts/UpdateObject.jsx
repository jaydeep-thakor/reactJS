import React from 'react'
import { useState } from 'react';

const UpdateObject = () => {

    const [myDetails, setMyDetails] = useState({
        name: "Jaydeep",
        role: "Front-End Developer",
        location: "Gandhinagar",
        skills: ["HTML", "CSS", "JavaScript", "React"]
    });

    const updateObj = () => {
        // 1st way
        // const newObj = {...myDetails};
        // newObj.name = "Jaydeep Thakor";
        // newObj.role = "Software Developer";
        // newObj.location = "NYC";
        // newObj.skills = [...newObj.skills, "Tailwind CSS", "TypeScript"]
        // newObj.skills = ["Tailwind CSS", "TypeScript"]
        // setMyDetails(newObj);

        // 2nd way
        // setMyDetails(prev => ({...prev, location : "NYC"}))
setMyDetails(prev => ({
  ...prev,
  location: "NYC",
  skills: [...prev.skills, "Tailwind CSS", "TypeScript"]
}));
    }




    return (
        <div>

<h1>{myDetails.name}</h1>
<h1>{myDetails.role}</h1>
<h1>{myDetails.location}</h1>
<ul>{myDetails.skills.map((x, key)=>{
    return (
        <div key={key}>
        <li>{x}</li>
        </div>
    )
})}</ul>

<button onClick={(()=>{
    updateObj();
})}>update obj</button>

        </div>
    )
}

export default UpdateObject