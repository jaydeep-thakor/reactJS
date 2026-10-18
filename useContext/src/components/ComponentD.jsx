import React, { useContext } from 'react'
import { employeeDataContext } from '../App'

const ComponentD = () => {

    const {employeeData} = useContext(employeeDataContext);

    return (
        <div>
            {employeeData.map((value, index)=>{
                return (
                    <>
                    <h1>{value.name}</h1>
                    <h2>{value.designation}</h2>
                    </>
                )
            })}
        </div>
    )
}

export default ComponentD