import React, { useEffect, useState } from 'react'
import axios from "axios";

const App = () => {

  const [imgData, setImgData] = useState([])

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=27");
    setImgData(response.data);
  }

  useEffect(()=>{
    getData();
  }, [])

  let printResponse = "Loading...";

  if(imgData.length > 0){
    printResponse = imgData.map((value, index)=>{
    return (
      <div className='bg-white' key={index}>
        <img className='h-[200px] object-cover w-full' src={value.download_url} alt="" />
      </div>
    )
  })
  }



  
  return (
    
    <div className='p-4'>
    
    <h1 className='title text-center text-5xl text-black py-10'>Random Photographs</h1>

    <div className='custom-grid'>
    
    {printResponse}

    </div>

    </div>

  )
}

export default App