import React, { useEffect, useState } from 'react'

const UsingFetch = () => {

  const [allData, setAllData] = useState([]);

    const getData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      console.log(data)
      setAllData(data);
    }

useEffect(()=>{
getData();
}, [])

  return (
    <div>


<div className="max-w-7xl mx-auto">
    <h1 className="text-3xl font-semibold text-gray-800 mb-8">
      User Details
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

{allData.map((value, index)=>{
return (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition">
        <h2 className="text-xl font-semibold text-gray-900">
          {value.name}
        </h2>
        <p className="text-sm text-gray-500 mb-4">{value.username}</p>

        <div className="space-y-2 text-sm text-gray-700">
          <p><span className="font-medium text-gray-900">Company:</span> {value.company.name}</p>
          <p><span className="font-medium text-gray-900">Address:</span> {value.address.street}</p>
          <p><span className="font-medium text-gray-900">Email:</span> {value.email}</p>
          <p><span className="font-medium text-gray-900">Phone:</span> {value.phone}</p>
        </div>

      </div>
)
})}

    </div>
  </div>

    </div>
  )
}

export default UsingFetch