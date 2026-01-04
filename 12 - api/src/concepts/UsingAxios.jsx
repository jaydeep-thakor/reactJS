import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UsingAxios = () => {

    const [imgData, setImgData] = useState([])

    const getData = async () => {
      // const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
      // console.log(response.data)

      // destructuring
      const {data} = await axios.get("https://picsum.photos/v2/list");
      setImgData(data);

    }

    useEffect(()=>{
      console.log(imgData);
    }, [imgData])

  return (
    <div className='p-4'>
        
        <div className='custom-grid'>
      {imgData.map((value, index)=>{
        return (
          <div key={index} className='h-[400px] w-full'>
          <img className='h-full w-full object-cover' src={value.download_url} alt="" />
          </div>
        )
      })}
        </div>

        <button className='bg-gray-900 text-white font-medium px-4 py-2 rounded cursor-pointer' onClick={(()=>{
            getData();
        })}>Get Data</button>

    </div>
  )
}

export default UsingAxios