import React, { useState } from "react";
import "./post.css";
import ProfileImage from "../Images/Profile.png";
import LikeIcon from "../Images/like.png";
import CommentIcon from "../Images/speech-bubble.png";
import Shareicon from '../Images/share.png';
import MoreOption from '../Images/more.png';
import anotherLikeIcon from '../Images/setLike.png';

const Post = () => {
  const [like, setLike] = useState(LikeIcon);
  const [count, setCount] = useState(10);
  const [comments, setComments] = useState([]);

  const [commentWriting, setCommentWriting] = useState('');
  const [show, setShow] = useState(false);

  const handleLike = () => {
    if (like === LikeIcon) {
      setLike(anotherLikeIcon);
      setCount(count + 1);
    } else {
      setLike(LikeIcon);
      setCount(count - 1);
    }

  }

  const addComment = () => {
    const comment = {
      "id": "61fsbf23123123123123123",
      "username": "rajan",
      'title': `${commentWriting}`

    }
    setComments(comments.concat(comment));
  }

  const handleComments = () => {
    addComment();
  }

  const handleShow=()=>{
    if(!show){
      setShow(true);
    }else{
      setShow(false);
    }
  }

  console.log(comments);
  return (
    <div className="PostContainer">
      <div className="SubPostContainer">
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={ProfileImage} alt="" className="PostImage" />
            <div>
              <p style={{ marginLeft: "5px", textAlign: "start" }}>Rajan</p>
              <p style={{ fontSize: "11px", textAlign: "start", marginLeft: 5, marginTop: -13, color: "#aaa" }}>Followed by King</p>
            </div>

            <img src={MoreOption} className="moreicons" alt="" />
          </div>
          <p
            style={{
              textAlign: "start",
              width: "96%",
              marginLeft: "10px",
              marginTop: 0,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            voluptatibus non quibusdam cumque officiis deserunt ...
          </p>
          <img src={ProfileImage} className="PostImages" alt="" />
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", marginLeft: "10px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img src={like} className="iconsForPost" alt="" onClick={handleLike} />
                <p style={{ marginLeft: "6px" }}>{count} Likes</p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: 20,
                  cursor: "pointer",
                }}
              >
                <img src={CommentIcon} alt="" className="iconsForPost" onClick={handleShow} />
                <p style={{ marginLeft: "6px" }}>100K Comments</p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: 200,
                  cursor: "pointer",

                }}
              >
                <img src={Shareicon} alt="" className="iconsForPost" />
                <p style={{ marginLeft: "6px" }}>Share</p>
              </div>

            </div>


          </div>
          {
            show? <div style={{padding:"10px"}}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={ProfileImage} alt="" className="PostImage" />
              {/* <p style={{marginLeft:"6px"}}>Rajan</p> */}
              <input type="text" className="commentInput" placeholder="Write your thought" onChange={(e) => {
                setCommentWriting(e.target.value)
              }} />
              <button className="addComment" onClick={handleComments}>Post</button>
            </div>
            {
              comments.map((items) => (
                <div style={{  alignItems: "center" }}>
                 <div style={{display:"flex",alignItems:"center"}}>
                 <img src={ProfileImage} alt="" className="PostImage" />
                  <p style={{ marginLeft: "6px",fontSize:18,marginTop:6 }}>{items.username}</p>
                 
  
                 </div>
                 <p style={{ marginLeft: "55px",textAlign:"start",marginTop:-16}}>{items.title}</p>
                 <p style={{ marginLeft: "55px",textAlign:"start",marginTop:-10,color:"#aaa",fontSize:11}}>Reply</p>
                 
  
                </div>
  
              ))
            }
            </div>:""
          }
         

        </div>
      </div>
    </div>
  );
};

export default Post;
