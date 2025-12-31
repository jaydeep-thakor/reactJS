import React from 'react'
import celebrityPosts from "./assets/data/celebrityPosts.js"
import PostCard from "./components/PostCard.jsx"

const App = () => {
  console.log(celebrityPosts)
  return (
    
    <>
    <div className='post-cards'>
    {
      celebrityPosts.map((value, index)=>{

        return (
          <PostCard data={value} key={index}/>
        )

      })
    }
</div>
    </>

  )
}

export default App