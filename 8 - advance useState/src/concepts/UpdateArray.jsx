import React from 'react'
import { useState } from 'react';

const UpdateArray = () => {

    const [arr, setArr] = useState([10, 20, 30, 40]);

    const updateArr = () => {
        // 1st way
        // const newArr = [...arr];
        // console.log("new arr = ", newArr);
        // newArr.push(100);
        // setArr(newArr);

        // 2nd way  
        setArr(prev => [...prev, 100]) // Add to end
        // setArr(prev => [100, ...prev]) // Add to beginning
        // setArr(prev => [...prev, 100, 200, 300]) // Add multiple items

    }

    return (
        <div>

            <h1>{arr}</h1>
            <button onClick={() => {
                updateArr();
            }}>update arr</button>

        </div>
    )
}

export default UpdateArray