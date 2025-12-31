import React from 'react'
import {Bookmark, CheckCircle, Eye, Heart, MessageCircle, MoreVertical} from "lucide-react";


const PostCard = ({data}) => {
  return (
    <div className='post-card'>
<div className='post-card-inner'>
      <div className='profile-info'>
        <div className='profile-details'>
        <img className="profile-pic" src={data.profilePic} alt="" />

      <div className='profile-name'>
        <h1>{data.name} {data.verified ? <span><CheckCircle className="icon-verify"/></span> : ""}</h1>
        <h2>{data.timePosted}</h2>
      </div></div>

      <div><MoreVertical/></div>

      </div>
      <div className='desc'>{data.description}</div>
      <div className='tags'>{data.tags.map((i)=>{
        return (
          <div>{i}</div>
        )
      })}</div>

      <div className='post-img'>
        <img src={data.postImage} alt="" />
      </div>

    </div>

      <div className='profile-like-comment-outer'>
        <div className='profile-like-comment'>
          {data.views > 0 ? <div><Eye/> {data.views}</div> : <div>No views</div>}
          {data.likes > 0 ? <div><Heart/> {data.likes}</div> : <div>No likes</div>}
          {data.comments > 0 ? <div><MessageCircle/> {data.comments}</div> : <div>No comments</div>}
        </div>

<div className='save-btn'><Bookmark/> Save</div>

      </div>

    </div>
  )
}

export default PostCard


// const formatNumber = (num) => {
//   if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
//   if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
//   return num;
// };

// <div><Eye/> {formatNumber(data.views)}</div>