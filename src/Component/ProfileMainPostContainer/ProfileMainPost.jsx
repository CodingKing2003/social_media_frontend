import React from 'react'
import './profilemainPost.css';
import ContentPost from '../ContentPostContainer/ContentPost';
import Post from '../PostContainer/Post';
import Coverimage from "../Images/Profile.png";

const ProfileMainPost = () => {
  return (
    <div className='ProfilemainPostContainer'>
        <div>
        <img src={Coverimage} className="profileCoverimage" alt="" />
        <h2 style={{marginTop:-43 , color:"white" , textAlign:"start" , marginLeft:"34px"}}>Your Profile</h2>

        </div>
    <ContentPost />
    <Post />
    <Post />
    </div>
  )
}

export default ProfileMainPost;